function addingZero(num) {
  return num < 10 ? "0" + num : num;
}

function updateclock() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  //   const minutes = now.getMinutes().toString().padStart(2, "0");
  const minutes = addingZero(now.getMinutes());
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "PM" : "AM";

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
  dateElement.textContent = now.toLocaleDateString(undefined, options); // undefined give us local time zone, and it comes in interview
}

updateclock(); // page reload pe turant time aayega neeche wale se 1sec ke baad hota
setInterval(updateclock, 1000);

/* concept = 1

Case 1:
const time = 0 || 12;
0 ek falsy value hai.

Isliye || dusri value le lega → 12.

Result: 12

Case 2:
const time = 1 || 12;
1 ek truthy value hai.

Isliye || wahi pe return kar dega → 1.

Result: 1

Simple samajh lo:

a || b
means: "a truthy hai to a return karo, nahi to b return karo."
*/
