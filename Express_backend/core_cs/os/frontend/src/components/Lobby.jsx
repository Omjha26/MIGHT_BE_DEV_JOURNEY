import React from 'react';
import { useNavigate } from 'react-router-dom';

const subjects = [
  { code: 'OS', name: 'Operating Systems', active: true, desc: 'Processes, Memory, Deadlocks, File Systems & Kernel' },
  { code: 'CN', name: 'Computer Networks', active: true, desc: 'OSI Model, TCP/IP, Routing, Sockets & Protocols' },
  { code: 'DBMS', name: 'Database Management Systems', active: true, desc: 'SQL, Normalization, Indexing, Transactions & ACID' },
  { code: 'OOPS', name: 'Object-Oriented Programming', active: true, desc: 'Inheritance, Polymorphism, Abstraction & Design Patterns' },
  { code: 'DSA', name: 'Data Structures & Algorithms', active: false, desc: 'Trees, Graphs, Dynamic Programming & Complexity' }
];

/**
 * Lobby Component
 * Cyberpunk Entrance screen displaying Core CS subject selection cards.
 */
export default function Lobby() {
  const navigate = useNavigate();

  const handleSelectSubject = (subjectCode, isActive) => {
    if (!isActive) return;
    navigate(`/simulator/${subjectCode}`);
  };

  return (
    <div className="app-container">
      <header className="lobby-header">
        <h1 className="lobby-title">&gt;_ CORE_CS PROTOCOL</h1>
        <p className="lobby-subtitle">SELECT SYSTEM SUBJECT TO INITIATE ROULETTE SIMULATOR</p>
      </header>

      <main className="subject-grid">
        {subjects.map((sub) => (
          <div
            key={sub.code}
            className={`subject-card ${!sub.active ? 'disabled' : ''}`}
            onClick={() => handleSelectSubject(sub.code, sub.active)}
          >
            <div>
              <div className="subject-code">
                <span>[{sub.code}]</span>
                <span style={{ fontSize: '1rem', opacity: 0.7 }}>⚡</span>
              </div>
              <div className="subject-name">{sub.name}</div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.6rem' }}>
                {sub.desc}
              </p>
            </div>

            <div className={`subject-status-badge ${sub.active ? 'status-active' : 'status-disabled'}`}>
              {sub.active ? '▶ SYSTEM READY' : '🔒 UNDER CONSTRUCTION'}
            </div>
          </div>
        ))}
      </main>

      <footer style={{ textAlign: 'center', margin: '2rem 0 1rem 0', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
        SYSTEM STATUS: ONLINE &bull; PORT 3001 CONNECTED &bull; 630+ QUESTION BANK
      </footer>
    </div>
  );
}
