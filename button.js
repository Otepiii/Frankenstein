const btn = document.querySelector(".button")
const modal = document.querySelector(".modal")
const span = document.querySelector(".close")
const day1 = document.querySelector(".day1")
const header = document.querySelector(".header")

btn.addEventListener("click", function () {
  modal.style.display = "block"
  day1.style.filter = "blur(30px)"
  header.style.filter = "blur(30px)"
})

span.addEventListener("click", function () {
  modal.style.display = "none"
  day1.style.filter = "blur(0px)"
  header.style.filter = "blur(0px)"
})
