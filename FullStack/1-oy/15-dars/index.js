const h2 = document.querySelector("h2")
const list = document.querySelector(".list")
const body = document.querySelector("body")

const li = document.createElement("li")
const divEl = document.createElement("div")
li.textContent = "nok"

list.append(li)
for(let i = 0; i < 10; i++){
    list.innerHTML += `<li> behi ${i} </li>`
}

divEl.append(list)
body.append(divEl)