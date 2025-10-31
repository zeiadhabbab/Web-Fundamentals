// =============================
// JavaScript Debugging Examples
// =============================

// 1. Logic Bug Example
function calculateAverage(numbers) {
  console.log("📊 Input numbers:", numbers);
  
  let total = 0;
  for (let i = 0; i < numbers.length; i++) { // ❌ off-by-one bug (should be <)
    total += numbers[i];
  }

  const avg = total / numbers.length;
  console.log("✅ Average calculated:", avg);
  return avg;
}

//calculateAverage([10, 20, 30, 40, 50]);

// 2. Type Error Example
function greetUser(user) {
  console.log("👤 User object:", user);
  
  try {
    console.log(`Hello, ${user.name.toUpperCase()}!`);
  } catch (err) {
    console.error("❌ Error greeting user:", err.message);
  }
}

//greetUser({ name: "Alice" });

// 3. Performance Debug Example
function findLargest(numbers) {
  console.time("findLargest"); // Start timing

  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  console.timeEnd("findLargest"); // End timing
  console.log("🏆 Largest number is:", max);
  return max;
}

// 4. Debugging API Example
async function fetchData(url) {
  console.log("🌍 Fetching data from:", url);
  try {
    const res = await fetch(url);
    console.log("🔢 Response status:", res.status);
    const data = await res.json();
    console.table(data);
    return data;
  } catch (err) {
    console.error("🚨 Failed to fetch data:", err);
  }
}



function callUser(){
    let user = {};
    user["1234"] = true;
    alert(user["1234"]); // true

    let key = "1234";
    alert(user[key]); // true

    user.name = "John";
    // Dot notation cannot use a variable name as a key:
    let k = "name";
    alert(user.k); // undefined (looks for literal 'k')
    alert(user[k]);
}
callUser()