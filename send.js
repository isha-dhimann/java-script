let form = document.querySelector(".Form");
function send(button) {
  const parentDiv = button.parentElement;
  const msg = parentDiv.querySelector(".otp-message");
  msg.style.opacity = "1";
   
  setTimeout(() => {
    msg.style.opacity = "0";
    button.style.opacity = "1";
  }, 3000);
}

document.querySelectorAll(".otp").forEach((btn) => {
  btn.addEventListener("click", function () {
    send(this);
  });
});

