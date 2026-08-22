import React from 'react';

/**
 * ControlPanel Component
 * Phase 6.1 Layout Restructuring:
 * Row 1: [ RESET TIMER ] & [ REVEAL HINT (+30s) ]
 * Row 2: [ 1: BAD ] [ 2: OKAY ] [ 3: NAILED IT ]
 * Row 3: [ SPIN ROULETTE ]
 */
export default function ControlPanel({
  onSpin,
  onResetTimer,
  onToggleHint,
  showHint,
  hasHint,
  onRateQuestion,
  isSpinning = false,
  hasActiveQuestion = false,
  isReadingPhase = false
}) {
  return (
    <div className="terminal-card control-panel-stacked">
      {/* Row 1: Action Controls (Reset Timer & Reveal Hint) */}
      <div className="control-row">
        <button 
          className="btn-cyber" 
          onClick={onResetTimer}
          disabled={!hasActiveQuestion || isReadingPhase || isSpinning}
          title="Reset main timer back to 00:00"
        >
          🔄 RESET TIMER
        </button>

        {hasActiveQuestion && hasHint && (
          <button 
            className="btn-cyber" 
            onClick={onToggleHint}
            disabled={isReadingPhase || isSpinning}
            title="Adds +30s to main timer as penalty"
          >
            {showHint ? '🙈 HIDE HINT' : '💡 REVEAL HINT (+30s)'}
          </button>
        )}
      </div>

      {/* Row 2: Confidence Ratings */}
      <div className="control-row">
        <div className="rating-group">
          <button 
            className="btn-rate btn-rate-bad" 
            onClick={() => onRateQuestion && onRateQuestion(1)}
            disabled={!hasActiveQuestion || isReadingPhase || isSpinning}
            title="Rate 1 (Bad)"
          >
            1: BAD ❌
          </button>
          <button 
            className="btn-rate btn-rate-okay" 
            onClick={() => onRateQuestion && onRateQuestion(2)}
            disabled={!hasActiveQuestion || isReadingPhase || isSpinning}
            title="Rate 2 (Okay)"
          >
            2: OKAY ⚠️
          </button>
          <button 
            className="btn-rate btn-rate-nailed" 
            onClick={() => onRateQuestion && onRateQuestion(3)}
            disabled={!hasActiveQuestion || isReadingPhase || isSpinning}
            title="Rate 3 (Nailed It)"
          >
            3: NAILED IT 🎯
          </button>
        </div>
      </div>

      {/* Row 3: Full-width Spin Roulette Button */}
      <div className="control-row">
        <button 
          className="btn-cyber btn-cyber-primary btn-spin-full" 
          onClick={onSpin}
          disabled={isSpinning}
        >
          {isSpinning ? '🎲 SPINNING...' : '🎲 SPIN ROULETTE'}
        </button>
      </div>
    </div>
  );
}
