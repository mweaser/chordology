function makesymbol(){
    var symbol = $("<div class='symbol-style ui-widget-content'>")
    symbol.draggable({revert: "invalid"});
    $(symbol).html('<div>X</div>')
    $("#symbols").append(symbol)
}




$(document).ready(function() {
    makesymbol()
    $( "#chordimage" ).droppable({ 

        drop: function( event, ui ) {
            var value = $(ui.draggable)

            // Get dropped name
            console.log(value)

           
        }
    });

    
})