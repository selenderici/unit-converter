const numEl = document.getElementById("num-el")
const convertBtn = document.getElementById('convert-btn')
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const unitsEl = [lengthEl, volumeEl, massEl]
const unitsFact = [3.281, 0.264, 2.204]
const metric = ["meters", "liters", "kilos"]
const imperial = ["feet", "gallons", "pounds"]

numEl.addEventListener("change", function () {
    return numEl.value
})

convertBtn.addEventListener("click", function () {
    for (let i = 0; i < 3; i++) {
        if (numEl.value === "" | numEl.value === " ") {
            unitsEl[i].textContent = ""
        } else {
            unitsEl[i].textContent = `${numEl.value} ${metric[i]} = ${(numEl.value * unitsFact[i]).toFixed(3)} ${imperial[i]} | ${numEl.value} ${imperial[i]} = ${(numEl.value / unitsFact[i]).toFixed(3)} ${metric[i]}`
        }
    }
})

