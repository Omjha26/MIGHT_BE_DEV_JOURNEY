import React from 'react';

const subjectPhrases = {
  OS: [
    '⚡ [SYS_CALL] FORK_PROCESS_0x9A',
    '🔒 [MUTEX] LOCK_CONCURRENCY_SEM',
    '💾 [MEM_ALLOC] VIRTUAL_PAGING_TLB',
    '⚠️ [DEADLOCK] BANKER_SAFE_SEQUENCE',
    '⏱️ [SCHEDULER] ROUND_ROBIN_QUANTUM',
    '📂 [INODE] EXT4_FILE_SYSTEM',
    '⚡ [CPU_BOUND] CONTEXT_SWITCH_SAVED',
    '🔍 [PAGE_FAULT] LRU_REPLACEMENT',
    '⚡ [SYS_CALL] FORK_PROCESS_0x9A'
  ],
  CN: [
    '🌐 [OSI] DATALINK_MAC_FRAME',
    '🔌 [TCP] THREE_WAY_HANDSHAKE',
    '📡 [ROUTING] BGP_TABLE_UPDATE',
    '🔒 [SSL] TLS_ENCRYPTION_KEY',
    '⚡ [UDP] DATAGRAM_DISPATCH',
    '🔍 [DNS] DOMAIN_RESOLUTION',
    '📦 [IP] FRAGMENTATION_OFFSET',
    '🌐 [OSI] DATALINK_MAC_FRAME'
  ],
  DBMS: [
    '💾 [SQL] INNER_JOIN_OPTIMIZE',
    '🔒 [ACID] TRANSACTION_COMMIT',
    '⚡ [INDEX] B_TREE_TRAVERSAL',
    '⚠️ [ANOMALY] DIRTY_READ_DETECT',
    '📂 [NORMALIZATION] BCNF_APPLIED',
    '🔍 [QUERY] EXECUTION_PLAN',
    '💾 [SQL] INNER_JOIN_OPTIMIZE'
  ],
  OOPS: [
    '🧩 [CLASS] INSTANTIATE_OBJECT',
    '🧬 [INHERITANCE] SUPER_CONSTRUCT',
    '⚡ [POLYMORPHISM] VIRTUAL_DISPATCH',
    '🔒 [ENCAPSULATION] PRIVATE_MUTATOR',
    '🏗️ [PATTERN] SINGLETON_INSTANCE',
    '🔍 [ABSTRACTION] INTERFACE_IMPL',
    '🧩 [CLASS] INSTANTIATE_OBJECT'
  ],
  DSA: [
    '🌳 [TREE] A_STAR_TRAVERSAL',
    '⚡ [GRAPH] DIJKSTRA_SHORTEST_PATH',
    '🧩 [DP] MEMOIZATION_CACHE',
    '⏱️ [COMPLEXITY] O(N_LOG_N)',
    '🔍 [SEARCH] BINARY_PIVOT',
    '🌳 [TREE] A_STAR_TRAVERSAL'
  ]
};

/**
 * RouletteDisplay Component
 * Phase 7.2: Renders 3D Slot-Machine Tumbler animation during SPINNING phase.
 */
export default function RouletteDisplay({ 
  subject = 'OS',
  currentQuestion, 
  showHint,
  isQuestionBlurred,
  isSpinning = false
}) {
  const slotPhrases = subjectPhrases[subject] || subjectPhrases.OS;

  // Phase 7.2: Render 3D Slot Machine vertical tumbler reel while spinning
  if (isSpinning) {
    return (
      <div className="terminal-card active-glow roulette-container" style={{ minHeight: '250px' }}>
        <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--accent-yellow)', marginBottom: '0.5rem' }}>
          🎰 [SPINNING] Decrypting Question from Database...
        </div>
        <div className="slot-tumbler-container">
          <div className="slot-tumbler-mask"></div>
          <div className="slot-center-highlight"></div>
          <div className="slot-tumbler-track">
            {slotPhrases.map((phrase, idx) => (
              <div key={idx} className="slot-item">
                {phrase}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Phase 7.1: Render Default Idle State when no question is loaded
  if (!currentQuestion) {
    return (
      <div className="terminal-card roulette-container" style={{ textAlign: 'center', minHeight: '220px' }}>
        <p className="roulette-display-text" style={{ color: 'var(--text-muted)' }}>
          [TERMINAL_READY] Click <strong style={{ color: 'var(--accent-cyan)' }}>SPIN ROULETTE</strong> to begin.
        </p>
      </div>
    );
  }

  const difficultyClass = `difficulty-${(currentQuestion.difficulty || 'medium').toLowerCase()}`;

  return (
    <div className="terminal-card active-glow roulette-container">
      <div className="question-meta">
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Q#{currentQuestion.id} &bull; {currentQuestion.category}
        </span>
        <span className={`difficulty-badge ${difficultyClass}`}>
          {currentQuestion.difficulty || 'Medium'}
        </span>
      </div>

      <div>
        <div 
          className={`roulette-display-text ${isQuestionBlurred ? 'question-text-blur' : ''}`}
          title={isQuestionBlurred ? 'Hover mouse to unblur question' : ''}
        >
          {currentQuestion.question_text}
        </div>

        {isQuestionBlurred && (
          <span className="blur-indicator">
            👁️ [ACTIVE_RECALL_BLUR] Hover mouse over text to unblur
          </span>
        )}
      </div>

      {showHint && currentQuestion.hint && (
        <div className="hint-box">
          💡 <strong>HINT (+30s Penalty Added):</strong> {currentQuestion.hint}
        </div>
      )}
    </div>
  );
}
