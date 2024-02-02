let num = 0;
const valueEl = document.querySelector(".value");
const btnEl = document.querySelectorAll(".btn");
// const resetEl = document.querySelector(".reset");
// const plusEl = document.querySelector(".plus");
// console.log(btnEl);

btnEl.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const styles = event.currentTarget.classList;
    if (styles.contains("minus")) {
      num--;
    } else if (styles.contains("plus")) {
      num++;
    } else {
      num = 0;
    }
    valueEl.textContent = num;

    if (num > 0) {
      valueEl.style.color = "green";
    } else if (num < 0) {
      valueEl.style.color = "red";
    } else {
      valueEl.style.color = "black";
    }
  });
});
