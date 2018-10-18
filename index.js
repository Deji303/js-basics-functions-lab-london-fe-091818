// Code your solution in this file!
let block = function distanceFromHqInBlocks(street) {
  if (street < 42) {
    return 42 - street;
  } else {return street - 42 ;}
  
}

function distanceFromHqInFeet() {
  return block*264;  
}