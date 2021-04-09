function expression(value){   
    let alpha=value;
    let length=0;
    let arr=[];    
    if (alpha==="="){
        try{
            document.getElementById("result").value=eval(document.getElementById("statement").value);
        }
        catch(e){
            if (e instanceof SyntaxError) {
                alert(e.message);
            }else{
                throw e;
            }
        }        
    }else if(alpha==="Clear"){
        document.getElementById("result").value="";
        document.getElementById("statement").value="";
    }else if(alpha==="X"){
        let str=document.getElementById("statement").value;       
        arr=(str.split(""));
        arr.pop();
        str=arr.join("");
        document.getElementById("statement").value=str;
        document.getElementById("result").value="";        
    }else{
         document.getElementById("statement").value+=alpha;         
    } 
}