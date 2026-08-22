# Development History & Student Guide: OS Interview Question Prep App

> **Note for Students:** This document contains a step-by-step guide on how this Express backend, SQLite database, and React frontend were scaffolded and built from scratch. Use this reference for your homework assignment to build your own project using official documentation.

---

## Phase 3.1: Backend Scaffolding & Database Setup

### Step 1: Create Backend Directory
- **Command Executed:**
  ```powershell
  New-Item -ItemType Directory -Path backend -Force
  ```
- **Why we did this:**
  It is best practice to decouple backend server logic and database code from root repository assets.

### Step 2 & 3: Package Initialization & Dependencies
- **Commands Executed:**
  ```bash
  npm init -y
  npm install express sqlite3 cors dotenv
  ```

### Step 4 & 5: Database Connection & Schema (`db.js`)
- **File Created:** `backend/db.js`
- **Tables Created:** `questions` (2460 items) & `sessions` (ratings & timer logs).

---

## Phase 3.2: Data Parsing & Seeding

### Step 6, 7 & 8: Data Parser Script & Seeding Database (`parser.js`)
- **File Created:** `backend/parser.js`
- **Command Executed:**
  ```bash
  node parser.js
  ```
- **Verification:** 630 OS questions parsed and transactionally seeded into `database.sqlite`.

---

## Phase 3.3: Express Server & Endpoints Setup

### Step 9: Express Application Initialization (`server.js`)
- **Port:** `http://localhost:3001`
- **API Endpoints:**
  1. `GET /api/categories?subject=OS`
  2. `GET /api/question/random`
  3. `POST /api/progress/rate`
  4. `GET /api/analytics`

---

## Phase 4: Frontend Scaffolding & Cyberpunk Theme

### Vite React Scaffolding & CSS Theme
- **Commands Executed:**
  ```bash
  npx -y create-vite frontend --template react
  cd frontend
  npm install
  ```
- **Design Tokens (`src/index.css`):** Monospace Google Font `Fira Code`, dark `#0D1117` background, CRT scanline overlay, electric cyan accents (`#00E5FF`), and 3D slot machine tumbler reels.

---

## Phase 5: Backend API Integration, Timer Penalty & Blur Mode

### API Service Layer & Timer Mechanics
- **`src/api.js`**: `fetchCategories`, `fetchRandomQuestion`, `submitProgress`.
- **+30s Hint Penalty**: Revealing hints adds 30 seconds penalty to session time.
- **Progress Submission**: Rating buttons post progress and trigger next question.

---

## Phase 6: UI/UX Overhaul & 20-Second Reading Phase Logic

### Layout Restructuring & Reading Phase
- **Layout:** Vertical stack (Top Hero Timer, Middle Question Card, Bottom 3-Row Controls).
- **20-Second Reading Phase:** 20s countdown with selective background blur (`.reading-phase-blur`).
- **Reset Timer:** Resets main stopwatch to `00:00`.

---

## Phase 7: Idle Boot Fix & 5-Second 3D Vertical Slot Machine Spinner

### 3D Tumbler Reel & Idle Boot Fix
- **Idle Boot:** Boots cleanly into `appPhase = 'IDLE'` with default ready message.
- **3D Slot Machine Reel:** 5-second 3D vertical tumbler scroll animation (`perspective: 1000px`) before locking into real backend question.

---

## Phase 8: Multi-Subject Cyberpunk Lobby Entrance & React Router

### Routing Setup & Cyberpunk Lobby
- **Routes:** `/` (Entrance Lobby) & `/simulator/:subject` (OS, CN, DBMS, OOPS).
- **Disabled Card:** `DSA` card styled with opacity `0.45` and `[ UNDER CONSTRUCTION ]` badge.

---

## Phase 9: Multi-Subject Database Seeding & Spaced-Repetition Roulette Engine

### Phase 9.1: Database Schema Update (`db.js`)
- **Schema Migration:** Added `interview_frequency INTEGER DEFAULT 2` to the `questions` table schema.

### Phase 9.2: Master Parser (`parser.js`)
- **Multi-File Array:** Processed `os_interview_questions.md`, `cn_interview_questions.md`, `dbms_interview_questions.md`, and `oops_interview_questions.md`.
- **Frequency Dictionary:**
  - High Frequency (`3`): Keywords like `Deadlock`, `Memory`, `Transaction`, `Normalization`, `TCP`, `OSI`, `Polymorphism`, `Inheritance`, `Paging`, `Semaphore`, `Mutex`, `ACID`, `Process`, `Thread`.
  - Low Frequency (`1`): Keywords like `Real-Time`, `Distributed`, `Security`, `Wireless`, `Hardware`, `Exokernel`, `Unikernel`, `Seccomp`.
  - Default (`2`).
- **Difficulty Heuristics:**
  - Keywords `Algorithm`, `Time Complexity`, `Deadlock`, `Numerical`, `Anomaly`, `B-Tree`, `Banker` -> `Hard`.
  - Keywords `What is`, `Define`, `Difference`, `List`, `Types` -> `Easy`.
  - Otherwise -> `Medium`.
- **Seeding Execution Command:**
  ```bash
  node backend/parser.js
  ```
- **Seeding Output Verified:** `2460 questions parsed and seeded across OS (630), CN (680), DBMS (710), and OOPS (440).`

### Phase 9.3: 9-Level Priority Matrix Roulette Engine (`server.js`)
- **SQL Query Formula:**
  ```sql
  SELECT q.*,
    (q.interview_frequency * 
      CASE 
        WHEN COUNT(s.id) = 0 THEN 3
        WHEN AVG(s.rating) < 1.5 THEN 3
        WHEN AVG(s.rating) < 2.5 THEN 2
        ELSE 1
      END
    ) as priority_score
  FROM questions q
  LEFT JOIN sessions s ON q.id = s.question_id
  WHERE UPPER(q.subject) = ?
  GROUP BY q.id
  ORDER BY priority_score DESC, RANDOM()
  LIMIT 1;
  ```
- **Explanation:**
  Combines static topic importance (Frequency 1-3) with live user mastery (Performance Weight 1-3). Unseen or poorly answered questions get a maximum priority score of 9 (`3 * 3`), heavily biasing random selection toward high-yield weak areas.
