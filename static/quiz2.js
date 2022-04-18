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
    $("#but0").click(function() { 
        if ($(this).text() == "O") { 
            $(this).text("X"); 
            toggleloc[0] = 2
            console.log(toggleloc)
        } else { 
            $(this).text("O");
            toggleloc[0] = 1 
            console.log(toggleloc)
        }; 
    });
    $("#but1").click(function() { 
        if ($(this).text() == "O") { 
            $(this).text("X"); 
            toggleloc[1] = 2
        } else { 
            $(this).text("O");
            toggleloc[1] = 1 
        }; 
    });
    $("#but2").click(function() { 
        if ($(this).text() == "O") { 
            $(this).text("X"); 
            toggleloc[2] = 2
        } else { 
            $(this).text("O");
            toggleloc[2] = 1 
        }; 
    });
    $("#but3").click(function() { 
        if ($(this).text() == "O") { 
            $(this).text("X"); 
            toggleloc[3] = 2
        } else { 
            $(this).text("O");
            toggleloc[3] = 1 
        }; 
    });
    $("#but4").click(function() { 
        if ($(this).text() == "O") { 
            $(this).text("X"); 
            toggleloc[4] = 2
        } else { 
            $(this).text("O");
            toggleloc[4] = 1 
        }; 
    });
    $("#but5").click(function() { 
        if ($(this).text() == "O") { 
            $(this).text("X"); 
            toggleloc[5] = 2
        } else { 
            $(this).text("O");
            toggleloc[5] = 1 
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
        console.log(name)
        original = ui.draggable.parent().attr('id')
        if (original == "symb_ent"){
          let pos = $( name ).index( symbols )
          symbols.splice(pos,1)
          
        //symbols.push(name)
        }
        let newPosX = ui.offset.left - $(this).offset().left;
        let newPosY = ui.offset.top - $(this).offset().top;
        console.log(newPosX)
        console.log(newPosY)
        let countx = 0
        while (newPosX > 40){
            newPosX -= 51
            countx += 1
        }
        // these coordinates are specific to the given graph
        if ( (newPosY > 76 && newPosY < 117)){
            droppedloc[countx+5] = name
        }
        if ( (newPosY > 171 && newPosY < 209)){
            droppedloc[countx+10] = name
        }
        if ( (newPosY > 266 && newPosY < 301)){
            droppedloc[countx+10] = name
        }
        if ( (newPosY > 171 && newPosY < 209)){
            droppedloc[countx+10] = name
        }
        if ( (newPosY > 171 && newPosY < 209)){
            droppedloc[countx+10] = name
        }
        console.log(droppedloc)
        makeNames(symbols)
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
})