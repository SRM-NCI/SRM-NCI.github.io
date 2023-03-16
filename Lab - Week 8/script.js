function checkOne(){
	event.preventDefault();
	playerOneChoice=parseInt(document.getElementById("formPlayerOne").value);	
	if(playerOneChoice==1||playerOneChoice==2||playerOneChoice==3){
		document.getElementById("playerOne").innerHTML="Player 1: Ready!";
		
	}
	else{
		alert("Invalid input, try again");
	}
}
function checkTwo(){
	event.preventDefault();	
	playerTwoChoice=parseInt(document.getElementById("formPlayerTwo").value);
	if(playerTwoChoice==1||playerTwoChoice==2||playerTwoChoice==3){
		document.getElementById("playerTwo").innerHTML="Player 2: Ready!";
	}
	else{
		alert("Invalid input! Input must be 1, 2 or 3 (1=Rock/2=Paper/3=Scissors). try again");
		
	}
}
function play(){	
	event.preventDefault();
	if((playerOneChoice==1||playerOneChoice==2||playerOneChoice==3) && (playerTwoChoice==1||playerTwoChoice==2||playerTwoChoice==3)){
		if(playerOneChoice==1){
			if(playerTwoChoice==1){
				document.getElementById("playerOne").innerHTML="Player 1: Rock!";
				document.getElementById("playerTwo").innerHTML="Player 2: Rock!";
				document.getElementById("buttonPlay").innerHTML="It's a Tie! (Refresh page to play again)"
			}
			else if(playerTwoChoice==2){
				document.getElementById("playerOne").innerHTML="Player 1: Rock!";
				document.getElementById("playerTwo").innerHTML="Player 2: Paper!";
				document.getElementById("buttonPlay").innerHTML="Player 2 Wins! (Refresh page to play again)"				
			}
			else if(playerTwoChoice==3){
				document.getElementById("playerOne").innerHTML="Player 1: Rock!";
				document.getElementById("playerTwo").innerHTML="Player 2: Scissors!";
				document.getElementById("buttonPlay").innerHTML="Player 1 Wins! (Refresh page to play again)"
			}
		}
		if(playerOneChoice==2){
			if(playerTwoChoice==1){
				document.getElementById("playerOne").innerHTML="Player 1: Paper!";
				document.getElementById("playerTwo").innerHTML="Player 2: Rock!";
				document.getElementById("buttonPlay").innerHTML="Player 1 Wins! (Refresh page to play again)"
			}
			else if(playerTwoChoice==2){
				document.getElementById("playerOne").innerHTML="Player 1: Paper!";
				document.getElementById("playerTwo").innerHTML="Player 2: Paper!";
				document.getElementById("buttonPlay").innerHTML="It's a Tie! (Refresh page to play again)"
			}
			else if(playerTwoChoice==3){
				document.getElementById("playerOne").innerHTML="Player 1: Paper!";
				document.getElementById("playerTwo").innerHTML="Player 2: Scissors!";
				document.getElementById("buttonPlay").innerHTML="Player 2 Wins! (Refresh page to play again)"
			}
		}
		if(playerOneChoice==3){
			if(playerTwoChoice==1){
				document.getElementById("playerOne").innerHTML="Player 1: Scissors!";
				document.getElementById("playerTwo").innerHTML="Player 2: Rock!";
				document.getElementById("buttonPlay").innerHTML="Player 2 Wins! (Refresh page to play again)"
			}
			else if(playerTwoChoice==2){
				document.getElementById("playerOne").innerHTML="Player 1: Scissors!";
				document.getElementById("playerTwo").innerHTML="Player 2: Paper!";
				document.getElementById("buttonPlay").innerHTML="Player 1 Wins! (Refresh page to play again)"
			}
			else if(playerTwoChoice==3){
				document.getElementById("playerOne").innerHTML="Player 1: Scissors!";
				document.getElementById("playerTwo").innerHTML="Player 2: Scissors!";
				document.getElementById("buttonPlay").innerHTML="It's a tie! (Refresh page to play again)"
			}
		}
		
	}
	else{
		alert("Players are not ready to play!");
	}
}
