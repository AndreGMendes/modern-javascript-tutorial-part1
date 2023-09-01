// Add Custom Menu buttons to the DOM
const buttons = document.querySelectorAll('.container-buttons-nav')
console.log(buttons);

buttons.forEach(button => {
    button.addEventListener('click', event => {
      console.log(`Button clicked: ${event.target.textContent}`);
    });
  });


  buttons.forEach((button) => {
    console.log(button.textContent)
  });








































/* -------------------------------------------------------------------- */
/* CODE PEN (Drop Shadow) --------------------------------------------- */
/* -------------------------------------------------------------------- */
//   var transitions = true;
// $('#_transitions').prop('checked', transitions);
// $('#_transitions').click(function() {
//   transitions = !transitions;
//   if (transitions)
//     $('#_box').addClass("transitions")
//   else
//     $('#_box').removeClass("transitions")
// });

// var rotation = 0;
// var rotationDifference = 30;
// var keepRotating = true;

// function doRotate() {
//   rotation += rotationDifference;
//   //rotation = rotation % 360;
//   $("#_box").css({
//     transform: "rotate(" + rotation + "deg)"
//   }).text(rotation)
//   getBoxShadow()
// }

// $('#_rotate').click(function() {
//   //keepRotating = false;
//   doRotate()
// })

// /*setInterval(function () {
//  if (keepRotating)
//  {
//    doRotate();
//  }
// }, 1500);*/

// $('#_reset').click(function() {
//   rotation = 0;
//   $('#_box').removeClass("transitions")
//   $("#_box").css({
//     transform: "rotate(" + rotation + "deg)"
//   }).text(rotation)
//   $('#_box').addClass("transitions")
// })

// function getBoxShadow() {
//   var val = $("#_box").css("boxShadow");
//   $("#output").text(val)
//   var split = val.split(" ");
//   var x = parseInt(split[3], 10);
//   var y = parseInt(split[4], 10);
//   var newVals = rotateBy(x, y, rotationDifference);
//   var niceX = newVals[0].toFixed(2) + "px";
//   var niceY = newVals[1].toFixed(2) + "px";
//   split[3] = niceX;
//   split[4] = niceY;
//   var joined = split.join(" ");
//   console.log(joined);
//   $("#_box").css({
//    "boxShadow": joined 
//   });
// }

// function rotateBy(x, y, angle) {
//   var radians = (Math.PI / 180) * angle,
//     cos = Math.cos(radians),
//     sin = Math.sin(radians),
//     nx = (cos * (x)) + (sin * (y)),
//     ny = (cos * (y)) - (sin * (x));
//   return [nx, ny];
// }