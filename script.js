function calc()
{
    var n1 = parseInt (document.getElementById("n1").value);
    var n2 = parseInt (document.getElementById("n2").value);
    var opera = document.getElementById("operators").value; 

    if(opera ==='+')
    {
       document.getElementById("result").value = n1+n2;
    }

    if(opera ==='-')
    {
       document.getElementById("result").value = n1-n2;
    }

    if(opera ==='/')
    {
       document.getElementById("result").value = n1/n2;
    }

    if(opera ==='*')
    {
       document.getElementById("result").value = n1*n2;
    }
}