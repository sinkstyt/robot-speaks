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
      i = i.toString();
      if (i.includes("3")) {
        responseArr.push("Won't you be my neighbor?");
        i = parseInt(i);
      } else if (i.includes("2")) {
        responseArr.push("Boop!");
        i = parseInt(i);
      } else if (i.includes("1")) {
        responseArr.push("Beep!");
        i = parseInt(i);
      } else {
        i = parseInt(i);
        responseArr.push(i);
      }
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