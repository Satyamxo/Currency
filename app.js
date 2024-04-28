
const doubleSelect = document.querySelectorAll(".double select");
const btn = document.querySelector(".bot");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");


for(let select of doubleSelect)
{
    for(currycode in countryList)
    {
        let newOption = document.createElement("option");
        newOption.innerText=currycode;
        newOption.value.currycode;
        if(select.name==="from" && currycode==="USD")
        {
            newOption.selected="selected";
        }
        else if(select.name==="to" && currycode==="INR")
        {
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) =>{
        update(evt.target);
    });
}
    const update = (element) =>{
       let currycode=element.value;
       let countryCode=countryList[currycode];
       let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
       let img = element.parentElement.querySelector("img");
       img.src = newSrc;
    };
    btn.addEventListener("click", (evt) => {
        evt.preventDefault();
        let amount = document.querySelector(".amount input");
        let exchangeText=document.querySelector(".output");
        let amountValue = amount.value;
        if (amountValue===""||amountValue<1)
        {
            amountValue=1;
            amount.value="1";
        }
        exchangeText.innerText="Getting Exchange rate......";
        const mainUrl  = `https://v6.exchangerate-api.com/v6/bfb3a4579d587a3c3eb12a4f/latest/${fromCurr.value}`;
        fetch(mainUrl).then(response => response.json()).then(result=>{
            let ExchangeRate = result.conversion_rates[toCurr.value];
            let totalExchange =(amountValue* ExchangeRate).toFixed(2);
            exchangeText.innerText=`${amountValue} ${fromCurr.value} = ${totalExchange} ${toCurr.value}`
        })

    });