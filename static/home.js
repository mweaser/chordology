
$(document).ready(function() {
    $("#start-learning").click(function() {
        window.location.replace('http://127.0.0.1:5000/background')
    })
    $("#test-yourself").click(function() {
        window.location.replace('http://127.0.0.1:5000/quiz/1')

    })
    $(".navbar").hide()
})
