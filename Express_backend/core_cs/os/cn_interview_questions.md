# Computer Networks Interview Questions — Complete Reference
> Curated from GeeksforGeeks, InterviewBit, Adaface, TakeUForward, Guru99, WecreateProblems, Flexiple, Taggd, Cloudflare Learning, Sanfoundry, and placement experience reports. Covers every topic asked in Indian product company, mass recruiter, FAANG-style, and backend SDE interviews.

---

## Table of Contents
1. [Fundamentals & Network Basics](#1-fundamentals--network-basics)
2. [OSI Model — All 7 Layers](#2-osi-model--all-7-layers)
3. [TCP/IP Model](#3-tcpip-model)
4. [Physical Layer & Transmission Media](#4-physical-layer--transmission-media)
5. [Data Link Layer](#5-data-link-layer)
6. [Network Layer & IP Addressing](#6-network-layer--ip-addressing)
7. [Subnetting, CIDR & NAT](#7-subnetting-cidr--nat)
8. [Routing & Routing Protocols](#8-routing--routing-protocols)
9. [Transport Layer — TCP & UDP](#9-transport-layer--tcp--udp)
10. [TCP Congestion Control & Flow Control](#10-tcp-congestion-control--flow-control)
11. [Application Layer Protocols](#11-application-layer-protocols)
12. [DNS — Domain Name System](#12-dns--domain-name-system)
13. [HTTP, HTTPS & Web Protocols](#13-http-https--web-protocols)
14. [Network Devices & Hardware](#14-network-devices--hardware)
15. [Network Security](#15-network-security)
16. [SSL/TLS & Cryptography in Networks](#16-ssltls--cryptography-in-networks)
17. [Socket Programming & APIs](#17-socket-programming--apis)
18. [Wireless Networking](#18-wireless-networking)
19. [Advanced & Modern Networking](#19-advanced--modern-networking)
20. [Tricky & Scenario-Based Questions](#20-tricky--scenario-based-questions)
21. [Rapid Fire — One-Liners](#21-rapid-fire--one-liners)

---

## 1. Fundamentals & Network Basics

1. What is a computer network? What are its main goals?
2. What are the advantages of a computer network?
3. What are the disadvantages of a computer network?
4. What is the difference between a network and the internet?
5. What is the internet? What is an intranet? What is an extranet?
6. What is a protocol in networking?
7. What is bandwidth? What is throughput? What is the difference?
8. What is latency? What are the four components of network delay? (propagation, transmission, processing, queuing)
9. What is propagation delay? What is transmission delay? How do you calculate each?
10. What is queuing delay? What causes it?
11. What is jitter in networking?
12. What is packet loss? What causes it?
13. What is the difference between bandwidth and speed?
14. What are the types of computer networks? (PAN, LAN, MAN, WAN, GAN)
15. What is a LAN (Local Area Network)?
16. What is a WAN (Wide Area Network)?
17. What is a MAN (Metropolitan Area Network)?
18. What is a PAN (Personal Area Network)?
19. What is a GAN (Global Area Network)?
20. What is network topology? What are the types? (Bus, Star, Ring, Mesh, Tree, Hybrid)
21. What is bus topology? What are its advantages and disadvantages?
22. What is star topology? What are its advantages and disadvantages?
23. What is ring topology?
24. What is mesh topology? What is full mesh vs partial mesh?
25. What is tree topology?
26. What is hybrid topology?
27. What is a node in a network?
28. What is a link in a network?
29. What is a unicast? Multicast? Broadcast? Anycast?
30. What is the difference between unicast, multicast, and broadcast?
31. What is full-duplex? Half-duplex? Simplex?
32. What is circuit switching? What is packet switching? What are their differences?
33. What is message switching?
34. What is a virtual circuit?
35. What is a datagram network?
36. What is the OSI model? Why was it developed?
37. What is the TCP/IP model? How does it differ from OSI?
38. What is encapsulation in networking?
39. What is decapsulation in networking?
40. What is a PDU (Protocol Data Unit)? What is it called at each layer? (bit, frame, packet, segment, data)

---

## 2. OSI Model — All 7 Layers

41. What are the 7 layers of the OSI model? Name them in order.
42. What is the mnemonic to remember OSI layers? ("Please Do Not Throw Sausage Pizza Away" — Physical, Data Link, Network, Transport, Session, Presentation, Application)
43. What is the Physical Layer (Layer 1)? What are its functions?
44. What are the responsibilities of the Physical Layer?
45. What is the Data Link Layer (Layer 2)? What are its functions?
46. What are the two sublayers of the Data Link Layer? (LLC — Logical Link Control; MAC — Media Access Control)
47. What is the Network Layer (Layer 3)? What are its functions?
48. What is the Transport Layer (Layer 4)? What are its functions?
49. What is the Session Layer (Layer 5)? What are its functions?
50. What is the Presentation Layer (Layer 6)? What are its functions?
51. What is the Application Layer (Layer 7)? What are its functions?
52. What are the PDUs at each OSI layer? (Layer 1: Bits, Layer 2: Frames, Layer 3: Packets, Layer 4: Segments, Layer 5-7: Data)
53. Which OSI layer does a router operate at? (Layer 3)
54. Which OSI layer does a switch operate at? (Layer 2, or Layer 3 for smart switches)
55. Which OSI layer does a hub operate at? (Layer 1)
56. Which OSI layer does a bridge operate at? (Layer 2)
57. At which layer does IP operate? (Layer 3)
58. At which layer does TCP and UDP operate? (Layer 4)
59. At which layer does HTTP operate? (Layer 7)
60. At which layer does SSL/TLS operate? (Between Layer 4 and Layer 7 — sometimes called Layer 4.5 or Session/Presentation)
61. What protocols operate at the Data Link Layer? (Ethernet, Wi-Fi/802.11, PPP, HDLC, ARP)
62. What protocols operate at the Network Layer? (IP, ICMP, IGMP, ARP, OSPF, BGP)
63. What protocols operate at the Transport Layer? (TCP, UDP, SCTP)
64. What protocols operate at the Application Layer? (HTTP, HTTPS, FTP, SMTP, DNS, DHCP, SSH, Telnet, SNMP)
65. What is the difference between OSI model and TCP/IP model?
66. Why does the TCP/IP model have 4 layers instead of 7?
67. What is layer-by-layer processing? How does encapsulation work as data travels down the stack?
68. What layer is responsible for error detection and correction? (Data Link — detection; Transport — correction)
69. What is the role of the Session layer in OSI? Why does TCP/IP not have it explicitly?
70. What is the Presentation layer responsible for? (Encryption, compression, translation/encoding)

---

## 3. TCP/IP Model

71. What are the 4 layers of the TCP/IP model? (Network Access/Link, Internet, Transport, Application)
72. What does the Link layer of TCP/IP correspond to in OSI? (Physical + Data Link)
73. What does the Internet layer of TCP/IP correspond to in OSI? (Network)
74. What does the Transport layer of TCP/IP correspond to? (Transport)
75. What does the Application layer of TCP/IP correspond to in OSI? (Session + Presentation + Application)
76. What is TCP? What is IP? Why is the model named after both?
77. How was the TCP/IP model developed? (US DoD — ARPANET)
78. What is an autonomous system (AS)?
79. What is the difference between inter-AS routing and intra-AS routing?
80. What is the Internet Protocol (IP)? What does it guarantee? (best-effort — no reliability)
81. What is the difference between IPv4 and IPv6 in TCP/IP model context?

---

## 4. Physical Layer & Transmission Media

82. What is the Physical layer responsible for?
83. What is transmission media? What are the types? (guided/wired and unguided/wireless)
84. What is guided transmission media? What are the types? (twisted pair, coaxial cable, fiber optic)
85. What is twisted pair cable? What are the two types? (STP — shielded, UTP — unshielded)
86. What is a coaxial cable? Where is it used?
87. What is fiber optic cable? What are its advantages? (speed, distance, immunity to interference)
88. What is the difference between single-mode and multi-mode fiber?
89. What is unguided transmission media? What are the types? (radio waves, microwaves, infrared)
90. What is bandwidth of a channel? What is Nyquist rate? What is Shannon's capacity?
91. What is Shannon's theorem? What is channel capacity?
92. What is signal attenuation?
93. What is noise in a channel? What is SNR (Signal-to-Noise Ratio)?
94. What is the difference between analog and digital signals?
95. What is modulation? What are the types? (AM, FM, PM, ASK, FSK, PSK, QAM)
96. What is encoding? What is line coding?
97. What is NRZ (Non-Return-to-Zero) encoding?
98. What is Manchester encoding?
99. What is multiplexing? What are the types? (TDM, FDM, WDM, CDM)
100. What is TDM (Time Division Multiplexing)?
101. What is FDM (Frequency Division Multiplexing)?
102. What is WDM (Wavelength Division Multiplexing)?
103. What is CDMA (Code Division Multiple Access)?
104. What is the difference between baseband and broadband transmission?
105. What are repeaters? What layer do they operate at?
106. What is the difference between a hub and a repeater?

---

## 5. Data Link Layer

107. What are the functions of the Data Link Layer?
108. What is framing in the Data Link Layer?
109. What is error detection? What are the common methods? (Parity, CRC, Checksum)
110. What is a parity bit? What is even parity vs odd parity?
111. What is CRC (Cyclic Redundancy Check)? How does it work?
112. What is a checksum? How is it computed?
113. What is Hamming code? What is error correction?
114. What is the difference between error detection and error correction?
115. What is flow control in the Data Link Layer?
116. What is the Stop-and-Wait protocol?
117. What is the sliding window protocol?
118. What is the Go-Back-N protocol?
119. What is the Selective Repeat protocol?
120. What is the difference between Go-Back-N and Selective Repeat?
121. What is a MAC address? How long is it? (48 bits — 6 bytes)
122. What is the format of a MAC address?
123. What is the difference between MAC address and IP address?
124. What is ARP (Address Resolution Protocol)? How does it work?
125. What is RARP (Reverse ARP)?
126. What is an ARP table (ARP cache)?
127. What is ARP spoofing (ARP poisoning)?
128. What is Gratuitous ARP?
129. What is the Ethernet frame format? What are the fields?
130. What is the minimum and maximum size of an Ethernet frame? (64 bytes min, 1518 bytes max)
131. What is an MTU (Maximum Transmission Unit)? What is the default Ethernet MTU?
132. What is fragmentation? Why is it done at the IP layer?
133. What is CSMA/CD (Carrier Sense Multiple Access with Collision Detection)?
134. What is a collision? What is a collision domain?
135. What is CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)?
136. What is the difference between CSMA/CD and CSMA/CA? (Ethernet vs Wi-Fi)
137. What is ALOHA? What is pure ALOHA vs slotted ALOHA?
138. What is Token Ring? How does token passing work?
139. What is a broadcast domain?
140. What is the difference between a collision domain and a broadcast domain?
141. What is VLAN (Virtual LAN)? How does it work?
142. What is 802.1Q? (VLAN tagging standard)
143. What is a trunk port? What is an access port in VLAN context?
144. What is inter-VLAN routing?
145. What is STP (Spanning Tree Protocol)? What problem does it solve?
146. What is a bridge loop? Why is it dangerous?
147. What is RSTP (Rapid Spanning Tree Protocol)?
148. What is PPP (Point-to-Point Protocol)?
149. What is HDLC (High-Level Data Link Control)?

---

## 6. Network Layer & IP Addressing

150. What are the functions of the Network Layer?
151. What is IP (Internet Protocol)? What does it provide?
152. What is an IP address? What is IPv4? What is IPv6?
153. What is the structure of an IPv4 address? (32-bit, four octets)
154. What are the classes of IPv4 addresses? (A, B, C, D, E — with ranges)
155. What is a Class A IP address? What is the default subnet mask?
156. What is a Class B IP address? What is the default subnet mask?
157. What is a Class C IP address? What is the default subnet mask?
158. What is a Class D IP address? What is it used for? (Multicast)
159. What is a Class E IP address? What is it used for? (Research/experimental)
160. What are private IP address ranges? (10.x.x.x, 172.16.x.x–172.31.x.x, 192.168.x.x)
161. What is the loopback address? (127.0.0.1 — always refers to the local machine)
162. What is the APIPA range? (169.254.x.x — assigned when DHCP fails)
163. What is a broadcast address? What is the limited broadcast address? (255.255.255.255)
164. What is a directed broadcast address?
165. What is a multicast address?
166. What is a subnet mask? What is its purpose?
167. What is the default gateway? What is its role?
168. What is an IP packet? What are the fields in the IPv4 header?
169. What is the TTL (Time to Live) field in an IP header?
170. What is the Protocol field in the IP header? (identifies Layer 4 protocol — TCP=6, UDP=17, ICMP=1)
171. What is the Flags field in the IP header? What is the DF (Don't Fragment) bit?
172. What is IP fragmentation? What is the Fragment Offset field?
173. What is the checksum in the IP header?
174. What is ICMP (Internet Control Message Protocol)?
175. What are ICMP message types? (Echo Request/Reply, Destination Unreachable, Time Exceeded, Redirect)
176. What is a ping? How does it use ICMP?
177. What is traceroute? How does it use TTL and ICMP?
178. What is IGMP (Internet Group Management Protocol)?
179. What is IPv6? What are its key features?
180. What is the structure of an IPv6 address? (128-bit, eight groups of 4 hex digits)
181. What is the difference between IPv4 and IPv6? (address space, header, NAT, security, multicast)
182. What are the types of IPv6 addresses? (Unicast, Multicast, Anycast)
183. What is link-local address in IPv6? (fe80::/10)
184. What is the loopback address in IPv6? (::1)
185. What is SLAAC (Stateless Address Autoconfiguration) in IPv6?
186. What is NDP (Neighbor Discovery Protocol) in IPv6? (replaces ARP)
187. What is a dual-stack network?
188. What is tunneling in IPv6 transition? (6to4, Teredo)
189. What is NAT64?
190. What is the difference between a public IP address and a private IP address?

---

## 7. Subnetting, CIDR & NAT

191. What is subnetting? Why is it used?
192. What is CIDR (Classless Inter-Domain Routing)?
193. What is CIDR notation? Give an example. (192.168.1.0/24)
194. How do you calculate the number of hosts in a subnet? (2^(32-prefix) - 2)
195. How do you calculate the number of subnets given a mask?
196. What is the network address and broadcast address in a subnet?
197. Given 192.168.10.0/26, what is the range of valid host IPs?
198. What is VLSM (Variable Length Subnet Masking)?
199. What is supernetting (route aggregation)?
200. Subnetting numerical: Divide 192.168.1.0/24 into 4 equal subnets.
201. Subnetting numerical: Given 172.16.0.0/16, create subnets with at least 500 hosts each.
202. What is NAT (Network Address Translation)?
203. What is Static NAT? Dynamic NAT? PAT (Port Address Translation)?
204. What is PAT also known as? (NAT overload)
205. How does PAT allow multiple devices to share one public IP? (uses port number as differentiator)
206. What is the NAT table?
207. What are the limitations of NAT? (breaks end-to-end connectivity, complicates P2P, hides hosts)
208. What is port forwarding?
209. What is a DMZ (Demilitarized Zone) in networking?
210. What is DNAT (Destination NAT) vs SNAT (Source NAT)?

---

## 8. Routing & Routing Protocols

211. What is routing? What is a routing table?
212. What is static routing vs dynamic routing?
213. What are the advantages and disadvantages of static routing?
214. What is a routing algorithm? What are the two main types? (Distance Vector, Link State)
215. What is a Distance Vector routing algorithm?
216. What is RIP (Routing Information Protocol)?
217. What is the metric used by RIP? (hop count, max 15)
218. What is the count-to-infinity problem in Distance Vector routing?
219. What is split horizon?
220. What is route poisoning?
221. What is a Link State routing algorithm?
222. What is OSPF (Open Shortest Path First)?
223. What algorithm does OSPF use? (Dijkstra's shortest path)
224. What is an OSPF area? What is Area 0 (backbone area)?
225. What is LSA (Link State Advertisement)?
226. What is LSDB (Link State Database)?
227. What is the difference between RIP and OSPF?
228. What is EIGRP (Enhanced Interior Gateway Routing Protocol)?
229. What is BGP (Border Gateway Protocol)?
230. What is the difference between OSPF and BGP?
231. What is eBGP vs iBGP?
232. What is an Autonomous System (AS) number?
233. What is an IGP (Interior Gateway Protocol) vs EGP (Exterior Gateway Protocol)?
234. What is the administrative distance of a routing protocol? Compare RIP, OSPF, BGP.
235. What is a default route? What is 0.0.0.0/0?
236. What is longest prefix matching in routing?
237. What is a routing loop? How do routing protocols prevent it?
238. What is path vector routing?
239. What is a hot potato routing?
240. What is policy-based routing?
241. What is multipath routing?
242. What is ECMP (Equal-Cost Multi-Path) routing?
243. What is load balancing in the context of routing?
244. What is a routing metric? Give examples used by different protocols.
245. What is the difference between routable and non-routable protocols?
246. What is MPLS (Multiprotocol Label Switching)?
247. What is a label in MPLS?
248. What is traffic engineering in MPLS?
249. What is SD-WAN?
250. What is an anycast address? How is it used in routing?

---

## 9. Transport Layer — TCP & UDP

251. What is the Transport Layer? What are its responsibilities?
252. What is TCP (Transmission Control Protocol)?
253. What is UDP (User Datagram Protocol)?
254. What is the difference between TCP and UDP? (5+ points)
255. What does connection-oriented mean? (TCP establishes a connection before data transfer)
256. What does connectionless mean? (UDP sends data without establishing a connection)
257. What is reliability in TCP? How is it achieved?
258. What is the TCP header? What are its fields?
259. What are TCP flags? (SYN, ACK, FIN, RST, PSH, URG)
260. What is the purpose of each TCP flag?
261. What is the sequence number in TCP?
262. What is the acknowledgment number in TCP?
263. What is the window size field in TCP?
264. What is the TCP three-way handshake? Describe it step by step. (SYN → SYN-ACK → ACK)
265. What is the purpose of the three-way handshake?
266. What is a SYN flood attack? How is it mitigated?
267. What is a SYN cookie?
268. What is TCP connection termination? Describe the four-way handshake. (FIN → ACK → FIN → ACK)
269. What is half-close in TCP?
270. What is TIME_WAIT state in TCP? Why does it exist?
271. What is the MSL (Maximum Segment Lifetime)?
272. What are TCP states? List all of them. (CLOSED, LISTEN, SYN_SENT, SYN_RCVD, ESTABLISHED, FIN_WAIT_1, FIN_WAIT_2, CLOSE_WAIT, CLOSING, LAST_ACK, TIME_WAIT)
273. What is the UDP header? What are its fields? (Source Port, Destination Port, Length, Checksum — only 8 bytes)
274. What applications use UDP? (DNS, DHCP, TFTP, SNMP, VoIP, video streaming, online gaming)
275. What applications use TCP? (HTTP, HTTPS, FTP, SMTP, SSH, Telnet)
276. Can UDP be made reliable? How? (application-level acknowledgments — e.g., QUIC)
277. What is a port number? What is a socket?
278. What is the difference between a socket and a port?
279. What is an ephemeral port? (temporary client-side port — range 49152–65535)
280. What is a well-known port? Give 10 examples.
281. What is a registered port?
282. What is multiplexing and demultiplexing at the Transport Layer?
283. What is TCP segmentation? What is an MSS (Maximum Segment Size)?
284. What is the relationship between MTU and MSS?
285. What is a RST flag in TCP used for?
286. What is out-of-order delivery in TCP? How does TCP handle it?
287. What is TCP retransmission? What triggers it?
288. What is the retransmission timeout (RTO)?
289. What is the Nagle algorithm in TCP?
290. What is TCP keepalive?
291. What is SCTP (Stream Control Transmission Protocol)?
292. What is the difference between TCP and SCTP?

---

## 10. TCP Congestion Control & Flow Control

293. What is flow control in TCP? How is it implemented?
294. What is the receive window (rwnd)?
295. What is the zero window condition in TCP?
296. What is the Window Scale option in TCP?
297. What is congestion control in TCP? Why is it needed?
298. What is congestion collapse?
299. What are the phases of TCP congestion control? (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery)
300. What is Slow Start in TCP? How does it work?
301. What is the congestion window (cwnd)?
302. What is ssthresh (slow start threshold)?
303. What is Congestion Avoidance phase? How does cwnd grow?
304. What is a congestion event? How does TCP detect it? (timeout or triple duplicate ACK)
305. What is Fast Retransmit?
306. What is Fast Recovery?
307. What is the difference between TCP Tahoe and TCP Reno?
308. What is TCP CUBIC? (default in Linux — optimized for high bandwidth-delay product)
309. What is BBR (Bottleneck Bandwidth and Round-trip propagation time) congestion control?
310. What is the bandwidth-delay product?
311. What is the difference between flow control and congestion control?
312. What is ECN (Explicit Congestion Notification)?
313. What is TCP selective acknowledgment (SACK)?
314. What is TCP timestamp option? What is it used for?
315. What is RTT (Round-Trip Time)? How is it estimated in TCP?
316. What is Karn's algorithm?
317. What is the difference between stop-and-wait ARQ and sliding window ARQ?
318. What is the efficiency formula for stop-and-wait? (1 / (1 + 2a) where a = propagation delay / transmission time)
319. What is the efficiency formula for Go-Back-N and Selective Repeat?

---

## 11. Application Layer Protocols

320. What is the Application Layer? What types of protocols operate here?
321. What is FTP (File Transfer Protocol)? How does it work?
322. What is the difference between active mode and passive mode in FTP?
323. What ports does FTP use? (20 for data, 21 for control)
324. What is SFTP (SSH File Transfer Protocol)? How is it different from FTP?
325. What is TFTP (Trivial File Transfer Protocol)? When is it used?
326. What is SMTP (Simple Mail Transfer Protocol)?
327. What port does SMTP use? (25, or 587 for submission, 465 for SMTPS)
328. What is POP3 (Post Office Protocol version 3)? What port? (110)
329. What is IMAP (Internet Message Access Protocol)? What port? (143)
330. What is the difference between POP3 and IMAP?
331. What is Telnet? What port? (23) Why is it insecure?
332. What is SSH (Secure Shell)? What port? (22) How does it differ from Telnet?
333. What is SNMP (Simple Network Management Protocol)?
334. What is NTP (Network Time Protocol)? What port? (123)
335. What is LDAP (Lightweight Directory Access Protocol)?
336. What is RTP (Real-time Transport Protocol)?
337. What is RTSP (Real-Time Streaming Protocol)?
338. What is WebSocket? How is it different from HTTP?
339. What is gRPC? How does it compare to REST?
340. What is MQTT? When is it used? (IoT, pub-sub messaging)
341. What is AMQP (Advanced Message Queuing Protocol)?
342. What is the difference between SMTP and HTTP at the application layer?
343. What is a stateful vs stateless protocol? Give examples.
344. What is HTTP/1.0 vs HTTP/1.1 vs HTTP/2 vs HTTP/3?
345. What is QUIC? What transport protocol does HTTP/3 use? (UDP-based)

---

## 12. DNS — Domain Name System

346. What is DNS? What problem does it solve?
347. What is the DNS hierarchy? (Root → TLD → Authoritative → Recursive Resolver)
348. What is a root name server? How many are there? (13 logical root servers — labelled A to M)
349. What is a TLD (Top-Level Domain)? Give examples. (.com, .org, .in, .net)
350. What is an authoritative DNS server?
351. What is a recursive DNS resolver?
352. What is a DNS stub resolver?
353. What is the DNS resolution process step by step?
354. What is a DNS cache? What is DNS TTL?
355. What is DNS caching at multiple levels? (browser, OS, resolver)
356. What are the types of DNS records? (A, AAAA, CNAME, MX, NS, PTR, TXT, SOA, SRV)
357. What is an A record? (maps domain to IPv4 address)
358. What is an AAAA record? (maps domain to IPv6 address)
359. What is a CNAME record? (alias — maps one domain to another)
360. What is an MX record? (mail exchange — identifies mail servers)
361. What is a TXT record? (arbitrary text — used for SPF, DKIM, domain verification)
362. What is an NS record? (name server — identifies authoritative name servers)
363. What is a PTR record? (reverse DNS — maps IP to domain)
364. What is a SOA record? (Start of Authority)
365. What is an SRV record?
366. What port does DNS use? (53 — UDP for queries, TCP for zone transfers and large responses)
367. Why does DNS use UDP? When does it use TCP?
368. What is a DNS zone? What is a zone file?
369. What is zone transfer? What protocol does it use?
370. What is recursive query vs iterative query in DNS?
371. What is DNS round-robin?
372. What is DNS load balancing?
373. What is DNS spoofing (DNS cache poisoning)? How is it prevented?
374. What is DNSSEC (DNS Security Extensions)?
375. What is DNS over HTTPS (DoH)? DNS over TLS (DoT)?
376. What is a split-horizon DNS?
377. What is a wildcard DNS record?
378. What is the /etc/hosts file? How does it relate to DNS?
379. What is the /etc/resolv.conf file?
380. What happens if DNS is down? Can you still reach a website? (only if IP is known)

---

## 13. HTTP, HTTPS & Web Protocols

381. What is HTTP? What does it stand for?
382. What is HTTP/1.0? What are its limitations? (one request per connection)
383. What is HTTP/1.1? What improvements does it bring? (persistent connections, pipelining, chunked transfer)
384. What is HTTP/2? What improvements does it bring? (multiplexing, header compression — HPACK, server push, binary framing)
385. What is HTTP/3? What transport protocol does it use? (QUIC over UDP)
386. What is a persistent connection (keep-alive) in HTTP?
387. What is HTTP pipelining?
388. What is multiplexing in HTTP/2?
389. What is head-of-line (HOL) blocking? How does HTTP/2 address it? How does HTTP/3 fix TCP-level HOL?
390. What are HTTP methods? (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, CONNECT, TRACE)
391. What is GET vs POST? What are the differences?
392. What is the difference between PUT and PATCH?
393. What is idempotent? Which HTTP methods are idempotent? (GET, HEAD, PUT, DELETE, OPTIONS)
394. What is safe method in HTTP? (GET, HEAD, OPTIONS — do not change server state)
395. What are HTTP status codes? What are the categories?
396. What is 200 OK? 201 Created? 204 No Content?
397. What is 301 Moved Permanently? 302 Found? 304 Not Modified?
398. What is 400 Bad Request? 401 Unauthorized? 403 Forbidden? 404 Not Found? 405 Method Not Allowed?
399. What is 500 Internal Server Error? 502 Bad Gateway? 503 Service Unavailable? 504 Gateway Timeout?
400. What is an HTTP header? What are common request headers? (Host, User-Agent, Accept, Authorization, Cookie, Content-Type, Content-Length)
401. What are common HTTP response headers? (Content-Type, Set-Cookie, Cache-Control, Location, ETag, WWW-Authenticate)
402. What is MIME type? Give examples. (text/html, application/json, image/png)
403. What is HTTP caching? What is Cache-Control?
404. What is an ETag? How is it used for caching?
405. What is a CDN (Content Delivery Network)? How does it use HTTP caching?
406. What is HTTPS? How does it differ from HTTP?
407. What is the difference between HTTP and HTTPS in terms of port? (80 vs 443)
408. What is a cookie? What is a session?
409. What is the difference between a cookie and a session?
410. What is CORS (Cross-Origin Resource Sharing)?
411. What is the Same-Origin Policy?
412. What is a preflight request in CORS?
413. What is REST (Representational State Transfer)?
414. What are the constraints of REST? (stateless, client-server, cacheable, uniform interface, layered system, code on demand)
415. What is a RESTful API?
416. What is SOAP? How does it differ from REST?
417. What is GraphQL? How does it compare to REST?
418. What is WebSocket? How is it established? (HTTP upgrade request)
419. What is long polling vs short polling vs server-sent events vs WebSocket?
420. What is HTTP chunked transfer encoding?

---

## 14. Network Devices & Hardware

421. What is a hub? How does it work? What layer?
422. What is a switch? How does it work? What layer?
423. What is the MAC address table (CAM table) in a switch?
424. What is a router? How does it work? What layer?
425. What is the routing table in a router?
426. What is a bridge? How does it work? What layer?
427. What is the difference between a hub, switch, bridge, and router?
428. What is a gateway? How is it different from a router?
429. What is a firewall? What types exist? (packet filter, stateful, application-layer/proxy, NGFW)
430. What is a packet filter firewall?
431. What is a stateful firewall? What is a state table?
432. What is an application-layer firewall (proxy firewall)?
433. What is a WAF (Web Application Firewall)?
434. What is a load balancer? What are the types? (Layer 4, Layer 7)
435. What is Layer 4 load balancing vs Layer 7 load balancing?
436. What are load balancing algorithms? (Round robin, Weighted round robin, Least connections, IP hash)
437. What is a proxy server? What is a forward proxy vs reverse proxy?
438. What is Nginx? How is it used as a reverse proxy and load balancer?
439. What is a modem? How is it different from a router?
440. What is a repeater? What layer?
441. What is an access point (AP)?
442. What is a NIC (Network Interface Card)?
443. What is a managed switch vs unmanaged switch?
444. What is a Layer 3 switch? How is it different from a router?
445. What is a network tap?
446. What is an IDS (Intrusion Detection System)? What is an IPS (Intrusion Prevention System)?
447. What is the difference between IDS and IPS?
448. What is UTM (Unified Threat Management)?

---

## 15. Network Security

449. What is network security? What are its goals? (CIA — Confidentiality, Integrity, Availability)
450. What is a firewall? How does it protect a network?
451. What is a DDoS (Distributed Denial of Service) attack? How is it mitigated?
452. What is a DoS attack? How is it different from DDoS?
453. What is a man-in-the-middle (MITM) attack?
454. What is a replay attack?
455. What is a packet sniffing attack? How is it prevented?
456. What is ARP spoofing? How is it used for MITM attacks?
457. What is DNS spoofing (DNS poisoning)?
458. What is IP spoofing?
459. What is a port scan? What tools are used? (nmap)
460. What is a SYN flood attack? How does it work?
461. What is a Smurf attack?
462. What is a Ping of Death?
463. What is a Teardrop attack?
464. What is SQL injection? How does it relate to network security?
465. What is XSS (Cross-Site Scripting)?
466. What is CSRF (Cross-Site Request Forgery)?
467. What is clickjacking?
468. What is a botnet?
469. What is a honeypot? When is it used?
470. What is a VPN? How does it provide security?
471. What are the types of VPN? (Remote access, Site-to-site, Client-to-site)
472. What is IPsec? What are its modes? (Transport mode, Tunnel mode)
473. What is IKE (Internet Key Exchange) in IPsec?
474. What is SSL VPN?
475. What is network segmentation? Why is it important for security?
476. What is a VLAN used for security?
477. What is Zero Trust Architecture?
478. What is a DMZ network?
479. What is an ACL (Access Control List) in networking?
480. What is port security on a switch?
481. What is MAC filtering?
482. What is 802.1X port-based authentication?
483. What is RADIUS protocol?
484. What is TACACS+?
485. What is network hardening?
486. What is the principle of least privilege in network design?
487. What is packet filtering vs stateful inspection?
488. What is deep packet inspection (DPI)?
489. What is traffic shaping? Traffic policing?
490. What is QoS (Quality of Service)?

---

## 16. SSL/TLS & Cryptography in Networks

491. What is SSL? What is TLS? What is the difference?
492. What versions of TLS exist? What is the current recommended version? (TLS 1.3)
493. What is the TLS handshake? Describe it step by step.
494. What happens during the TLS 1.2 handshake? (ClientHello → ServerHello → Certificate → ClientKeyExchange → ChangeCipherSpec → Finished)
495. What happens during the TLS 1.3 handshake? How many round trips? (1-RTT vs 2-RTT in TLS 1.2)
496. What is 0-RTT in TLS 1.3? What are its security implications?
497. What is asymmetric encryption? What is symmetric encryption?
498. Why does TLS use both asymmetric and symmetric encryption?
499. What is the RSA algorithm? How is it used in TLS?
500. What is Diffie-Hellman key exchange? What is ECDHE?
501. What is forward secrecy (Perfect Forward Secrecy / PFS)?
502. Why does TLS 1.3 remove RSA key exchange? (no forward secrecy)
503. What is a digital certificate? What does it contain?
504. What is a Certificate Authority (CA)? What is a root CA?
505. What is a certificate chain (chain of trust)?
506. What is certificate revocation? What is CRL (Certificate Revocation List)?
507. What is OCSP (Online Certificate Status Protocol)?
508. What is a self-signed certificate?
509. What is SNI (Server Name Indication)? Why is it needed?
510. What is a cipher suite? Give an example. (TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384)
511. What is AES? What is AES-GCM?
512. What is a message authentication code (MAC)?
513. What is HMAC?
514. What is a hash function? Give examples. (MD5, SHA-1, SHA-256, SHA-3)
515. What is MD5? Is it secure? Why not?
516. What is SHA-256? Where is it used?
517. What is certificate pinning?
518. What is HSTS (HTTP Strict Transport Security)?
519. What is HPKP (HTTP Public Key Pinning)? Why is it deprecated?
520. What is mutual TLS (mTLS)?
521. What is a PKI (Public Key Infrastructure)?
522. What is the role of the private key vs public key in TLS?
523. What is session resumption in TLS? (Session ID vs Session Ticket)
524. What is ALPN (Application-Layer Protocol Negotiation)?

---

## 17. Socket Programming & APIs

525. What is a socket?
526. What is a socket address?
527. What is the difference between a stream socket and a datagram socket?
528. What is the `socket()` system call?
529. What is `bind()`? What is `listen()`? What is `accept()`?
530. What is `connect()`?
531. What is `send()` and `recv()`?
532. What is `close()` on a socket?
533. What is the difference between `read()`/`write()` and `send()`/`recv()` for sockets?
534. What is `setsockopt()`? Give a use case. (SO_REUSEADDR, SO_KEEPALIVE, TCP_NODELAY)
535. What is blocking vs non-blocking socket?
536. What is `select()`? What is `poll()`? What is `epoll()`?
537. What is the difference between `select()` and `epoll()`? (scalability — epoll is O(1) vs select O(n))
538. What is the C10K problem? How does epoll solve it?
539. What is IO multiplexing?
540. What is `SO_REUSEADDR`? When do you need it?
541. What is `TCP_NODELAY`? What does it disable? (Nagle's algorithm)
542. What is the difference between a Unix domain socket and a network socket?
543. What is a raw socket?
544. What is `getaddrinfo()`? Why is it preferred over `gethostbyname()`?
545. What is a non-blocking connect?
546. What is the `sendfile()` system call? Why is it more efficient?
547. What is scatter-gather I/O? (`readv`/`writev`)
548. What is `SO_LINGER`? What happens to unsent data when a socket is closed?
549. What is half-open connection in TCP? How does it happen?
550. What is the difference between `shutdown()` and `close()` on a socket?

---

## 18. Wireless Networking

551. What is wireless networking?
552. What is Wi-Fi? What standard defines it? (IEEE 802.11)
553. What are the 802.11 standards? (802.11a/b/g/n/ac/ax — Wi-Fi 4/5/6/6E)
554. What is the difference between 2.4 GHz and 5 GHz Wi-Fi?
555. What is Wi-Fi 6 (802.11ax)? What improvements does it bring?
556. What is OFDM (Orthogonal Frequency Division Multiplexing)?
557. What is OFDMA (Orthogonal Frequency Division Multiple Access)?
558. What is MU-MIMO (Multi-User Multiple Input Multiple Output)?
559. What is a wireless access point (AP)?
560. What is SSID (Service Set Identifier)?
561. What is BSS (Basic Service Set) vs ESS (Extended Service Set)?
562. What is infrastructure mode vs ad-hoc mode in Wi-Fi?
563. What is WEP? Why is it insecure?
564. What is WPA? WPA2? WPA3?
565. What is TKIP? What is CCMP/AES in WPA2?
566. What is the four-way handshake in WPA2?
567. What is a PMKID attack on WPA?
568. What is a deauthentication attack?
569. What is hidden SSID? Is it a security measure?
570. What is Bluetooth? What range does it operate at?
571. What is BLE (Bluetooth Low Energy)?
572. What is ZigBee? What is Z-Wave?
573. What is NFC (Near Field Communication)?
574. What is LTE? What is 5G?
575. What is the difference between 4G LTE and 5G?
576. What is a roaming in wireless networking?

---

## 19. Advanced & Modern Networking

577. What is SDN (Software Defined Networking)?
578. What is the control plane vs data plane in networking?
579. What is the difference between SDN and traditional networking?
580. What is OpenFlow?
581. What is NFV (Network Function Virtualization)?
582. What is network slicing?
583. What is overlay networking vs underlay networking?
584. What is a tunnel? What are the types? (GRE, VXLAN, IPIP, L2TP)
585. What is VXLAN (Virtual Extensible LAN)?
586. What is GRE (Generic Routing Encapsulation)?
587. What is a content delivery network (CDN)? How does it work?
588. What is Anycast routing? How does a CDN use it?
589. What is a reverse proxy? How does it relate to load balancing?
590. What is BGP anycast? How do root DNS servers use it?
591. What is a spine-leaf network topology? Where is it used?
592. What is east-west traffic vs north-south traffic?
593. What is a data center network? What challenges does it face?
594. What is ECMP in data center networks?
595. What is network congestion? How is it handled at scale?
596. What is traffic shaping? What is policing? What is the difference?
597. What is Quality of Service (QoS)? How is it implemented?
598. What is DSCP (Differentiated Services Code Point)?
599. What is network telemetry? What is streaming telemetry?
600. What is Wireshark? How is it used for network troubleshooting?
601. What is tcpdump?
602. What is netstat?
603. What is the difference between `netstat` and `ss`?
604. What is `iptables`?
605. What is network address planning?
606. What is BGP peering? What is a BGP peer?
607. What is route reflector in BGP?
608. What is AS path prepending?
609. What is route filtering in BGP?
610. What is BFD (Bidirectional Forwarding Detection)?

---

## 20. Tricky & Scenario-Based Questions

611. Walk me through exactly what happens when you type `https://www.google.com` and press Enter.
    *(DNS resolution → TCP connection → TLS handshake → HTTP request → server response → browser renders page)*
612. You can ping a server but cannot connect to it via HTTP. What are the possible causes?
613. You can connect via HTTP but not HTTPS. What is the likely issue?
614. DNS is down. Can you still browse the internet? How?
615. What happens when two devices on the same LAN have the same IP address?
616. What happens when two devices have the same MAC address on the same LAN?
617. How does a switch learn MAC addresses?
618. What is a broadcast storm? How does STP prevent it?
619. What is the difference between `127.0.0.1` and `0.0.0.0` when binding a server?
620. If a packet's TTL reaches 0, what happens and what message is sent back?
621. Can two different applications on the same machine use the same port? (No — unless SO_REUSEPORT)
622. What is the maximum number of TCP connections a server can handle?
623. Is TCP connection identified by destination port alone? (No — by 4-tuple: src IP, src port, dst IP, dst port)
624. Why does TIME_WAIT exist? What problem does it prevent?
625. What happens if you close a TCP connection without FIN? (RST is sent — abortive close)
626. If cwnd = 1 and ssthresh = 16, trace TCP Slow Start until it reaches ssthresh.
627. What is the bandwidth-delay product and how does it affect TCP performance?
628. Why does UDP not have a congestion control mechanism? Is this always bad?
629. What is the difference between latency and bandwidth? Which matters more for video calls? For file downloads?
630. How does a load balancer decide which backend server to route to?
631. If a CDN node fails, how does traffic get rerouted?
632. What is the difference between a stateful and stateless firewall? Which is more secure?
633. What happens to existing TCP connections when a NAT table entry expires?
634. If you make two HTTP requests to the same server in HTTP/1.1, do they share the same TCP connection?
635. What happens when ARP cache is empty and a packet needs to be sent to a local host?
636. Can ICMP be used to exfiltrate data? (Yes — ICMP tunneling)
637. What is the difference between a hub and a switch in terms of security?
638. How does a reverse proxy improve security?
639. What is an on-path attack vs an off-path attack in networking?
640. What is split-brain in network design?
641. What is the checksum verification process in TCP? What happens if it fails?
642. Why does HTTP/2 still have HOL blocking at the transport layer?
643. What is the role of the ACK number in TCP — is it the next expected byte or the last received byte?
644. Can UDP packets arrive out of order? Can TCP packets arrive out of order?
645. What is the difference between connection timeout and read timeout in a TCP connection?

---

## 21. Rapid Fire — One-Liners

*Each answer in ≤ 20 words. Practice verbally until reflexive.*

646. What is a MAC address? (48-bit hardware address uniquely identifying a network interface)
647. What is ARP? (Resolves IPv4 address to MAC address on a local network)
648. What is a subnet mask? (Determines which portion of an IP address is network vs host)
649. What is a default gateway? (Router that forwards traffic destined outside the local network)
650. What is NAT? (Translates private IP addresses to a public IP for internet access)
651. What is DHCP? (Automatically assigns IP address and network config to devices)
652. What is DNS? (Translates domain names to IP addresses)
653. What is a router? (Forwards packets between networks using IP addresses at Layer 3)
654. What is a switch? (Forwards frames within a network using MAC addresses at Layer 2)
655. What is a hub? (Broadcasts all incoming data to all ports — Layer 1)
656. What is TTL? (Counter decremented each hop — packet discarded at 0)
657. What is ICMP? (Control and error-reporting protocol — used by ping and traceroute)
658. What is a socket? (Endpoint of communication — IP address + port number)
659. What is the TCP three-way handshake? (SYN → SYN-ACK → ACK establishes a reliable connection)
660. What is the difference between TCP and UDP? (TCP: reliable, ordered, connection-oriented; UDP: fast, connectionless, no guarantee)
661. What is HTTP? (Application protocol for web communication — stateless, port 80)
662. What is HTTPS? (HTTP over TLS — encrypted and authenticated, port 443)
663. What is a cookie? (Small data stored by browser to maintain state between HTTP requests)
664. What is a CDN? (Distributed servers that deliver content closer to users for speed)
665. What is a VPN? (Encrypted tunnel over the internet for secure private network access)
666. What is a firewall? (Network security device that filters traffic based on rules)
667. What is SSL/TLS? (Cryptographic protocols that secure communication over a network)
668. What is a certificate authority? (Trusted entity that issues digital certificates verifying identity)
669. What is forward secrecy? (Past sessions remain secure even if private key is later compromised)
670. What is a SYN flood? (DoS attack — server overwhelmed with half-open TCP connections)
671. What is OSPF? (Link-state routing protocol using Dijkstra's algorithm within an AS)
672. What is BGP? (Path vector routing protocol for routing between autonomous systems)
673. What is CIDR? (Classless IP addressing using prefix notation like /24 instead of class-based masks)
674. What is a VLAN? (Logical network segment within a physical switch — isolates broadcast domains)
675. What is QoS? (Mechanism to prioritize certain types of network traffic)
676. What is latency? (Time delay for a packet to travel from source to destination)
677. What is bandwidth? (Maximum rate of data transfer across a network link)
678. What is a broadcast domain? (Network segment where broadcast packets reach all devices)
679. What is ARP poisoning? (Attacker sends fake ARP replies to associate their MAC with another IP)
680. What is a proxy server? (Intermediary that forwards requests between clients and servers)

---

## Bonus: Well-Known Ports Reference Table

| Port | Protocol | Service |
|------|----------|---------|
| 20 | TCP | FTP Data |
| 21 | TCP | FTP Control |
| 22 | TCP | SSH |
| 23 | TCP | Telnet |
| 25 | TCP | SMTP |
| 53 | TCP/UDP | DNS |
| 67 | UDP | DHCP Server |
| 68 | UDP | DHCP Client |
| 80 | TCP | HTTP |
| 110 | TCP | POP3 |
| 123 | UDP | NTP |
| 143 | TCP | IMAP |
| 161 | UDP | SNMP |
| 179 | TCP | BGP |
| 443 | TCP | HTTPS |
| 465 | TCP | SMTPS |
| 514 | UDP | Syslog |
| 587 | TCP | SMTP Submission |
| 636 | TCP | LDAPS |
| 989 | TCP | FTPS Data |
| 990 | TCP | FTPS Control |
| 993 | TCP | IMAPS |
| 995 | TCP | POP3S |
| 1194 | UDP | OpenVPN |
| 1433 | TCP | MS SQL Server |
| 3306 | TCP | MySQL |
| 3389 | TCP | RDP |
| 5432 | TCP | PostgreSQL |
| 6379 | TCP | Redis |
| 8080 | TCP | HTTP Alternate |
| 27017 | TCP | MongoDB |

---

## Bonus: IPv4 Class Reference

| Class | Range | Default Mask | Hosts per Network |
|-------|-------|--------------|-------------------|
| A | 1.0.0.0 – 126.255.255.255 | /8 (255.0.0.0) | ~16 million |
| B | 128.0.0.0 – 191.255.255.255 | /16 (255.255.0.0) | ~65,000 |
| C | 192.0.0.0 – 223.255.255.255 | /24 (255.255.255.0) | 254 |
| D | 224.0.0.0 – 239.255.255.255 | Multicast | N/A |
| E | 240.0.0.0 – 255.255.255.254 | Experimental | N/A |

**Private Ranges:**
- Class A: 10.0.0.0/8
- Class B: 172.16.0.0/12 (172.16.0.0 – 172.31.255.255)
- Class C: 192.168.0.0/16

---

## Study Priority Guide

| Tier | Topics | Interview Frequency |
|------|--------|-------------------|
| 🔴 Must Know | OSI vs TCP/IP model (all layers), TCP vs UDP, TCP 3-way handshake + 4-way termination, DNS resolution process, HTTP vs HTTPS, IP addressing + classes + private ranges, subnetting/CIDR numericals, ARP, NAT, common port numbers | Asked in 95%+ interviews |
| 🟠 High Priority | Routing (static vs dynamic, OSPF vs RIP vs BGP at conceptual level), TCP congestion control (Slow Start, ssthresh), TLS handshake, HTTP methods + status codes, socket basics, DHCP, ICMP/ping/traceroute, VLAN, firewall types, IPv4 vs IPv6 | Asked in 70%+ interviews |
| 🟡 Medium | HTTP/2 vs HTTP/3, QUIC, WebSocket, REST vs SOAP, STP, CSMA/CD vs CSMA/CA, flow control + sliding window, SSL certificate chain, SNI, forward secrecy, DDoS mitigation, socket programming (epoll vs select), load balancing algorithms | Asked in product companies |
| 🟢 Differentiator | BGP internals, MPLS, SDN/NFV, TCP BBR, CUBIC, SACK, TSO, ECMP, anycast CDN, 0-RTT TLS, mTLS, network telemetry, spine-leaf topology, VXLAN, socket advanced options (SO_REUSEPORT, TCP_NODELAY), C10K problem | Makes you stand out |

---

*Sources: GeeksforGeeks CN Interview Questions, InterviewBit Networking Questions, Adaface CN Questions, TakeUForward CN Questions, Guru99 Networking, WecreateProblems CN, Taggd Networking Guide, Cloudflare Learning Center, Sanfoundry CN MCQs, Medium (TCP/TLS deep dives), RFC documentation references. Compiled August 2026.*
