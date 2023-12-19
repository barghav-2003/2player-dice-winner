rv1=Math.floor(Math.random()*6)+1;
d1="images/dice"+rv1+".png";
document.querySelector(".img1").setAttribute("src",d1);

rv2=Math.floor(Math.random()*6)+1;
d2="images/dice"+rv2+".png";
document.querySelector(".img2").setAttribute("src",d2);

if(rv1>rv2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(rv1<rv2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
}