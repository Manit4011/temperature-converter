let temp = document.getElementById("tempval");

let first = document.getElementById("c to f");
let second = document.getElementById("f to c");
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let val
submit.onclick=function(){
    val=Number(temp.value);
    if(first.checked){
        
        result.textContent= (val * 9/5 + 32).toFixed(1) +"F";
        
    }
    else if(second.checked){
        result.textContent= ((val - 32) * 5/9).toFixed(1) + "C";
    }
    else{
        result.textContent="select the unit first!!";
    }
}