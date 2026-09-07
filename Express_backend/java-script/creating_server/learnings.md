# Node.js Server Learnings & Cheat Sheet

This document captures key concepts, syntax rules, networking mechanics, and sequence diagram reading guidelines for building servers in Node.js.

---

## 1. Importing Node Modules (`node:http`)
* Use `require('node:http')` instead of `require('http')`.
* **Why?** It explicitly specifies a built-in Node.js module, prevents naming collisions with third-party npm packages in `node_modules`, bypasses resolution lookups, and adheres to modern Node.js best practices.

---

## 2. Server Binding & Hostnames
* `127.0.0.1` / `localhost`: Loopback address. Only accessible from inside your own machine. Ideal for **local development**.
* `0.0.0.0`: Wildcard address. Listens on **all network interfaces** (Wi-Fi, Ethernet, Docker). Used for **production & Docker deployments**.
* **Networking Concept:** **Socket Binding (`IP:Port`)**.

---

## 3. Asynchronous `server.listen()` & Callbacks
* `server.listen({ host, port }, callback)`: `server.listen()` is asynchronous.
* **Why use a callback?** Running code directly outside a callback runs synchronously *before* the Operating System finishes opening the port. The callback runs **only after** the OS confirms the port is successfully bound.
* **Error Handling:** Use `server.on('error', (err) => ...)` to catch asynchronous startup errors (e.g., `error.code === 'EADDRINUSE'`). `try...catch` does **not** catch async server listen errors.

---

## 4. Sequence Diagrams & Network Lifecycle Cheat Sheet

### The Core Rules of Sequence Diagrams
1. **Time Flows Downwards:** Top = beginning of interaction; Bottom = end.
2. **Columns (Lifelines):** Vertical lines represent independent processes/entities (`Browser (Client)`, `OS Kernel`, `Node.js Server`).
3. **Horizontal Arrows (Messages):** Inter-process communication (network requests, system calls, HTTP data). Start = sender, Arrowhead = receiver.
4. **Looping Arrows (Self-Messages):** Internal execution (e.g., Node running JavaScript, Browser rendering HTML).

### Step-by-Step Network Request Timeline
```
[Browser]                     [OS Kernel]                   [Node.js Server]
   |                              |                                |
   |--- 1. Connect System Call -->|                                |
   |                              |                                |
   |--- 2. SYN ------------------>|                                |
   |<-- 2. SYN-ACK ---------------| (TCP 3-Way Handshake)          |
   |--- 2. ACK ------------------>|                                |
   |                              |                                |
   |                              |--- 3. Pass Connected Socket -->|
   |                              |                                |
   |--- 4. GET / HTTP/1.1 ------->|                                |
   |                              |--- 5. Pass HTTP Request Data ->|
   |                              |                                | (Executes createServer)
   |                              |                                |====| Internal JS
   |                              |                                |    | Processing
   |                              |                                |<---|
   |                              |<-- 6. Send HTTP Response ------|
   |<-- 7. Send Response ---------|                                |
   |                              |                                |
(Renders Page)
===| Internal
   |<-- Rendering
```

* **Phase 1 (Initiation):** Browser makes a system call to the OS Kernel to open a socket connection.
* **Phase 2 (TCP 3-Way Handshake):** Browser and OS Kernel exchange `SYN` $\rightarrow$ `SYN-ACK` $\rightarrow$ `ACK` to establish a reliable L4 TCP connection.
* **Phase 3 (Socket Handoff):** OS Kernel passes the socket file descriptor to the listening Node.js process.
* **Phase 4 (HTTP Data Flow):**
  1. Browser sends `GET / HTTP/1.1` to Kernel $\rightarrow$ Kernel passes payload to Node.js.
  2. Node.js processes the request internally in `createServer((req, res) => ...)` (Self-message loop).
  3. Node.js sends HTTP response back to Kernel $\rightarrow$ Kernel forwards it to Browser.
  4. Browser renders the response on screen (Self-message loop).
