$(document).ready(function(){
    
    $("#score").text(correct_count + "/10");
    $("#result-restart").prop('href', "/quiz/" + 1)
    $("#result-review").prop('href', "/learn")
    
});