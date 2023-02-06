let elem = document.querySelector(".animate");
let experience = document.getElementById("experience");
let header = document.querySelector(".header");
let footer = document.querySelector(".footer");
let websites = document.getElementById("websites");
let services = document.querySelector(".services");
let introbox = document.getElementById("container");


function store()
{
    let storeinter = setInterval(showstore,100);
    let opa = 0;
    function showstore()
    {
        if(header.style.opacity == 1)
        {
            clearInterval(storeinter);
        }
        else
        {
            opa=opa+0.1;
            header.style.opacity=opa;
            footer.style.opacity=opa;
            services.style.opacity=opa;
        }
    }
}

function intro()
{
    let top = document.getElementById("top");
    let contact = document.getElementById("contact");
    let faq = document.getElementById("faq");
    let projects = document.getElementById("projects");
    let invi = 0;
    let pos = 100;
    let inter = setInterval(up,1);
    let opacity = setInterval(opa,100);
    top.style.width="100%";
    function up()
    {
        if(pos == -500)
        {
            clearInterval(inter);
        }
        else
        {
            pos=pos-3;
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
            top.style.opacity=invi;
            websites.style.opacity=invi;
            contact.style.opacity=invi;
            experience.style.opacity=invi;
            faq.style.opacity=invi;
            projects.style.opacity=invi;
            footer.style.opacity=invi;
        }
    }
    }
}

function myMove() {
    let pos = 900;
    let id = setInterval(frame, 100/60);
    function frame() {
        if (pos == 50) {
            clearInterval(id);
        } else {
            pos=pos-2.5;
            elem.style.top = pos + 'px';
        }
    }
}