function showOutPut(massages)
{
    let output= document.getElementById("output");
    let message = document.getElementById("message");
    let test = document.getElementById("test");

    output.innerHTML = messages[0];
    message.textContent=messages[1];
    test.textContent = messages[2];
    
}