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

let CLICKED = "A"; 
let TOGGLERES;     
let droppedarray;

function createButtons(chords, chord_images) {
    $("#button-row").empty()
    $("#button-row").append("<div class='col-md-4'> <span class='learn-chord-header'>Learn Chords</span> <br> <div id='learn_msg1'> Click a chord to learn its chord diagram</div> </div>")
    $.each(chords, function(index,  value) {
        var entry = $("<div class='col-md-1'>")
        var button =$("<button class='chord-button'>")
        $(button).text(value)
        entry.append(button)
        $("#button-row").append(entry)
        
        $(button).click(function() {
            CLICKED = chords[index]
            $("#chord-image").html("<img class='chord-image-style' src='/static/images/" + chord_images[index] + "'>")
            
            
            
            symbols = ["1","2","3"]
            // togglebutton()
            $("#learning-correct-text").empty()
            $("#learning-incorrect-text").empty()
            
            execute(chords, chord_images, symbols, data)
          
        })
    });
}

function emprow(index, symbol){
    let entry = $("<div></div>")
    entry.html(symbol)
    entry.addClass("ui-widget-content")
    entry.addClass("symbol-style")
    entry.addClass("symbol_entry")
    entry.addClass("symbol_inline")
    entry.attr("data-name",symbol)
    return entry
  }


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
    TOGGLERES = toggleloc
    return toggleloc
}

function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
    else document.getElementById('ac-wrapper').removeAttribute('style');
}
window.onload = function () {
    setTimeout(function () {
        PopUp('show');
    }, 100);
}

function dragdrop(chords, chord_images, data){
    // a 1d array of length 36 to represent the dropped location.
    let droppedloc = new Array(30).fill(0);
    
    $("#chordimage_learn").droppable({
      drop: function( event, ui ) {
        name = ui.draggable.attr('data-name')
        original = ui.draggable.parent().attr('id')
        if (original == "symb_ent"){
          let pos = $( name ).index( symbols )
          symbols.splice(pos,1)
        
        }
        let newPosX = ui.offset.left - $(this).offset().left;
        let newPosY = ui.offset.top - $(this).offset().top;
        let countx = 0
        while (newPosX > -17){
            newPosX -= 48
            countx += 1
        }

        
        // these coordinates are specific to the given graph
        if ( (newPosY > 14 && newPosY < 29)){
            droppedloc[countx] = parseInt(name)
        }
        if ( (newPosY > 80 && newPosY < 96)){
            droppedloc[countx+5] = parseInt(name)
        }
        if ( (newPosY > 148 && newPosY < 164)){
            droppedloc[countx+11] = parseInt(name)
        }
        if ( (newPosY > 213 && newPosY < 229)){
            droppedloc[countx+17] = parseInt(name)
        }
        if ( (newPosY > 282 && newPosY < 300)){
            droppedloc[countx+23] = parseInt(name)
        }
        console.log(droppedloc)
        droppedarray = droppedloc
       
      },
      });
  }
  

function checkhelper(index, droppedarr){

    
    console.log(TOGGLERES)
    if (TOGGLERES.length>6){
        TOGGLERES = TOGGLERES.slice(0,6)
    }
    // let entirearr = $.merge( TOGGLERES, droppedarr)
    let entirearr = $.merge( $.merge( [], TOGGLERES ), droppedarr );
    console.log(entirearr)
    let flatArray = [].concat.apply([], data[index]["layout"]); 
    console.log(flatArray)
    if (entirearr.every((v,i)=> v === flatArray[i])){
        console.log("yes")
        showcorrect()
        
    }
    else{
        console.log("no")
        showincorrect()
    }
    return
}

function check(data, droppedarr){
    if (CLICKED == "A"){
        checkhelper(0, droppedarr)
    }
    else if (CLICKED == "Em"){
        checkhelper(1, droppedarr)
    }
    else if (CLICKED == "G"){
        console.log(droppedarr)
        checkhelper(2, droppedarr)

    }
    else if (CLICKED == "D"){
        checkhelper(3, droppedarr)
    }
    else if (CLICKED == "C"){
        checkhelper(4, droppedarr)
    }
    else if (CLICKED == "Am"){
        checkhelper(5, droppedarr)
    }
}

function showcorrect(){
    let entry = $("<div></div>")
    entry.text("CORRECT!")
    $("#learning-correct-text").html(entry)
}
function showincorrect(){
    let entry = $("<div></div>")
    entry.text("INCORRECT!")
    $("#learning-incorrect-text").html(entry)
}

function execute(chords, chord_images, symbols, data){
    // TOGGLERES = new Array(6).fill(1);
   
    // $("#but0").html("O")
    // $("#but1").html("O")
    // $("#but2").html("O")
    // $("#but3").html("O")
    // $("#but4").html("O")
    // $("#but5").html("O")
    makeNames(symbols)
    // togglebutton()
    dragdrop(chords, chord_images, data)
    $("#check_but").click(function() { 
       
        check(data, droppedarray)
    });  
    
}

$(document).ready(function(){
    $("#learn").css("font-weight", "bold")
    $("#learn").css("color", "orange")
   
    $("#popupButton").click(function() { 
        PopUp('show')
    }); 
    createButtons(chords, chord_images, symbols)
    makeNames(symbols)
    togglebutton()
    dragdrop(chords, chord_images, data)
    $("#check_but").click(function() { 
        check(data, droppedarray)
    });  
    
})