/**
 * Asynchronous JavaScript Practice
 */

// =====================================================
// 1. CALLBACK
// একটা ফাংশনকে অন্য ফাংশনের ভেতরে আর্গুমেন্ট হিসেবে পাঠানো,
// যেটা কাজ শেষ হলে পরে call করা হয়।
// =====================================================

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Zihad", sayBye);
// Output:
// Hello Zihad
// Bye!

// =====================================================
// 2. CALLBACK HELL
// একটার পর একটা async কাজ করতে গিয়ে callback-এর ভেতরে
// callback জমে যায়, কোড ডানদিকে সরে যায় (Pyramid of Doom)।
// =====================================================

setTimeout(() => {
  console.log("Step 1: Order placed");
  setTimeout(() => {
    console.log("Step 2: Food cooked");
    setTimeout(() => {
      console.log("Step 3: Food delivered");
    }, 1000);
  }, 1000);
}, 1000);

// =====================================================
// 3. PROMISE
// ভবিষ্যতে একটা রেজাল্ট দেওয়ার প্রতিশ্রুতি।
// সফল হলে resolve(), ব্যর্থ হলে reject()।
// রেজাল্ট নেওয়া হয় .then() দিয়ে, error ধরা হয় .catch() দিয়ে।
// =====================================================

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve("Promise: Data loaded successfully");
    } else {
      reject("Promise: Something went wrong");
    }
  }, 4000);
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// =====================================================
// 4. ASYNC / AWAIT
// Promise-কে সহজভাবে লেখার উপায়।
// await দিয়ে Promise শেষ হওয়া পর্যন্ত অপেক্ষা করা হয়,
// error ধরা হয় try/catch দিয়ে।
// =====================================================

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Async/Await: Data received"), 5000);
  });
}

async function showData() {
  try {
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

showData();
