
function loadChords(chordNumber){

    let newPost2 = $("<img>")
    let inputString2 = chordNumber.image
    $(newPost2).prop('src', inputString2)
    $(newPost2).prop('id', 'image')
    $("#image").append(newPost2)

    let newPost3 = $("<button>")
    let inputString3 = chordNumber.choiceOne
    $(newPost3).text(inputString3)  
    $(newPost3).prop('id', 'choiceOne')
    $(newPost3).prop('value', inputString3)
    $("#rowOne").append(newPost3)

    let newPost4 = $("<button>")
    let inputString4 = chordNumber.choiceTwo
    $(newPost4).text(inputString4)  
    $(newPost4).prop('id', 'choiceTwo')
    $(newPost4).prop('value', inputString4)
    $("#rowOne").append(newPost4)

    let newPost5 = $("<button>")
    let inputString5 = chordNumber.choiceThree
    $(newPost5).text(inputString5)  
    $(newPost5).prop('id', 'choiceThree')
    $(newPost5).prop('value', inputString5)
    $("#rowTwo").append(newPost5)

    let newPost6 = $("<button>")
    let inputString6 = chordNumber.choiceFour
    $(newPost6).text(inputString6)  
    $(newPost6).prop('id', 'choiceFour')
    $(newPost6).prop('value', inputString6)
    $("#rowTwo").append(newPost6)

}

function selectRightAnswer(){
    let one = $("#choiceOne").attr('value')
    let two = $("#choiceTwo").attr('value')
    let three = $("#choiceThree").attr('value')
    let four = $("#choiceFour").attr('value')
    let answer = chordNumber.answer

    if (one == answer){
        $("#choiceOne").css('background-color','green');
    }

    if (two == answer){
        $("#choiceTwo").css('background-color','green');
    }

    if (three == answer){
        $("#choiceThree").css('background-color','green');
    }

    if (four == answer){
        $("#choiceFour").css('background-color','green');
    }
}

// <!-- {
//     "id": 1,
//     "choiceOne": "A",
//     "choiceTwo": "Em",
//     "choiceThree": "G",
//     "choiceFour": "D",
//     "answer": "Em",
//     "image": "/images/em_chord.png"
//     } --



$(document).ready(function(){
    $("#nextButton").css('visibility', 'hidden');
    $("#resultsButton").css('visibility', 'hidden');
    
    loadChords(chordNumber)
    
    currentID = parseInt(chordNumber.id)

    $("#ee").prop('href', "/quiz/" + 1)
    // $("#nextButton").prop('href', "/quiz/" + 3)
    console.log ("/quiz/" + currentID)
  
    
    $("#choiceOne").click(function(){
        currentID += 1
        $("#nn").prop('href', "/quiz/" + currentID)
        selectRightAnswer()

        $("#choiceOne").attr("disabled", true);
        $("#choiceTwo").attr("disabled", true);
        $("#choiceThree").attr("disabled", true);
        $("#choiceFour").attr("disabled", true);

        let one = $(this).attr('value')
        let answer = chordNumber.answer
        
        currentID += 1;
        console.log("newID is " + parseInt(currentID))

        if (currentID <= 6){
            $("#nextButton").css('visibility', 'visible');
      
        }
        else if (currentID == 7){
            $("#resultsButton").css('visibility', 'visible');
      
        }
        

        if (one == answer){
            $(this).css('background-color','green');

            $("#ee").prop('href', "/quiz/" + chordNumber.id)
            let newPost = $("<button>")
            let inputString = chordNumber.choiceTwo
            $(newPost).text(inputString)  
            $(newPost).prop('id', 'choiceTwo')
            $(newPost).prop('value', inputString)
            $("#rowOne").append(newPost)

        }
        else {
            $(this).css('background-color','red');
        }

        console.log("one is " + one)
        console.log("one Answer is " + answer)
        
    })

    $("#choiceTwo").click(function(){
        currentID += 1
        $("#nn").prop('href', "/quiz/" + currentID)
        $("#rr").prop('href', "/quiz/" + 1)
        selectRightAnswer()

        $("#choiceOne").attr("disabled", true);
        $("#choiceTwo").attr("disabled", true);
        $("#choiceThree").attr("disabled", true);
        $("#choiceFour").attr("disabled", true);

        let two = $(this).attr('value')
        let answer = chordNumber.answer

        currentID += 1;
        console.log("newID is " + parseInt(currentID))

        if (currentID <= 7){
            $("#nextButton").css('visibility', 'visible');
        }
        else if (currentID == 8){
            $("#resultsButton").css('visibility', 'visible');
        }

        if (two == answer){
            $(this).css('background-color','green');
            
        }
        else {
            $(this).css('background-color','red');
            
        }

        console.log("two is " + two)
        console.log("two Answer is " + answer)
        

    })

    $("#choiceThree").click(function(){
        currentID += 1
        $("#nn").prop('href', "/quiz/" + currentID)
        selectRightAnswer()

        $("#choiceOne").attr("disabled", true);
        $("#choiceTwo").attr("disabled", true);
        $("#choiceThree").attr("disabled", true);
        $("#choiceFour").attr("disabled", true);

        let three = $(this).attr('value')
        let answer = chordNumber.answer

        currentID += 1;
        console.log("newID is " + parseInt(currentID))

        if (currentID <= 7){
            $("#nextButton").css('visibility', 'visible');
        }
        else if (currentID == 8){
            $("#resultsButton").css('visibility', 'visible');
        }

        if (three == answer){
            $(this).css('background-color','green');
        }
        else {
            $(this).css('background-color','red');
        }

        console.log("three is " + three)
        console.log("three Answer is " + answer)
        

    })

    $("#choiceFour").click(function(){
        currentID += 1
        $("#nn").prop('href', "/quiz/" + currentID)
        selectRightAnswer()

        $("#choiceOne").attr("disabled", true);
        $("#choiceTwo").attr("disabled", true);
        $("#choiceThree").attr("disabled", true);
        $("#choiceFour").attr("disabled", true);

        let four = $(this).attr('value')
        let answer = chordNumber.answer

        currentID += 1;
        console.log("newID is " + parseInt(currentID))

        if (currentID <= 7){
            $("#nextButton").css('visibility', 'visible');
        }
        else if (currentID == 8){
            $("#resultsButton").css('visibility', 'visible');
        }

        if (four == answer){
            $(this).css('background-color','green');
        }
        else {
            $(this).css('background-color','red');
        }

        console.log(four)
        console.log(answer)
        
    })
        
})








          







          






