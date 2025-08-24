function searchValue() {
  let searchValue = document.querySelector(".search-box input").value.toLowerCase();
  let items = document.querySelectorAll(".cartoon");
  

  let alertt = false; 

  items.forEach((item) => {
    let h1 = item.querySelector("h1").textContent.toLowerCase();

    if (h1.includes(searchValue)) {
      item.style.display = "";
      alertt = true;
    } else {
      item.style.display = "none";
    }
  });

  if (!alertt && searchValue !== "") {
    alert("No student found!");
  }
}