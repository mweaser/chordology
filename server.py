from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

#chord layout key
## top row
### no marking = 0, O = 1, X = 2
##frets
### no finger = 0, then number corresponding to finger

current_id = 2

correct_count = 0
incorrect_count = 0
remaining_count = 10

#CHORD DATA
data = [
    {
        "id": 1,
        "chord": "A",
        "image":"chord-a-major.png",
        "layout": [
            [2, 1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 2, 1, 3, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    },
    {
        "id": 2,
        "chord": "Em",
        "image":"chord-e-minor.png",
        "layout": [
            [1, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 1, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    },
    {
        "id": 3,
        "chord": "G",
        "image":"chord-g-major.png",
        "layout": [
            [0, 0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 3],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    },
    {
        "id": 4,
        "chord": "D",
        "image":"chord-d-major.png",
        "layout": [
            [2, 2, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 2],
            [0, 0, 0, 0, 3, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    },
    {
        "id": 5,
        "chord": "C",
        "image":"chord-c-major.png",
        "layout": [
            [2, 0, 0, 1, 0, 1],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 2, 0, 0, 0],
            [0, 3, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    },
    {
        "id": 6,
        "chord": "Am",
        "image":"chord-a-minor.png",
        "layout": [
            [2, 1, 0, 0, 0, 1],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 2, 3, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    }
]


chords = ['A', 'Em', 'G', 'D', 'C', 'Am']
chord_images = ['chord-a-major.png', 'chord-e-minor.png', 'chord-g-major.png', 'chord-d-major.png', 'chord-c-major.png', 'chord-a-minor.png']

info = [
    {
        "id": 1,
        "Title": "Guitar Anatomy",
        "images" : ["slide2-a.png", "slide2-b.png"],
        "Description": "To understand chord diagrams, it's helpful to know a few basic parts of the guitar.",
        "body" : [
            "This is the neck of the guitar, where your fingers are going to be placed. The neck is made up of a series of <b>frets</b>, denoted by horizontal lines.",
            "The guitar also has six strings, which are tuned to the notes of  <b>E A D G B E</b>. <br><br> When you press your finger on a string at a fret, it alters the pitch of the string to a higher note, with each fret reaching a higher pitch."
            ]
    },
     {
        "id": 2,
        "Title": "What is a chord diagram?",
        "images" : ["slide3.png"],
        "Description": "Chord diagrams represent an upright guitar in aquick schematic way. They're a quick tool to use when describing where you place your fingers in a given chord.",
        "body" : ["Each horizontal line corresponds to the frets, starting from the top of the guitar. <br> <br> The vertical lines are strings, with the leftmost line corresponding to the leftmost string."]

    },
    {
        "id": 3,
        "Title": "Open/Closed Strings",
        "images" : ["slide4.png"],
        "Description": "Strings that aren't pressed are designated as <b>open</b>—included in a strum-or <b>closed</b> - skipped when strumming.",
        "body": [],
    },
    {
        "id": 4,
        "Title": "Finger Placement",
        "images" : ["slide5.png"],
        "Description": "The dots on the chord diagram indicate which strings should be pressed down at each fret. To make it easy to place your fingers comfortably, the dots are numbered to indicate which finger should press at each location.",
        "body": [],
    },
]

chordsMCQ = {
    1:
        {
        "id": 1,
        "choiceOne": "A",
        "choiceTwo": "Em",
        "choiceThree": "G",
        "choiceFour": "D",
        "answer": "Em",
        "image": "https://chordbank.com/cb4dg/earthy_clo_1_750.png"
        }
    ,
    2:
        {
        "id": 2,
        "choiceOne": "A",
        "choiceTwo": "Em",
        "choiceThree": "G",
        "choiceFour": "D",
        "answer": "G",
        "image": "https://chordbank.com/cb4dg/notable_cora_1_750.png"
        }
    ,
    3:
        {
        "id": 3,
        "choiceOne": "A",
        "choiceTwo": "Em",
        "choiceThree": "G",
        "choiceFour": "D",
        "answer": "D",
        "image": "https://chordbank.com/cb4dg/acidic_mel_1_750.png"
        }
    ,
    4:
        {
        "id": 4,
        "choiceOne": "Am",
        "choiceTwo": "A",
        "choiceThree": "D",
        "choiceFour": "G",
        "answer": "A",
        "image": "https://chordbank.com/cb4dg/artful_mae_1_750.png"
        }
    ,
    5:
        {
        "id": 5,
        "choiceOne": "Am",
        "choiceTwo": "D",
        "choiceThree": "C",
        "choiceFour": "G",
        "answer": "C",
        "image": "https://chordbank.com/cb4dg/cagey_dani_1_750.png"
        }
    ,
    6:
        {
        "id": 6,
        "choiceOne": "G",
        "choiceTwo": "A",
        "choiceThree": "D",
        "choiceFour": "Am",
        "answer": "Am",
        "image": "https://chordbank.com/cb4dg/artful_luigi_1_750.png"
        }
    ,
    }

print(chords)
# ROUTES

@app.route('/')
def home():
   return render_template('home.html')

@app.route('/learn')
def learn_chords():
   return render_template('learn_chords.html', chords=chords, chord_images=chord_images, data = data)

@app.route('/background-quiz')
def miniquiz():
   return render_template('miniquiz.html')


@app.route('/background')
def background():
   return render_template('background.html', info =info)


@app.route('/quiz/<id>')
def quiz(id):
   chordNumber = chordsMCQ[int(id)]
   return render_template('quiz.html', chordNumber = chordNumber, chords = chordsMCQ)

@app.route('/quiz-recreate/<id>')
def quizRecreate(id):
   return render_template('quiz_recreate.html', data=data[int(id)-1], id=int(id), correct_count=correct_count, incorrect_count=incorrect_count, remaining_count=remaining_count)


# AJAX FUNCTIONS
# @app.route('/mcquiz/<int:id>')
# def mcquiz(id=0):
#     global michelin
#     for entry in michelin:
#         if entry["id"] == id:
#             return render_template('mcquiz.html', entry=entry, rest=None)
#     else:
#         return make_response(redirect("/"))



# ajax for saving sell
@app.route('/quiz-recreate/update_counts', methods=['GET', 'POST'])
def update_counts():
    global correct_count
    global incorrect_count
    global remaining_count

    values = request.get_json()   
    correct_count = values['correct']
    incorrect_count = values['incorrect']
    remaining_count = values['remaining']

    #send back the WHOLE array of data, so the client can redisplay it
    return jsonify(correct_count=correct_count)

@app.route('/mcquiz/<int:id>')
def mcquiz(id=0):
    global michelin
    for entry in michelin:
        if entry["id"] == id:
            return render_template('mcquiz.html', entry=entry, rest=None)
    else:
        return make_response(redirect("/"))

if __name__ == '__main__':
   app.run(debug = True)
