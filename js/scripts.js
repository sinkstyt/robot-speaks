// Business Logic ----------->
const robogerSpeaks = str => {
  let inputNum = parseInt(str);
  if (inputNum < 0) {
    return "Mr. Roboger chooses not to respond to your negativity.";
  }
}

// prepend to ul.output-list
// UI Logic -------------->
$(document).ready(function() {
  $("form#talk").submit(function(event) {
    event.preventDefault();
    const inputString = $("input#user-num").val();
    let liOutput = robogerSpeaks(inputString);
    liOutput = "<li>" + liOutput + "</li>"
    $("ul.output-list").prepend(liOutput);
    $("input").text('');
    $("input").focusIn();
  })
})