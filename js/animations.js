

function intro()
{
    let introbox = document.getElementById("container");
    let header = document.querySelector(".header");
    let invi = 0;
    let pos = 100;
    let inter = setInterval(up,1);
    let opacity = setInterval(opa,100);
    function up()
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
        }
    }
    }
}

function myMove() {
    let elem = document.querySelector(".animate");
    let pos = 0;
    let id = setInterval(frame, 0.01);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}