
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
    // console.log(chords)
    // console.log("WAIT")
    // console.log(chordNumber)
    // $("#choiceOne").disabled = false;
    // $("#choiceTwo").disabled = false;
    // $("#choiceThree").disabled = false;
    // $("#choiceFour").disabled = false;
    loadChords(chordNumber)
    // console.log(chordNumber.image)
    // $("#ee").prop('href', "/edit/" + playerName.id)
    
    $("#choiceOne").click(function(){

        let one = $(this).attr('value')
        let answer = chordNumber.answer

        if (one == answer){
            $(this).css('background-color','green');

        }
        else {
            $(this).css('background-color','red');
        }

        console.log("one is " + one)
        console.log("one Answer is " + answer)
        
        $('#choiceOne').one('submit', function() {
            $(this).find('input[type="submit"]').attr('disabled','disabled');
        });
        $('#choiceTwo').one('submit', function() {
            $(this).find('input[type="submit"]').attr('disabled','disabled');
        });
        $('#choiceThree').one('submit', function() {
            $(this).find('input[type="submit"]').attr('disabled','disabled');
        });
        $('#choiceFour').one('submit', function() {
            $(this).find('input[type="submit"]').attr('disabled','disabled');
        });

    })

    $("#choiceTwo").click(function(){

        let two = $(this).attr('value')
        let answer = chordNumber.answer

        if (two == answer){
            $(this).css('background-color','green');
            $("#choiceOne").disabled = true;
        $("#choiceTwo").disabled = true;
        $("#choiceThree").disabled = true;
        $("#choiceFour").disabled = true;
            
        }
        else {
            $(this).css('background-color','red');
            
        }

        console.log("two is " + two)
        console.log("two Answer is " + answer)
        $('#choiceOne').one('submit', function() {
            $(this).find('input[type="submit"]').attr('disabled','disabled');
        });
        $('#choiceTwo').one('submit', function() {
            $(this).find('input[type="submit"]').attr('disabled','disabled');
        });
        $('#choiceThree').one('submit', function() {
            $(this).find('input[type="submit"]').attr('disabled','disabled');
        });
        $('#choiceFour').one('submit', function() {
            $(this).find('input[type="submit"]').attr('disabled','disabled');
        });

    })

    $("#choiceThree").click(function(){

        let three = $(this).attr('value')
        let answer = chordNumber.answer

        if (three == answer){
            $(this).css('background-color','green');
        }
        else {
            $(this).css('background-color','red');
        }

        console.log("three is " + three)
        console.log("three Answer is " + answer)
        $('#choiceOne').one('submit', function() {
            $(this).find('input[type="submit"]').attr('disabled','disabled');
        });
        $('#choiceTwo').one('submit', function() {
            $(this).find('input[type="submit"]').attr('disabled','disabled');
        });
        $('#choiceThree').one('submit', function() {
            $(this).find('input[type="submit"]').attr('disabled','disabled');
        });
        $('#choiceFour').one('submit', function() {
            $(this).find('input[type="submit"]').attr('disabled','disabled');
        });

    })

    $("#choiceFour").click(function(){

        let four = $(this).attr('value')
        let answer = chordNumber.answer

        if (four == answer){
            $(this).css('background-color','green');
        }
        else {
            $(this).css('background-color','red');
        }

        console.log(four)
        console.log(answer)
        $('#choiceOne').one('submit', function() {
            $(this).find('input[type="submit"]').attr('disabled','disabled');
        });
        $('#choiceTwo').one('submit', function() {
            $(this).find('input[type="submit"]').attr('disabled','disabled');
        });
        $('#choiceThree').one('submit', function() {
            $(this).find('input[type="submit"]').attr('disabled','disabled');
        });
        $('#choiceFour').one('submit', function() {
            $(this).find('input[type="submit"]').attr('disabled','disabled');
        });

    })
        
  
})








          







          






