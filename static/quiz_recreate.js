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

let toggleloc = new Array(6)

let draggable_symbols = []

let alreadyChecked = false;

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

function makeNames(symbolsentry, droppable_symbols){
    $("#symb_ent").empty()
    $.each(["#symb_ent"], function(index, value){
        let allist = [symbolsentry][index]
        $.each(allist, function(ind, sym){
        let newsym = emprow(ind, sym)
        $(value).append(newsym)
        draggable_symbols.push(newsym)
        })
    });
    $(".symbol_entry").draggable({ 
        revert: 'invalid',
        });
}
  
function togglebutton() {
    // a 1d array of length 6 to represent the toggle setting
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


function dragdrop(draggable_symbols){
    // a 1d array of length 36 to represent the dropped location.
    let droppedloc = new Array(30)
    let symbol_rows = [-1, -1, -1]
    let symbol_cols = [-1, -1, -1]
    $("#chordimage").droppable({
      drop: function( event, ui ) {
        name = ui.draggable.attr('data-name')
        original = ui.draggable.parent().attr('id')
   
        if (original == "symb_ent"){
          let pos = $( name ).index( symbols )
          symbols.splice(pos,1)
        }
        let newPosX = ui.offset.left - $(this).offset().left;
        let newPosY = ui.offset.top - $(this).offset().top;
        
        let col = -1
        if (newPosX <= -9) {
            col = 0
        }
        else if (newPosX >=24 && newPosX <= 42) {
            col = 1
        }
        else if (newPosX >=74 && newPosX <= 87) {
            col = 2
        }
        else if (newPosX >= 121 && newPosX <= 136) {
            col = 3
        }
        else if (newPosX >= 171 && newPosX <= 186) {
            col = 4
        }
        else if (newPosX >= 222 && newPosX <= 235) {
            col = 5
        }

        let row = -1
        if (newPosY >= 14 && newPosY <= 23) {
            row = 0
        }
        else if (newPosY >= 81 && newPosY <= 91) {
            row = 1
        }
        else if (newPosY >=149 && newPosY <= 159) {
            row = 2
        }
        else if (newPosY >= 216 && newPosY <= 226) {
            row = 3
        }
        else if (newPosY >= 283 && newPosY <= 293) {
            row = 4
        }

        if (name == "1") {
            symbol_rows[0] = row
            symbol_cols[0] = col
        }
        else if (name == "2") {
            symbol_rows[1] = row
            symbol_cols[1] = col
        }
        else {
            symbol_rows[2] = row
            symbol_cols[2] = col
        }

        if (symbol_rows.includes(-1) == false && symbol_cols.includes(-1) == false) {
            check_correct(symbol_rows, symbol_cols)
        } 
      },
      });
  }

function check_correct(rows, cols) {
    if (alreadyChecked == true) {
        return;
    }

    alreadyChecked = true;
    firstCorrect = false;
    secondCorrect = false;
    thirdCorrect = false;
    toggleCorrect = true;

    // Check if first symbol in correct spot
    if (data["layout"][rows[0]+1][cols[0]] == 1) {
        draggable_symbols[0].css('background-color', 'green')
        firstCorrect = true;
    }

    // Check if second symbol in correct spot
    if (data["layout"][rows[1]+1][cols[1]] == 2) {
        draggable_symbols[1].css('background-color', 'green')
        secondCorrect = true;
    }

    // Check if third symbol in correct spot
    if (data["layout"][rows[2]+1][cols[2]] == 3) {
        draggable_symbols[2].css('background-color', 'green')
        thirdCorrect = true;
    }

    // Check if toggle buttons are right
    for (let i = 0; i < toggleloc.length; i++) {
        if (toggleloc[i] != data["layout"][0][i]) {
            toggleCorrect = false;
            break;
        }
    }

    if (firstCorrect && secondCorrect && thirdCorrect && toggleCorrect) {
        let entry = $("<div></div>")
        entry.text("Correct!")
        $("#recreate-correct-text").html(entry)
        $("#recreate-correct-text").html(entry)
        $("#recreate-correct-text").css('left', '110px')
        $("#recreate-correct-text").css('color', 'green')
        correct_count += 1
        remaining_count -= 1
        $("#correct").text(correct_count)
        $("#remaining").text(remaining_count)
        $("#nextButton").css('visibility', 'visible');
    }
    else {
        let entry = $("<div></div>")
        entry.text("Incorrect!")
        $("#recreate-correct-text").html(entry)
        $("#recreate-correct-text").css('left', '100px')
        $("#recreate-correct-text").css('color', 'red')
        incorrect_count += 1
        remaining_count -= 1
        $("#incorrect").text(incorrect_count)
        $("#remaining").text(remaining_count)
        $("#nextButton").css('visibility', 'visible');
        $("#correctImage").css('visibility', 'visible');
    }

    let newNumbers = [correct_count, incorrect_count, remaining_count];
    update_counts(newNumbers);
}

function update_counts(newNumbers) {
    $.ajax({
        type: "POST",
        url: "/update_counts_MCQ",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(newNumbers),
        success: function(result){
            console.log("Sucessfully updated counts on server");
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}

function addHiddenCorrectImage() {
    console.log(data["image"])
    htmlValue = "<img class='img-chord-correct' src='/static/images/" + data["image"] + "'>"
    $("#correctImage").html(htmlValue)
    $("#correctImage").css('visibility', 'hidden');
}


$(document).ready(function() {
    $("#quiz").css("font-weight", "bold")
    $("#quiz").css("color", "orange")
    addHiddenCorrectImage()
    update_counts()
    $("#correct").text(correct_count)
    $("#incorrect").text(incorrect_count)
    $("#remaining").text(remaining_count)
    $("#pattern-choice").text("Recreate the pattern for " + data["chord"] + ".")
    $("#nn").css('margin-left', '0px');
    makeNames(symbols, draggable_symbols)
    togglebutton()
    dragdrop(draggable_symbols)
    $("#ee").prop('href', "/quiz/" + 1)
    if (id < 4) {
        $("#nn").prop('href', "/quiz-recreate/" + (id + 1))
    }
    else {
        $("#nn").prop('href', "/results")
    }

})