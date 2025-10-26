#### Asynchronous JavaScript 
Asynchronous JavaScript ek programming style hai jo code ko non-blocking way mein chalata hai, jisse time-consuming tasks ko bina UI freeze kare handle kar sakte hain. Isme callbacks, promises aur async/await ka use karke asynchronous tasks manage kiye jaate hain, jisse user experience smooth aur responsive rehta hai.
In simple words aisa koi bhi code jisme koi task time-consuming hota hai, usko asynchronous code kehte hain.

## Difference between Synchronous and Asynchronous Code
| Aspect | Synchronous Code | Asynchronous Code |
|--------|------------------|-------------------|
| Execution Order | Line-by-line, blocking | Non-blocking, event-driven |
| UI Impact | Freezes UI during long tasks | Keeps UI responsive |
| Use Case | Simple scripts | Network requests, timers, file I/O |
| JavaScript Constructs | Regular statements | Callbacks, Promises, async/await |

## Topics : -

// setTimeout - ka code kuch der bad mein execute hota hai
// setInterval - ka code har doosre interval mein execute hota hai
// Fetch API - browser ke built-in API hai jo network requests handle karta hai
// Axios [or other HTTP libraries] - third-party library jo HTTP requests handle karta hai
// Promise - ek object jo future mein resolve ya reject hoga

// Callbacks - functions jo asynchronous tasks ke baad execute hote hain
// Async/Await - modern way mein promises use karke asynchronous code ko write karne ke liye

## Event Loop - browser ke built-in mechanism jo asynchronous tasks ko manage karta hai 
- Event Loop ek infinite loop hota hai jo browser ke memory mein tasks ko manage karta hai.
- Isme two main components hoti hain: call stack aur task queue.
- Call stack mein synchronous code execute hota hai, aur jab tak call stack khali na ho jaye, tab tak code execute hota hai.
- Jab asynchronous task complete hota hai, tab wo task task queue mein daalta hai.
- Event Loop call stack ko check karta hai, aur jab tak call stack khali na ho jaye, tab tak tasks execute hoti hain.
- Isse UI freeze na ho, aur user experience smooth rehta hai.

## Difference between Callbacks, Promises, and Async/Await
| Approach | Description | Pros | Cons | Syntax Example |
| --- | --- | --- | --- | --- |
| Callbacks | Functions passed as arguments, invoked after async task | Simple, widely supported | Callback hell, hard to read/maintain | `fs.readFile('file.txt', cb)` |
| Promises | Objects representing eventual completion/failure | Avoids callback hell, chainable | Still nested with multiple ops | `fetch(url).then(res => …).catch(err => …)` |
| Async/Await | Syntactic sugar over Promises | Reads like sync code, clean error handling | Requires modern JS runtime | `const res = await fetch(url);` |

// Generators - functions jo pause/resume karke multiple values yield karte hain, async flow bhi handle kar sakte hain

// Error handling in Asynchronous Code - try/catch ya .catch() se async errors ko sambhalna, nahi toh app crash ho sakta hai  

## Web Worker 
📌 Browser ke background threads jo heavy tasks UI ko freeze kiye bina chalaate hain
📌 Web Workers are browser-provided background threads that let you offload CPU-intensive or time-consuming JavaScript tasks—such as image processing, large data parsing, or complex calculations—into a separate thread. Because they run independently of the main thread, the UI remains fully responsive, animations stay smooth, and user interactions are never blocked. Communication between the main thread and a worker happens only through a message-passing API (postMessage/onmessage), ensuring no shared memory conflicts, and workers have no access to the DOM, window, or document objects, which keeps the main thread safe from accidental side-effects.