var checkTriangle = function (side1, side2, side3){
  if (notTriangle(side1, side2, side3)){
  return 'is not a triangle';
  }else if(equilateralTriangle(side1, side2, side3)){
    return 'is a equilateral triangle';
  }else if(isoscelesTriangle(side1, side2, side3)){
    return 'is a isosceles triangle';
  }else{
    return 'is a scalene triangle';
  }
}

var notTriangle = function(side1, side2, side3){
  var triangleSides = [side1, side2, side3];
  var sortedSides = triangleSides.sort();

  if ((sortedSides[0]+sortedSides[1])<sortedSides[2]){
    return true;
  }else {
    return false;
  }
}
var equilateralTriangle = function(side1, side2, side3){
  if (side1 === side2 && side2 === side3){
    return true;
  }else {
    return false;
  }
}
var isoscelesTriangle = function(side1, side2, side3){
  var triangleSides = [side1, side2, side3];
  var sortedSides = triangleSides.sort();

  if (side1 === side2 || side2 === side3){
    return true;
  }else {
    return false;
  }
}

$(document).ready(function() {
  $("form#checkTriangle").submit(function(event) {
    var triangleSides = $("input#triangle-sides").val().split(",");
    var sideOne = parseInt(triangleSides[0]);
    var sideTwo = parseInt(triangleSides[1]);
    var sideThree = parseInt(triangleSides[2]);
    var result = checkTriangle(sideOne, sideTwo, sideThree);

    $(".valid-triangle").text(triangleSides[0] + "," + triangleSides[1] + "," + triangleSides[2]+ ' ');
    $(".is-triangle").text(result);

    $("#result").show();
    event.preventDefault();
  });
});