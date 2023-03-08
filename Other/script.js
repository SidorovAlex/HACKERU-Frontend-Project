import runners from "./animals.js";

//#region Color picker
const redInp = document.querySelector("#r");
const greenInp = document.querySelector("#g");
const blueInp = document.querySelector("#b");
const colorBlock1 = document.querySelector("#color-block1");
const colorBlock2 = document.querySelector("#color-block2");
const firstBtn = document.querySelector("#firstBtn")
const secondBtn = document.querySelector("#secondBtn")

firstBtn.addEventListener("click",()=>{
    colorBlock1.style.backgroundColor =`rgb(${redInp.value},${greenInp.value},${blueInp.value})`;
})
secondBtn.addEventListener("click",()=>{
    colorBlock2.style.backgroundColor =`rgb(${redInp.value},${greenInp.value},${blueInp.value})`;
})
//#endregion Color picker

//#region Array sorting
const numInp= document.querySelector("#numToArray");
const addNumBtn = document.querySelector("#addNumBtn");
const sortArrBtn=document.querySelector("#sortArrBtn");
const showArrBtn = document.querySelector("#showArrBtn");
const showArr=document.querySelector("#showArr");

let arr = [];
addNumBtn.addEventListener("click",()=>{
    if(numInp.value)
        arr.push(parseInt(numInp.value))
    numInp.value="";
})
showArrBtn.addEventListener("click",()=>{
    showArr.textContent=""
    showArr.textContent+="[";
    for(let i=0;i<arr.length;i++){
        showArr.textContent+=arr[i];
        if(i!==arr.length-1)
            showArr.textContent+=',';
    }
    showArr.textContent+="]";
});
sortArrBtn.addEventListener("click",()=>{
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1])
        {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] =temp;
            i=-1;
        }
    }
})
//#endregion

//#region gamble games

const zeroBtn = document.querySelector("#zeroLine");
const choseAnimalBtn = document.querySelector("#choseAnimal");
const animalConteiner =document.querySelector(".animal-conteiner");

let stepCounter=[0,0,0,0];
const initCounter = ()=>{
    stepCounter=[0,0,0,0];
}
const randAnimal = () =>{
    let rand = Math.floor(Math.random()*4);
    let animals=["dog","horse","duck","chick"]
    return animals[rand];
}
const showAnimal=(animal,index)=>{
    const span = document.createElement("span");
    const br = document.createElement("br");
    setTimeout(animalMove(animal,index),1000);
    span.textContent=`Chosen animal is: ${animal.name} steps:${stepCounter[index]}`;
    animalConteiner.appendChild(span);
    animalConteiner.appendChild(br);

    zeroBtn.addEventListener("click",()=>{
        initCounter();
        if(animalConteiner.contains(span) && animalConteiner.contains(br)){
            animalConteiner.removeChild(span);
            animalConteiner.removeChild(br);
        }
    });
}
const animalMove = (animal,index) =>{
    stepCounter[index]+=animal.step;
}
const animalVoice = (animal) =>{
    const span = document.createElement("span")
    const br = document.createElement("br");
    span.textContent = animal.voice;
    animalConteiner.appendChild(span);
    animalConteiner.appendChild(br);
    zeroBtn.addEventListener("click",()=>{
        if(animalConteiner.contains(span) && animalConteiner.contains(br)){
            animalConteiner.removeChild(span);
            animalConteiner.removeChild(br);
        }
        
    });
}


choseAnimalBtn.addEventListener("click",()=>{
    let randomAn = randAnimal();
    switch(true){
        case randomAn==="dog":
            showAnimal(runners.dog,0);
            animalVoice(runners.dog)
            break;
        case randomAn==="horse":
            showAnimal(runners.horse,1)
            animalVoice(runners.horse)
            break;
        case randomAn==="duck":
            showAnimal(runners.duck,2)
            animalVoice(runners.duck)
            break;
        case randomAn==="chick":
            showAnimal(runners.chick,3)
            animalVoice(runners.chick)
            break;
    }
})

//#endregion

//#region Isolate the rich characters

//#endregion