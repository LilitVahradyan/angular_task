let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    numbersArray = [],

    numBtn = document.querySelector('#number'),
    txt =  document.querySelector('.txt'),
    modal = document.querySelector('#modal'),
    cancelBtn = document.querySelector('#cancel'),
    retryBtn = document.querySelector('#retry');


function returnNumber(){   
    let randomValue = arr[Math.floor(Math.random() * arr.length)];
    
    if(numbersArray.indexOf(randomValue) == -1){
        numbersArray.push(randomValue);
        txt.innerHTML = numbersArray.join(',');
    }else{
        returnNumber();
    }

    if(numbersArray.length == arr.length){
        modal.style.display = "block";
        numbersArray = [];
        numBtn.disabled = true;   
    }
}

function cancelClicked(){
    modal.style.display = "none";
    numBtn.disabled = false;
}

function retryClicked(){
    numBtn.disabled = false;
    modal.style.display = "none";
    txt.innerHTML = " ";
}

numBtn.addEventListener('click', returnNumber);
cancelBtn.addEventListener('click', cancelClicked);
retryBtn.addEventListener('click', retryClicked);