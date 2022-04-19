let display = document.getElementById('display')

let calculate=(number)=>{
    display.value+=number;
}
let result=()=> {
    
    try {
      display.value=eval(display.value); 
    }
    catch(err){
       display.value="error head";
    }
}

function del() {
    display.value=display.value.slice(0,-1);
}
function Ac() {
    display.value= "";
}
