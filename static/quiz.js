function update_counts_MCQ(newNumbers) {
    console.log(newNumbers)
    $.ajax({
        type: "POST",
        url: "/update_counts_MCQ",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(newNumbers),
        success: function(result){
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}


function loadChords(chordNumber){
    console.log("js" + correct_count)
    console.log("js" + incorrect_count)
    console.log("js" + remaining_count)

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


$(document).ready(function(){
    $("#quiz").css("font-weight", "800")
    $("#quiz").css("color", "#f0887d")

    loadChords(chordNumber)

    currentID = parseInt(chordNumber.id)

    if (currentID == 1){
        let newNumbers = [0,0,10];
        correct_count = 0
        incorrect_count = 0
        remaining_count = 10
        update_counts_MCQ(newNumbers)
    }

    update_counts_MCQ()
    $("#correct").text(correct_count)
    $("#incorrect").text(incorrect_count)
    $("#remaining").text(remaining_count)

    $("#correctIncorrect").text("")
    // $("#nextButton").css('visibility', 'hidden');
    $("#resultsButton").css('visibility', 'hidden')


    $("#ee").prop('href', "/quiz/" + 1)
    // $("#nextButton").prop('href', "/quiz/" + 3)
    console.log ("/quiz/" + currentID)


    $("#choiceOne").click(function(){
        currentID += 1
        if (currentID < 7) {
            $("#quiz-next").prop('href', "/quiz/" + currentID)
        }
        else {
            $("#quiz-next").prop('href', "/quiz-recreate/1")
        }
        selectRightAnswer()

        $("#choiceOne").attr("disabled", true);
        $("#choiceTwo").attr("disabled", true);
        $("#choiceThree").attr("disabled", true);
        $("#choiceFour").attr("disabled", true);

        let one = $(this).attr('value')
        let answer = chordNumber.answer

        currentID += 1;

        $("#nextButton").css('visibility', 'visible');


        if (one == answer){
            $(this).css('background-color','green');
            $("#correctIncorrect").text("Correct!")
            $("#ee").prop('href', "/quiz/" + chordNumber.id)
            let newPost = $("<button>")
            let inputString = chordNumber.choiceTwo
            $(newPost).text(inputString)
            $(newPost).prop('id', 'choiceTwo')
            $(newPost).prop('value', inputString)
            $("#rowOne").append(newPost)


                correct_count += 1
                remaining_count -= 1


            $("#correct").text(correct_count)
            $("#incorrect").text(incorrect_count)
            $("#remaining").text(remaining_count)
            let newNumbers = [0,0,0]
            newNumbers[0] = correct_count
            newNumbers[1] = incorrect_count
            newNumbers[2] = remaining_count
            update_counts_MCQ(newNumbers);


        }
        else {
            $(this).css('background-color','red');
            $("#correctIncorrect").text("Incorrect!")


                incorrect_count += 1
                remaining_count -= 1

            $("#correct").text(correct_count)
            $("#incorrect").text(incorrect_count)
            $("#remaining").text(remaining_count)
            let newNumbers = [0,0,0]
            newNumbers[0] = correct_count
            newNumbers[1] = incorrect_count
            newNumbers[2] = remaining_count
            update_counts_MCQ(newNumbers);
        }

    })

    $("#choiceTwo").click(function(){
        currentID += 1
        if (currentID < 7) {
            $("#quiz-next").prop('href', "/quiz/" + currentID)
        }
        else {
            $("#quiz-next").prop('href', "/quiz-recreate/1")
        }
        selectRightAnswer()

        $("#choiceOne").attr("disabled", true);
        $("#choiceTwo").attr("disabled", true);
        $("#choiceThree").attr("disabled", true);
        $("#choiceFour").attr("disabled", true);

        let two = $(this).attr('value')
        let answer = chordNumber.answer

        currentID += 1;

        $("#nextButton").css('visibility', 'visible');

        if (two == answer){
            $(this).css('background-color','green');


                correct_count += 1
                remaining_count -= 1

            $("#correctIncorrect").text("Correct!")
            $("#correct").text(correct_count)
            $("#incorrect").text(incorrect_count)
            $("#remaining").text(remaining_count)
            let newNumbers = [0,0,0]
            newNumbers[0] = correct_count
            newNumbers[1] = incorrect_count
            newNumbers[2] = remaining_count

            update_counts_MCQ(newNumbers);

        }
        else {
            $(this).css('background-color','red');
            $("#correctIncorrect").text("Incorrect!")

                incorrect_count += 1
                remaining_count -= 1

            $("#correct").text(correct_count)
            $("#incorrect").text(incorrect_count)
            $("#remaining").text(remaining_count)
            let newNumbers = [0,0,0]
            newNumbers[0] = correct_count
            newNumbers[1] = incorrect_count
            newNumbers[2] = remaining_count
            update_counts_MCQ(newNumbers);

        }




    })

    $("#choiceThree").click(function(){
        currentID += 1
        if (currentID < 7) {
            $("#quiz-next").prop('href', "/quiz/" + currentID)
        }
        else {
            $("#quiz-next").prop('href', "/quiz-recreate/1")
        }
        selectRightAnswer()

        $("#choiceOne").attr("disabled", true);
        $("#choiceTwo").attr("disabled", true);
        $("#choiceThree").attr("disabled", true);
        $("#choiceFour").attr("disabled", true);

        let three = $(this).attr('value')
        let answer = chordNumber.answer

        currentID += 1;

        $("#nextButton").css('visibility', 'visible');

        if (three == answer){
            $("#correctIncorrect").text("Correct!")
            $(this).css('background-color','green');


                correct_count += 1
                remaining_count -= 1

            $("#correct").text(correct_count)
            $("#incorrect").text(incorrect_count)
            $("#remaining").text(remaining_count)
            let newNumbers = [0,0,0]
            newNumbers[0] = correct_count
            newNumbers[1] = incorrect_count
            newNumbers[2] = remaining_count
            update_counts_MCQ(newNumbers);

        }
        else {
            $("#correctIncorrect").text("Incorrect!")
            $(this).css('background-color','red')


                incorrect_count += 1
                remaining_count -= 1

            $("#correct").text(correct_count)
            $("#incorrect").text(incorrect_count)
            $("#remaining").text(remaining_count)
            let newNumbers = [0,0,0]
            newNumbers[0] = correct_count
            newNumbers[1] = incorrect_count
            newNumbers[2] = remaining_count
            update_counts_MCQ(newNumbers);

        }




    })

    $("#choiceFour").click(function(){
        currentID += 1
        if (currentID < 7) {
            $("#quiz-next").prop('href', "/quiz/" + currentID)
        }
        else {
            $("#quiz-next").prop('href', "/quiz-recreate/1")
        }
        selectRightAnswer()

        $("#choiceOne").attr("disabled", true);
        $("#choiceTwo").attr("disabled", true);
        $("#choiceThree").attr("disabled", true);
        $("#choiceFour").attr("disabled", true);

        let four = $(this).attr('value')
        let answer = chordNumber.answer

        currentID += 1;

        $("#nextButton").css('visibility', 'visible');

        if (four == answer){
            $("#correctIncorrect").text("Correct!")
            $(this).css('background-color','green');
            correct_count += 1
            remaining_count -= 1
            $("#correct").text(correct_count)
            $("#incorrect").text(incorrect_count)
            $("#remaining").text(remaining_count)
            let newNumbers = [0,0,0]
            newNumbers[0] = correct_count
            newNumbers[1] = incorrect_count
            newNumbers[2] = remaining_count
            update_counts_MCQ(newNumbers);

        }
        else {
            $("#correctIncorrect").text("Incorrect!")
            $(this).css('background-color','red')
            incorrect_count += 1
            remaining_count -= 1
            $("#correct").text(correct_count)
            $("#incorrect").text(incorrect_count)
            $("#remaining").text(remaining_count)
            let newNumbers = [0,0,0]
            newNumbers[0] = correct_count
            newNumbers[1] = incorrect_count
            newNumbers[2] = remaining_count
            update_counts_MCQ(newNumbers);
        }

        console.log(four)
        console.log(answer)

    })




});
