var image=[];
let imageclick=[];
let bool=false;
let num1=0;
function load(){
for(let i=1;i<=5;i++){
let img=document.createElement("img");
img.id=`img${i}`;
img.setAttribute("src", `https://github.com/RamDhangar/BasicReact/blob/main/image${i}.jpg?raw=true`);
img.setAttribute("onclick","clickHandle(this)")
img.setAttribute("data-ns-test", `img${i}`)
image.push(img);
}
let rd=Math.floor(Math.random()*5)+1;
let img=document.createElement("img");
img.id=`img${rd}`;
img.setAttribute("src", `https://github.com/RamDhangar/BasicReact/blob/main/image${rd}.jpg?raw=true`);
img.setAttribute("onclick",`clickHandle(this)`)
img.setAttribute("name", "rendom");
img.setAttribute("data-ns-test", `img${rd}`);
image.push(img);
        
    image.sort( () => .5 - Math.random() );
    let dv=document.getElementById("main");
    image.forEach(element => {
    dv.appendChild(element);
});
}
//store 2 image which will click

function clickHandle(e){
    //reset button render
    if(num1==0){
        document.getElementById("reset").style="display:block";
    }

    //verify button render
    e.removeAttribute("onclick");

    if(imageclick.length==0){bool=true; num1++}
    else if(imageclick[0]!=e){bool=true; num1++}
    else bool=false;
    if(bool &&num1<=2){
        e.style="border: red solid 3px"
        imageclick.push(e);
    }

    if(num1==2){
        document.getElementById("btn").style="display:block";
    }
}
document.getElementById("reset").addEventListener('click', ()=>{
    for(let i=0;i<imageclick.length;i++){
    imageclick[i].style="border: none";
}

document.getElementById("para").innerHTML="Please click on the identical tiles to verify that you are not a robot"
document.getElementById("reset").style="display:none";
document.getElementById("btn").style="display:none";
imageclick=[];
num1=0;
})
document.getElementById("btn").addEventListener('click', ()=>{
    for(let i=0;i<imageclick.length;i++){
        imageclick[i].style="border: none";
    }

document.getElementById("reset").style="display:none";
document.getElementById("btn").style="display:none";
if(imageclick[0].id==imageclick[1].id){
    document.getElementById("para").innerHTML="You are a human. Congratulations!"
}else{
    
    document.getElementById("para").innerHTML=" We can't verify you as a human. You selected the non-identical tiles."
}


 setTimeout(()=>{
    window.location.reload()
    document.getElementById("para").innerHTML=""
},3000)
})


