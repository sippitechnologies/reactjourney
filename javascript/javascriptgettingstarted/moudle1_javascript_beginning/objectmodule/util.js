function showOutput(message){
    console.log(message);
    document.getElementById("message").textContent = message;
}
function changeColor(color)
{
    document.getElementById("message").style.color =color;
}
function changeFont(weight)
{
    document.getElementById("message").style.fontWeight=weight;

}
let button = document.getElementById("btn");
function attachButtonListener()
{
    document.getElementById("clicktest").addEventListener('click',function(){
        if(button.style.display==="none")
        {
            button.style.display="block";
        }
        else
        {
            button.style.display = "none";
        }
    });
}