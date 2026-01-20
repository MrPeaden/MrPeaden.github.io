/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables

  
  
  const KEY = {
  ENTER: 13,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  };

 var walker = {
   positionX: 0,
   positionY : 0,
   speedX : 0,
   speedY : 0
 };
  
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);    // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);    // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
    console.log("Walker position:", walker.positionX, walker.positionY);

  }
  
  /* 
  Called in response to events.
  */
  //function handleEvent(event) {
   function handleKeyDown(event) {
     console.log(event.which);
     if (event.which === KEY.LEFT){
       console.log("the left key was pressed");
       walker.speedX = -5;
     }
     if (event.which === KEY.UP){
       console.log("the up key was pressed");
       walker.speedY = -5;
     }
     if (event.which === KEY.RIGHT){
       console.log("the right key was pressed");
       walker.speedX = 5;
     }
     if (event.which === KEY.DOWN){
       console.log("the down key was pressed");
       walker.speedY = 5
     }
     if (event.which === KEY.ENTER){
       console.log("the enter key was pressed");
       }
     }
  
function handleKeyUp(event){
  if (event.which === KEY.LEFT){
    walker.speedX = 0;
  }
  if (event.which === KEY.RIGHT){
    walker.speedX = 0;
  }
  if (event.which === KEY.UP){
    walker.speedY = 0;
  }
  if (event.which === KEY.DOWN){
    walker.speedY = 0;
  }
}


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

function repositionGameItem(){
  walker.positionX -= walker.speedX;
  walker.positionY -= walker.speedY;
}
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

function redrawGameItem(){
    $("#walker").css("left", walker.positionX);
    $("#walker").css("top", walker.positionY);

}
 
function wallCollision(){
  if (walker.positionX < 0 || walker.positionX > $("#board").width()){
    walker.positionX -= walker.speedX;
  }
  if (walker.positionY < 0 || walker.positionY > $("#board").height()){
    walker.positionY -= walker.speedY;
  }
  
  
}

