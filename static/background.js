function createButtons(info, ct) {
      $(".title").empty()
      $(".description").empty()
      $("#bg-body").empty()
      $("#next_button").empty()
      let count = ct

  $.each(info, function(index,  value) {
      let titleentry = $("<div>")

      let desentry = $("<div>")
      let nextbutton =$("<button class='btn btn-outline-success bgnav' value='Next' style='float: right;'> Next </button>")
      let prevbutton =$("<button class='btn btn-outline-success bgnav' value='Prev' style='float: right;'> Prev </button>")
      let quizbutton =$("<button class='btn btn-outline-success bgnav' value='Quiz' style='float: right;'> Test Yourself </button>")
      let bgentry = $("<div class='row'>")
      let entry = $("<div class='col-md-1'>")


      if (value["id"] == count){
        titleentry.append(value["Title"])
        desentry.append(value["Description"])
        $(".title").append(titleentry)
        $(".description").append(desentry)
        let images = value["images"]
        let bodytext = value["body"]
        if(count == 1){
            bgentry.append("<div class='col-md-3'><img  src='/static/images/" + images[0] + "' height = '500'>")
            bgentry.append("<div class='col-md-3' id='slide2-text1'>"+bodytext[0])
            bgentry.append("<div class='col-md-3 bgimages'><img  src='/static/images/" + images[1] + "' height = '500'>")
            bgentry.append("<div class='col-md-3' id='slide2-text2'>"+bodytext[1])
            $("#bg-body").append(bgentry)
        }
        else if(count == 2){
            bgentry.append("<div class='col-md-7 bgimages'><img  src='/static/images/" + images[0] + "' height = '500'>")
            bgentry.append("<div class='col-md-4' id='slide3-text'>"+bodytext[0])
            $("#bg-body").append(bgentry)
        }
        else if(count == 3 || count == 4){
            bgentry.append("<div class='bgimages col-md-12'><img src='/static/images/" + images[0] + "' height = '400'>")
            $("#bg-body").append(bgentry)
        }
        if(count < 4){
            $("#next_button").append(nextbutton)
        }
        if(count == 4){
            $("#next_button").append(quizbutton)
        }
        if(count>1){
            $("#next_button").append(prevbutton)
        }

      }


      $(nextbutton).click(function() {
        console.log(count)
        count += 1
        createButtons(info, count)
     })
     $(prevbutton).click(function() {
       console.log(count)
       count -= 1
       createButtons(info, count)
    })
    $(quizbutton).click(function() {
      window.location.replace("/background-quiz")
    })

  });
}

$(document).ready(function(){
  createButtons(info, 1)

})
