$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var descriptionInput = $("input#description").val();
    var dateInput= $("input#date").val();
    var startTimeInput = $("input#startTime").val();
    var endTimeInput = $("input#endTime").val();

    $(".name").text(nameInput);
    $(".description").text(descriptionInput);
    $(".date").text(dateInput);
    $(".startTime").text(startTimeInput);
    $(".endTime").text(endTimeInput);

    var book = window.open("confirmation.html");

    event.preventDefault();
  });
});
