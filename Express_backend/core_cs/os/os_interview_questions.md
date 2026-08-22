# Operating Systems Interview Questions — Complete Reference
> Curated from GeeksforGeeks, InterviewBit, LeetCode Discuss, Adaface, Guru99, Flexiple, Hyring, TechInterview.org, Sanfoundry, and placement experience reports. Covers every topic asked in Indian product company, mass recruiter, FAANG-style, and core CS placement interviews.

---

## Table of Contents
1. [OS Fundamentals & Basics](#1-os-fundamentals--basics)
2. [Kernel, System Calls & OS Architecture](#2-kernel-system-calls--os-architecture)
3. [Processes](#3-processes)
4. [Threads & Multithreading](#4-threads--multithreading)
5. [CPU Scheduling](#5-cpu-scheduling)
6. [Process Synchronization & Concurrency](#6-process-synchronization--concurrency)
7. [Classical Synchronization Problems](#7-classical-synchronization-problems)
8. [Deadlocks](#8-deadlocks)
9. [Memory Management](#9-memory-management)
10. [Virtual Memory, Paging & Segmentation](#10-virtual-memory-paging--segmentation)
11. [Page Replacement Algorithms](#11-page-replacement-algorithms)
12. [File Systems](#12-file-systems)
13. [Disk Management & I/O](#13-disk-management--io)
14. [Inter-Process Communication (IPC)](#14-inter-process-communication-ipc)
15. [Virtualization & Containers](#15-virtualization--containers)
16. [Linux / Unix Specific](#16-linux--unix-specific)
17. [Security & Protection](#17-security--protection)
18. [Distributed & Real-Time OS](#18-distributed--real-time-os)
19. [Advanced & Tricky Questions](#19-advanced--tricky-questions)
20. [Rapid Fire — One-Liners](#20-rapid-fire--one-liners)

---

## 1. OS Fundamentals & Basics

1. What is an Operating System? What are its main functions?
2. What are the goals of an OS? (convenience, efficiency, ability to evolve)
3. What are the types of operating systems? (Batch, Time-sharing, Distributed, Real-time, Network, Embedded, Mobile)
4. What is a batch operating system? What are its advantages and disadvantages?
5. What is a time-sharing operating system? How is it different from a batch OS?
6. What is a multiprogramming operating system? What is its primary goal?
7. What is a multiprocessing OS? How does it differ from multiprogramming?
8. What is a real-time OS (RTOS)? What is the difference between hard RTOS and soft RTOS?
9. What is a distributed OS? What are its advantages?
10. What is an embedded OS? Give examples.
11. What is a network operating system?
12. What is a mobile OS? Give examples.
13. What is the difference between a program and a process?
14. What is multitasking? How is it different from multiprocessing?
15. What is the difference between concurrency and parallelism?
16. What is a bootstrap program? Where is it stored? What does it do?
17. What is BIOS? What role does it play at startup?
18. What is UEFI? How is it different from BIOS?
19. What is booting? What is the difference between cold boot and warm boot?
20. What is the difference between 32-bit and 64-bit OS?
21. What are the services provided by an OS?
22. What is a shell? How is it different from the kernel?
23. What is a CLI vs a GUI OS interface?
24. What is system software vs application software?
25. What is firmware? How does it relate to the OS?

---

## 2. Kernel, System Calls & OS Architecture

26. What is a kernel? What are its responsibilities?
27. What is the difference between kernel space and user space?
28. What is user mode vs kernel mode (dual-mode operation)? Why is this distinction important?
29. How does a process switch from user mode to kernel mode?
30. What is a system call? What is its purpose?
31. How does a system call work mechanically? (software interrupt / trap instruction → kernel → result)
32. What are the categories of system calls? (Process control, File management, Device management, Information maintenance, Communication, Protection)
33. Give five examples of system calls in Linux. (`fork`, `exec`, `read`, `write`, `open`, `close`, `wait`, `exit`)
34. What is the difference between a system call and a function call?
35. What is a trap? What is an interrupt? What is the difference?
36. What is an interrupt? What are the types of interrupts? (hardware, software, maskable, non-maskable)
37. What is an Interrupt Service Routine (ISR)?
38. What is interrupt latency?
39. What is a monolithic kernel? Give examples. (Linux, old Unix)
40. What is a microkernel? What are its advantages and disadvantages? (QNX, seL4, Mach)
41. What is a hybrid kernel? Give examples. (Windows NT, macOS XNU)
42. What is an exokernel?
43. What is a modular kernel?
44. What is the difference between a monolithic kernel and a microkernel in terms of performance and reliability?
45. What is a hypervisor? What are Type 1 and Type 2 hypervisors?
46. What is the role of the OS in resource management?
47. What is the difference between an OS and a virtual machine?
48. What is privileged instruction? What happens if a user program tries to execute one?
49. What is the system call table (syscall table)?
50. What is a device driver? How does it interact with the kernel?
51. What is a kernel module? Can you load/unload one at runtime?
52. What is the role of the MMU (Memory Management Unit)?
53. What is the role of the DMA (Direct Memory Access) controller?
54. What is a context switch? What triggers it?
55. What is the cost of a context switch? What information must be saved and restored?

---

## 3. Processes

56. What is a process? How is it different from a program?
57. What are the components of a process? (Code/text, Data, Heap, Stack, PCB)
58. What is a Process Control Block (PCB)? What information does it contain?
59. What are the states of a process? Draw the process state diagram.
60. What are the five states of a process? (New, Ready, Running, Waiting/Blocked, Terminated)
61. What is the difference between the Ready state and the Waiting state?
62. What is the difference between Ready queue and Wait queue?
63. What is a process table?
64. What is a long-term scheduler (job scheduler)?
65. What is a short-term scheduler (CPU scheduler)?
66. What is a medium-term scheduler? What is swapping?
67. What is the degree of multiprogramming?
68. What is a context switch? What is saved during a context switch?
69. What is the overhead of a context switch?
70. What is `fork()`? What does it return? What is the child-parent relationship after fork?
71. What is `exec()`? How does it differ from `fork()`?
72. What is `wait()` and `waitpid()`? What is a zombie process?
73. What is a zombie process? How do you prevent it?
74. What is an orphan process? How does the OS handle it? (adopted by init/systemd)
75. What is a daemon process? Give examples. (sshd, cron, httpd)
76. What is a signal in Unix/Linux? Give five examples. (SIGKILL, SIGTERM, SIGINT, SIGSEGV, SIGHUP)
77. What is the difference between SIGKILL and SIGTERM?
78. Can a process catch or ignore SIGKILL? (No — it is always fatal)
79. What is process scheduling? What is the CPU burst?
80. What is the difference between CPU-bound and I/O-bound processes?
81. What is preemptive scheduling? What is non-preemptive (cooperative) scheduling?
82. What is starvation? How does aging prevent it?
83. What is the difference between a process and a thread?
84. What is Inter-Process Communication (IPC)? Why do processes need it?
85. What is copy-on-write (CoW)? How does it optimize `fork()`?
86. What is the `vfork()` system call? How does it differ from `fork()`?
87. What is process migration in a distributed OS?
88. What is a process group? What is a session in Unix?
89. What is the init process (PID 1)? What is systemd?
90. What is the maximum number of processes that can run simultaneously on a single-core CPU? (One — others are interleaved)

---

## 4. Threads & Multithreading

91. What is a thread? What is it sometimes called? (lightweight process)
92. What resources does a thread share with other threads in the same process? (code, data, heap, file descriptors, global variables)
93. What resources are private to each thread? (program counter, registers, stack, thread ID, state)
94. What are the advantages of threads over processes?
95. What are the disadvantages of using threads?
96. What is a single-threaded process vs a multi-threaded process?
97. What is user-level thread (ULT)? What is a kernel-level thread (KLT)?
98. What are the advantages and disadvantages of user-level threads vs kernel-level threads?
99. What is the many-to-one thread model? (Many ULTs → one KLT)
100. What is the one-to-one thread model? (Each ULT maps to one KLT — Linux uses this)
101. What is the many-to-many thread model?
102. What is a thread pool? Why is it used?
103. What is a green thread vs a native thread?
104. What is the pthreads (POSIX threads) API? Name three key functions. (`pthread_create`, `pthread_join`, `pthread_mutex_lock`)
105. What is thread safety? What makes a function thread-safe?
106. What is a reentrant function? How is it different from thread-safe?
107. What is a race condition? Give a concrete example.
108. What is the critical section problem? What are the three requirements for a solution? (Mutual exclusion, Progress, Bounded waiting)
109. What is thread starvation? How do you prevent it?
110. What is context switching between threads vs between processes? Which is faster?
111. What is a fiber (green thread)? How does it differ from a kernel thread?
112. What is cooperative vs preemptive multithreading?
113. What is the Global Interpreter Lock (GIL) in Python? How does it affect threading?
114. What is a hyperthreaded CPU? How does it relate to OS threading?
115. What is the difference between concurrency and parallelism in the context of threads?
116. What happens to all threads when one thread calls `exit()`?
117. What is `pthread_detach`? When would you use it?
118. What is thread-local storage (TLS)?

---

## 5. CPU Scheduling

119. What is CPU scheduling? Why is it necessary?
120. What is the scheduling queue? What are the types? (Job queue, Ready queue, Device queue)
121. What metrics are used to evaluate a scheduling algorithm? (CPU utilization, throughput, turnaround time, waiting time, response time, fairness)
122. What is turnaround time? Waiting time? Response time? Throughput?
123. What is the difference between preemptive and non-preemptive scheduling? Give one example of each.
124. What is the FCFS (First-Come, First-Served) scheduling algorithm? What is its main drawback? (Convoy effect)
125. What is the Convoy effect in FCFS?
126. What is SJF (Shortest Job First) scheduling? Is it optimal? Why?
127. What is the problem with SJF? (Cannot predict burst time; starvation for long jobs)
128. What is SRTF (Shortest Remaining Time First)? How is it different from SJF?
129. What is Priority Scheduling? What is its main problem? (starvation)
130. How does aging solve the starvation problem in priority scheduling?
131. What is Round Robin scheduling? What is the time quantum?
132. How does the time quantum affect performance in Round Robin? (too small → too many context switches; too large → degenerates to FCFS)
133. What is Multilevel Queue Scheduling?
134. What is Multilevel Feedback Queue (MLFQ) scheduling? How does it work?
135. What is the difference between Multilevel Queue and MLFQ?
136. What is Lottery Scheduling?
137. What is Fair-Share scheduling?
138. What is real-time CPU scheduling? What is the difference between rate-monotonic and earliest-deadline-first (EDF) scheduling?
139. What is Rate Monotonic Scheduling (RMS)?
140. What is Earliest Deadline First (EDF) scheduling?
141. What is the dispatcher? How is it different from the scheduler?
142. What is dispatch latency?
143. What is the difference between long-term, short-term, and medium-term scheduling?
144. Calculate average waiting time and turnaround time for a given set of processes using FCFS, SJF, and Round Robin. (Numerical)
145. What is the Gantt chart? How is it used in CPU scheduling?
146. What is the optimal scheduling algorithm? Is it practically implementable? (SJF is optimal for minimizing average wait time but requires knowing burst times)
147. What is CPU-bound vs I/O-bound scheduling preference?
148. What is the difference between cooperative and preemptive multitasking?
149. What is priority inversion? How does priority inheritance solve it?
150. Give a real-world example where priority inversion caused a critical bug. (Mars Pathfinder mission)

---

## 6. Process Synchronization & Concurrency

151. What is process synchronization? Why is it needed?
152. What is a race condition? Give a bank account example.
153. What is the critical section? State the three requirements for a critical section solution.
154. What is mutual exclusion?
155. What is the progress requirement in a critical section solution?
156. What is the bounded-waiting requirement in a critical section solution?
157. What is Peterson's solution? Does it work on modern hardware? Why not?
158. What is the hardware solution to critical sections? (test-and-set, compare-and-swap)
159. What is test-and-set? Is it atomic?
160. What is compare-and-swap (CAS)? Give an example.
161. What is a mutex (mutual exclusion lock)?
162. What is a semaphore? What are the two operations on a semaphore?
163. What is a binary semaphore? How is it different from a mutex?
164. What is a counting semaphore?
165. What is the difference between a mutex and a semaphore? (ownership, count, purpose)
166. Can a thread acquire a mutex it already holds? (Typically deadlock — unless reentrant/recursive mutex)
167. What is a recursive mutex?
168. What is a spinlock? When is it preferred over a mutex?
169. What is busy waiting? What is its disadvantage?
170. What is a monitor? How does it differ from a semaphore?
171. What is a condition variable? What are `wait()`, `signal()`, `broadcast()`?
172. What is the difference between `signal()` and `broadcast()` on a condition variable?
173. What is the spurious wakeup problem? How do you handle it? (always use while loop, not if)
174. What is a read-write lock? When is it better than a mutex?
175. What is reader starvation in a read-write lock?
176. What is a barrier in concurrency?
177. What is a latch (CountDownLatch)?
178. What is lock-free programming? What is wait-free programming?
179. What are atomic operations? Give examples. (`atomic_add`, `CAS`, `fetch_and_add`)
180. What is memory ordering / memory model? What is happens-before?
181. What is the ABA problem in lock-free programming?
182. What is the MESI cache coherence protocol?
183. What is false sharing? How does it affect multi-core performance?
184. What is a memory barrier (fence)?
185. What is the difference between deadlock, livelock, and starvation?
186. What is livelock? Give an example. (two processes keep yielding to each other)
187. What is priority inversion? Give the Mars Pathfinder example.
188. What is a reentrant lock?
189. What is transactional memory?
190. What is the happens-before relationship in Java Memory Model?

---

## 7. Classical Synchronization Problems

191. What is the Producer-Consumer (Bounded Buffer) problem? State it precisely.
192. What synchronization primitives are needed to solve the Bounded Buffer problem? (mutex + 2 semaphores: full, empty)
193. Walk through the solution to the Bounded Buffer problem step by step.
194. What is the Readers-Writers problem? State the two variants.
195. What is the first Readers-Writers problem? (readers have priority — writers may starve)
196. What is the second Readers-Writers problem? (writers have priority — readers may starve)
197. What is a fair solution to the Readers-Writers problem?
198. Walk through the semaphore solution to the Readers-Writers problem.
199. What is the Dining Philosophers problem? Why does it model deadlock and starvation?
200. What are the solutions to the Dining Philosophers problem? (resource hierarchy, Chandy-Misra, allow only N-1 philosophers to sit)
201. What is the Sleeping Barber problem? State it and its solution.
202. What is the Cigarette Smokers problem?
203. What is the Barbershop problem?
204. What is the Santa Claus problem?
205. How does the Producer-Consumer problem relate to real systems? (OS kernel buffers, message queues, thread pools)
206. How does the Readers-Writers problem relate to real systems? (database read/write locks)
207. Implement the Bounded Buffer solution using semaphores in pseudocode.
208. Why must the order of semaphore operations matter in the Bounded Buffer solution? (Swapping mutex and empty acquire leads to deadlock)

---

## 8. Deadlocks

209. What is a deadlock? Give a precise definition.
210. What are the four necessary conditions for a deadlock (Coffman conditions)? Define each.
211. What is mutual exclusion (as a deadlock condition)?
212. What is hold and wait (as a deadlock condition)?
213. What is no preemption (as a deadlock condition)?
214. What is circular wait (as a deadlock condition)?
215. What is deadlock prevention? How does it work?
216. How do you prevent deadlock by eliminating the mutual exclusion condition?
217. How do you prevent deadlock by eliminating the hold-and-wait condition?
218. How do you prevent deadlock by allowing preemption?
219. How do you prevent deadlock by eliminating circular wait? (resource ordering)
220. What is deadlock avoidance? How is it different from deadlock prevention?
221. What is a safe state? What is an unsafe state?
222. What is the Banker's Algorithm? Explain it step by step.
223. What are the data structures used in the Banker's Algorithm? (Available, Allocation, Max, Need)
224. What is the safety algorithm in the Banker's Algorithm?
225. What is the resource-request algorithm in the Banker's Algorithm?
226. Walk through a numerical example of the Banker's Algorithm.
227. What are the limitations of the Banker's Algorithm?
228. What is a Resource Allocation Graph (RAG)?
229. How do you detect a deadlock using a RAG?
230. What is a cycle in RAG? Is a cycle sufficient for deadlock? (Only for single-instance resources)
231. What is deadlock detection? How does the OS detect deadlock?
232. What is a wait-for graph? How is it used for deadlock detection?
233. What is deadlock recovery? What are the strategies?
234. What is process termination as a deadlock recovery strategy?
235. What is resource preemption as a deadlock recovery strategy?
236. What is the victim selection criteria in deadlock recovery?
237. What is rollback in deadlock recovery?
238. What is starvation in the context of deadlock recovery?
239. What is deadlock ignorance? What is the Ostrich algorithm? (Used by most OSes including Windows, Linux)
240. Why do most modern OSes use the Ostrich algorithm?

---

## 9. Memory Management

241. What is memory management? Why does an OS need it?
242. What is the difference between physical memory and logical memory?
243. What is a logical address? What is a physical address?
244. What is address binding? What are the three types? (Compile time, Load time, Execution time)
245. What is the Memory Management Unit (MMU)?
246. What is base and limit register protection?
247. What is swapping? How does it work?
248. What is contiguous memory allocation?
249. What is the first-fit allocation strategy?
250. What is the best-fit allocation strategy?
251. What is the worst-fit allocation strategy?
252. What is internal fragmentation? When does it occur?
253. What is external fragmentation? When does it occur?
254. What is compaction? What is its cost?
255. What is the difference between contiguous and non-contiguous memory allocation?
256. What is paging? How does it solve external fragmentation?
257. What is segmentation? How does it differ from paging?
258. What is segmentation with paging (combined)?
259. What is the memory hierarchy? (registers → cache → RAM → disk)
260. What is a cache? What is cache locality? (temporal and spatial)
261. What is a TLB (Translation Lookaside Buffer)? What problem does it solve?
262. What is a TLB hit vs TLB miss?
263. What is effective memory access time (EAT)? Calculate it given TLB hit ratio and access times.
264. What is memory protection in an OS?
265. What is dynamic loading?
266. What is dynamic linking? What is a shared library?
267. What is a static library vs a dynamic library (shared object)?
268. What is the difference between stack memory and heap memory in a process?
269. What is a memory leak at the OS level?
270. What is overcommit memory in Linux?
271. What is the OOM (Out-Of-Memory) killer in Linux?
272. What is NUMA (Non-Uniform Memory Access)? How does it affect OS design?
273. What is buddy system allocation?
274. What is slab allocation? Where is it used? (Linux kernel)

---

## 10. Virtual Memory, Paging & Segmentation

275. What is virtual memory? What problem does it solve?
276. How does virtual memory create the illusion of more memory than physically available?
277. What is demand paging? How does it work?
278. What is a page fault? What happens when a page fault occurs? (step-by-step)
279. What is the page fault rate? What factors affect it?
280. What is pure demand paging?
281. What is pre-paging?
282. What is the page table? What does each entry contain?
283. What is a multi-level page table? Why is it used?
284. What is an inverted page table?
285. What is a hierarchical page table?
286. What is hashed page table?
287. What is paging hardware? What is the role of the MMU in paging?
288. What is page size? What are the tradeoffs of large vs small page sizes?
289. What is a huge page (large page)? When is it beneficial?
290. What is segmentation? What is a segment table?
291. What is the difference between paging and segmentation? (programmer's view, fragmentation types)
292. What is thrashing? What causes it?
293. How does the OS detect thrashing?
294. What is the working set model? How does it prevent thrashing?
295. What is the page fault frequency (PFF) strategy?
296. What is locality of reference? What are the two types?
297. What is the resident set? What is the working set?
298. What is frame allocation? What are the allocation strategies? (equal, proportional)
299. What is global vs local page replacement?
300. What is copy-on-write in virtual memory?
301. What is memory-mapped file I/O?
302. What is the page table walk?
303. What is Belady's Anomaly? Which algorithm suffers from it? (FIFO)
304. What is address space layout randomization (ASLR)?
305. What is position-independent code (PIC)?
306. What is a swap space? How is it managed?
307. What is the difference between swapping and paging?

---

## 11. Page Replacement Algorithms

308. What is a page replacement algorithm? Why is it needed?
309. What is the FIFO (First-In, First-Out) page replacement algorithm? Explain with an example.
310. What is Belady's Anomaly? Show it with FIFO using 3 and 4 frames.
311. What is the Optimal (OPT / MIN) page replacement algorithm? Why is it not practically implementable?
312. What is the LRU (Least Recently Used) page replacement algorithm?
313. How is LRU implemented in practice? (counter implementation, stack implementation)
314. What is the LRU approximation algorithm? (reference bit, second-chance / clock algorithm)
315. What is the Clock (Second Chance) algorithm for page replacement?
316. What is the Enhanced Clock algorithm?
317. What is the MFU (Most Frequently Used) page replacement algorithm?
318. What is the LFU (Least Frequently Used) page replacement algorithm?
319. What is the NFU (Not Frequently Used) algorithm?
320. Compare FIFO, LRU, and OPT on the same reference string — which gives fewer page faults?
321. What is the aging algorithm for approximating LRU?
322. Does LRU suffer from Belady's Anomaly? (No — it is a stack algorithm)
323. What is a stack algorithm? Which page replacement algorithms are stack algorithms?
324. What are the factors that affect the number of page faults? (reference string, number of frames, page size, algorithm)
325. Solve a page replacement numerical: given reference string and frame count, compute page faults for FIFO and LRU.

---

## 12. File Systems

326. What is a file system? What are its responsibilities?
327. What is a file? What attributes does a file have? (name, type, location, size, protection, timestamps)
328. What are file types? How does the OS identify file types? (extension, magic number)
329. What are file access methods? (Sequential, Direct/Random, Indexed)
330. What is a directory? What is the directory structure?
331. What is a single-level directory? Two-level? Tree-structured? Acyclic-graph? General graph?
332. What is an inode? What information does it contain?
333. What is the inode number?
334. What is the difference between a hard link and a soft (symbolic) link?
335. Can a hard link span across file systems? Can a soft link? (Hard: No; Soft: Yes)
336. Can you create a hard link to a directory? (Generally no — to prevent cycles)
337. What happens to a soft link when the original file is deleted? (dangling link)
338. What happens to a hard link when the original file is deleted? (file persists until all links removed)
339. What is a file descriptor? What is the file descriptor table?
340. What is the global open file table vs per-process file descriptor table?
341. What is the difference between `open()`, `read()`, `write()`, `close()` system calls?
342. What is file sharing? What are consistency semantics?
343. What is file locking? What is advisory vs mandatory locking?
344. What are file allocation methods? (Contiguous, Linked, Indexed)
345. What is contiguous file allocation? What are its advantages and disadvantages?
346. What is linked file allocation? What are its advantages and disadvantages?
347. What is indexed file allocation? What are its advantages and disadvantages?
348. What is a FAT (File Allocation Table)?
349. What is the Unix inode structure? How does it handle large files? (direct, single indirect, double indirect, triple indirect blocks)
350. What is a file system journal (journaling)? What problem does it solve?
351. What are the types of journaling? (writeback, ordered, data journaling)
352. What is ext2? ext3? ext4? What are the key differences?
353. What is NTFS? What are its key features?
354. What is FAT32? What are its limitations?
355. What is a virtual file system (VFS)? What problem does it solve?
356. What is a mount point? How does mounting work?
357. What is a superblock in a Unix file system?
358. What is fsck (file system check)? When is it run?
359. What is a sparse file?
360. What is a buffer cache? What is a page cache? How do they differ?
361. What is write-back vs write-through caching?
362. What is disk quota?
363. What is a log-structured file system?
364. What is ZFS? What are its key features? (copy-on-write, checksums, snapshots)
365. What are file permissions in Unix? What is chmod?
366. What is the sticky bit? The setuid bit? The setgid bit?
367. What is umask?

---

## 13. Disk Management & I/O

368. What is disk scheduling? Why is it needed?
369. What are the components of disk access time? (seek time, rotational latency, transfer time)
370. What is seek time? What is rotational latency? What is transfer time?
371. What is the FCFS disk scheduling algorithm?
372. What is SSTF (Shortest Seek Time First) disk scheduling? What is its main problem? (starvation)
373. What is the SCAN (Elevator) disk scheduling algorithm?
374. What is C-SCAN (Circular SCAN) disk scheduling?
375. What is LOOK disk scheduling? How does it differ from SCAN?
376. What is C-LOOK disk scheduling?
377. Compare SCAN, C-SCAN, LOOK, and C-LOOK in terms of fairness and performance.
378. Solve a disk scheduling numerical: given request queue and initial head position, compute total head movement for FCFS, SSTF, SCAN.
379. What is RAID? What does it stand for? What problem does it solve?
380. What is RAID 0? What are its advantages and disadvantages? (no redundancy)
381. What is RAID 1? What are its advantages and disadvantages? (mirroring)
382. What is RAID 4? (block-level striping with dedicated parity disk)
383. What is RAID 5? How is parity distributed?
384. What is RAID 6? How does it differ from RAID 5? (two parity blocks — can tolerate two disk failures)
385. What is RAID 10 (1+0)? How does it differ from RAID 0+1?
386. What is disk formatting? What is low-level vs high-level formatting?
387. What is bad block management?
388. What is sector sparing (forwarding)?
389. What is wear leveling on SSDs?
390. What is the difference between HDD and SSD in terms of scheduling? (SSDs have no seek time — FCFS is often optimal)
391. What is I/O? What are the two approaches to I/O? (polling / programmed I/O, interrupt-driven I/O, DMA)
392. What is programmed I/O (polling)? What is its disadvantage?
393. What is interrupt-driven I/O?
394. What is Direct Memory Access (DMA)? How does it improve I/O performance?
395. What is an I/O port? What is memory-mapped I/O?
396. What is the difference between block devices and character devices?
397. What is buffering in I/O? What are the types? (single, double, circular)
398. What is spooling? Give an example. (printer spool)
399. What is the I/O subsystem of the OS?
400. What is a device controller?

---

## 14. Inter-Process Communication (IPC)

401. What is IPC? Why do processes need to communicate?
402. What are the IPC mechanisms available in an OS?
403. What is a pipe? What are the two types? (unnamed / anonymous pipe, named pipe / FIFO)
404. What are the limitations of a pipe? (unidirectional, related processes only for anonymous pipes)
405. What is a named pipe (FIFO)? How does it differ from an anonymous pipe?
406. What is a message queue? How does it work?
407. What is shared memory? How is it faster than message passing?
408. What are the synchronization challenges with shared memory?
409. What is a socket? What types of sockets exist? (TCP, UDP, Unix domain socket)
410. What is the difference between IPC via shared memory and IPC via message passing?
411. What is direct communication vs indirect communication in message passing?
412. What is a mailbox (port) in IPC?
413. What is synchronous vs asynchronous message passing?
414. What is blocking send / blocking receive vs non-blocking send / non-blocking receive?
415. What is a signal in Unix IPC?
416. What is `mmap()`? How is it used for IPC?
417. What is a Unix domain socket vs a network socket?
418. What is the difference between `pipe()` and `socketpair()`?
419. What is D-Bus? What is it used for?
420. What is RPC (Remote Procedure Call)?
421. What is the difference between IPC and RPC?
422. What is zero-copy I/O? What is `sendfile()`?

---

## 15. Virtualization & Containers

423. What is virtualization? Why is it used?
424. What is a virtual machine (VM)?
425. What is a hypervisor (VMM — Virtual Machine Monitor)?
426. What is a Type 1 (bare-metal) hypervisor? Give examples. (VMware ESXi, Xen, Microsoft Hyper-V)
427. What is a Type 2 (hosted) hypervisor? Give examples. (VirtualBox, VMware Workstation)
428. What is full virtualization?
429. What is para-virtualization? How is it different from full virtualization?
430. What is hardware-assisted virtualization? (Intel VT-x, AMD-V)
431. What is OS-level virtualization (containerization)?
432. What is a container? How is it different from a VM?
433. What is Docker? How does it use namespaces and cgroups?
434. What are Linux namespaces? What types exist? (PID, Network, Mount, UTS, IPC, User)
435. What are cgroups (control groups)? What do they control?
436. What is a container image vs a container instance?
437. What is the difference between Docker and a VM in terms of OS layers?
438. What is Kubernetes? How does it relate to containers?
439. What is live migration of VMs?
440. What is memory ballooning in virtualization?
441. What is the shadow page table in virtualization?
442. What is nested virtualization?
443. What is sandboxing?
444. What is a unikernel?

---

## 16. Linux / Unix Specific

445. What is the Unix philosophy?
446. What is the difference between Linux and Unix?
447. What is the Linux kernel? What are its main subsystems?
448. What is `fork()` in Linux? What does the return value mean for parent and child?
449. What is `exec()` family? How does it replace a process image?
450. What is the `wait()` system call? What does it return?
451. What is a zombie process? How do you remove zombie processes?
452. What is the `/proc` filesystem in Linux? What is it used for?
453. What is the `/sys` filesystem in Linux?
454. What is `strace`? What does it show?
455. What is `lsof`? What does it show?
456. What is `ps`? What is `top`? What is `htop`?
457. What is a file descriptor in Linux? What are 0, 1, and 2?
458. What is `stdin`, `stdout`, `stderr`?
459. What is I/O redirection in Linux? (`>`, `<`, `>>`, `2>`, `|`)
460. What is a pipe in the shell? How does it work at the OS level?
461. What is `dup()` and `dup2()`? When are they used?
462. What is `select()`, `poll()`, `epoll()`? When do you use each?
463. What is `mmap()`? Give a use case.
464. What is `brk()` and `sbrk()`? How do they relate to heap allocation?
465. What is `malloc()` and how does it use `brk()` or `mmap()` internally?
466. What is a core dump? When is it generated?
467. What is the OOM (Out of Memory) killer? How does Linux decide which process to kill?
468. What are Linux file permissions? Explain `rwxr-xr-x` in detail.
469. What is `chmod`? What is `chown`? What is `chgrp`?
470. What is `setuid`? `setgid`? `sticky bit`?
471. What is `sudo` vs `su`?
472. What is a Linux signal? Name five. How do you send one? (`kill` command)
473. What is `ulimit`? What limits can it set?
474. What is `/etc/fstab`? What is its purpose?
475. What is `cron`? What is a cron job?
476. What is `init` vs `systemd`?
477. What is a runlevel vs a systemd target?
478. What is `journald`?
479. What is `dmesg`?
480. What are Linux scheduling classes? (CFS — Completely Fair Scheduler)
481. What is the CFS (Completely Fair Scheduler) in Linux? How does it work?
482. What is `nice` and `renice` in Linux?
483. What is `ionice`?
484. What is `perf`? What is `ftrace`?
485. What is `valgrind`? What is `AddressSanitizer`?
486. What is `LD_PRELOAD`? Give a use case.
487. What is an ELF file? What are its sections?
488. What is the dynamic linker (`ld.so`)?
489. What is `readelf`? `objdump`? `nm`?
490. What is a shared library soname?

---

## 17. Security & Protection

491. What is OS security? What are the goals? (confidentiality, integrity, availability — CIA)
492. What is the principle of least privilege?
493. What is access control? What is an Access Control List (ACL)?
494. What is a capability in OS security?
495. What is the difference between authentication and authorization?
496. What is a protection domain?
497. What is the access matrix model?
498. What are the implementation approaches for an access matrix? (ACL, capability list)
499. What is mandatory access control (MAC) vs discretionary access control (DAC)?
500. What is role-based access control (RBAC)?
501. What is a buffer overflow attack? How does the OS/hardware mitigate it?
502. What is stack smashing?
503. What is NX bit (No-Execute bit)? How does it prevent attacks?
504. What is ASLR (Address Space Layout Randomization)?
505. What is DEP (Data Execution Prevention)?
506. What is a privilege escalation attack?
507. What is a system call interception / hooking?
508. What is a rootkit? How does it hide from the OS?
509. What is a fork bomb? How do you prevent it?
510. What is a race condition in security context? (TOCTOU — Time Of Check to Time Of Use)
511. What is TOCTOU? Give an example.
512. What is sandboxing in OS security?
513. What is seccomp (Secure Computing Mode) in Linux?
514. What is SELinux? What is AppArmor?
515. What is a firewall at the OS level?
516. What is encryption? How does the OS use it?
517. What is full-disk encryption? (LUKS in Linux, BitLocker in Windows)
518. What are memory protection keys (MPK)?

---

## 18. Distributed & Real-Time OS

519. What is a distributed OS? What are its key characteristics?
520. What is resource sharing in a distributed OS?
521. What is transparency in a distributed OS? (access, location, migration, replication, failure)
522. What is a distributed file system? Give examples. (NFS, AFS, HDFS)
523. What is NFS (Network File System)?
524. What is the consistency model in distributed systems?
525. What is a distributed lock?
526. What is clock synchronization in distributed systems? What is NTP?
527. What is a logical clock? What is Lamport's clock?
528. What is a vector clock?
529. What is the CAP theorem?
530. What is a distributed deadlock? How is it detected?
531. What is fault tolerance in a distributed OS?
532. What is replication in distributed OS? What types exist?
533. What is load balancing in an OS context?
534. What is process migration in distributed systems?
535. What is a real-time OS?
536. What is the difference between hard real-time and soft real-time systems?
537. What is a deadline in real-time scheduling?
538. What is Rate Monotonic Scheduling (RMS)?
539. What is Earliest Deadline First (EDF)?
540. What is the utilization bound for RMS?
541. What is jitter in real-time systems?
542. What is the difference between RTOS and GPOS (General Purpose OS)?
543. Give examples of RTOS. (FreeRTOS, VxWorks, QNX, Zephyr)
544. What is priority ceiling protocol?
545. What is priority inheritance protocol?

---

## 19. Advanced & Tricky Questions

546. If a process is in the waiting state, can it move directly to the running state? (No — must go to ready first)
547. Can two processes share the same PID? (No — PIDs are unique at any instant)
548. What happens to child processes when a parent dies? (They become orphans, adopted by init)
549. What is the difference between `kill -9` and `kill -15`?
550. If a process calls `fork()` twice, how many total processes exist? (3 — original + 2 children)
551. If `fork()` is called in a loop 3 times, how many total processes are created? (2^3 = 8 total, 7 new)
552. What is the output of the following? (Fork + printf — depends on buffering)
553. Can a thread exist without a process? (No)
554. Can a process exist without threads? (Yes — single-threaded process)
555. What is the difference between `pthread_exit()` and `exit()`? (exit terminates entire process; pthread_exit only terminates the calling thread)
556. What happens when you `delete` a mutex that is still locked?
557. Why is it wrong to use `if` instead of `while` when waiting on a condition variable?
558. Can a semaphore value go negative? (In some implementations, yes — represents number of waiting threads)
559. Is the following code thread-safe? `i++` where `i` is a global int. (No — read-modify-write is not atomic)
560. What is the difference between `volatile` and a mutex for thread synchronization? (volatile prevents compiler optimization but does not ensure atomicity)
561. Two processes each hold a resource the other needs. Is this necessarily a deadlock? (Yes — satisfies all 4 Coffman conditions)
562. Can deadlock occur with a single process? (No — circular wait requires ≥ 2 processes)
563. Can deadlock occur with a single resource instance? (Yes — circular wait still possible)
564. Is a cycle in the RAG sufficient for deadlock with multiple instances? (No — only necessary, not sufficient)
565. What is the minimum number of frames required to guarantee no deadlock in paging? (Depends on architecture — enough to hold all pages of any single instruction)
566. What is Belady's Anomaly with 3 frames vs 4 frames for FIFO — show numerically.
567. LRU never suffers from Belady's Anomaly — why? (It is a stack algorithm)
568. Which page replacement algorithm is optimal but not implementable in practice? (OPT — requires future knowledge)
569. What is the effective access time (EAT) with a TLB hit ratio of 90%, TLB access = 20ns, memory access = 100ns?
    (EAT = 0.9 × (20+100) + 0.1 × (20+100+100) = 108 + 22 = 122ns)
570. A system has 4 processes and 3 resource types. Is deadlock always possible? (Depends on instances and allocation)
571. What happens if the page size is doubled? (Page table becomes smaller, internal fragmentation increases)
572. What is the maximum file size in FAT32? (4 GB − 1 byte)
573. What is the maximum file size supported by ext4? (16 TB with 4KB blocks)
574. What is the maximum number of files in ext4? (~4 billion inodes by default)
575. What is the difference between a hard link count of 2 and 1 for a directory? (A new directory has 2 hard links: one for its name in parent, one for `.` inside itself)
576. What is the advantage of indexed allocation over linked allocation for large files?
577. Why is SCAN (elevator) fairer than SSTF for disk scheduling?
578. What does it mean for a process to be CPU-bound vs I/O-bound, and how should the scheduler treat each differently?
579. Can a mutex be used from an interrupt handler? (No — may sleep; use spinlock in kernel context)
580. What is the difference between a semaphore initialized to 1 and a mutex? (Mutex has ownership — only locker can unlock; semaphore has no ownership)
581. What is the purpose of the `mmap()` MAP_PRIVATE flag vs MAP_SHARED?
582. What does `fork()` return in the child process? (0) In the parent? (child's PID) On failure? (-1)
583. What is the `exec()` return value on success? (It never returns — the process image is replaced)
584. What is the difference between `sleep()` and `wait()` for a process?
585. Why must the order of `P()` operations on semaphores be carefully chosen in the Bounded Buffer problem?
586. What is a memory-mapped file? How does it differ from read/write I/O?
587. What is `epoll` and why is it more scalable than `select`?
588. What is the C10K problem? How does the OS help solve it?
589. What is I/O multiplexing?
590. What is copy-on-write and how does `fork()` use it for efficiency?

---

## 20. Rapid Fire — One-Liners

*Each answer in ≤ 20 words. Practiced verbally until reflexive.*

591. What is a process? (A program in execution with its own address space and resources)
592. What is a thread? (Lightweight unit of execution within a process, sharing its address space)
593. What is a deadlock? (Circular wait where each process holds a resource needed by another)
594. What is virtual memory? (Illusion of larger memory than physical RAM using disk as extension)
595. What is thrashing? (Excessive paging where the system spends more time swapping than executing)
596. What is a semaphore? (Integer variable supporting atomic wait/signal operations for synchronization)
597. What is a mutex? (Binary lock ensuring mutual exclusion; only the owner can unlock it)
598. What is a spinlock? (Busy-wait lock — thread keeps checking until lock is free)
599. What is a context switch? (Saving and restoring process/thread state when the CPU switches between them)
600. What is the critical section? (Code segment accessing shared resource; only one process at a time)
601. What is paging? (Non-contiguous memory allocation dividing process into fixed-size pages)
602. What is segmentation? (Memory allocation dividing process into variable-size logical segments)
603. What is a TLB? (Fast hardware cache mapping virtual-to-physical page mappings)
604. What is demand paging? (Loading pages into memory only when accessed, not at process load time)
605. What is a page fault? (Access to a page not currently in physical memory — triggers OS handler)
606. What is Belady's Anomaly? (Adding more frames increases page faults in FIFO — counter-intuitive)
607. What is LRU? (Replace the page that was least recently used)
608. What is the Banker's Algorithm? (Deadlock avoidance algorithm that checks if resource allocation keeps system in safe state)
609. What is a safe state? (System can allocate resources to all processes in some order without deadlock)
610. What is an inode? (Data structure storing file metadata and pointers to data blocks)
611. What is a hard link? (Directory entry pointing to same inode as original file)
612. What is a soft link? (File containing path to another file — breaks if target deleted)
613. What is a zombie process? (Terminated process whose exit status hasn't been collected by parent)
614. What is an orphan process? (Process whose parent died — adopted by init)
615. What is a daemon? (Background process with no controlling terminal, e.g., sshd, cron)
616. What is a fork bomb? (Process that infinitely forks — exhausts system resources)
617. What is copy-on-write? (Shared pages between parent/child until one modifies — then copy made)
618. What is a system call? (Interface for user programs to request kernel services)
619. What is the difference between user mode and kernel mode? (Privilege level — kernel has full hardware access)
620. What is a monolithic kernel? (All OS services in kernel space — fast but less reliable)
621. What is a microkernel? (Minimal kernel; most services in user space — reliable but IPC overhead)
622. What is RAID 5? (Striping with distributed parity — tolerates one disk failure)
623. What is SSTF disk scheduling? (Serve the request with shortest seek time from current head position)
624. What is a pipe? (Unidirectional IPC channel between related processes)
625. What is shared memory IPC? (Fastest IPC — processes map same physical memory into their address spaces)
626. What is the convoy effect? (Short jobs stuck behind a long job in FCFS — poor throughput)
627. What is aging? (Gradually increasing priority of waiting processes to prevent starvation)
628. What is the working set? (Set of pages actively used by a process in a recent time window)
629. What is internal fragmentation? (Wasted memory inside allocated block due to fixed-size allocation)
630. What is external fragmentation? (Free memory exists but not contiguous enough to satisfy request)

---

## Bonus: Numerical Practice Checklist

**CPU Scheduling Numericals**
- [ ] Compute average waiting time and turnaround time for FCFS
- [ ] Compute average waiting time and turnaround time for SJF (non-preemptive)
- [ ] Compute average waiting time and turnaround time for SRTF (preemptive SJF)
- [ ] Compute average waiting time and turnaround time for Round Robin with given quantum
- [ ] Compute average waiting time and turnaround time for Priority Scheduling

**Memory / Paging Numericals**
- [ ] Compute effective memory access time (EAT) given TLB hit ratio
- [ ] Convert logical address to physical address given page size and page table
- [ ] Count page faults for FIFO, LRU, OPT given reference string and frame count
- [ ] Demonstrate Belady's Anomaly for FIFO with 3 vs 4 frames

**Disk Scheduling Numericals**
- [ ] Compute total head movement for FCFS, SSTF, SCAN, C-SCAN, LOOK given request queue

**Deadlock Numericals**
- [ ] Apply Banker's Algorithm: determine if system is in safe state
- [ ] Find safe sequence using Banker's Algorithm
- [ ] Determine if a new resource request can be granted

---

## Study Priority Guide

| Tier  | Topics | Interview Frequency |
|------|--------|-------------------|
| 🔴 Must Know | Process vs thread, PCB, process states, context switch, deadlock (4 conditions + prevention/avoidance/detection), mutex vs semaphore, paging vs segmentation, virtual memory, page fault, FCFS/SJF/RR scheduling | Asked in 95%+ interviews |
| 🟠 High Priority | Banker's Algorithm (numerical), page replacement (FIFO/LRU/OPT + Belady's), IPC mechanisms, fork/exec/wait, critical section requirements, producer-consumer solution, TLB + EAT calculation, disk scheduling numericals | Asked in 70%+ interviews |
| 🟡 Medium | RAID levels, file system internals (inode, hard/soft links), multilevel/MLFQ scheduling, thrashing + working set, copy-on-write, monitor + condition variables, Linux-specific (epoll, mmap, proc filesystem) | Asked in product companies |
| 🟢 Differentiator | Lock-free programming, MESI protocol, false sharing, NUMA, CFS scheduler internals, seccomp/SELinux, containers vs VMs internals, unikernel, Lamport clocks, vector clocks | Makes you stand out |

---

*Sources: GeeksforGeeks OS Interview Questions, InterviewBit OS Questions, LeetCode Discuss OS Thread, Adaface OS Interview, Guru99 OS Questions, Flexiple OS Questions, Hyring OS Interview Guide, TechInterview.org Concurrency Patterns, Sanfoundry OS MCQ, University of Illinois CS Notes, Scribd OS Interview PDFs. Compiled August 2026.*
