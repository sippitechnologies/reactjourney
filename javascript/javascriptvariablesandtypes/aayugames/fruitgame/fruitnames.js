let btnApple = document.getElementById("apple");
let btnBanana= document.getElementById("banana");
let btnPapaya = document.getElementById("papaya");
let btnGuava = document.getElementById("guava");
let btnMango = document.getElementById("mango");
let btnWaterMelon = document.getElementById("watermelon");
let body= document.getElementById("fruitpanel");


btnApple.addEventListener('click',function()
{
    console.log("I am Pressed");
        updatFruit('apple');
});
btnBanana.addEventListener('click',function()
{
    console.log("I am Pressed");
    updatFruit('banana');
});
btnPapaya.addEventListener('click',function()
{
    console.log("I am Pressed");
    updatFruit('papaya');
});
btnMango.addEventListener('click',function()
{
    console.log("I am Pressed");
    updatFruit('mango');
});
btnWaterMelon.addEventListener('click',function()
{
    console.log("I am Pressed");
    updatFruit('watermelon');
});

btnGuava.addEventListener('click',function()
{
    console.log("I am Pressed");
    updatFruit('guava');
});

function updatFruit(name)
{

       
   let iamgeName=`images/fruitsname/${name}.jpg`;
   document.body.style.backgroundImage = "url("+iamgeName+")";
    
       
        
}