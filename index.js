var player_1_dice = Math.floor(Math.random()*6 + 1);
var player_2_dice = Math.floor(Math.random()*6 + 1);

var img1 = document.querySelector("#player-1-img");
var img2 = document.querySelector("#player-2-img");

if(player_1_dice===1)
{
    img1.setAttribute("src","images/dice1.png");
}
else if(player_1_dice===2)
{
    img1.setAttribute("src","images/dice2.png");
}
else if(player_1_dice===3)
{
    img1.setAttribute("src","images/dice3.png");

}
else if(player_1_dice===4)
{
    img1.setAttribute("src","images/dice4.png");


}
else if(player_1_dice==5)
{
    img1.setAttribute("src","images/dice5.png");

}
else
{
    img1.setAttribute("src","images/dice6.png");

}

if(player_2_dice===1)
{
    img2.setAttribute("src","images/dice1.png");

}
else if(player_2_dice===2)
{
    img2.setAttribute("src","images/dice2.png");

}
else if(player_2_dice===3)
{
    img2.setAttribute("src","images/dice3.png");

}
else if(player_2_dice===4)
{
    img2.setAttribute("src","images/dice4.png");
}
else if(player_2_dice==5)
{
    img2.setAttribute("src","images/dice5.png");
}
else
{
    img2.setAttribute("src","images/dice6.png");
}
var result = document.querySelector(".result-txt");
if(player_1_dice>player_2_dice)
{
    result.textContent = "Player 1 Wins!";
}
else if(player_1_dice<player_2_dice)
{
    result.textContent = "Player 2 Wins!";

}
else
{
    result.textContent = "Draw ";
}
