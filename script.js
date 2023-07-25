const btnEl = document.getElementById("btn");
btnEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnEl.offsetLeft;
  // console.log(x)
  const y = event.pageY - btnEl.offsetTop;
  // console.log(y)
  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});
