// Opening the side menu
$("#navbarMenuButton").click(() => {
  document.getElementById("mySidenav").style.width = "100%";
});

// closing the side menu
$("#navbarCloseButton").click(() => {
  document.getElementById("mySidenav").style.width = "0";
});

$("customerFormSubmitButton").click(() => {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/users/:customerName/:contactNo",
    success: data => {
      console.log(`Look what I have got \n ${data}`);
      $("#customerDetailsDisplayDiv").append(
        `${data.customerName}<br />${data.contactNo}`
      );
    },
    error: () => {
      console.log("There is an error in ajax call");
    }
  });
});

// @Function name         clearInputBoxes
// @Description           This function is to clear the input boxes
// @Usage direction       1. Add class 'clearInput' to the input fields to be cleared. 2. Call the function
// @Example usage         ***** Mention the line where this function is called *****
clearInput = () => {
  $(".clearInput").each(function() {
    $(this).val("");
  });
};

// @Function name         closeModal
// @Description           This function is to close the currently opened modal
// @Usage direction       1. Add class 'closeModal' to the close buttons of the modals. 2. Call the function
// @Example usage         ***** Mention the line where this function is called *****
closeModal = () => {
  $(".closeModal").trigger("click");
};
