let photo = document.getElementById("photos");
function changeleft()
{
    if(i==1)
    {
        i=3;
        photo.src="img/site"+i+".png"; 
    }
    else if (i==3)
    {
        i=2;
        photo.src="img/site"+i+".png"; 
    }
    else if (i==2)
    {
        i=1;
        photo.src="img/site"+i+".png"; 
    }
}

function changeright()
{
    if(i==1)
    {
        i=2;
        photo.src="img/site"+i+".png"; 
    }
    else if (i==2)
    {
        i=3;
        photo.src="img/site"+i+".png"; 
    }
    else if (i==3)
    {
        i=1;
        photo.src="img/site"+i+".png"; 
    }
}