const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"

const dropdownSelect = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button")

for(let select of dropdownSelect){
    for(currencyCode in countryList){
        // console.log(currencyCode, countryList[currencyCode])
        let option = document.createElement("option");
        option.innerText=currencyCode;
        option.value = currencyCode;
        if (select.name === "from" && currencyCode === "USD"){
            option.selected = true;
        } else if (select.name === "to" && currencyCode === "INR"){
            option.selected = true;
        }
        select.append(option);
    }

    select.addEventListener("change", (evt) =>{
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currencyCode = element.value;
    let countryCode = countryList[currencyCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img")
    img.src = newSrc;
}

btn.addEventListener("click", (evt) =>{
    evt.preventDefault();
})