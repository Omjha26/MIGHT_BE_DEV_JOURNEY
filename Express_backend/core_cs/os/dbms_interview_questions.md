# DBMS Interview Questions — Complete Reference
> Curated from GeeksforGeeks, InterviewBit, Adaface, TakeUForward, Flexiple, DataCamp, PerfectNotes, Hirist, AnalyticsVidhya, Skilr, LogicMojo, Sanfoundry, and placement experience reports. Covers every topic asked in Indian product company, mass recruiter, FAANG-style, and backend SDE interviews.

---

## Table of Contents
1. [DBMS Fundamentals & Basics](#1-dbms-fundamentals--basics)
2. [Database Models & Architecture](#2-database-models--architecture)
3. [Entity-Relationship (ER) Model](#3-entity-relationship-er-model)
4. [Relational Model & Keys](#4-relational-model--keys)
5. [SQL — DDL, DML, DCL, TCL](#5-sql--ddl-dml-dcl-tcl)
6. [SQL — Joins, Subqueries & Set Operations](#6-sql--joins-subqueries--set-operations)
7. [SQL — Aggregation, Grouping & Advanced Queries](#7-sql--aggregation-grouping--advanced-queries)
8. [Functional Dependencies & Normalization](#8-functional-dependencies--normalization)
9. [Indexing & Hashing](#9-indexing--hashing)
10. [Transactions & ACID Properties](#10-transactions--acid-properties)
11. [Concurrency Control](#11-concurrency-control)
12. [Deadlocks in DBMS](#12-deadlocks-in-dbms)
13. [Database Recovery & Logging](#13-database-recovery--logging)
14. [Storage & File Organization](#14-storage--file-organization)
15. [Query Processing & Optimization](#15-query-processing--optimization)
16. [Views, Stored Procedures, Triggers & Cursors](#16-views-stored-procedures-triggers--cursors)
17. [NoSQL Databases](#17-nosql-databases)
18. [Distributed Databases & CAP Theorem](#18-distributed-databases--cap-theorem)
19. [Database Sharding, Replication & Partitioning](#19-database-sharding-replication--partitioning)
20. [Advanced & Tricky Questions](#20-advanced--tricky-questions)
21. [Rapid Fire — One-Liners](#21-rapid-fire--one-liners)

---

## 1. DBMS Fundamentals & Basics

1. What is a database? How is it different from a file system?
2. What is a DBMS (Database Management System)? What are its functions?
3. What is the difference between a DBMS and an RDBMS?
4. What are the advantages of a DBMS over a traditional file system?
5. What are the disadvantages of a DBMS?
6. What is data? What is information? What is the difference?
7. What is metadata? Where is it stored in a DBMS?
8. What is a data dictionary (system catalog)?
9. What are the components of a DBMS?
10. What is a database schema? What is a database instance?
11. What is the difference between a schema and an instance?
12. What are the three levels of database abstraction? (Physical, Logical, View)
13. What is the physical level of database abstraction?
14. What is the logical level of database abstraction?
15. What is the view level of database abstraction?
16. What is data independence? What are the two types? (Physical and Logical)
17. What is physical data independence?
18. What is logical data independence?
19. What is a database administrator (DBA)? What are their responsibilities?
20. What is a database user? What are the types of database users?
21. What is data redundancy? What are the problems it causes? (insertion, deletion, update anomalies)
22. What is data integrity? What are the types? (entity, referential, domain, user-defined)
23. What is data consistency?
24. What is data security in a DBMS?
25. What is concurrent access? Why is it a challenge in DBMS?
26. What is OLTP (Online Transaction Processing)? Give examples.
27. What is OLAP (Online Analytical Processing)? How does it differ from OLTP?
28. What is a data warehouse?
29. What is a data mart?
30. What is ETL (Extract, Transform, Load)?
31. What is a database engine?
32. What is a query language? What is SQL?
33. What is a DBA vs developer vs end-user role in DBMS?
34. What is a flat file database? Why is it limited?
35. What is the difference between structured, semi-structured, and unstructured data?

---

## 2. Database Models & Architecture

36. What is a data model? What are the types of data models?
37. What is the hierarchical data model?
38. What is the network data model?
39. What is the relational data model? Who proposed it? (E.F. Codd, 1970)
40. What is the object-oriented data model?
41. What is the object-relational data model?
42. What is the document data model?
43. What is the key-value data model?
44. What is the graph data model?
45. What is the column-family (wide-column) data model?
46. What is a relational database? Give five examples. (MySQL, PostgreSQL, Oracle, SQL Server, SQLite)
47. What is a three-tier architecture in DBMS? (Presentation, Application, Data tier)
48. What is a two-tier architecture in DBMS?
49. What is a client-server architecture in DBMS?
50. What is a centralized database architecture?
51. What is a distributed database architecture?
52. What is a cloud database? Give examples. (Amazon RDS, Google Cloud SQL, Azure SQL)
53. What is an in-memory database? Give examples. (Redis, Memcached, VoltDB)
54. What is a time-series database? Give examples. (InfluxDB, TimescaleDB)
55. What is a graph database? Give examples. (Neo4j, Amazon Neptune)
56. What is a columnar database? Give examples. (Apache Cassandra, HBase, Amazon Redshift)
57. What is a search engine database? Give examples. (Elasticsearch, Solr)
58. What is a multi-model database?

---

## 3. Entity-Relationship (ER) Model

59. What is an ER model (Entity-Relationship model)?
60. What is an entity? What is an entity set?
61. What is an attribute? What are the types of attributes?
62. What is a simple (atomic) attribute?
63. What is a composite attribute? Give an example.
64. What is a multivalued attribute? How is it represented in an ER diagram?
65. What is a derived attribute? Give an example.
66. What is a key attribute?
67. What is a strong entity? What is a weak entity?
68. What is an identifying relationship? How is a weak entity identified?
69. What is a relationship? What is a relationship set?
70. What is the degree of a relationship? (Unary, Binary, Ternary)
71. What is cardinality? What are the types? (One-to-One, One-to-Many, Many-to-Many)
72. What is participation constraint? (Total vs Partial participation)
73. What is total participation? What is partial participation?
74. How do you represent a Many-to-Many relationship in a relational schema?
75. What is an ER diagram? What are the notations used?
76. What is Chen notation vs Crow's Foot notation in ER diagrams?
77. What is an extended ER model (EER model)?
78. What is generalization in an ER model?
79. What is specialization in an ER model?
80. What is aggregation in an ER model?
81. What is the difference between generalization and specialization?
82. What is an ISA relationship (inheritance) in ER model?
83. How do you convert an ER diagram to a relational schema?
84. How do you represent a weak entity in a relational schema?
85. What is a ternary relationship? How is it converted to a relational schema?

---

## 4. Relational Model & Keys

86. What is a relation in the relational model?
87. What is a tuple? What is an attribute? What is a domain?
88. What is the degree of a relation?
89. What is the cardinality of a relation?
90. What are the properties of a relation (table) in RDBMS?
91. What is a superkey?
92. What is a candidate key?
93. What is a primary key? What are its properties?
94. What is an alternate key?
95. What is a composite key?
96. What is a foreign key? What is referential integrity?
97. What is a surrogate key?
98. What is a natural key?
99. What is the difference between primary key and unique key?
100. Can a primary key be NULL? Can a foreign key be NULL?
101. Can a foreign key reference a non-primary-key column?
102. What is a compound key vs a composite key?
103. What is referential integrity? How is it enforced?
104. What is a cascade delete? What is a cascade update?
105. What are the referential integrity actions? (CASCADE, SET NULL, SET DEFAULT, RESTRICT, NO ACTION)
106. What is the relational algebra? What are its basic operations?
107. What is the SELECT operation in relational algebra (σ)?
108. What is the PROJECT operation in relational algebra (π)?
109. What is the UNION operation in relational algebra (∪)?
110. What is the INTERSECTION operation in relational algebra (∩)?
111. What is the DIFFERENCE operation in relational algebra (−)?
112. What is the CARTESIAN PRODUCT operation in relational algebra (×)?
113. What is the JOIN operation in relational algebra (⋈)?
114. What is the RENAME operation in relational algebra (ρ)?
115. What is relational calculus? What are its two types? (Tuple Relational Calculus, Domain Relational Calculus)
116. What is the difference between relational algebra and relational calculus?
117. What is a relation schema vs a relation instance?
118. What is integrity constraint? What are the types in relational model?
119. What is domain constraint?
120. What is entity integrity constraint?

---

## 5. SQL — DDL, DML, DCL, TCL

121. What is SQL? What does it stand for?
122. What are the categories of SQL commands? (DDL, DML, DCL, TCL, DQL)
123. What is DDL (Data Definition Language)? List commands. (CREATE, ALTER, DROP, TRUNCATE, RENAME)
124. What is DML (Data Manipulation Language)? List commands. (SELECT, INSERT, UPDATE, DELETE)
125. What is DCL (Data Control Language)? List commands. (GRANT, REVOKE)
126. What is TCL (Transaction Control Language)? List commands. (COMMIT, ROLLBACK, SAVEPOINT, SET TRANSACTION)
127. What is DQL (Data Query Language)?
128. What is the difference between DDL and DML?
129. What is CREATE TABLE? Write the syntax.
130. What is ALTER TABLE? What operations can it perform?
131. What is DROP TABLE? What is the difference between DROP and TRUNCATE?
132. What is the difference between DELETE, TRUNCATE, and DROP?
133. Can you roll back a TRUNCATE statement? (No in most RDBMS — it is DDL and auto-commits)
134. What is RENAME in SQL?
135. What is INSERT INTO? Write the syntax.
136. What is UPDATE? Write the syntax.
137. What is DELETE? Write the syntax with a WHERE clause.
138. What is SELECT? Write the basic syntax.
139. What is SELECT DISTINCT?
140. What is the WHERE clause?
141. What is ORDER BY? What is the default sort order? (ASC)
142. What is LIMIT / TOP / ROWNUM? (varies by RDBMS)
143. What is the BETWEEN operator?
144. What is the IN operator?
145. What is the LIKE operator? What are the wildcards? (`%` for multiple chars, `_` for single char)
146. What is IS NULL vs IS NOT NULL?
147. What is the difference between `=` and `<>` / `!=`?
148. What is GRANT? Write a syntax example.
149. What is REVOKE?
150. What is COMMIT? What is ROLLBACK? What is SAVEPOINT?
151. What is a constraint in SQL? What are the types? (NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT)
152. What is the CHECK constraint?
153. What is the DEFAULT constraint?
154. What is AUTO_INCREMENT / SERIAL / SEQUENCE?
155. What is the difference between CHAR and VARCHAR?
156. What is the difference between VARCHAR and TEXT?
157. What is the difference between INT, BIGINT, SMALLINT, TINYINT?
158. What is the difference between FLOAT, DOUBLE, and DECIMAL?
159. What is the DATE, DATETIME, TIMESTAMP, and TIME data type?
160. What is a NULL value in SQL? How is it different from 0 or empty string?
161. What is the COALESCE function?
162. What is the NULLIF function?
163. What is the CASE expression in SQL?
164. What is the CAST / CONVERT function?
165. What is the difference between UNION and UNION ALL?

---

## 6. SQL — Joins, Subqueries & Set Operations

166. What is a JOIN in SQL? Why is it used?
167. What is an INNER JOIN? Write a syntax example.
168. What is a LEFT JOIN (LEFT OUTER JOIN)?
169. What is a RIGHT JOIN (RIGHT OUTER JOIN)?
170. What is a FULL OUTER JOIN?
171. What is a CROSS JOIN? What does it produce?
172. What is a SELF JOIN? When is it used?
173. What is the difference between INNER JOIN and LEFT JOIN?
174. What is the difference between LEFT JOIN and RIGHT JOIN?
175. What is a NATURAL JOIN?
176. What is the difference between NATURAL JOIN and INNER JOIN?
177. What is an EQUIJOIN vs NON-EQUIJOIN?
178. What is a THETA JOIN?
179. What is an ANTI JOIN?
180. What is a SEMI JOIN?
181. What is a subquery (nested query)?
182. What is a correlated subquery? How does it differ from a non-correlated subquery?
183. What is the difference between `IN` and `EXISTS`?
184. When is `EXISTS` more efficient than `IN`?
185. What is a scalar subquery?
186. What is a derived table (inline view)?
187. What is a CTE (Common Table Expression)? Write a WITH clause example.
188. What is a recursive CTE? Give an example. (Fibonacci, organizational hierarchy)
189. What is UNION? UNION ALL? INTERSECT? EXCEPT / MINUS?
190. What are the rules for UNION? (same number of columns, compatible data types)
191. Write a query to find the second highest salary.
192. Write a query to find duplicate records in a table.
193. Write a query to delete duplicate records keeping one.
194. Write a query to find employees who earn more than their manager.
195. Write a query to find the Nth highest salary.
196. Write a query to find all employees whose name starts with 'A'.
197. Write a query to find the department with the maximum number of employees.
198. Write a query to swap values of two columns without a temp variable.
199. Write a query to get the running total of salaries.
200. Write a query to find all customers who have placed at least one order.

---

## 7. SQL — Aggregation, Grouping & Advanced Queries

201. What are aggregate functions in SQL? List them. (COUNT, SUM, AVG, MIN, MAX)
202. What is the difference between COUNT(*) and COUNT(column)?
203. What is GROUP BY? How does it work?
204. What is the HAVING clause? How is it different from WHERE?
205. Can you use WHERE with aggregate functions? (No — use HAVING instead)
206. What is the order of execution of SQL clauses? (FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT)
207. What is a window function?
208. What is ROW_NUMBER()? Give an example.
209. What is RANK()? What is DENSE_RANK()? What is the difference?
210. What is NTILE()? What is LEAD()? What is LAG()?
211. What is FIRST_VALUE()? LAST_VALUE()? NTH_VALUE()?
212. What is the PARTITION BY clause in window functions?
213. What is the OVER() clause?
214. What is the difference between GROUP BY and PARTITION BY?
215. What is a materialized view?
216. What is the difference between a view and a materialized view?
217. What is an index in SQL?
218. What is the EXPLAIN / EXPLAIN PLAN command?
219. What is a full table scan? When does it occur?
220. What is query optimization?
221. Write a query using ROW_NUMBER to get the first record for each group.
222. Write a query to calculate a 3-day moving average.
223. Write a query to find customers who purchased in consecutive months.
224. Write a query using LEAD/LAG to compare current row with the previous row.
225. What is the difference between `GROUP BY` with HAVING vs filtering in WHERE before grouping?
226. What is ROLLUP? What is CUBE? What is GROUPING SETS?
227. What is PIVOT in SQL?
228. What is UNPIVOT in SQL?
229. What is string concatenation in SQL? (CONCAT, ||)
230. What is SUBSTRING()? CHARINDEX()? LENGTH()/LEN()?
231. What is DATE_DIFF / DATEDIFF in SQL?
232. What is EXTRACT() in SQL?
233. What is NOW() / CURRENT_TIMESTAMP?
234. What is the difference between TRUNCATE (function) and ROUND?
235. What is a stored aggregate function?

---

## 8. Functional Dependencies & Normalization

236. What is a functional dependency (FD)?
237. What does X → Y mean?
238. What is a trivial functional dependency?
239. What is a non-trivial functional dependency?
240. What is a fully functional dependency?
241. What is a partial functional dependency?
242. What is a transitive functional dependency?
243. What is Armstrong's Axioms? List them. (Reflexivity, Augmentation, Transitivity)
244. What are the derived rules from Armstrong's Axioms? (Union, Decomposition, Pseudo-transitivity)
245. What is the closure of a set of attributes? How do you compute it?
246. What is the closure of a set of functional dependencies?
247. What is a minimal cover (canonical cover) of a set of FDs?
248. What is normalization? What are its goals?
249. What anomalies does normalization prevent? (Insertion, Deletion, Update anomalies)
250. What is denormalization? When is it used?
251. What is the trade-off between normalization and denormalization?
252. What is First Normal Form (1NF)? What are the rules?
253. Give an example of a table that violates 1NF and show how to fix it.
254. What is Second Normal Form (2NF)? What is required beyond 1NF?
255. What is a partial dependency? Give an example.
256. Give an example of a table that violates 2NF and show how to fix it.
257. What is Third Normal Form (3NF)? What is required beyond 2NF?
258. What is a transitive dependency? Give an example.
259. Give an example of a table that violates 3NF and show how to fix it.
260. What is Boyce-Codd Normal Form (BCNF)? How is it different from 3NF?
261. Give an example of a table in 3NF but not BCNF.
262. What is the difference between 3NF and BCNF?
263. When does BCNF decomposition lose lossless join property or FD preservation?
264. What is Fourth Normal Form (4NF)?
265. What is a multivalued dependency?
266. What is Fifth Normal Form (5NF) / Project-Join Normal Form (PJNF)?
267. What is a join dependency?
268. What is Domain-Key Normal Form (DKNF)?
269. What is a lossless decomposition? How do you verify it?
270. What is a dependency-preserving decomposition?
271. Can a decomposition be lossless but not dependency-preserving? (Yes)
272. What is the test for lossless join decomposition? (Chase test / tabular method)
273. Normalize the following table to 3NF: Student(StudentID, StudentName, CourseID, CourseName, InstructorID, InstructorName)
274. Normalize the following table to BCNF: Booking(CourtID, MemberID, StartTime, MemberName, CourtLocation)
275. What is data anomaly? Give one real-world example of each type (insert, delete, update).

---

## 9. Indexing & Hashing

276. What is an index in DBMS? What problem does it solve?
277. How does an index work internally?
278. What are the types of indexes? (Primary, Clustered, Non-clustered, Composite, Unique, Full-text, Bitmap)
279. What is a primary index?
280. What is a clustered index? How many clustered indexes can a table have? (One)
281. What is a non-clustered index? How many can a table have?
282. What is the difference between a clustered and non-clustered index?
283. What is a composite index (multi-column index)?
284. What is the leftmost prefix rule in composite indexes?
285. What is a unique index?
286. What is a covering index?
287. What is a bitmap index? When is it used?
288. What is a full-text index?
289. What is a spatial index?
290. What is a B-tree index? How does it work?
291. What is a B+ tree index? How is it different from a B-tree?
292. What is the difference between B-tree and B+ tree? (leaf nodes, range queries)
293. Why is B+ tree preferred over B-tree for database indexes?
294. What is a hash index? How does it work?
295. What is the difference between B-tree index and hash index?
296. When would you use a hash index over a B-tree index?
297. What is a dense index vs a sparse index?
298. What is a multilevel index?
299. What is an inverted index?
300. What is index selectivity?
301. What is index cardinality?
302. What is the cost of maintaining an index? (slower writes, extra storage)
303. When should you NOT add an index?
304. What is an index scan vs a table scan (full table scan)?
305. What is index-only scan (covering index scan)?
306. What is a partial index?
307. What is a filtered index?
308. What is index fragmentation?
309. What is REBUILD vs REORGANIZE index?
310. What is hashing in DBMS?
311. What is static hashing?
312. What is dynamic hashing?
313. What is extendible hashing?
314. What is linear hashing?
315. What is a hash collision? How is it handled? (chaining, open addressing)
316. What is overflow bucket in hashing?

---

## 10. Transactions & ACID Properties

317. What is a transaction in DBMS?
318. What are the ACID properties of a transaction? Define each.
319. What is Atomicity? How is it implemented? (UNDO log / rollback)
320. What is Consistency? Who is responsible for it? (application + DBMS together)
321. What is Isolation? How is it implemented?
322. What is Durability? How is it implemented? (REDO log / write-ahead logging)
323. What is a transaction state? What are the states? (Active, Partially Committed, Committed, Failed, Aborted)
324. Draw the transaction state diagram.
325. What is a COMMIT operation?
326. What is a ROLLBACK operation?
327. What is a SAVEPOINT?
328. What is an implicit transaction vs explicit transaction?
329. What is a long-running transaction? Why is it problematic?
330. What is a transaction log (journal)?
331. What is idempotency of a transaction?
332. What is the difference between a transaction and a query?
333. What is a nested transaction?
334. What is an autonomous transaction?
335. What is an auto-commit mode?
336. What is a dirty read?
337. What is a non-repeatable read?
338. What is a phantom read?
339. What is a lost update?
340. What is a write skew?
341. What are transaction isolation levels? List them in order from weakest to strongest.
342. What is Read Uncommitted isolation level? What anomalies does it allow?
343. What is Read Committed isolation level? What anomalies does it prevent vs allow?
344. What is Repeatable Read isolation level? What anomalies does it prevent vs allow?
345. What is Serializable isolation level? What does it prevent?
346. What is the default isolation level in MySQL? (Repeatable Read)
347. What is the default isolation level in PostgreSQL? (Read Committed)
348. What is the default isolation level in SQL Server? (Read Committed)
349. Which isolation level prevents all three anomalies? (Serializable)
350. What is snapshot isolation? How does it differ from Serializable?
351. What is the difference between Repeatable Read and Serializable?
352. What is a serializable schedule?
353. What is a serial schedule?
354. What is a conflict-serializable schedule?
355. What is a view-serializable schedule?
356. What is the difference between conflict-serializability and view-serializability?
357. What is a precedence graph (serializability graph)? How do you use it?
358. What is the BASE property? (Basically Available, Soft-state, Eventual consistency)
359. What is the difference between ACID and BASE?

---

## 11. Concurrency Control

360. What is concurrency control? Why is it needed?
361. What are the problems of concurrent transaction execution? (Dirty read, Non-repeatable read, Phantom read, Lost update)
362. What is a lock in DBMS?
363. What is a shared lock (S-lock / read lock)?
364. What is an exclusive lock (X-lock / write lock)?
365. What is a lock compatibility matrix?
366. What is lock granularity? (Row-level, Page-level, Table-level)
367. What is the tradeoff between fine-grained and coarse-grained locking?
368. What is Two-Phase Locking (2PL)?
369. What are the two phases of 2PL? (Growing phase, Shrinking phase)
370. What is Strict 2PL?
371. What is Rigorous 2PL?
372. Does 2PL guarantee conflict-serializability? (Yes)
373. Does 2PL prevent deadlocks? (No)
374. What is timestamp ordering (TO) protocol?
375. What is the Thomas Write Rule?
376. What is Optimistic Concurrency Control (OCC)?
377. What are the three phases of OCC? (Read, Validate, Write)
378. What is MVCC (Multi-Version Concurrency Control)?
379. How does MVCC work? Which databases use it? (PostgreSQL, Oracle, MySQL InnoDB)
380. What is the advantage of MVCC over lock-based concurrency control?
381. What is a version chain in MVCC?
382. What is intent lock?
383. What is an intention shared (IS) lock? Intention exclusive (IX) lock?
384. What is a predicate lock?
385. What is a gap lock? (used in MySQL InnoDB for Repeatable Read)
386. What is a next-key lock?
387. What is a record lock?
388. What is a table-level lock vs row-level lock? Which databases use each?
389. What is a livelock?
390. What is starvation in the context of locks?
391. What is the difference between deadlock and livelock?
392. What is the difference between a lock and a latch in DBMS?

---

## 12. Deadlocks in DBMS

393. What is a deadlock in DBMS?
394. What are the four conditions for a deadlock? (Mutual exclusion, Hold & Wait, No Preemption, Circular Wait)
395. What is a wait-for graph in DBMS? How is it used to detect deadlocks?
396. How does the DBMS detect a deadlock?
397. What is deadlock prevention in DBMS?
398. What is the Wait-Die scheme for deadlock prevention?
399. What is the Wound-Wait scheme for deadlock prevention?
400. What is the difference between Wait-Die and Wound-Wait?
401. What is deadlock avoidance in DBMS?
402. What is deadlock detection and recovery?
403. What is victim selection in deadlock recovery?
404. What is transaction rollback on deadlock detection?
405. What is total rollback vs partial rollback?
406. What is starvation in deadlock recovery?
407. How do databases like MySQL handle deadlocks? (detect and rollback the younger transaction)
408. What is a timeout-based deadlock detection?

---

## 13. Database Recovery & Logging

409. What is database recovery? Why is it needed?
410. What are the types of failures in DBMS? (Transaction failure, System failure, Media/disk failure)
411. What is a transaction failure?
412. What is a system crash / system failure?
413. What is media failure?
414. What is a log in DBMS? What does a log record contain?
415. What is Write-Ahead Logging (WAL)?
416. What is the UNDO log?
417. What is the REDO log?
418. What is the difference between UNDO and REDO?
419. What is a checkpoint in DBMS? Why is it used?
420. What is a fuzzy checkpoint?
421. What is the ARIES recovery algorithm? What does it stand for? (Algorithm for Recovery and Isolation Exploiting Semantics)
422. What are the three phases of ARIES? (Analysis, REDO, UNDO)
423. What is immediate update vs deferred update recovery?
424. What is shadow paging?
425. What is the Log Sequence Number (LSN)?
426. What is a dirty page in the context of recovery?
427. What is the buffer pool? What is the relationship between buffer pool and recovery?
428. What is force vs no-force write policy?
429. What is steal vs no-steal buffer policy?
430. What is a media recovery?
431. What is a backup? What are the types? (Full, Incremental, Differential)
432. What is point-in-time recovery (PITR)?
433. What is RTO (Recovery Time Objective)? What is RPO (Recovery Point Objective)?
434. What is a hot backup vs cold backup vs warm backup?
435. What is a transaction abort? How is it implemented?

---

## 14. Storage & File Organization

436. What is storage in DBMS? What are the storage levels? (Cache, Main memory, Flash, Magnetic disk, Tape)
437. What is a block (page) in disk storage?
438. What is the block size? What is the typical default? (4KB, 8KB, 16KB — varies by DB)
439. What is a record? What are the types of records? (Fixed-length, Variable-length)
440. What is a heap file (unordered file)?
441. What is a sequential file (ordered file)?
442. What is a hash file?
443. What is a clustered file vs unclustered file?
444. What is the difference between a heap file and a sorted file?
445. What is a buffer manager? What is the buffer pool?
446. What is the LRU page replacement policy in the buffer pool?
447. What is the clock replacement algorithm?
448. What is disk I/O? Why is it the bottleneck in DBMS?
449. What is sequential access vs random access on disk?
450. What is a seek time? Rotational latency? Transfer time?
451. What is RAID in the context of DBMS storage?
452. What is a tablespace?
453. What is row store vs column store (columnar storage)?
454. What is the advantage of columnar storage for analytics? (better compression, column pruning)
455. What is compression in database storage?
456. What is data serialization in DBMS?
457. What is a free list in heap file management?
458. What is a slotted page structure?
459. What is a page header?
460. What is record packing? What is record spanned vs unspanned?

---

## 15. Query Processing & Optimization

461. What is query processing in DBMS?
462. What are the steps in query processing? (Parsing → Semantic analysis → Query rewrite → Query optimization → Execution)
463. What is a query parser?
464. What is a query optimizer?
465. What is a query execution plan?
466. What is EXPLAIN / EXPLAIN ANALYZE in PostgreSQL / MySQL?
467. What is a cost-based optimizer?
468. What is a rule-based optimizer?
469. What is a heuristic in query optimization?
470. What are the common heuristics in query optimization? (push selection early, push projection early, reorder joins)
471. What is statistics in the query optimizer? (table cardinality, column histograms, distinct values)
472. What is selectivity of a predicate?
473. What is a join algorithm? What are the types?
474. What is nested loop join?
475. What is block nested loop join?
476. What is sort-merge join?
477. What is hash join?
478. What is index nested loop join?
479. When does the optimizer choose nested loop vs hash join vs sort-merge join?
480. What is the difference between a logical query plan and a physical query plan?
481. What is an operator tree (query tree)?
482. What is pipelining in query execution?
483. What is materialization in query execution?
484. What is external sorting? What is the two-pass external sort algorithm?
485. What is query caching? What is query result caching?
486. What is a plan cache?
487. What is a bind parameter vs literal in a SQL query? (affects plan caching)
488. What is a histogram in query optimization?
489. What is partition pruning?
490. What is predicate pushdown?
491. What is projection pushdown?
492. What is a lateral join?
493. What is an anti-join optimization?
494. What is a merge sort join?
495. What is the difference between an index scan and an index-only scan?

---

## 16. Views, Stored Procedures, Triggers & Cursors

496. What is a view in DBMS?
497. What is the difference between a view and a table?
498. What is an updatable view?
499. What is a non-updatable view? What makes a view non-updatable?
500. What is WITH CHECK OPTION in a view?
501. What is a materialized view? How does it differ from a regular view?
502. What is view maintenance in a materialized view? (eager vs lazy)
503. What is a stored procedure?
504. What are the advantages of stored procedures?
505. What is the difference between a stored procedure and a function?
506. What is a user-defined function (UDF)?
507. What is a scalar function vs a table-valued function?
508. What is an inline table-valued function vs a multi-statement table-valued function?
509. What is a trigger in DBMS?
510. What are the types of triggers? (BEFORE, AFTER, INSTEAD OF)
511. What is a row-level trigger vs a statement-level trigger?
512. What events can fire a trigger? (INSERT, UPDATE, DELETE)
513. What is the difference between a trigger and a stored procedure?
514. What are the uses of triggers? (Auditing, enforcing constraints, synchronizing tables)
515. What are the drawbacks of triggers?
516. What is a cursor in DBMS?
517. What are the types of cursors? (Implicit, Explicit; Forward-only, Scrollable; Static, Dynamic, Keyset)
518. What are the operations on a cursor? (DECLARE, OPEN, FETCH, CLOSE, DEALLOCATE)
519. What is the difference between an implicit cursor and an explicit cursor?
520. What are the drawbacks of cursors? (slow, row-by-row processing — set-based operations preferred)
521. When would you use a cursor?
522. What is a sequence in SQL? How is it different from AUTO_INCREMENT?
523. What is a synonym in DBMS?
524. What is a package in PL/SQL?
525. What is dynamic SQL?

---

## 17. NoSQL Databases

526. What is NoSQL? What does the name mean? (Not Only SQL)
527. Why was NoSQL developed? What limitations of SQL databases does it address?
528. What are the types of NoSQL databases? (Key-Value, Document, Column-Family, Graph)
529. What is a key-value store? Give examples. (Redis, DynamoDB, Riak, Memcached)
530. What is a document store? Give examples. (MongoDB, CouchDB, Firestore)
531. What is a column-family (wide-column) store? Give examples. (Cassandra, HBase, BigTable)
532. What is a graph database? Give examples. (Neo4j, Amazon Neptune, JanusGraph)
533. What is the difference between SQL and NoSQL databases? (5+ points)
534. What is a flexible/dynamic schema? How does it benefit document stores?
535. What is eventual consistency? How is it different from strong consistency?
536. What is the BASE model? (Basically Available, Soft-state, Eventually consistent)
537. What is the difference between ACID and BASE?
538. What is MongoDB? What data format does it use? (BSON — Binary JSON)
539. What is a MongoDB collection? A document?
540. What is a MongoDB ObjectID?
541. What is Redis? What data structures does it support?
542. What is Redis used for? (caching, sessions, pub-sub, leaderboards, rate limiting)
543. What is Redis persistence? What is RDB vs AOF?
544. What is Cassandra? What is its consistency model?
545. What is the Cassandra data model? (keyspace → table → partition key → clustering key)
546. What is consistent hashing? How is it used in distributed NoSQL databases?
547. What is a Dynamo-style database?
548. What is a quorum read/write in distributed databases?
549. What is vector clock in NoSQL? When is it used?
550. What is a wide-column store vs a column-store (columnar) database?
551. When should you choose NoSQL over SQL?
552. What are the limitations of NoSQL databases?
553. What is polyglot persistence?
554. What is a time-series database? (InfluxDB, TimescaleDB, OpenTSDB)
555. What is a search engine database? (Elasticsearch) How does it differ from a document store?

---

## 18. Distributed Databases & CAP Theorem

556. What is a distributed database?
557. What are the advantages of a distributed database?
558. What are the challenges of a distributed database?
559. What is data distribution? What are the strategies? (Fragmentation, Replication, Allocation)
560. What is horizontal fragmentation (sharding)?
561. What is vertical fragmentation?
562. What is mixed/hybrid fragmentation?
563. What is the CAP theorem? State it precisely.
564. What are the three properties of CAP? (Consistency, Availability, Partition Tolerance)
565. Why can't a distributed system guarantee all three CAP properties simultaneously?
566. What is a CP system? Give examples. (HBase, Zookeeper, MongoDB in default mode)
567. What is an AP system? Give examples. (Cassandra, CouchDB, DynamoDB)
568. What is a CA system? Is it possible in practice? (only possible without network partition — unrealistic)
569. What is the PACELC theorem? (extends CAP — even without partition, tradeoff between Latency and Consistency)
570. What is eventual consistency? Give a real-world example.
571. What is strong consistency?
572. What is causal consistency?
573. What is monotonic read consistency?
574. What is read-your-writes consistency?
575. What is a distributed transaction?
576. What is the Two-Phase Commit (2PC) protocol?
577. What are the two phases of 2PC? (Prepare phase, Commit phase)
578. What are the limitations of 2PC? (blocking, coordinator failure)
579. What is Three-Phase Commit (3PC)?
580. What is the Saga pattern for distributed transactions?
581. What is the difference between 2PC and Saga?
582. What is consensus in distributed systems?
583. What is the Paxos algorithm?
584. What is the Raft consensus algorithm?
585. What is a distributed lock?
586. What is a global clock in distributed databases?
587. What is a Lamport timestamp?
588. What is a vector clock?
589. What is a distributed deadlock?
590. What is a federated database?

---

## 19. Database Sharding, Replication & Partitioning

591. What is database replication? What problem does it solve?
592. What is master-slave replication (primary-replica)?
593. What is master-master replication (multi-primary)?
594. What is synchronous replication vs asynchronous replication?
595. What is semi-synchronous replication?
596. What is replication lag?
597. What is the tradeoff between synchronous and asynchronous replication?
598. What is a read replica? When is it used?
599. What is a standby replica vs a read replica?
600. What is logical replication vs physical (streaming) replication?
601. What is database sharding?
602. What is a shard key? How do you choose a good shard key?
603. What is range-based sharding?
604. What is hash-based sharding?
605. What is directory-based sharding?
606. What is geo-based sharding?
607. What are the drawbacks of sharding? (cross-shard queries, rebalancing, no cross-shard transactions)
608. What is shard rebalancing (resharding)?
609. What is consistent hashing? Why is it used in sharding?
610. What is the difference between sharding and partitioning?
611. What is horizontal partitioning vs vertical partitioning?
612. What is range partitioning?
613. What is list partitioning?
614. What is hash partitioning?
615. What is composite partitioning?
616. What is partition pruning?
617. What is a hot shard / hot partition?
618. What is connection pooling? Why is it important?
619. What is PgBouncer? What is ProxySQL?
620. What is a database proxy?
621. What is a load balancer for databases?
622. What is a database cluster?
623. What is high availability (HA) in databases?
624. What is failover? What is automatic failover?
625. What is a primary election (leader election) in a replicated database cluster?

---

## 20. Advanced & Tricky Questions

626. What is the difference between a primary key and a unique key? Can a unique key have NULL?
627. Can a table have no primary key? Is that acceptable? (Yes, but bad practice)
628. Can a foreign key reference a column that is not a primary key? (Yes — must be UNIQUE)
629. What is the difference between ON DELETE CASCADE and ON DELETE SET NULL?
630. Can two tables have a foreign key referencing each other? (Circular FK — creates chicken-and-egg insertion problem)
631. What is an orphan record? How does referential integrity prevent it?
632. What is the difference between a view and a subquery?
633. Can you index a view? What is required? (Materialized view can be indexed)
634. What is the difference between a stored procedure and a trigger?
635. Can a trigger call a stored procedure? (Yes)
636. What is the difference between OLTP and OLAP indexing strategies?
637. Why is denormalization used in data warehouses?
638. What is a star schema? What is a snowflake schema?
639. What is the difference between a fact table and a dimension table?
640. What is a slowly changing dimension (SCD)?
641. If `SELECT COUNT(*) FROM table` returns 0, is the table empty? (Yes, but consider filtered rows if WHERE clause added)
642. What is the difference between `COUNT(1)`, `COUNT(*)`, and `COUNT(column_name)`?
643. What is the result of joining a table with NULL foreign key to a primary key table?
644. What does `SELECT * FROM A, B` produce? (Cross join — Cartesian product)
645. What happens when you GROUP BY without any aggregate function?
646. Can you use a window function in a WHERE clause? (No — use CTE or subquery)
647. What is the difference between RANK() and DENSE_RANK() for rows with the same value?
648. What is the problem with using `SELECT *` in production queries?
649. What is the N+1 query problem?
650. What is connection exhaustion? How do you prevent it?
651. If an index exists on column A and column B, will a query filtering only on B use the index? (Only if B is the leftmost prefix — otherwise no)
652. What is a covering index? Why is it faster than a regular index?
653. What is the difference between `DELETE FROM table` and `TRUNCATE TABLE`?
654. Why can `TRUNCATE` not be rolled back in some RDBMS? (It is DDL, not DML — releases extent, not logged row-by-row)
655. What is the difference between a subquery and a CTE? When do you prefer each?
656. What is the difference between an equi-join and a natural join?
657. What is a self-referential table? Give an example. (Employee table with ManagerID referencing EmployeeID)
658. How would you find all employees under a manager (recursive hierarchy)?
659. What is the difference between `IS NULL` and `= NULL` in SQL? (= NULL always evaluates to UNKNOWN)
660. What is the three-valued logic in SQL? (TRUE, FALSE, UNKNOWN — NULL comparisons return UNKNOWN)
661. What is an execution plan and how do you read it?
662. What does a "full table scan" in an execution plan indicate?
663. What is a hash aggregate vs a sort aggregate in a query plan?
664. What is the difference between optimistic locking and pessimistic locking?
665. In MVCC, what happens to old versions of rows? (Vacuum / garbage collection removes them)
666. What is VACUUM in PostgreSQL? Why is it needed?
667. What is autovacuum?
668. What is page bloat?
669. What is the difference between MySQL InnoDB and MyISAM?
670. What is a buffer hit ratio? What is a good value? (>95% is healthy)
671. What is connection pooling and why is it important for high-traffic applications?
672. What is the impedance mismatch between object-oriented code and relational databases?
673. What is an ORM (Object-Relational Mapper)? What are its advantages and disadvantages?
674. What is lazy loading vs eager loading in ORM?
675. What is the difference between a data lake and a data warehouse?

---

## 21. Rapid Fire — One-Liners

*Each answer in ≤ 20 words. Practice verbally until reflexive.*

676. What is a primary key? (Uniquely identifies each row; cannot be NULL; only one per table)
677. What is a foreign key? (References primary key of another table; enforces referential integrity)
678. What is normalization? (Organizing data to reduce redundancy and improve integrity)
679. What is 1NF? (Each column has atomic values; no repeating groups)
680. What is 2NF? (In 1NF + no partial dependencies on composite primary key)
681. What is 3NF? (In 2NF + no transitive dependencies among non-key attributes)
682. What is BCNF? (Stricter 3NF — every determinant must be a superkey)
683. What is ACID? (Atomicity, Consistency, Isolation, Durability — properties of reliable transactions)
684. What is atomicity? (Transaction executes fully or not at all — no partial completion)
685. What is isolation? (Concurrent transactions execute as if serially — no interference)
686. What is a dirty read? (Reading uncommitted data from another transaction)
687. What is a phantom read? (New rows appear in repeated query due to another transaction's insert)
688. What is a deadlock in DBMS? (Two transactions each waiting for resource held by the other)
689. What is 2PL? (Lock acquired in growing phase, released in shrinking phase — ensures serializability)
690. What is MVCC? (Multiple versions of data stored; readers don't block writers)
691. What is a clustered index? (Reorders physical table data to match index — only one per table)
692. What is a B+ tree index? (Balanced tree; data only in leaves; linked leaves for range scans)
693. What is a covering index? (Index includes all columns a query needs — avoids table lookup)
694. What is WAL? (Write-Ahead Logging — log written before data page — ensures durability)
695. What is a checkpoint? (DBMS flushes dirty pages to disk — reduces recovery time)
696. What is the CAP theorem? (Distributed system can guarantee only 2 of: Consistency, Availability, Partition Tolerance)
697. What is eventual consistency? (All nodes will eventually see same data — no strong guarantee on timing)
698. What is sharding? (Splitting database horizontally across multiple servers using a shard key)
699. What is replication? (Copying data to multiple servers for availability and fault tolerance)
700. What is a materialized view? (Stored physical result of a query — must be refreshed for freshness)
701. What is a trigger? (Auto-executed procedure on INSERT, UPDATE, or DELETE events)
702. What is a stored procedure? (Precompiled SQL code stored in DB — callable by name)
703. What is a cursor? (Pointer for row-by-row iteration over a result set)
704. What is a view? (Virtual table defined by a query — no data stored physically)
705. What is a subquery? (Query nested inside another query — can be correlated or non-correlated)
706. What is a CTE? (Named temporary result set defined with WITH — improves readability)
707. What is INNER JOIN? (Returns only matching rows from both tables)
708. What is LEFT JOIN? (All rows from left table; matched rows from right; NULL if no match)
709. What is RANK() vs DENSE_RANK()? (RANK skips numbers after ties; DENSE_RANK does not)
710. What is an ORM? (Maps database tables to programming language objects — e.g., Hibernate, SQLAlchemy)

---

## Bonus: SQL Quick Reference

### Key Constraint Summary
| Constraint | Allows NULL | Allows Duplicate | Count per Table |
|---|---|---|---|
| PRIMARY KEY | No | No | 1 |
| UNIQUE | Yes (1 NULL in most) | No | Multiple |
| FOREIGN KEY | Yes | Yes | Multiple |
| NOT NULL | No | Yes | Multiple |
| CHECK | Yes | Yes | Multiple |

### Isolation Level vs Anomaly Prevention
| Isolation Level | Dirty Read | Non-Repeatable Read | Phantom Read |
|---|---|---|---|
| Read Uncommitted | ✅ Possible | ✅ Possible | ✅ Possible |
| Read Committed | ❌ Prevented | ✅ Possible | ✅ Possible |
| Repeatable Read | ❌ Prevented | ❌ Prevented | ✅ Possible |
| Serializable | ❌ Prevented | ❌ Prevented | ❌ Prevented |

### Normal Forms Quick Reference
| Normal Form | Eliminates | Requirement |
|---|---|---|
| 1NF | Repeating groups / non-atomic values | Atomic values, single-valued columns |
| 2NF | Partial dependencies | Must be in 1NF; no partial FD on composite PK |
| 3NF | Transitive dependencies | Must be in 2NF; non-key attr depends only on PK |
| BCNF | Anomalies 3NF misses | Every determinant must be a superkey |
| 4NF | Multivalued dependencies | Must be in BCNF; no non-trivial MVD |

### SQL Command Categories
| Category | Commands |
|---|---|
| DDL | CREATE, ALTER, DROP, TRUNCATE, RENAME |
| DML | SELECT, INSERT, UPDATE, DELETE |
| DCL | GRANT, REVOKE |
| TCL | COMMIT, ROLLBACK, SAVEPOINT, SET TRANSACTION |

---

## Study Priority Guide

| Tier | Topics | Interview Frequency |
|------|--------|-------------------|
| 🔴 Must Know | ACID properties, transaction states, isolation levels + anomalies table, normalization (1NF–BCNF with examples), SQL joins (all types), primary/foreign/composite/unique key differences, clustered vs non-clustered index, DELETE vs TRUNCATE vs DROP, GROUP BY + HAVING, basic SQL queries (top-N salary, duplicates, second highest) | Asked in 95%+ interviews |
| 🟠 High Priority | Functional dependencies + Armstrong's axioms, 2PL + concurrency control, deadlock detection/prevention, B+ tree index internals, WAL + checkpointing, view vs materialized view, window functions (RANK/DENSE_RANK/ROW_NUMBER), CTE + recursive CTE, stored procedures vs functions vs triggers, CAP theorem, SQL vs NoSQL | Asked in 70%+ interviews |
| 🟡 Medium | MVCC, query optimization + EXPLAIN plan, hash vs B-tree index, cursor operations, sharding vs partitioning, replication types, ARIES recovery, ER model → relational schema conversion, 4NF/5NF, optimistic vs pessimistic locking, consistent hashing, Saga vs 2PC | Asked in product companies |
| 🟢 Differentiator | PACELC theorem, ARIES internals, buffer pool policies (steal/no-steal, force/no-force), external merge sort, predicate/gap/next-key locks, vector clocks, polyglot persistence, columnar storage internals, query pipeline execution, plan cache, VACUUM/autovacuum, ORM N+1 problem | Makes you stand out |

---

*Sources: GeeksforGeeks DBMS Interview Questions, InterviewBit DBMS Questions, Adaface DBMS Questions, TakeUForward DBMS Sheet, Flexiple DBMS Guide, DataCamp DBMS Blog, PerfectNotes DBMS Q&A, Hirist DBMS Questions, AnalyticsVidhya DBMS Interview, Skilr DBMS Guide, LogicMojo 100 DBMS Questions, Sanfoundry DBMS MCQ, Hynts DBMS Questions, GoLinuxCloud DBMS Guide. Compiled August 2026.*
