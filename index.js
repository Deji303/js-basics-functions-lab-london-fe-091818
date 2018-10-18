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
    return (street2-street1)*264;
  } else {return (street1-street2)*264}
}

function calculatesFarePrice(street1, street2) {
  if (distanceTravelledInFeet(street1,street2) <= 400) {
  return 0;
  }
  else if (distanceTravelledInFeet(street1,street2) > 400 && distanceTravelledInFeet(street1,street2) <2000) {
  return ((distanceTravelledInFeet(street1,street2)-400)*2)/100 ;
}
else if ( distanceTravelledInFeet(street1,street2) > 2000 && distanceTravelledInFeet(street1,street2) < 2500) {
  return 25;
}

else {return "cannot travel that far";}
}


