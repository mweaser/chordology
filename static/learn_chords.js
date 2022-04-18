function createButtons(chords, chord_images) {
    $("#button-row").empty()
    $("#button-row").append("<div class='col-md-4'> <span class='learn-chord-header'>Learn Chords</span> <br> Click a chord to learn its chord diagram </div>")
    $.each(chords, function(index,  value) {
        var entry = $("<div class='col-md-1'>")
        var button =$("<button class='chord-button'>")
        $(button).text(value)
        entry.append(button)
        $("#button-row").append(entry)

        $(button).click(function() {
            $("#chord-image").html("<img class='chord-image-style' src='/static/images/" + chord_images[index] + "'>")
        })
    });
}

$(document).ready(function(){
    createButtons(chords, chord_images)
})