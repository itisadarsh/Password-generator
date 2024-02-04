let ranger=document.getElementById('ranger');
let value=ranger.value;



ranger.oninput=function(){

    document.getElementById('len').innerText=ranger.value;
    value=ranger.value;
   
    ranger.style.backgroundSize=((ranger.value-ranger.min)*100/ranger.max-ranger.min)+"% 100%";
   
}

// document.getElementById("generator").addEventListener('click',generate());

function generate(){

        let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lower="qwertyuioplkjhgfdsazxcvbnm";
        let num="1234567890";
        let symbol="!@#$%^&*()_+/?:";

      let isLower=  document.getElementById('lower').checked;
      let isUpper=  document.getElementById('upper').checked;;
      let isNumber=  document.getElementById('numbers').checked;
      let isSymbol=  document.getElementById('symbol').checked;

      let rng=(isLower?1:0)+(isUpper?1:0)+(isNumber?1:0) +(isSymbol?1:0);
      console.log(isLower);
      var password="";
      if(isLower ||isUpper || isNumber || isSymbol){
        if(isLower && isUpper && isNumber && isSymbol && value<4){
            value=4;
            ranger.value=value;
            document.getElementById('len').innerText=ranger.value;

        }

           
        for(let i=0;i<value;i++){

            
            let k=Math.floor(Math.random()*rng);
            let p=0;

            let flag=false;
            if(isLower){

                let k=Math.floor(Math.random()*2);
                if(k==1){
                    flag=true;
                    p=Math.floor(Math.random()*25);
                    password+=lower[p];
                   }
            }

            if(isUpper && !flag){
                let k=Math.floor(Math.random()*2);
                if(k==1){
                    flag =true;
                    p=Math.floor(Math.random()*25);
                    password+=upper[p];
                    
                }
            }
            if(isNumber && !flag){
                let k=Math.floor(Math.random()*2);
                if(k==1){
                    flag =true;
                p=Math.floor(Math.random()*10);
                password+=num[p];
                }
               
            }
            if(isSymbol && !flag){
                let k=Math.floor(Math.random()*2);
                if(k==1){
                    flag =true;
                    p=Math.floor(Math.random()*15);
                    password+=symbol[p];
                }
            }

            if(!flag){
                if(isLower){
                    p=Math.floor(Math.random()*25);
                    password+=lower[p];
                }
                else if(isUpper){
                    p=Math.floor(Math.random()*25);
                    password+=upper[p];
                }
                else if(isNumber){
                    p=Math.floor(Math.random()*10);
                    password+=num[p];
                }
                else{
                    p=Math.floor(Math.random()*15);
                    password+=symbol[p];
                }
            }

        }
        
        
    }
    document.getElementById('password').innerText=password;
    console.log(rng);

     if  (password.length>=16 || (password.length>=8 &&  rng>=3 )){
        document.getElementById('strength').style.cssText='background-color:green';
        document.getElementById('strength').classList.add('blur');
    }
    else if(password.length>=12 && rng>=2){
        document.getElementById('strength').style.cssText='background-color:yellow';
    }
    else{
        document.getElementById('strength').style.cssText='background-color:red';
    }

  
}

let copy_btn=document.getElementById('copy-btn');


async function copy(){
    let pass=document.getElementById('password');
    try{
    await navigator.clipboard.writeText(pass.innerText);
    console.log('copy..');
    document.getElementById("copy-msg").innerText="Copied";
    document.getElementById("copy-msg").style=cssText="transform: scale(1);opacity:1"
    
    setTimeout(()=>{
        document.getElementById("copy-msg").innerText="";
        document.getElementById("copy-msg").style=cssText="transform: scale(0);opacity:0"
    },1500);
}
catch(e){console.log("Failed to Copy !! "+e)

}

 
    // if (document.selection) {
    //     var range = document.body.createTextRange();
    //     range.moveToElementText(pass);
    //     range.select().createTextRange();
    //     document.execCommand("copy");
    //   } 
    //   else if (window.getSelection) {
    //     var range = document.createRange();
    //     range.selectNode(pass);
    //     window.getSelection().addRange(range);
    //     document.execCommand("copy");
    //   }
}





