# OOP Interview Questions — Complete C++ Reference
> Curated from GeeksforGeeks, InterviewBit, LeetCode Discuss, Adaface, DigitalDefynd, TechInterview.org, and placement experience reports. Every question that has appeared or is likely to appear in Indian product company, mass recruiter, and FAANG-style interviews.

---

## Table of Contents
1. [Fundamentals & Basics](#1-fundamentals--basics)
2. [Classes & Objects](#2-classes--objects)
3. [Constructors & Destructors](#3-constructors--destructors)
4. [Access Specifiers & Encapsulation](#4-access-specifiers--encapsulation)
5. [Inheritance](#5-inheritance)
6. [Polymorphism](#6-polymorphism)
7. [Virtual Functions & vtable Internals](#7-virtual-functions--vtable-internals)
8. [Abstraction & Abstract Classes](#8-abstraction--abstract-classes)
9. [Operator Overloading](#9-operator-overloading)
10. [Copy Constructor, Assignment & Rule of Three/Five](#10-copy-constructor-assignment--rule-of-threefive)
11. [Static Members & Friend](#11-static-members--friend)
12. [Templates & Generic Programming](#12-templates--generic-programming)
13. [Memory Management & RAII](#13-memory-management--raii)
14. [Casting Operators](#14-casting-operators)
15. [Exception Handling in OOP](#15-exception-handling-in-oop)
16. [Design Patterns (OOP Applied)](#16-design-patterns-oop-applied)
17. [SOLID Principles](#17-solid-principles)
18. [Modern C++ OOP (C++11/14/17)](#18-modern-c-oop-c111417)
19. [Advanced & Tricky / Output Prediction](#19-advanced--tricky--output-prediction)
20. [Rapid Fire — One-Liners](#20-rapid-fire--one-liners)

---

## 1. Fundamentals & Basics

1. What is Object-Oriented Programming (OOP)? How is it different from procedural programming?
2. What are the four pillars of OOP? Define each in one sentence.
3. Give a real-world analogy for each of the four OOP pillars.
4. What are the advantages of OOP over structured/procedural programming?
5. What are the limitations or disadvantages of OOP?
6. Which programming paradigms exist other than OOP? How does OOP compare to functional programming?
7. What is structured programming? How does it relate to OOP?
8. Name five languages that support OOP. Name one that supports OOP partially (like C).
9. Can C++ be used without OOP? Give an example.
10. What is the difference between OOP and Object-Based Programming? (Hint: JavaScript ES5, VB)
11. What is a programming paradigm? Where does OOP fit?
12. What does "bottom-up" design mean in OOP vs "top-down" in procedural?

---

## 2. Classes & Objects

13. What is a class? What is an object? How are they related?
14. What is the difference between a class and a struct in C++? (default access, default inheritance, use convention)
15. How much memory does a class occupy? How much does an object occupy?
16. Can a class exist without any objects? What use would it have?
17. What is an instance? Is "instance" the same as "object"?
18. What is the `this` pointer? Where does it come from? Can it be null?
19. What are two practical uses of the `this` pointer? (method chaining, name disambiguation)
20. What is a nested class in C++? When would you use one?
21. What is a local class (class defined inside a function) in C++? What are its restrictions?
22. Can a class have another class as a member? What is this called? (composition)
23. What is the difference between composition and inheritance? When do you prefer each?
24. What is aggregation vs composition in OOP?
25. What is the difference between `class` and `typename` in template declarations?
26. What is object identity vs object equality?
27. What is an anonymous class/struct in C++?
28. What is a POD (Plain Old Data) type? Why does it matter in C++?
29. How are objects laid out in memory? What is padding and alignment?
30. What is `sizeof` a class with no members? (Answer: 1 byte — to ensure unique addresses)
31. What is `offsetof` and when is it used?

---

## 3. Constructors & Destructors

32. What is a constructor? What are its properties? (no return type, same name as class, auto-called)
33. What are the types of constructors in C++? (default, parameterized, copy, move, delegating, converting)
34. What is a default constructor? When does the compiler generate one automatically?
35. When does the compiler stop generating the default constructor?
36. What is a parameterized constructor?
37. What is a copy constructor? What is its signature?
38. What is the difference between a copy constructor and an assignment operator?
39. What is a move constructor? When is it called vs copy constructor?
40. What is a delegating constructor (C++11)?
41. What is a converting constructor? How does `explicit` prevent it?
42. What does `explicit` do on a constructor? Give an example where omitting it causes a bug.
43. What is a constructor initializer list? Why is it preferred over assignment inside the constructor body?
44. What is the order of member initialization in a constructor initializer list?
45. Can a constructor be virtual? Why not?
46. Can a constructor be private? When and why? (Singleton, factory, utility classes)
47. Can a constructor throw an exception? What happens to the object?
48. What is a destructor? What are its properties?
49. Can a destructor be virtual? When must it be virtual?
50. What is a pure virtual destructor? Why do you need to provide a definition for it?
51. Can a destructor throw an exception? What happens if it does? (terminate() is called if during stack unwinding)
52. Can a destructor be overloaded? Why not?
53. What is the order of constructor and destructor calls in inheritance? (base ctor → derived ctor; derived dtor → base dtor)
54. What is the order of constructor calls in multiple inheritance?
55. What is the order of destruction for stack objects vs heap objects?
56. What happens when you call `delete` on a null pointer? (safe no-op)
57. What is the difference between `delete` and `delete[]`? What happens if you mix them?
58. What is placement new? When would you use it?
59. What are the differences between `new`/`delete` and `malloc`/`free`?

---

## 4. Access Specifiers & Encapsulation

60. What are the three access specifiers in C++? Define each.
61. What is the default access specifier for a class? For a struct?
62. What is encapsulation? How is it different from data hiding?
63. Why not just make everything public? What concretely breaks without encapsulation? (invariants, thread safety, implementation freedom)
64. What happens to access specifiers through inheritance? (table: public/protected/private inheritance × public/protected/private member)
65. What is the difference between `public`, `protected`, and `private` inheritance?
66. When would you use private inheritance? (implemented-in-terms-of relationship)
67. When would you use protected inheritance?
68. Can a derived class access private members of a base class? How? (only via friend, public/protected getter, or protected member)
69. What is const correctness? Why does it matter at the API level?
70. What does `const` mean on a member function?
71. What are the four places `const` appears in a member function context? (const param, const method, const return, const object)
72. What is the difference between `const int*`, `int* const`, and `const int* const`?
73. What is `mutable`? When is it justified? (cache, mutex, lazy evaluation)
74. Can a `const` method call a non-`const` method? (No — would break constness contract)
75. What is bitwise constness vs logical constness?
76. What is the purpose of getters and setters? Are they always necessary?

---

## 5. Inheritance

77. What is inheritance? What problem does it solve?
78. What are the types of inheritance in C++? (single, multiple, multilevel, hierarchical, hybrid)
79. What is single inheritance?
80. What is multiple inheritance? What problem can it cause?
81. What is multilevel inheritance?
82. What is hierarchical inheritance?
83. What is hybrid inheritance?
84. What is the diamond problem? How does C++ solve it?
85. What is virtual inheritance? What overhead does it add?
86. With virtual inheritance, who is responsible for calling the virtual base class constructor? (Most-derived class)
87. What is the difference between `is-a` and `has-a` relationships?
88. What is the difference between inheritance and composition? When should you prefer composition over inheritance?
89. What is the Liskov Substitution Principle? How does Square-Rectangle violate it?
90. What members does a derived class inherit? (all except constructors, destructor, copy/move operators, friend declarations)
91. Can constructors be inherited? (Yes, with `using Base::Base` in C++11)
92. What is constructor inheritance (using declaration)?
93. What is method hiding vs method overriding? What's the difference?
94. What is name hiding in C++? How do you unhide a name? (`using Base::func`)
95. What is the order of constructor invocation in a class hierarchy?
96. What is an abstract base class? Can you have a pointer to one?
97. Can a derived class reduce the access level of an inherited member?
98. Can a derived class increase the access level of an inherited member?
99. What is slicing in the context of inheritance (object slicing)?
100. What happens when you pass a derived object by value to a function taking a base? (slicing)
101. What is protected inheritance used for?
102. Can you inherit from multiple abstract classes? (Yes — this is how you model interfaces in C++)
103. What is a mixin in C++? How is it implemented?
104. What is the difference between calling `Base::func()` and just `func()` in a derived class?

---

## 6. Polymorphism

105. What is polymorphism? What does the word literally mean?
106. What are the two types of polymorphism in C++?
107. What is compile-time (static) polymorphism? How is it achieved? (function overloading, operator overloading, templates)
108. What is runtime (dynamic) polymorphism? How is it achieved? (virtual functions + inheritance)
109. What is function overloading? What are the rules? (parameter types/count/order — NOT return type)
110. Can two functions differ only in return type for overloading? (No — compile error)
111. What is operator overloading? Which operators can be overloaded?
112. Which operators CANNOT be overloaded? (`::`, `.`, `.*`, `?:`, `sizeof`, `typeid`, `alignof`)
113. Which operators CAN be overloaded but generally should not be? (`&&`, `||`, `,`, `&`)
114. What is the difference between overloading and overriding?
115. What is method overriding? What are its rules? (same name, same params, same return type, virtual in base)
116. What is covariant return type? (Derived override can return derived pointer/ref instead of base)
117. What is runtime dispatch? Explain the exact steps the CPU takes during a virtual call.
118. What is static binding vs dynamic binding?
119. What is early binding vs late binding?
120. What is duck typing? Does C++ support it? (templates provide compile-time duck typing)
121. What is the difference between runtime polymorphism using virtual functions and compile-time polymorphism using templates?
122. When would you choose templates over virtual functions for polymorphism?
123. What is ad-hoc polymorphism vs parametric polymorphism vs subtype polymorphism?

---

## 7. Virtual Functions & vtable Internals

124. What is a virtual function? How do you declare one?
125. What is a pure virtual function? How do you declare one?
126. What is a vtable (virtual table)? How is it structured?
127. What is a vptr (virtual pointer)? How many vptrs does an object have?
128. How many vtables does a class have? Where is it stored? (static, per-class, shared by all objects)
129. When is the vptr set? (During construction — set to base vtable first, then derived)
130. What is the memory overhead of a virtual function? (one vptr per object — 8 bytes on 64-bit)
131. Can a constructor be virtual? Explain why not.
132. Must a destructor be virtual in a polymorphic base class? What happens if it isn't?
133. What is a virtual destructor? Give a concrete memory leak example without it.
134. What happens when you call a virtual function from a constructor or destructor? (calls base version — vtable not yet updated)
135. Why shouldn't you call virtual functions in constructors? Give a production bug scenario.
136. What is the `override` keyword? Why should you always use it?
137. What is the `final` keyword? (Prevents further overriding or inheritance)
138. What is the difference between `virtual void f() {}` and `virtual void f() = 0`?
139. Can you provide a definition (body) for a pure virtual function? When is it useful? (pure virtual destructor)
140. What is an abstract class? Can you instantiate one?
141. What happens to the vtable entry for an unoverridden virtual function in a derived class? (inherits base entry)
142. How does multiple inheritance affect vtable structure? (two vptrs for two base classes with virtuals)
143. What is RTTI (Runtime Type Information)? What does it require?
144. What is `dynamic_cast`? When does it return nullptr vs throw `std::bad_cast`?
145. What is `typeid`? How is it different from `dynamic_cast`?
146. When should you use `typeid` vs `dynamic_cast`?
147. What is the performance cost of a virtual function call vs a direct call?
148. What is devirtualization? When can the compiler devirtualize a virtual call?
149. What is a virtual function table in a derived class — how does it differ from the base class vtable?
150. Can a non-virtual member function be overridden? (No — it is hidden, not overridden)

---

## 8. Abstraction & Abstract Classes

151. What is abstraction? How is it different from encapsulation?
152. What is data abstraction vs process abstraction?
153. What is an abstract class in C++?
154. How do you create an abstract class in C++? (at least one pure virtual function)
155. Can you have a pointer or reference to an abstract class? (Yes)
156. Can an abstract class have a constructor? (Yes — called by derived class)
157. Can an abstract class have data members? (Yes)
158. Can an abstract class have concrete (non-pure-virtual) methods? (Yes)
159. What is an interface in C++? How do you model one? (abstract class with only pure virtuals, no data)
160. What is the difference between an abstract class and an interface?
161. Why would you use an abstract class instead of a concrete base?
162. What is the difference between `virtual void f() = 0` and `virtual void f() {}`?
163. If a derived class doesn't override all pure virtual functions, what happens? (it becomes abstract too)
164. What is the Template Method design pattern? How does it use abstract classes?
165. How does abstraction help in reducing coupling between modules?

---

## 9. Operator Overloading

166. What is operator overloading? What is its purpose?
167. Which operators can be member functions and which must be non-members?
168. Which operators MUST be member functions? (`=`, `[]`, `()`, `->`)
169. Why must `<<` and `>>` be non-member functions?
170. How do you overload the `+` operator? Show member vs non-member forms.
171. What should binary arithmetic operators (`+`, `-`, `*`) return? (new object by value)
172. What should compound assignment operators (`+=`, `-=`) return? (`*this` by reference)
173. Why should you implement `+` in terms of `+=` rather than independently?
174. How do you overload prefix `++` vs postfix `++`? (dummy int parameter for postfix)
175. Which is more efficient — prefix or postfix increment? Why? (prefix avoids temporary)
176. How do you overload the subscript operator `[]`? Why do you need two versions?
177. How do you overload the function call operator `()`? What is a functor?
178. How do you overload the dereference `*` and arrow `->` operators? (for smart pointer-like classes)
179. How do you overload the stream insertion `<<` operator?
180. How do you overload the comparison operators? (prefer non-member; C++20: spaceship `<=>`)
181. What is the spaceship operator `<=>` in C++20?
182. How do you overload the conversion operator? (`operator double() const`)
183. What is an explicit conversion operator?
184. Can you overload `=` for assignment? What are the requirements?
185. What is the difference between the copy assignment operator and the move assignment operator?
186. What happens if you don't return `*this` from `operator=`? (chaining breaks: `a = b = c` fails)
187. How do you prevent object copying? (`= delete` on copy constructor and copy assignment)
188. What is the copy-and-swap idiom? Why is it the cleanest assignment implementation?

---

## 10. Copy Constructor, Assignment & Rule of Three/Five

189. What is the Rule of Three? List the three special functions.
190. What is the Rule of Five (C++11)? List the five special functions.
191. What is the Rule of Zero? When does it apply?
192. What is a shallow copy vs a deep copy? Give a concrete bug example for shallow copy.
193. What does the compiler-generated copy constructor do? (memberwise copy — shallow)
194. What does the compiler-generated copy assignment operator do? (memberwise assign — shallow)
195. When does the compiler NOT generate a copy constructor? (when you declare move ctor or move assign)
196. When does the compiler generate a move constructor?
197. What is an rvalue? What is an lvalue? What is an xvalue?
198. What is an rvalue reference (`T&&`)?
199. What is `std::move`? Does it actually move anything?
200. What is move semantics? What problem does it solve?
201. What is perfect forwarding? What is `std::forward`?
202. What is the self-assignment problem in `operator=`? How do you guard against it?
203. What is the copy-and-swap idiom? Why does the assignment operator take its parameter by value?
204. What does `noexcept` on a move constructor do? Why does `std::vector` care about it?
205. What is a deleted function (`= delete`)? What is a defaulted function (`= default`)?
206. What is the difference between `T obj(other)` and `T obj = other`? (both call copy ctor; no assignment)
207. How does the compiler decide between copy and move constructor? (lvalue → copy; rvalue/temp → move)
208. What is Return Value Optimization (RVO) and Named RVO (NRVO)?
209. What is copy elision? Is it guaranteed in C++17?

---

## 11. Static Members & Friend

210. What is a static data member? How many copies exist?
211. How do you initialize a static data member? (out-of-class definition, or inline in C++17)
212. What is a static member function? What can it access?
213. Can a static member function have a `this` pointer? (No)
214. Can you call a static member function via an object? (Yes, but discouraged)
215. What is the difference between a static local variable and a static member variable?
216. What is a friend function? Can it access private members?
217. What is a friend class?
218. Is friendship mutual? Is friendship inherited? (No to both)
219. When should you use friend functions vs member functions? (e.g., `operator<<`)
220. What are the disadvantages of friend functions? (breaks encapsulation)
221. What is a static class (a class with only static members)? Is that possible in C++?
222. Can a static member function be virtual? (No — no `this`, no vtable dispatch)
223. Can a static member be `const`? `constexpr`? `inline`?

---

## 12. Templates & Generic Programming

224. What is a template in C++? What problem does it solve?
225. What is the difference between a function template and a class template?
226. What does "instantiation" of a template mean? When does it happen?
227. What is template argument deduction?
228. What is explicit template instantiation vs implicit instantiation?
229. What is full template specialization? Give an example.
230. What is partial template specialization? Why is it only allowed for class templates?
231. Why can't function templates be partially specialized? (Use overloading instead)
232. What is a variadic template? What is a parameter pack?
233. What is a fold expression (C++17)?
234. What is `sizeof...(args)` for a parameter pack?
235. What is SFINAE (Substitution Failure Is Not An Error)?
236. What is `std::enable_if` and how does it use SFINAE?
237. What are type traits? Give three examples (`is_integral`, `is_pointer`, `remove_reference`).
238. What is the difference between templates and runtime polymorphism (virtual functions)? Performance, binary size, error messages.
239. What is CRTP (Curiously Recurring Template Pattern)?
240. How does CRTP achieve static polymorphism without vtable overhead?
241. What are the limitations of CRTP vs virtual functions?
242. What is template metaprogramming (TMP)? Give a compile-time factorial example.
243. What is `constexpr`? How does it relate to templates?
244. What is a concept (C++20)? How does it improve on SFINAE?
245. What is `auto` in function return types and template context?
246. What is a non-type template parameter? Give an example (`template<int N>`).
247. What is a template template parameter?
248. What is two-phase name lookup in templates?
249. What is template bloat? How can you mitigate it?
250. What is the Curiously Recurring Template Pattern used for in real libraries? (Eigen, Boost)

---

## 13. Memory Management & RAII

251. What is RAII (Resource Acquisition Is Initialization)?
252. What resource types does RAII apply to? (memory, file handles, sockets, mutexes, DB connections)
253. What is `std::unique_ptr`? What ownership model does it have?
254. What is `std::shared_ptr`? How does reference counting work?
255. What is `std::weak_ptr`? What problem does it solve? (cyclic reference)
256. When should you use `unique_ptr` vs `shared_ptr` vs `weak_ptr`?
257. What is the performance overhead of `shared_ptr` vs `unique_ptr`?
258. What is `make_unique` vs `new`? Why prefer `make_unique`?
259. What is `make_shared` vs `new + shared_ptr`? What optimization does `make_shared` perform?
260. What is a dangling pointer? What is a wild pointer?
261. What is a memory leak? How would you detect one in C++? (Valgrind, AddressSanitizer)
262. What is double-free? What is use-after-free?
263. What is stack overflow vs heap overflow?
264. What is the difference between stack allocation and heap allocation?
265. What is a memory pool? When would you use one?
266. What is placement new? When is it useful?
267. What is `std::allocator`? When would you customize it?
268. What is the PIMPL idiom (Pointer to Implementation)? What problem does it solve?
269. What is garbage collection? Does C++ have it?
270. How does exception safety relate to RAII?
271. What are the three levels of exception safety? (basic, strong, no-throw)

---

## 14. Casting Operators

272. What are the four C++ cast operators?
273. What is `static_cast`? When should you use it?
274. What is `dynamic_cast`? What does it require? (polymorphic type — at least one virtual function)
275. What does `dynamic_cast` return on failure for pointers vs references?
276. What is `const_cast`? When is it legitimately used?
277. What is `reinterpret_cast`? When should you avoid it?
278. Why is C-style cast `(Type)expr` dangerous in C++?
279. What is upcasting? Is it safe? Does it need an explicit cast?
280. What is downcasting? Is it safe without `dynamic_cast`?
281. What is cross-casting? (casting between two unrelated branches in multiple inheritance hierarchy)
282. What is the cost of `dynamic_cast` vs `static_cast`?
283. When does relying on `dynamic_cast` indicate a design smell?

---

## 15. Exception Handling in OOP

284. What is an exception in C++? How do you throw one?
285. What is `try`, `catch`, `throw`?
286. What is the difference between `throw` (rethrow) and `throw expr`?
287. What is a catch-all handler (`catch (...)`)?
288. What is `std::exception`? What is `what()`?
289. Should you throw by value or by pointer? (by value, catch by reference)
290. What is stack unwinding? What happens to local objects during it?
291. Why must destructors not throw exceptions? What happens if they do during stack unwinding?
292. What is `noexcept`? What does it guarantee?
293. What is `noexcept(expr)`? (conditional noexcept)
294. What is the difference between `noexcept` and an empty throw specification `throw()`?
295. What are the three levels of exception safety? Define each.
296. What is the strong exception guarantee? Give an example using copy-and-swap.
297. What is exception specification? (deprecated in C++17)
298. How does RAII relate to exception safety?
299. What is the difference between exceptions and error codes? When do you use each?

---

## 16. Design Patterns (OOP Applied)

300. What is the Singleton pattern? Implement the Meyers Singleton.
301. What are the problems with Singleton? (hidden global state, testability, coupling)
302. What is the Factory Method pattern? How does it implement OCP?
303. What is the Abstract Factory pattern? How does it differ from Factory Method?
304. What is the Builder pattern?
305. What is the Prototype pattern?
306. What is the Observer pattern? Where is it used in real systems?
307. What is the Strategy pattern? How does it relate to OCP and DIP?
308. What is the Decorator pattern? How is it different from inheritance?
309. What is the Adapter pattern? What problem does it solve?
310. What is the Facade pattern?
311. What is the Template Method pattern? How does it use inheritance?
312. What is the Command pattern?
313. What is the Iterator pattern? How does STL implement it?
314. What is the Composite pattern?
315. What is the Bridge pattern? How does it separate abstraction from implementation?
316. What is the Proxy pattern?
317. What is the Chain of Responsibility pattern?
318. What is the State pattern?
319. What is the Flyweight pattern?
320. What is the Visitor pattern? What is double dispatch?
321. What is the Mediator pattern?
322. What is the Memento pattern?
323. What is the difference between structural, creational, and behavioral patterns?
324. Implement a thread-safe Singleton in C++ without using `static` local variables.
325. How would you implement a Factory that creates objects based on a string type name?

---

## 17. SOLID Principles

326. What does SOLID stand for?
327. What is the Single Responsibility Principle (SRP)? Give a violation and fix in C++.
328. What is the Open/Closed Principle (OCP)? How do virtual functions help achieve it?
329. What is the Liskov Substitution Principle (LSP)? Give the Square-Rectangle example.
330. What is the Interface Segregation Principle (ISP)? Give a fat-interface violation example.
331. What is the Dependency Inversion Principle (DIP)? How does dependency injection implement it?
332. How do SOLID principles relate to testability?
333. Can SOLID principles conflict with each other? Give an example.
334. What is coupling? What is cohesion? What is the goal for each?
335. What is tight coupling vs loose coupling? Give a C++ code example of each.
336. What is the Law of Demeter? How does it relate to encapsulation?
337. What is the DRY principle? What is WET code?
338. What is YAGNI (You Aren't Gonna Need It)?
339. What is the difference between design principles and design patterns?

---

## 18. Modern C++ OOP (C++11/14/17)

340. What is `auto` type deduction? How does it affect OOP?
341. What is a lambda expression? Can a lambda capture `this`?
342. What is `std::function`? How does it implement type erasure?
343. What are range-based for loops? How do they work with custom classes? (begin/end iterators)
344. What is `nullptr`? How is it different from `NULL` and `0`?
345. What is `override` keyword? Why should every overriding function use it?
346. What is `final` keyword on a class? On a virtual function?
347. What is a defaulted function (`= default`)? A deleted function (`= delete`)?
348. What is an initializer list (`std::initializer_list<T>`)? How does it enable brace initialization?
349. What is uniform initialization `{}`? What is the "most vexing parse"?
350. What is `constexpr` on a member function vs a constructor?
351. What is a literal class type?
352. What is `[[nodiscard]]` attribute? How is it used with class methods?
353. What is structured bindings (C++17)?
354. What is `std::optional`? When should you return it instead of a pointer?
355. What is `std::variant`? How is it different from inheritance? (discriminated union, no heap, no vtable)
356. What is `std::any`? When would you use it?
357. What is type erasure in C++? How is it implemented?
358. What is `if constexpr` (C++17)? How does it differ from a normal `if`?
359. What is a fold expression (C++17)?
360. What are concepts (C++20)? How do they constrain template parameters?
361. What is `std::span` (C++20)?
362. What is the spaceship operator `<=>` and `std::strong_ordering`?
363. What are coroutines (C++20)? What are `co_await`, `co_yield`, `co_return`?

---

## 19. Advanced & Tricky / Output Prediction

### Output Prediction Questions

364. What is the output? (Multiple inheritance constructor order)
```cpp
class A { public: A() { cout << "A "; } };
class B { public: B() { cout << "B "; } };
class C : public A, public B { public: C() { cout << "C "; } };
int main() { C c; }
// Output: A B C
```

365. What is the output? (Virtual function in constructor)
```cpp
class Base {
public:
    Base() { show(); }
    virtual void show() { cout << "Base\n"; }
};
class Derived : public Base {
public:
    void show() override { cout << "Derived\n"; }
};
int main() { Derived d; d.show(); }
// Output: Base\nDerived
```

366. What is the output? (Object slicing)
```cpp
class Animal { public: virtual string speak() { return "..."; } };
class Dog : public Animal { public: string speak() override { return "Woof"; } };
int main() {
    Dog d;
    Animal a = d;       // sliced
    cout << a.speak();  // Output: ...
}
```

367. What is the output? (Non-virtual destructor)
```cpp
class Base { public: ~Base() { cout << "~Base\n"; } };
class Derived : public Base { public: ~Derived() { cout << "~Derived\n"; } };
int main() {
    Base* b = new Derived();
    delete b;
}
// Output: ~Base   (Derived destructor never called — UB / resource leak)
```

368. What is the output? (Diamond problem without virtual inheritance)
```cpp
class A { public: int x = 10; };
class B : public A {};
class C : public A {};
class D : public B, public C {};
int main() {
    D d;
    // cout << d.x;  // ERROR: ambiguous
    cout << d.B::x;  // Output: 10
}
```

369. What is the output? (Static member shared across objects)
```cpp
class Counter {
    static int count;
public:
    Counter() { count++; }
    static int getCount() { return count; }
};
int Counter::count = 0;
int main() {
    Counter a, b, c;
    cout << Counter::getCount();  // Output: 3
}
```

370. What is the output? (Method hiding vs overriding)
```cpp
class Base { public: void show() { cout << "Base\n"; } };
class Derived : public Base { public: void show() { cout << "Derived\n"; } };
int main() {
    Base* b = new Derived();
    b->show();  // Output: Base  (no virtual → static binding)
}
```

371. What is the output? (Copy constructor vs assignment)
```cpp
class Obj { public: Obj() { cout<<"C "; } Obj(const Obj&) { cout<<"CC "; } };
int main() {
    Obj a;          // C
    Obj b = a;      // CC (copy constructor, NOT assignment)
    Obj c;          // C
    c = a;          // (assignment — no output unless overloaded)
}
// Output: C CC C
```

372. What is the output? (Virtual destructor with inheritance chain)
```cpp
class A { public: virtual ~A() { cout << "~A "; } };
class B : public A { public: ~B() { cout << "~B "; } };
class C : public B { public: ~C() { cout << "~C "; } };
int main() { A* a = new C(); delete a; }
// Output: ~C ~B ~A
```

373. What is the output? (Prefix vs postfix increment in class)
```cpp
class Num {
    int v;
public:
    Num(int v) : v(v) {}
    Num& operator++() { ++v; return *this; }           // prefix
    Num operator++(int) { Num t=*this; ++v; return t; }// postfix
    void print() { cout << v << "\n"; }
};
int main() {
    Num n(5);
    (n++).print();  // Output: 5 (returns old value)
    (++n).print();  // Output: 7 (incremented twice now)
}
```

374. What is the output? (Pure virtual + abstract class instantiation attempt)
```cpp
class Abstract { public: virtual void f() = 0; };
// Abstract a;  // Compile ERROR: cannot instantiate abstract class
Abstract* p;    // OK: pointer is fine
```

375. What is the output? (sizeof with virtual function)
```cpp
class A { int x; };
class B { int x; virtual void f() {} };
int main() {
    cout << sizeof(A) << "\n";  // 4
    cout << sizeof(B) << "\n";  // 16 (on 64-bit: 8 byte vptr + 4 byte int + 4 padding)
}
```

### Advanced Conceptual Tricky Questions

376. Can you make a virtual function inline? What happens?
377. Can a class have two functions with the same name and signature but different return types? (No — compile error)
378. What is the "most vexing parse"? Give an example.
379. Is it possible to call a member function on a null pointer? What happens?
380. What is undefined behavior in C++? Give five examples related to OOP.
381. What is the static initialization order fiasco? How does Meyers Singleton solve it?
382. What happens if two static objects in different translation units depend on each other during initialization?
383. Can a class have a virtual function and no virtual destructor? When is that OK?
384. Can you override a non-virtual function? (No — you can only hide it)
385. What is the difference between `delete ptr` and `ptr->~MyClass()`?
386. Is `dynamic_cast` always safe on a base class pointer? What is required? (polymorphic type)
387. What is the output if you call `typeid` on a non-polymorphic class through a base pointer vs a polymorphic one?
388. What is slicing through a function parameter? How do you prevent it?
389. Can you store polymorphic objects in a `std::vector<Base>` by value? What happens? (slicing)
390. How do you store heterogeneous polymorphic objects? (`vector<unique_ptr<Base>>`)
391. What is the difference between `reinterpret_cast<Derived*>(basePtr)` and `dynamic_cast<Derived*>(basePtr)`?
392. What happens if you use `static_cast` for a downcast but the object isn't actually of that type?
393. Can templates and virtual functions be combined? (Template member functions cannot be virtual)
394. Why can't template member functions be virtual?
395. What is an explicit template instantiation and when would you use it?
396. What is a vtable conflict / vtable ABI issue across shared library boundaries?
397. What is name mangling in C++? How does `extern "C"` affect it?
398. What is the One Definition Rule (ODR)?
399. Can two classes have the same vtable? (Only if one is derived from the other and no overrides)
400. What is a trivial class? What is a standard-layout class?

---

## 20. Rapid Fire — One-Liners

*These are asked verbally in Indian placement interviews to test fluency. Know each in ≤ 20 words.*

401. Can a class be its own member? (No — incomplete type)
402. Can a class have a pointer to itself as a member? (Yes — linked list node)
403. Is a constructor inherited? (Not by default; yes with `using Base::Base`)
404. Can you overload `main()`? (No)
405. What is `auto` used for in return type deduction?
406. What is the difference between `struct` and `class` in one line?
407. Can `virtual` and `static` be combined on a member function? (No)
408. Can `virtual` and `inline` be combined? (Technically yes, but virtual call bypasses inline)
409. What is a concrete class? (A class with no pure virtual functions — can be instantiated)
410. Can destructors have parameters? (No)
411. Can constructors have a return type? (No — not even void)
412. What is `operator new`? Can you overload it? (Yes — for custom allocation)
413. Can you have a reference member in a class? What does it imply for constructors?
414. Can you have a `const` member in a class? What does it imply? (Must be initialized in member initializer list)
415. What is an empty base class? What is Empty Base Optimization (EBO)?
416. What is `std::move_if_noexcept`?
417. Can you delete a void pointer? (Technically UB — destructor not called)
418. What is the difference between deep copy and shallow copy in one sentence?
419. What is a functor? How is it different from a function pointer?
420. What is a lambda? Is it a functor under the hood? (Yes — compiler generates an anonymous class)
421. Can a lambda be stored in `std::function`? (Yes)
422. What is a pure function? Does C++ support them? (No built-in keyword; `[[nodiscard]]` is closest)
423. What is method chaining? Give an example. (`return *this`)
424. What is an immutable object? How do you create one in C++? (`const` members)
425. Can you call `delete` on a stack-allocated object? (No — UB)
426. What does `new` return if allocation fails by default? (throws `std::bad_alloc`)
427. What does `new(std::nothrow)` return on failure? (`nullptr`)
428. What is `std::launder`? When is it needed? (placement new + const/reference members)
429. Can you inherit from `std::string`? Why is it a bad idea? (no virtual destructor)
430. What is the diamond problem in one sentence? (Two bases share a common ancestor, causing ambiguous duplicate subobject)
431. What is RTTI? When must it be enabled? (needed for `dynamic_cast`, `typeid`)
432. What is `decltype`? Give an example.
433. What is `std::declval`? When is it useful in templates?
434. What is ADL (Argument-Dependent Lookup)?
435. What is the difference between `new` and `malloc` in two lines? (ctor/dtor + exception vs null on failure + type)
436. Can you have a `static` local variable in a member function? (Yes — initialized once, persists)
437. What is the object lifetime in C++? (begins at end of initialization, ends at destructor call or deallocation)
438. Can you throw a class object? (Yes — any copy-constructible object can be thrown)
439. What is `std::terminate`? When is it called? (uncaught exception, destructor throws during unwinding, etc.)
440. What is the virtual table overhead in bytes on a typical 64-bit machine? (8 bytes per object — one vptr)

---

## Bonus: Output Prediction Mini-Set (For Practice)

**Q1:** What is printed?
```cpp
class X { public: X() { cout << 1; } ~X() { cout << 2; } };
int main() { X a; X b; }
// Output: 1 1 2 2  (LIFO destruction)
```

**Q2:** What is printed?
```cpp
class Base { public: virtual void f() { cout << "B"; } };
class D1 : public Base { public: void f() override { cout << "D1"; } };
class D2 : public Base { public: void f() override { cout << "D2"; } };
void call(Base& b) { b.f(); }
int main() { D1 d1; D2 d2; call(d1); call(d2); }
// Output: D1D2
```

**Q3:** What is printed?
```cpp
class A { public: int x = 1; virtual void f() { cout << x; } };
class B : public A { public: int x = 2; void f() override { cout << x; } };
int main() { A* a = new B(); a->f(); cout << a->x; }
// Output: 2 1  (f() dispatches to B::f which uses B::x=2; a->x accesses A::x=1)
```

**Q4:** Does this compile? What is wrong?
```cpp
class Singleton {
    Singleton() {}
public:
    static Singleton& get() {
        static Singleton s;
        return s;
    }
    Singleton(const Singleton&) = delete;
    Singleton& operator=(const Singleton&) = delete;
};
Singleton s2 = Singleton::get(); // ?
// COMPILE ERROR: copy constructor is deleted
```

**Q5:** What is printed?
```cpp
struct A { A() { cout << "A"; } ~A() { cout << "~A"; } };
struct B : A { B() { cout << "B"; } ~B() { cout << "~B"; } };
int main() { B b; }
// Output: AB~B~A
```

---

## Study Priority Guide

| Tier | Topics | Interview Frequency |
|------|--------|-------------------|
| 🔴 Must Know | Four pillars, constructors/destructors, virtual functions, vtable, inheritance types, diamond problem, Rule of Three, pure virtual, abstract class | Asked in 95%+ interviews |
| 🟠 High Priority | operator overloading, copy-and-swap, object slicing, virtual destructor, const correctness, static members, RAII, smart pointers | Asked in 70%+ interviews |
| 🟡 Medium | Templates, SOLID, design patterns (Singleton/Factory/Observer/Strategy), CRTP, move semantics, perfect forwarding | Asked in product companies |
| 🟢 Differentiator | vtable memory layout, RTTI internals, multiple inheritance ABI, template metaprogramming, type erasure, `std::variant` vs inheritance | Makes you stand out |

---

*Sources: GeeksforGeeks OOP Interview Prep, InterviewBit OOP Questions, LeetCode Discuss, Adaface C++ Questions, DigitalDefynd Advanced C++, TechInterview.org, Verve AI C++ OOP Guide, Educative.io, CoderPad C++ Guide. Compiled July 2026.*
