# IDE Execution Steps
> **Role:** IDE / Agent
> **Instructions:** Please parse the following steps and execute them sequentially to implement Phase 9.

## Phase 9.1: Database Schema Update
* [ ] **Step 1:** In `backend/db.js`, modify the `CREATE TABLE IF NOT EXISTS questions` statement. Add a new column: `interview_frequency INTEGER DEFAULT 2`. 

## Phase 9.2: The Master Parser
* [ ] **Step 2:** Overhaul `backend/parser.js` entirely. It must now process an array of files: `['os_interview_questions.md', 'cn_interview_questions.md', 'dbms_interview_questions.md', 'oops_interview_questions.md']`.
* [ ] **Step 3:** Implement a hardcoded `frequencyDictionary` inside `parser.js`. Map common high-frequency keywords (e.g., "Deadlock", "Memory", "Transaction", "Normalization", "TCP", "OSI", "Polymorphism", "Inheritance") to a value of `3`. Map low-frequency keywords (e.g., "Real-Time", "Distributed", "Security") to `1`.
* [ ] **Step 4:** Implement a universal keyword heuristic for `difficulty`: if the question text contains words like "Algorithm", "Time Complexity", "Implement", "Deadlock", "Numerical", "Anomalies", it is `Hard`. If it starts with "What is", "Define", "Difference", it is `Easy`. Otherwise `Medium`.
* [ ] **Step 5:** The parser should loop through all 4 files (handling file missing gracefully), assign the Subject (OS, CN, DBMS, or OOPS) based on the filename, determine the `interview_frequency` by checking the category against the dictionary (default `2`), and insert everything into the database transactionally after clearing it once.
* [ ] **Step 6:** Run `node backend/parser.js` to execute the database seeding.

## Phase 9.3: The Spaced-Repetition Roulette Engine
* [ ] **Step 7:** In `backend/server.js`, modify `GET /api/question/random`. 
    * It must calculate a priority score on the fly by combining `questions.interview_frequency` (1-3) with the user's historical performance (average rating in `sessions`).
    * If a question has no sessions, its performance weight is 3 (Unseen). If avg rating < 1.5, weight is 3 (Bad). If avg rating < 2.5, weight is 2 (Okay). Else weight is 1 (Nailed It).
    * `Total Priority Score = interview_frequency * performance_weight`.
    * Ensure the question is randomly selected but heavily biased/weighted towards questions with the highest Priority Score. Alternatively, order by the calculated score descending, then by RANDOM(), and pick the top 1.

Once complete, start the server and inform the orchestrator!
