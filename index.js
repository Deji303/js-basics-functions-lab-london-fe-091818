// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  if (street < 42) {
    return 42 - street;
  } else {return street - 42 ;}
  
}


function distanceFromHqInFeet(distanceFromHqInBlocks(street)) {
  return distanceFromHqInBlocks(street)*264;  
}