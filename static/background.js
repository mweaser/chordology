function createButtons(info, ct) {
      $(".title").empty()
      $(".description").empty()
      $("#bg-body").empty()
      $("#next_button").empty()
      let count = ct

  $.each(info, function(index,  value) {
      let titleentry = $("<div>")

      let desentry = $("<div>")
      let nextbutton =$("<button class='btn btn-outline-success' value='Next' style='float: right;'> Next </button>")
      let prevbutton =$("<button class='btn btn-outline-success' value='Prev' style='float: right;'> Prev </button>")

      let bgentry = $("<div class='row'>")
      let entry = $("<div class='col-md-1'>")


      if (value["id"] == count){
        titleentry.append(value["Title"])
        desentry.append(value["Description"])
        $(".title").append(titleentry)
        $(".description").append(desentry)
        let images = value["images"]
        if(count == 1){
            bgentry.append("<div class='col-md-3'><img  src='/static/images/" + images[0] + "' height = '500'>")
            bgentry.append("<div class='col-md-3' id='slide2-text1'>This is the neck of the guitar, where your fingers are going to be placed. The neck is made up of a series of frets, denoted by horizontal lines.")
            bgentry.append("<div class='col-md-3 bgimages'><img  src='/static/images/" + images[1] + "' height = '500'>")
            bgentry.append("<div class='col-md-3' id='slide2-text2'>The guitar also has six strings, which are tuned to the notes of  E A D G B E. <br><br> When you press your finger on a string at a fret, it alters the pitch of the string to a higher note, with each fret reaching a higher pitch.")
            $("#bg-body").append(bgentry)
        }
        else if(count == 2){
            bgentry.append("<div class='col-md-7 bgimages'><img  src='/static/images/" + images[0] + "' height = '500'>")
            bgentry.append("<div class='col-md-4' id='slide3-text'>Each horizontal line corresponds to the frets, starting from the top of the guitar. <br> <br> The vertical lines are strings, with the leftmost line corresponding to the leftmost string.")
            $("#bg-body").append(bgentry)
        }
        else if(count == 3 || count == 4){
            bgentry.append("<div class='bgimages'><img  src='/static/images/" + images[0] + "' height = '300'>")
            $("#bg-body").append(bgentry)
        }

        $("#next_button").append(nextbutton)
        if(count>1){
            $("#next_button").append(prevbutton)
        }
      }


      $(nextbutton).click(function() {
        if(count < 4){
            console.log(count)
            count += 1
            createButtons(info, count)
        }
        else{
            window.location.replace("/background-quiz")
        }
     })
     $(prevbutton).click(function() {
       console.log(count)
       count -= 1
       createButtons(info, count)
    })

  });
}

$(document).ready(function(){
  createButtons(info, 1)

})
