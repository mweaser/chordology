
$(document).ready(function() { 
    $("#start-learning").click(function() {
        window.location.replace('http://127.0.0.1:5000/learn')
    })
    $("#test-yourself").click(function() {
        window.location.replace('http://127.0.0.1:5000/quiz')
    })
})