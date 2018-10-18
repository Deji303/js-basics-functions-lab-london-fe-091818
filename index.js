// Code your solution in this file!
let blocks ;

blocks = function distanceFromHqInBlocks(street) {
  if (street < 42) {
    return 42 - street;
  } else {return street - 42 ;}
  
}



function distanceFromHqInFeet(blocks) {
  return blocks*264;  
}