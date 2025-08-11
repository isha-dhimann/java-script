let count = 0;
  const counterDisplay = document.getElementById("countValue");

  document.getElementById("increment").addEventListener("click", function () {
    count++;
    counterDisplay.textContent = count;
  });

  document.getElementById("decrement").addEventListener("click", function () {
    count--;
    counterDisplay.textContent = count;
  });

  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const resultDisplay = document.getElementById("result");

  document.getElementById("addBtn").addEventListener("click", function () {
    let sum = Number(num1.value) + Number(num2.value);
    resultDisplay.textContent = "Result: " + sum;
  });

  document.getElementById("subBtn").addEventListener("click", function () {
    let diff = Number(num1.value) - Number(num2.value);
    resultDisplay.textContent = "Result: " + diff;
  });

 