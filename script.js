const codeDiv = document.querySelector('#adviceCode');
const adviceDiv = document.querySelector('#advice');
const diceDive = document.querySelector('#dice');



diceDive.addEventListener('click', () => {
    getAdvice();
})


function getAdvice(){



fetch('https://api.adviceslip.com/advice')
     .then(res =>{
         return (res.json());
     }).then(data =>{
        let adviceObj = data.slip;

        codeDiv.innerHTML = `<h1>Advice #${adviceObj.id}</h1>`
        adviceDiv.innerHTML = `<p>"${adviceObj.advice}"</p>`
         
     }).catch(error =>{
         console.log(error);
         alert("Sorry, an error has ocurred, try again in a few minutes")
     })

    }