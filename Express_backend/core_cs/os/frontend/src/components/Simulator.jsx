import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import TerminalHeader from './TerminalHeader';
import RouletteDisplay from './RouletteDisplay';
import ControlPanel from './ControlPanel';
import { fetchCategories, fetchRandomQuestion, submitProgress } from '../api';

export default function Simulator() {
  const { subject = 'OS' } = useParams();
  const activeSubject = subject.toUpperCase();

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(null);
  
  // App Phase: 'IDLE' | 'SPINNING' | 'READING' | 'MAIN_TIMER'
  const [appPhase, setAppPhase] = useState('IDLE');
  const [spinSecondsLeft, setSpinSecondsLeft] = useState(5);
  const [readingSecondsLeft, setReadingSecondsLeft] = useState(20);
  const [mainTimerSeconds, setMainTimerSeconds] = useState(0);

  const [showHint, setShowHint] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isQuestionBlurred, setIsQuestionBlurred] = useState(false);

  const intervalRef = useRef(null);

  // Phase 8.3: Fetch categories dynamically for active subject
  useEffect(() => {
    async function loadCategories() {
      const catList = await fetchCategories(activeSubject);
      setCategories(catList);
      setSelectedCategory('');
      setCurrentQuestion(null);
      setAppPhase('IDLE');
    }
    loadCategories();
  }, [activeSubject]);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Max recommended time calculation based on difficulty
  const getMaxTime = (difficulty) => {
    switch ((difficulty || '').toLowerCase()) {
      case 'easy':
        return 120; // 2 minutes
      case 'hard':
        return 600; // 10 minutes
      case 'medium':
      default:
        return 300; // 5 minutes
    }
  };

  // Helper to format MM:SS
  const formatTime = (totalSec) => {
    const mins = Math.floor(Math.abs(totalSec) / 60);
    const secs = Math.abs(totalSec) % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle Spin click with 5-second 3D Slot Machine Reel animation
  const handleSpin = async () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    setIsSpinning(true);
    setAppPhase('SPINNING');
    setSpinSecondsLeft(5);
    setShowHint(false);
    setHintUsed(false);
    setIsQuestionBlurred(false);

    // Fetch next question dynamically for activeSubject and selectedCategory
    const questionPromise = fetchRandomQuestion(selectedCategory, activeSubject);

    let currentSpin = 5;
    intervalRef.current = setInterval(async () => {
      currentSpin -= 1;
      setSpinSecondsLeft(currentSpin);

      if (currentSpin <= 0) {
        clearInterval(intervalRef.current);
        const newQuestion = await questionPromise;
        setIsSpinning(false);
        if (newQuestion) {
          setCurrentQuestion(newQuestion);
          startReadingPhase(newQuestion);
        } else {
          setAppPhase('IDLE');
        }
      }
    }, 1000);
  };

  // Start 20-second Reading Phase
  const startReadingPhase = (question) => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    setAppPhase('READING');
    setReadingSecondsLeft(20);
    setMainTimerSeconds(0);

    let currentReading = 20;

    intervalRef.current = setInterval(() => {
      currentReading -= 1;
      setReadingSecondsLeft(currentReading);

      if (currentReading <= 0) {
        clearInterval(intervalRef.current);
        startMainTimer();
      }
    }, 1000);
  };

  // Start Main Stopwatch Timer after Reading Phase
  const startMainTimer = () => {
    setAppPhase('MAIN_TIMER');
    setMainTimerSeconds(0);

    let currentMain = 0;

    intervalRef.current = setInterval(() => {
      currentMain += 1;
      setMainTimerSeconds(currentMain);

      // Automatically blur question text 10 seconds into main stopwatch
      if (currentMain >= 10) {
        setIsQuestionBlurred(true);
      }
    }, 1000);
  };

  // Reset Timer button handler
  const handleResetTimer = () => {
    if (appPhase !== 'MAIN_TIMER') return;

    if (intervalRef.current) clearInterval(intervalRef.current);

    setMainTimerSeconds(0);
    setIsQuestionBlurred(false);

    let currentMain = 0;
    intervalRef.current = setInterval(() => {
      currentMain += 1;
      setMainTimerSeconds(currentMain);

      if (currentMain >= 10) {
        setIsQuestionBlurred(true);
      }
    }, 1000);
  };

  // Reveal Hint & Add +30s Penalty
  const handleToggleHint = () => {
    if (!showHint) {
      setShowHint(true);
      if (!hintUsed) {
        setHintUsed(true);
        setMainTimerSeconds(prev => prev + 30);
      }
    } else {
      setShowHint(false);
    }
  };

  // Submit Rating & Auto-spin next question
  const handleRateQuestion = async (rating) => {
    if (!currentQuestion) return;

    if (intervalRef.current) clearInterval(intervalRef.current);

    const payload = {
      question_id: currentQuestion.id,
      rating: rating,
      time_spent_seconds: mainTimerSeconds,
      hint_used: hintUsed ? 1 : 0
    };

    await submitProgress(payload);
    await handleSpin();
  };

  const maxTime = getMaxTime(currentQuestion?.difficulty);
  const isOvertime = appPhase === 'MAIN_TIMER' && mainTimerSeconds > maxTime;
  const isReadingPhase = appPhase === 'READING';
  const isSpinningPhase = appPhase === 'SPINNING';

  return (
    <div className="app-container">
      {/* Header */}
      <div className={isReadingPhase ? 'reading-phase-blur' : ''}>
        <TerminalHeader
          subject={activeSubject}
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Top Hero Centered Timer Card */}
      <div className={`terminal-card hero-timer-card ${isReadingPhase ? 'reading-phase-blur' : ''}`}>
        {isSpinningPhase ? (
          <div>
            <div className="spinning-phase-badge">
              🎰 [SPINNING_REEL] 5s Slot Machine Active ({activeSubject})
            </div>
            <div className="hero-timer-digits" style={{ color: 'var(--accent-yellow)' }}>
              00:0{spinSecondsLeft}
            </div>
          </div>
        ) : isReadingPhase ? (
          <div>
            <div className="reading-phase-badge">
              📖 [READING_PHASE] 20s Countdown Active
            </div>
            <div className="hero-timer-digits" style={{ color: 'var(--accent-yellow)' }}>
              00:{readingSecondsLeft.toString().padStart(2, '0')}
            </div>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
              ⏱️ {activeSubject}_STOPWATCH {isOvertime && '⚠️ OVERTIME'}
            </div>
            <div className={`hero-timer-digits ${isOvertime ? 'timer-overtime' : ''}`}>
              {formatTime(mainTimerSeconds)}
            </div>
          </div>
        )}
      </div>

      {/* Center: Question Roulette Display */}
      <RouletteDisplay
        subject={activeSubject}
        currentQuestion={currentQuestion}
        showHint={showHint}
        isQuestionBlurred={isQuestionBlurred}
        isSpinning={isSpinningPhase}
      />

      {/* Bottom: Stacked Control Panel */}
      <div className={isReadingPhase ? 'reading-phase-blur' : ''}>
        <ControlPanel
          onSpin={handleSpin}
          onResetTimer={handleResetTimer}
          onToggleHint={handleToggleHint}
          showHint={showHint}
          hasHint={Boolean(currentQuestion?.hint)}
          onRateQuestion={handleRateQuestion}
          isSpinning={isSpinningPhase}
          hasActiveQuestion={Boolean(currentQuestion)}
          isReadingPhase={isReadingPhase}
        />
      </div>
    </div>
  );
}
