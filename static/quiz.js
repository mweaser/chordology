function makesymbol(){
    var symbol = $("<div class='symbol-style ui-widget-content'>")
    symbol.draggable();
    $(symbol).html('<div>X</div>')
    $("#symbols").append(symbol)
}

function makeDroppableSpots() {
    var chordLoc = $("<div class='chord-loc-style'>")
    // $(chordLoc)[0].style('top', '800')
    // console.log(chordLoc[0].classList)
    chordLoc.droppable({ 
        drop: function( event, ui ) {
            var value = $(ui.draggable)

            // Get dropped name
            console.log(value) 



        }
    });
    $("#all-chords").append(chordLoc)
}





$(document).ready(function() {
    makesymbol()
    makeDroppableSpots()
    // $( "#chord-loc" ).droppable({ 

    //     drop: function( event, ui ) {
    //         var value = $(ui.draggable)

    //         // Get dropped name
    //         console.log(value)

           
    //     }
    // });

    
})