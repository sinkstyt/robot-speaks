// Business Logic ----------->
const robogerSpeaks = str => {
  let responseArr = [];
  let inputNum = parseInt(str);
  if (inputNum < 0) {
    return "Mr. Roboger chooses not to respond to your negativity.";
  } else if (inputNum === 0) {
    return inputNum;
  } else if (0 < inputNum) {
    for (let i = 0; i <= inputNum; i++) {
      responseArr.push(i);
    }
  }
  const output = responseArr.join(', ');
  return output;
}

// prepend to ul.output-list
// UI Logic -------------->
$(document).ready(function() {
  $("form#talk").submit(function(event) {
    event.preventDefault();
    const inputString = $("input#user-num").val();
    let liOutput = robogerSpeaks(inputString);
    liOutput = "<li> You entered: "+ inputString+ ". The robot responded: " + liOutput + "</li>";
    $("ul.output-list").prepend(liOutput);
    $("input").text('');
    $("input").focus();
  })
})