// document.write("Hellow World!!!!")
const body = document.body
const inputEl = document.querySelector("input")
const selectEl = document.querySelector("select")
const btnEl = document.querySelector("button")
var value = parseFloat(inputEl.value)
var gravity;
let result;

btnEl.addEventListener("click", ()=>{
    if(inputEl.value === ""){
        document.querySelector("h5").style.display = "flex"
        document.querySelector("img").style.display = "none"
    }
    else if(typeof(parseFloat(inputEl.value)) === "number" && selectEl.value === "select"){
        document.querySelector("h5").style.display = "flex"
        document.querySelector("h5").innerHTML = "you have not choose a planet yet"
        document.querySelector("img").style.display = "none"
    }
    else if(typeof(parseFloat(inputEl.value)) == "number" && selectEl.value !== "select"){
        document.querySelector("h5").style.display = "flex"
        document.querySelector("h5").innerHTML = `The weight of object on ${selectEl.value.toUpperCase()}`
        document.querySelector("#result").style.display = "flex"
        document.querySelector("#display-result").innerHTML = result
        result = `${(gravity * inputEl.value).toFixed(2)} N`
        document.querySelector("img").style.display = "flex"      
    }         
})
    selectEl.addEventListener("change", ()=>{
        const planet = selectEl.value
        switch(planet){
            case "mercury": 
                gravity = 0.38
                result = `${(gravity * inputEl.value).toFixed(2)} N`
                document.querySelector("img").src = "mercury.png"
                break;
            case "venus":
                gravity = 4.5
                result = `${(gravity * inputEl.value).toFixed(2)} N`
                document.querySelector("img").src = "venus.png"
                break;
            case "mars":
                gravity = 3.45
                result = `${(gravity * inputEl.value).toFixed(2)} N`
                document.querySelector("img").src = "mars.png"
                break;
            case "earth":
                gravity = 9.81
                result = `${(gravity * inputEl.value).toFixed(2)} N`
                document.querySelector("img").src = "earth.png"
                break;
            case "jupiter":
                gravity = 8.90
                result = `${(gravity * inputEl.value).toFixed(2)} N`
                document.querySelector("img").src = "jupiter.png"
                break;
            case "saturn":
                gravity = 12.9
                result = `${(gravity * inputEl.value).toFixed(2)} N`
                document.querySelector("img").src = "saturn.png"
                break;
            case "uranus":
                gravity = 11.2
                result = `${(gravity * inputEl.value).toFixed(2)} N`
                document.querySelector("img").src = "uranus.png"
                break;
            case "neptune":
                gravity = 3.45
                result = `${(gravity * inputEl.value).toFixed(2)} N`
                document.querySelector("img").src = "neptune.png"
                break;
            case "pluto":
                gravity = 4.33
                result = `${(gravity * inputEl.value).toFixed(2)} N`
                document.querySelector("img").src = "pluto.png"
                break;
            case "moon":
                gravity = 2.4
                result = `${(gravity * inputEl.value).toFixed(2)} N`
                document.querySelector("img").src = "moon.png"
                break;
        }
    }) 