let elem = document.querySelector(".animate");
let experience = document.getElementById("experience");
let header = document.querySelector("#header");
let footer = document.querySelector(".footer");
let websites = document.getElementById("websites");
let services = document.querySelector(".services");
let servicesx = document.querySelector(".servicesx");
let introbox = document.getElementById("container");
let footerx = document.querySelector(".footerx");
let aleft = document.querySelector(".aleft");
let aright = document.querySelector(".aright");
let pulse = document.querySelector(".btn-arrow-pulse");

consoleText(['Mateusz Nakonieczny'], 'text',['white']);
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

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
            footerx.style.opacity=opa;
            servicesx.style.opacity=opa;
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
            pulse.style.opacity=invi;
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