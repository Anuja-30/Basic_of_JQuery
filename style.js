// Hide paragraph when clicked
$("#paragraph1").click(function(){
    $(this).hide();
});
// Show paragraph when double clicked
$("#paragraph1").dblclick(function(){
    $(this).show();
});
// Toggle paragraph when button clicked
function toggleParagraph() {
    $("#paragraph2").toggle();
}
// Slide up paragraph when button clicked
function slideUpParagraph() {
    $("#paragraph3").slideUp();
}
// Slide down paragraph when button clicked
function slideDownParagraph() {
    $("#paragraph3").slideDown();
}
$(document).ready(function(){
    $("#loadData").click(function(){
        $.ajax({
            url: "data.txt", // URL of the file to be loaded
            success: function(result){
                $("#dataParagraph").text(result); // Update paragraph with loaded data
            },
            error: function(xhr, status, error) {
                $("#dataParagraph").text("Error loading data."); // Display error message if data loading fails
            }
        });
    });
});

