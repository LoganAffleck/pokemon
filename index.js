import player from "./01_Create_Player/player.js"

let checkType = (value, type) => {
    if (typeof value === type) {
        return true;
    } else {
        console.error(`${value} is expected to be a ${type} but is a ${typeof value}`);
        return false;
    }
}

if(checkType(player.portrait, "string")) document.querySelector("#playerImage").src = player.portrait

if(checkType(player.name, "string")) document.querySelector("#name").innerHTML = player.name
if(checkType(player.age, "number")) document.querySelector("#age").innerHTML = player.age
if(checkType(player.region, "string")) document.querySelector("#region").innerHTML = player.region
if(checkType(player.money, "number")) document.querySelector("#money").innerHTML = player.money

if(player.bag) {
   for (const [key, value] of Object.entries(player.bag)) {
       // Add a div for each bag item
         let bagItem = document.createElement("div")
            bagItem.classList.add("bagItem")
            bagItem.id = key
            bagItem.innerHTML = key.charAt(0).toUpperCase() + key.slice(1) + ": " + value.length
            document.querySelector("#bag-pockets").appendChild(bagItem)
        // Loop through each value's array and add a div for each item
        value.forEach(item => {
            let itemDiv = document.createElement("div")
                itemDiv.classList.add("item")
                itemDiv.innerHTML = item.name
                bagItem.appendChild(itemDiv)
        })

        // Add a hr tag after each bag item
        let hr = document.createElement("hr")
            hr.classList.add("bagItemHr")
            bagItem.appendChild(hr)
    }
}