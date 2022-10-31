
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    newGame();
  });


function newGame() {
    let coldimage= 'https://media.sciencephoto.com/image/c0425419/800wm/C0425419-Polar_bear_curious_young_bear_approaching_camera.jpg';
    let warmimage="https://realguymarketing.com/wp-content/uploads/2019/05/Screen-Shot-2019-05-25-at-6.09.31-PM-1080x675.png";
    let hotimage="https://www.centralillinoisproud.com/wp-content/uploads/sites/57/2021/09/FIRE.jpg?w=750&h=422&crop=1";
    let pastGuesses= [];
    let guessesLeft=5;

    document.getElementById("heatIndicator").style.visibility = "hidden";
    document.getElementById("wrongguesses").style.visibility = "hidden";

    let hiddenNumber= Math.floor(Math.random() * 100) + 1;
    console.log(hiddenNumber);
    document.getElementById("resetButton").addEventListener("click",
        function resetGame() {
            pastGuesses=[];
            newGame();
        }
    );
    document.getElementById("playButton").addEventListener("click", 
        function numbersGame() {

            let numberGuess= document.getElementById("guessinputBar").value;

            // console.log("pastGuesses")
            // console.log(pastGuesses);
            // console.log("numberGuesses")
            // console.log(numberGuess);
            if (pastGuesses.includes(numberGuess)){
                alert("That number has already been guessed! Please guess again!");	
            }

            else if (guessesLeft > 0) {
                if ( Number.isNaN(numberGuess) == true ) {
                    alert("Not a valid number! Please guess again!");
                }
                else if ((numberGuess > 100) || (numberGuess < 1)) {
                    alert("Guess does not fall within 1-100!");
                }
                else if (numberGuess == hiddenNumber) {
                    alert("You won the game! Wow!");

                    return
                }
                else {
                    pastGuesses.push(numberGuess);
                    document.getElementById("wrongguesses").style.visibility = "visible";
                    document.getElementById("myText").innerHTML = pastGuesses.toString(); 
                }

                let heatCheck = Math.abs(hiddenNumber - numberGuess);
                let heatCheckCompare = (hiddenNumber - numberGuess);
                let compareText = "";
                if (heatCheckCompare <0) {
                    compareText="Lower";
                }
                else{
                    compareText="Higher";
                }
                // document.getElementById('resultimage').style.visibility = "visible";
                if ((heatCheck >= 1) && (heatCheck < 10)) {
                    document.getElementById("heatIndicator").innerHTML = "You are burning up! Guess " + compareText +".";
                    document.getElementById('resultimage').src =hotimage;
                } 
                else if ((heatCheck >= 11) && (heatCheck < 20)) {
                    document.getElementById("heatIndicator").innerHTML = "You are very warm! Guess " + compareText +".";
                    document.getElementById('resultimage').src =warmimage;
                } 
                else if ((heatCheck >= 21) && (heatCheck< 40)) {
                    document.getElementById("heatIndicator").innerHTML = "You are room temperature! Guess " + compareText +".";
                    document.getElementById('resultimage').src =warmimage;
                } 
                else if ((heatCheck >= 41) && (heatCheck < 100)) {
                    document.getElementById("heatIndicator").innerHTML = "You are colder than a polar bear's toenail! Guess " + compareText +".";
                    document.getElementById('resultimage').src =coldimage;
                };
                guessesLeft -- ;		
            }
            if (guessesLeft === 0){ 
                document.getElementById("heatIndicator").innerHTML= "You have exceeded the amount of guesses allowed! Please Play again to continue!";
            }
            document.getElementById("heatIndicator").style.visibility = "visible";
        }
    )
}
