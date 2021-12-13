console.log("this is app");
// function resetFun(){
//     console.log("insite fun")
//     document.getElementById("reset").style="display:none";
// }

function showImage(){
    console.log('insite showImage');
    var arr=[];
    
    while(arr.length<6){
        let rd=Math.floor(Math.random()*5)+1;
        if(!arr.includes(rd)){
            arr.push(rd);
        var mg=document.createElement('img');
        mg.src=`https://github.com/RamDhangar/BasicReact/blob/main/image${rd}.jpg?raw=true`;
        mg.setAttribute("data-ns-test", `img${rd}`);
        document.getElementById("container").appendChild(mg);
        console.log(mg);
        }

    }

}

