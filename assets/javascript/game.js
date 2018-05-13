console.log("yo");

//comuter chooses a random number betweek 19- 120
  //var to store computers choice
var computerChoiceDOM = $('#computerChoice');
var computerChoice = Math.floor(Math.random() * (120 - 19) + 19);
computerChoiceDOM.text(computerChoice);
var winsDOM = $('#wins');
var lossesDOM = $('#losses');
var crystalsDOM = $('#crystals');
var totalScoreDOM = $('#totalScore');
var totalScore = 0;
totalScoreDOM.text(totalScore);


  //google how to get a random number between 19-120

//you have 4 crystles to click on that all have different numbers betweem 1-12 atached to them
  //get crystal imgs
  //we need a way to get crystals on the screen
    //var to hold eachcrystal
    //for loop 
    //get a random number on each one
    //put them on the screen
      //jquery append

// you are going click on scrystals and you will have a score that increments on each crystal click
  //var to hold users score
    //user score is made of of each crystals random value added together
  //need a way to click on a crystal
    // .on("click")
    //need unique way to tell if crystal was clicked on (id)



  var wins = 0;
  winsDOM.text(wins);

  var losses = 0;
  lossesDOM.text(losses)

  for(var i = 0; i < 4; i++){
    var crystal = $("<img class='col-md-3' id='crystal' src='./assets/images/cry-" + i + ".png' style='width:100px; height:80px'></img>" );
  
    var crystalNumber = Math.floor(Math.random() * (12 - 1) + 1);
  
    crystal.attr("data-crystalNumber", crystalNumber);
  
    crystalsDOM.append(crystal);
  }


  
function gameStart () {
  
    // var computerChoice = Math.floor(Math.random() * (120 - 19) + 19)
    // computerChoiceDOM.text(computerChoice);

    console.log(computerChoice)

      $("#crystals").on("click", "#crystal", function () {
        console.log($(this).attr("data-crystalNumber"));

        var userScore = $(this).attr("data-crystalNumber")
        totalScore += parseInt(userScore);
        totalScoreDOM.text(totalScore);
      
        if (totalScore === computerChoice) {
        wins++;
        winsDOM.text(wins)
        totalScore = 0;
        $("#winLossText").text("You Win!")
        console.log("You Win!");
        gameEnd()
        
        } else if(totalScore > computerChoice) {

          losses++
          lossesDOM.text(losses);
          $("#winLossText").text("You Lose!")
          console.log("You Lose!");
          totalScore = 0;
          gameEnd()
        }
      }) 
}

function gameEnd() {

  totalScoreDOM.text(totalScore);
  computerChoice = Math.floor(Math.random() * (120 - 19) + 19)
  computerChoiceDOM.text(computerChoice);
  crystalsDOM.empty();
  for(var i = 0; i < 4; i++){
    var crystal = $("<img class='col-sm-3' id='crystal' src='./assets/images/cry-" + i + ".png' style='width:100px; height:80px'></img>" );
    var crystalNumber = Math.floor(Math.random() * (12 - 1) + 1);

    crystal.attr("data-crystalNumber", crystalNumber);
    crystalsDOM.append(crystal);
  }

}  
gameStart();
  
   



//if your score goes higher then the computer score then you loose and game restarts
  //restart function
// if your score and comp score match up then you win and wins goes up and game restarts 
  //restart function