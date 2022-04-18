function createButtons(info, ct) {
  $(".title").empty()
  $(".description").empty()
  $(".background-image").empty()
  $("#next_button").empty()
  let count = ct
  
  $.each(info, function(index,  value) {
      let titleentry = $("<div class='col-md-12'>")
      let entry = $("<div class='col-md-1'>")
      let desentry = $("<div class='col-md-8'>")
      let button =$("<button class='btn btn-outline-success'> </button>")
      // let button = $("<button>")
      

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
        console.log(count)
        if (count == 4){
          window.location.href = "/learn"
        }
        count += 1
        createButtons(info, count)
     })
     
  });
}

$(document).ready(function(){
  createButtons(info, 1)
  
})