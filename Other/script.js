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