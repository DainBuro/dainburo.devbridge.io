const input_el = document.getElementById("input-el")
const button_el = document.getElementById("button-el")
const result_el = document.getElementById("result-el")
let parts = []

button_el.addEventListener("click", function() {
    let line = input_el.value
    parts = line.split(',')
    console.log(line)
    result_el.textContent = convertToHex(parts)
})

function convertToHex(rgb) {
    let result = "#"
    for(let i = 0; i < rgb.length; i++) {
        rgb[i] = parseInt(rgb[i])
        let hex = rgb[i].toString(16)
        if(hex.length === 1) {
            result += "0"+ hex
        }
        else result += hex
    }
    return result
}