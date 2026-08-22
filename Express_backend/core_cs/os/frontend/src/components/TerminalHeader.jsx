import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * TerminalHeader Component
 * Displays terminal path, category selector dropdown, and return to lobby button.
 */
export default function TerminalHeader({ 
  subject = 'OS', 
  categories = [], 
  selectedCategory, 
  onSelectCategory 
}) {
  const navigate = useNavigate();

  return (
    <header className="terminal-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <button 
          className="btn-cyber" 
          onClick={() => navigate('/')} 
          style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}
          title="Return to Core CS Subject Lobby"
        >
          ⬅️ LOBBY
        </button>

        <div className="terminal-title">
          <span>&gt;_</span>
          <span>{subject}_ROULETTE</span>
          <span className="terminal-path">~/core_cs/{subject.toLowerCase()}/interview</span>
        </div>
      </div>

      <div className="terminal-selector">
        <select
          className="terminal-dropdown"
          value={selectedCategory || ''}
          onChange={(e) => onSelectCategory && onSelectCategory(e.target.value)}
        >
          <option value="">[ALL_CATEGORIES] ({categories.reduce((acc, c) => acc + c.count, 0)} Questions)</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat.category}>
              {cat.category} ({cat.count})
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
