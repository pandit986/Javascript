const buttons = document.querySelectorAll(".button");

// console.log(buttons);

const body = document.querySelector("body");

buttons.forEach((button) => {
  //   console.log(button);
  //   let color = button.id;
  button.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target);
    body.style.backgroundColor = `${button.id}`;
  });
});
