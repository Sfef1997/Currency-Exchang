let select = document.querySelectorAll("select"),
inputCurr =document.querySelector(".input-curr"),
output =document.querySelector(".output-curr"),
convertBtn =document.querySelector(".btn");

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then(data => data.json())
  .then((data) => {
    const entries= Object.entries(data)

    for(let i = 0 ; i < entries.length; i++ ){
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
    }
  });

  function convert(){
   let inputCurrency = inputCurr.value;
   if(select[0].value != select[1].value){  
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputCurrency}&from=${select[0].value}&to=${select[1].value}`)
  .then(val => val.json())
  .then((val) => {
    output.value = ((Object.values(val.rates)[0].toFixed(2)))
  });
   }else{
    alert("please Enter Different Currency")
   }
  }



