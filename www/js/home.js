function btnclick() {
    console.log("button clicked");
}
const simpleText = document.querySelector("#simpleText");
function btnclick() {
    var txt;
    if (confirm("Press a button!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }

    document.getElementById("simpleText").innerHTML = txt;
  }