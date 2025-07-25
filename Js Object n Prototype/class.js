class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname || "";
  }
  getFullname() {
    return `${this.fname} ${this.lname}`.trim();
  }
}
// as a programmer aap constructor nahi banaoge toh default constructor ban jata
/*
Default constructor kebal tab kaam karega jab tum parameters expect nahi kar rahe ho.

Agar class ka usage aisa ho:
const p = new Person("rohan"); // Error aayega agar constructor defined nahi hai
*/
const p1 = new Person("rohan", "rai");
const p2 = new Person("ayush");

console.log(p1);
console.log(p1.getFullname());

console.log(p2);

//

class A {
  funInsideA() {}
}

// class B { // original aaise likha hu
//   funInsideB() {}
// }
class B extends A {
  funInsideB() {}
}

const p = new B();
p.funInsideA(); // ye access krna hai,
// toh extends use karo
p.funInsideB();

// Most Important

/*

Agar tum B ko A aur C dono se inherit karwana chahte ho, toh JavaScript directly multiple inheritance (like class B extends A, C) support nahi karta.

Lekin indirect tarike hain — jaise mixin approach.

🔥 Tumhara Scenario:
class A {
  funInsideA() {
    console.log("A");
  }
}

class C {
  funInsideC() {
    console.log("C");
  }
}

class B extends A {
  funInsideB() {
    console.log("B");
  }
}
Agar tum B ko A aur C dono ka functionality dena chahte ho, toh:

✅ ✅ Solution: Mixin pattern

function mixin(target, ...sources) {
  Object.assign(target.prototype, ...sources.map(s => s.prototype));
}
🧪 Full Example:
class A {
  funInsideA() {
    console.log("A");
  }
}

class C {
  funInsideC() {
    console.log("C");
  }
}

class B extends A {
  funInsideB() {
    console.log("B");
  }
}

// Mixin C into B
mixin(B, C);

const p = new B();

p.funInsideA(); // A se
p.funInsideB(); // B se
p.funInsideC(); // C se (mixin se)
🧠 Behind the Scene:
Object.assign(target.prototype, source.prototype) → C ke methods B ke prototype pe copy kar diye jaate hain.

super ka use nahi hota mixin mein — yeh sirf methods ka shallow copy karta hai.

⚠️ Caution:
Agar A aur C dono mein same method ho (funInsideX()), toh last copied wins.

Mixin static methods ko copy nahi karta. Agar chahiye, toh separately handle karna padega.

🏁 TL;DR:
Multiple inheritance nahi hota JS mein directly, lekin agar B ko A aur C dono ka behaviour chahiye:

Use extends A

Then use: mixin(B, C);

Ready-made use case chahiye toh batao – e.g. logging, timestamp, etc. mixin karke bana ke dikhata hoon.

Agar D bhi hota, aur tum chahte:

class B ko A, C, aur D sabka functionality mile...

Toh extends se toh sirf ek parent (A) milega, baaki sab ko mixin se lana padega.

✅ Example: A, C, D — All in B

class A {
  funA() {
    console.log("A");
  }
}

class C {
  funC() {
    console.log("C");
  }
}

class D {
  funD() {
    console.log("D");
  }
}

class B extends A {
  funB() {
    console.log("B");
  }
}

// --- Mixin function ---
function mixin(target, ...sources) {
  Object.assign(target.prototype, ...sources.map(s => s.prototype));
}

// 👇 Mix C and D into B
mixin(B, C, D);

const p = new B();

p.funA(); // from A (via extends)
p.funB(); // from B
p.funC(); // from C (via mixin)
p.funD(); // from D (via mixin)
💡 Notes:
Class	How it’s connected to B	Method Access
A	extends	Native inheritance (super works)
C	mixin	Copied methods only
D	mixin	Copied methods only

✅ Bonus: Mixin as reusable utility (reusable mixins)
const C_Mixin = {
  funC() {
    console.log("C");
  }
};

const D_Mixin = {
  funD() {
    console.log("D");
  }
};

class B extends A {
  funB() {
    console.log("B");
  }
}
Object.assign(B.prototype, C_Mixin, D_Mixin);
⚠️ Limitations of Mixins:
super doesn’t work properly for mixed-in methods.

Conflicts: If C and D have same method name, last one wins.

Not suitable for complex inheritance trees (but okay for utilities and shared behaviour).

🔚 Summary:

extends A

mixin(B, C, D) to add rest

Now p can access A, B, C, and D methods

*/

/*

✅ Option 1: Ek baar utility function bana lo

function mixin(target, ...sources) {
  Object.assign(target.prototype, ...sources.map(s => s.prototype));
}
Fir use karo:

mixin(B, C, D);
Yeh ek reusable helper function ban jaata hai. Baad mein multiple jagah use kar sakte ho.

✅ Option 2: Manually bhi kar sakte ho (agar simple use ho)

Object.assign(B.prototype, C.prototype, D.prototype);
But agar tum baar baar kar rahe ho ya future-proof banana hai, toh mixin() function likhna better rahega.


*/
