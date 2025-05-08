 
function colorGenerator()
{
    const hex='0123456789ABCDEF'
    let color='#'
   
    for(i=0;i<=5;i++)
    {
        color+=hex[parseInt(Math.random()*16)]
    }
    return color;
}


let intervalId

function startChangingColor()
{
    intervalId=setInterval(changeBgColor,1500);
function changeBgColor()
{
 document.body.style.backgroundColor=colorGenerator();
 console.log('i am called')
}
}

function stopChangingColor()
{
    clearInterval(intervalId)
    
}

// when you pass function to eventListener then only write function name, do not write with paranthesis

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
