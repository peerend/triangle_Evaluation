var checkTriangle = function (side1, side2, side3){

  if (notTriangle(side1, side2, side3)){
  return 'is not a triangle';
  }
  else if(equilateralTriangle(side1, side2, side3)){
    return 'is an equilateral triangle';
  }
}
var notTriangle = function(side1, side2, side3){
  var triangleSides = [side1, side2, side3];
  var sortedSides = triangleSides.sort();
  if ((sortedSides[1]+sortedSides[2])>sortedSides[3]){
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
//need to assign values and sort three triangleSides
//if smaller sides greater than largest side not a triangle
//  then return not a triangle
//if smaller sides sum less than largest side they do form a triangle
//check to see what type of triangle it is

  // var equilateral = function(){
  //   if (side1===side2===side3){
  //     return 'Equilateral Triangle';
  //   }
  //   else if (side1===side2){
  //     return 'Not an equilateral Triangle';
  //   };
  // };