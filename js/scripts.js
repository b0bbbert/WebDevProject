function showDescription(descript) {
  $("#description").html("Description: " + descript);
}

function hideDescription() {
  $("#description").html("");
}

function validate() {
  //Check date_of_birth
  var text_DoB = $("#DoB").val();
  var in_DoB = new Date(text_DoB);
  // curr_D = new Date();
  if (in_DoB >= new Date()) {
    alert("Date of Birth is not valid, date needs to be before today.");
    return false;
  }

  //Check phone number
  var in_phone = $("#phone").val();
  if (isNaN(in_phone)) {
    alert("Phone number is not valid, phone number is not a valid number.");
    return false;
  }
  else if (in_phone.toString().length !== 10) {
    alert("Phone number is not valid, phone number needs to be 10 digits long.");
    return false;
  }

  return true;
}
