let str="";
let buttons = document.getElementsByClassName('button');
Array.from(buttons).forEach((item)=>{
    item.addEventListener("click",(e)=>{
        if(e.target.innerHTML=='='){
            str=eval(str);
            document.querySelector("input").value=str;
        }
        else if(e.target.innerHTML=='AC'){
            str="";
            document.querySelector("input").value=str;
        }
        else if(e.target.innerHTML=='C'){
            str=str.substring(0, str.length-1);
            document.querySelector("input").value=str;
        }
        else{
            str=str+e.target.innerHTML;
            document.querySelector("input").value=str;
        }
        console.log(e.target.innerHTML);
    })
})
