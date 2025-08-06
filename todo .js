function addItem() {
  const text = document.getElementById("textItem").value;
  const date = document.getElementById("dateItem").value;
  const month = document.getElementById("monthItem").value;
  const time = document.getElementById("timeItem").value;

  const list = document.getElementById("list");

  list.innerHTML += `
    <li>
      <span>${text}</span>
      <span>${date}</span>
      <span>${month}</span>
      <span>${time}</span>
      <button onclick="this.parentElement.remove()">Remove</button>
    </li>
  `;
}
