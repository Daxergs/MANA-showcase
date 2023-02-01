

function intro()
{
    let introbox = document.getElementById("container");
    let pos = 0;
    let inter = setInterval(up,1);
    function up()
    {
        if(pos == 300)
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