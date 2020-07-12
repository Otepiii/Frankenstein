const searchBox = document.querySelector("#gif-search")
const gifBtn = document.querySelector(".day2 .button")

const api = {
  base: "https://api.giphy.com/v1/gifs/search?q=",
  key: "dsqUShGIMi63XRVd1oCNqOCeOW1hV1A5",
}

searchBox.addEventListener("keypress", setQuery)

gifBtn.addEventListener("click", function () {
  getGif(searchBox.value)
})

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getGif(searchBox.value)
  }
}

function getGif(query) {
  fetch(`${api.base}+${query}+&limit=1&api_key=${api.key}`)
    .then((gif) => {
      return gif.json()
    })
    .then(displayGifs)
  clearInput(searchBox)
}

function displayGifs(gif) {
  let gifToShow = gif.data[0].images.original.url
  let gifContainer = document.querySelector(".gif-container")

  gifContainer.innerHTML = ` <img src="${gifToShow}" alt=""> `
}

function clearInput(query) {
  query.value = ""
}
