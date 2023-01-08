const selectedColor = document.getElementById("selected-color")
const colorScheme = document.getElementById("color-scheme")
const getScheme = document.getElementById("get-scheme")
const colorSection = document.getElementById("color-section")

getScheme.addEventListener("click", renderColors)

function renderColors() {
  let html = ""
  const schemeChoice = colorScheme.value
  const hex = selectedColor.value.slice(1)

  fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${schemeChoice}`)
    .then((res) => res.json())
    .then((data) => {
      const colors = data.colors
      for (let color of colors) {
        html += `<div class="color" style="background:${color.hex.value}"><span>${color.hex.value}</span></div>`
      }

      colorSection.innerHTML = html
    })
}
