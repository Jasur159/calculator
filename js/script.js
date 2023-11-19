let allButtons = document.getElementById("buttons");
const ValuePlace = document.getElementById("result");
for(let i = 0; i<allButtons.childNodes.length;i+=1){
    if(i%2!=1)continue;
    allButtons.childNodes[i].addEventListener("click", ()=>{
        let ButtonsValue = allButtons.childNodes[i].textContent;
        if(ButtonsValue == 'C'){
            clearResult();
        }else if(ButtonsValue == "="){
            calcResult();
        }else{
            AppendResult(ButtonsValue);
        }
    })
}
 function clearResult(){
ValuePlace.value = "";
 };
 function calcResult(){
    ValuePlace.value = eval(ValuePlace.value);
 };
 function AppendResult(ButtonsValue){
  ValuePlace.value += ButtonsValue;
 }
