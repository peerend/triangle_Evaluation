var checkTriangle = function (side1, side2, side3){
  if (notTriangle(side1, side2, side3)){
  return 'is not a triangle';
  } else if(equilateralTriangle(side1, side2, side3)){
    return 'is a equilateral triangle';
  } else if(isoscelesTriangle(side1, side2, side3)){
    return 'is a isosceles triangle';
  }
  else{
    return 'is a isosceles triangle';
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

