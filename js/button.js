const btn = document.querySelector(".button")
const modal = document.querySelector(".modal")
const span = document.querySelector(".close")
const day1 = document.querySelector(".day1")
const body = document.getElementsByTagName("body")[0]

btn.addEventListener("click", function () {
  modal.style.display = "block"
  day1.style.filter = "blur(5px)"
  body.classList.add("show-modal")
})

span.addEventListener("click", function () {
  modal.style.display = "none"
  day1.style.filter = "blur(0px)"
  body.className -= "show-modal"
})
