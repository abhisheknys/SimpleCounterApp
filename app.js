document.addEventListener("DOMContentLoaded", () => {
   const screen = document.getElementById("screen");
   const incrementBtn = document.getElementById("incrementBtn");
   const decrementBtn = document.getElementById("decrementBtn");
   const resetBtn = document.getElementById("resetBtn");

   let count = 0;

   function updateScreen() {
       screen.textContent = count;
       screen.classList.add("bounce");
       setTimeout(() => {
           screen.classList.remove("bounce");
       }, 300);
   }

   incrementBtn.addEventListener("click", () => {
       count++;
       updateScreen();
   });

   decrementBtn.addEventListener("click", () => {
       count--;
       updateScreen();
   });

   resetBtn.addEventListener("click", () => {
       count = 0;
       updateScreen();
   });

   updateScreen();
});
