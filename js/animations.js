let elem = document.querySelector(".animate");
function intro()
{
    let introbox = document.getElementById("container");
    let header = document.querySelector(".header");
    let top = document.getElementById("top");
    let invi = 0;
    let pos = 100;
    let inter = setInterval(up,1);
    let opacity = setInterval(opa,100);
    function up()
    {
        if(elem.style.left=="390px")
        {
        if(pos == -500)
        {
            clearInterval(inter);
        }
        else
        {
            pos--;
            introbox.style.top=pos+'px';
        }
    }
    }
    function opa()
    {
        if(pos == -500){
        if(header.style.opacity == 1)
        {
            clearInterval(opacity);
        }
        else
        {
            invi=invi+0.1;
            header.style.opacity=invi;
            top.style.opacity=invi;
        }
    }
    }
}

function myMove() {
    
    let pos = -900;
    let id = setInterval(frame, 100/60);
    function frame() {
        if (pos == 390) {
            clearInterval(id);
        } else {
            pos=pos+3;
            elem.style.left = pos + 'px';
        }
    }
}