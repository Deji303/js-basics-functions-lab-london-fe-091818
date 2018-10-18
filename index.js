// Code your solution in this file!


function distanceFromHqInBlocks(street) {
  if (street < 42) {
    return 42 - street;
  } else {return street - 42 ;}
  
}



function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street)*264;  
}

function distanceTravelledInFeet(street1,street2) {
  if(street1<street2) {
    return (street2-street1)*264
  } else {(street1-street2)*264}
}