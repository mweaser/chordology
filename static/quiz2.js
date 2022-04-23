let symbols = [
    "1",
    "2",
    "3",
]
let toggles = [
    {
        "id": "but0",
        "show": "O",
    },
    {
        "id": "but1",
        "show": "O",
    },
    {
        "id": "but2",
        "show": "O",
    },
    {
        "id": "but3",
        "show": "O",
    },
    {
        "id": "but4",
        "show": "O",
    }
]

function emprow(index, symbol){
    let entry = $("<div></div>")
    entry.html(symbol)
    entry.addClass("ui-widget-content")
    entry.addClass("symbol-style")
    entry.addClass("symbol_entry")
    entry.attr("data-name",symbol)
    return entry
  }

// function togrow(index, toggle, id){
//     let entry = $("<div></div>")
//     entry.html(toggle)
//     entry.addClass("btn")
//     entry.addClass("togglebut")
//     entry.addClass("btn-outline-success")
//     entry.addClass("symbol_entry")
//     entry.attr("id",id)
//     return entry
// }
// function maketoggle(togglesentry){
//     $("#butt_ent").empty()
//     $.each(["#butt_ent"], function(index, value){
//         let allist = [togglesentry][index]
//         // console.log(allist)
//         $.each(allist, function(ind, sym){
//         let newsym = emprow(ind, sym)
//         $(value).append(newsym)
//         })
//     });
// }

function makeNames(symbolsentry){
$("#symb_ent").empty()
$.each(["#symb_ent"], function(index, value){
    let allist = [symbolsentry][index]
    $.each(allist, function(ind, sym){
    let newsym = emprow(ind, sym)
    $(value).append(newsym)
    })
});
$(".symbol_entry").draggable({ 
    revert: 'invalid',
    });
}
  
// function makesymbol(){
//     let symbol = $("<div class='symbol-style ui-widget-content'>")
//     symbol.draggable();
//     $(symbol).html('<div>X</div>')
//     $("#symbols").append(symbol)
// }

// function makeDroppableSpots() {
//     let chordLoc = $("<div class='chord-loc-style'>")
//     // $(chordLoc)[0].style('top', '800')
//     // console.log(chordLoc[0].classList)
//     chordLoc.droppable({ 
//         drop: function( event, ui ) {
//             let value = $(ui.draggable)
//             // Get dropped name
//             console.log(value) 
//         }
//     });
//     $("#all-chords").append(chordLoc)
// }


function togglebutton() {
    // a 1d array of length 6 to represent the toggle setting
    let toggleloc = new Array(6)
    for (let i = 0; i < toggleloc.length; i++) {
        toggleloc[i] = 1;
    }
    
    $("#but0").click(function() { 
        if ($(this).text() == "O") { 
            $(this).text("X"); 
            toggleloc[0] = 2
            console.log(toggleloc)
        } else if ($(this).text() == "X") { 
            $(this).text(" ");
            toggleloc[0] = 0
            console.log(toggleloc)
        }
        else {
            $(this).text("O");
            toggleloc[0] = 1 
            console.log(toggleloc)
        }; 
    });
    $("#but1").click(function() { 
        if ($(this).text() == "O") { 
            $(this).text("X"); 
            toggleloc[1] = 2
        } else if ($(this).text() == "X") { 
            $(this).text(" ");
            toggleloc[1] = 0
            console.log(toggleloc)
        }
        else {
            $(this).text("O");
            toggleloc[1] = 1 
            console.log(toggleloc)
        }; 
    });
    $("#but2").click(function() { 
        if ($(this).text() == "O") { 
            $(this).text("X"); 
            toggleloc[2] = 2
        } else if ($(this).text() == "X") { 
            $(this).text(" ");
            toggleloc[2] = 0
            console.log(toggleloc)
        }
        else {
            $(this).text("O");
            toggleloc[2] = 1 
            console.log(toggleloc)
        }; 
    });
    $("#but3").click(function() { 
        if ($(this).text() == "O") { 
            $(this).text("X"); 
            toggleloc[3] = 2
        } else if ($(this).text() == "X") { 
            $(this).text(" ");
            toggleloc[3] = 0
            console.log(toggleloc)
        }
        else {
            $(this).text("O");
            toggleloc[3] = 1 
            console.log(toggleloc)
        }; 
    });
    $("#but4").click(function() { 
        if ($(this).text() == "O") { 
            $(this).text("X"); 
            toggleloc[4] = 2
        } else if ($(this).text() == "X") { 
            $(this).text(" ");
            toggleloc[4] = 0
            console.log(toggleloc)
        }
        else {
            $(this).text("O");
            toggleloc[4] = 1 
            console.log(toggleloc)
        }; 
    });
    $("#but5").click(function() { 
        if ($(this).text() == "O") { 
            $(this).text("X"); 
            toggleloc[5] = 2
            console.log(toggleloc)
        } else if ($(this).text() == "X") { 
            $(this).text(" ");
            toggleloc[5] = 0
            console.log(toggleloc)
        }
        else {
            $(this).text("O");
            toggleloc[5] = 1 
            console.log(toggleloc)
        }; 
    });
    return toggleloc
}


function dragdrop(){
    // a 1d array of length 36 to represent the dropped location.
    let droppedloc = new Array(30)
    $("#chordimage").droppable({
      drop: function( event, ui ) {
        name = ui.draggable.attr('data-name')
        original = ui.draggable.parent().attr('id')
        if (original == "symb_ent"){
          let pos = $( name ).index( symbols )
          symbols.splice(pos,1)
        //symbols.push(name)
        }
        let newPosX = ui.offset.left - $(this).offset().left;
        let newPosY = ui.offset.top - $(this).offset().top;

        console.log("Pos X -> " + newPosX)
        console.log("Pos Y -> " + newPosY)
        
        let countx = 0
        while (newPosX > 60){
            newPosX -= 59
            countx += 1
        }

        console.log("Count X -> " + countx)
        
        // these coordinates are specific to the given graph
        if ( (newPosY > 64 && newPosY < 102)){
            droppedloc[countx] = name
        }
        if ( (newPosY > 154 && newPosY < 187)){
            droppedloc[countx+6] = name
        }
        if ( (newPosY > 245 && newPosY < 272)){
            droppedloc[countx+12] = name
        }
        if ( (newPosY > 335 && newPosY < 360)){
            droppedloc[countx+18] = name
        }
        if ( (newPosY > 425 && newPosY < 446)){
            droppedloc[countx+24] = name
        }
        console.log(droppedloc)
        //makeNames(symbols)
      },
      });
  }


$(document).ready(function() {
    // makesymbol()
    makeNames(symbols)
    // makeDroppableSpots()
    // maketoggle(toggles)
    dragdrop()
    togglebutton()
    $("#ee").prop('href', "/quiz/" + 1)
})