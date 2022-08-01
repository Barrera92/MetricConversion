/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


// 20 meters = 65.616 feet | 20 feet = 6.096 meters
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos

const meters = document.querySelector(".meters")
const liters = document.querySelector(".liters")
const kilograms = document.querySelector(".kilograms")

// meters.textContent = "Hello"
const input = document.querySelector(".box-one input")

document.querySelector("#convert-btn").addEventListener("click", () => {
    // console.log(input.value)
    let cuentaMetros = `${input.value} meters = ${(input.value * 3.281).toFixed(2)} feet / ${input.value} Feet = ${(input.value / 3.281).toFixed(2)}`
    meters.textContent = cuentaMetros

    let cuentaLitros = `${input.value} liters = ${(input.value * 0.264).toFixed(2)} gallons / ${input.value} Gallons= ${(input.value / 0.2641).toFixed(2)}`
    liters.textContent = cuentaLitros

    let cuentaKilos = `${input.value} meters = ${(input.value * 2.204).toFixed(2)} feet / ${input.value} Pounds = ${(input.value / 2.204).toFixed(2)}`
    kilograms.textContent = cuentaKilos

})


