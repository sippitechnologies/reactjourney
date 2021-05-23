let btnRed = document.getElementById("red");
let btnGreen= document.getElementById("green");
let btnblack = document.getElementById("black");
let btnOrange = document.getElementById("orange");
let colorPanel = document.getElementById("coloroutput");
let body= document.getElementById('body');
let colorName = document.getElementById("colorname");
let btnPurple = document.getElementById("purple");
let btnGrey = document.getElementById("grey");
let btnPink = document.getElementById("pink");
let btnBlue = document.getElementById('blue');



btnPink.addEventListener('click',function()
{
        updateColorPanel('Pink');
});
btnBlue.addEventListener('click',function()
{
        updateColorPanel('Blue');
});
btnGrey.addEventListener('click',function()
{
        updateColorPanel('Grey');
});
btnPurple.addEventListener('click',function()
{
        updateColorPanel('Purple');
});
btnRed.addEventListener('click',function()
{
        updateColorPanel('Red');
});
btnRed.addEventListener('click',function()
{
        updateColorPanel('Red');
});
btnGreen.addEventListener('click',function()
{
    updateColorPanel('Green');
});
btnblack.addEventListener('click',function()
{
    updateColorPanel('Black');
});
btnOrange.addEventListener('click',function()
{
    updateColorPanel('Orange');
});

function updateColorPanel(name)
{
        if(name==="Black")
        {
            body.style.backgroundColor ='#ffff';
        }
        else
        {
            body.style.backgroundColor =name;
        }
       
        colorName.textContent = name;
}
