// Opening the side menu
$("#navbarMenuButton").click(() => {
  document.getElementById("mySidenav").style.width = "100%";
});

// closing the side menu
$("#navbarCloseButton").click(() => {
  document.getElementById("mySidenav").style.width = "0";
});

$(".addCustomerForm").submit(function(event) {
  event.preventDefault();
  clearInput(); //Clear input fields of the add customer form
  closeModal(); //Close modal
});

// Add item modal code
// $(".itemModal").on("show.bs.modal", function(event) {
//   var button = $(event.relatedTarget); // Button that triggered the modal
//   var modal = $(this);
//   modal.find(".modal-title").text("Customer Details");
// });

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
