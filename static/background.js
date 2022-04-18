function createButtons(info, ct) {
  $(".title").empty()
  $(".description").empty()
  $(".background-image").empty()
  $("#next_button").empty()
  let count = ct

  $.each(info, function(index,  value) {
      let titleentry = $("<div>")

      let desentry = $("<div>")
      let button =$("<button class='btn btn-outline-success' value='Next' style='float: right;'> Next </button>")
      let entry = $("<div class='col-md-1'>")


      if (value["id"] == count){
        titleentry.append(value["Title"])
        desentry.append(value["Description"])
        $(".title").append(titleentry)
        $(".description").append(desentry)
        $("#background-image").html("<img  src='/static/images/" + value["image"] + "'>")

        $("#button").text("Next")
        entry.append(button)
        $("#next_button").append(entry)
      }

      $(button).click(function() {
        if(count < 4){
            console.log(count)
            count += 1
            createButtons(info, count)
        }
        else{
            window.location.replace("/background-quiz")
        }


     })

  });
}

$(document).ready(function(){
  createButtons(info, 1)

})
