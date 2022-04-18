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

# #CHORD DATA
# data = [
#     {
#         "id": 1,
#         "chord": "A",
#         # "image":"",
#         "layout": [
#             [2, 1, 0, 0, 0, 1],
#             [0, 0, 0, 0, 0, 0],
#             [0, 0, 2, 1, 3, 0],
#             [0, 0, 0, 0, 0, 0],
#             [0, 0, 0, 0, 0, 0]
#         ]
#     },
#     {
#         "id": 2,
#         "chord": "Em",
#         "image":"",
#         "layout": [
#             [1, 0, 0, 1, 1, 1],
#             [0, 0, 0, 0, 0, 0],
#             [0, 1, 2, 0, 0, 0],
#             [0, 0, 0, 0, 0, 0],
#             [0, 0, 0, 0, 0, 0]
#         ]
#     },
#     {
#         "id": 3,
#         "chord": "G"
#         "image":"",
#         "layout": [
#             [0, 0, 1, 1, 1, 0],
#             [0, 0, 0, 0, 0, 0],
#             [0, 1, 0, 0, 0, 0],
#             [2, 0, 0, 0, 0, 3],
#             [0, 0, 0, 0, 0, 0]
#         ]
#     },
#     {
#         "id": 4,
#         "chord": "D"
#         "image":"",
#         "layout": [
#             [2, 2, 1, 0, 0, 0],
#             [0, 0, 0, 0, 0, 0],
#             [0, 0, 0, 1, 0, 2],
#             [0, 0, 0, 0, 3, 0],
#             [0, 0, 0, 0, 0, 0]
#         ]
#     },
#     {
#         "id": 5,
#         "chord": "C"
#         "image":"",
#         "layout": [
#             [2, 0, 0, 1, 0, 1],
#             [0, 0, 0, 0, 1, 0],
#             [0, 0, 2, 0, 0, 0],
#             [0, 3, 0, 0, 0, 0],
#             [0, 0, 0, 0, 0, 0]
#         ]
#     },
#     {
#         "id": 6,
#         "chord": "Am"
#         "image":"",
#         "layout": [
#             [2, 1, 0, 0, 0, 1],
#             [0, 0, 0, 0, 1, 0],
#             [0, 0, 2, 3, 0, 0],
#             [0, 0, 0, 0, 0, 0],
#             [0, 0, 0, 0, 0, 0]
#         ]
#     }
# ]

#QUIZ DATA
#counting ABCD as top-left, top-right, bottom-left, bottom-right

miniquiz = [
    {
        "id": 1,
        "ans": "A",
        "ans-text": "Top"
    },
    {
        "id": 2,
        "ans": "A",
        "ans-text": "Pitch Increase"
    },
    {
        "id": 3,
        "ans": "B",
        "ans-text": "Middle"
    },
    {
        "id": 4,
        "ans": "A",
        "ans-text": "Played"
    }
]

chords = {
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


@app.route('/quiz/<id>')
def quiz(id):
   chordNumber = chords[int(id)]
   return render_template('quiz.html', chordNumber = chordNumber, chords = chords)


# AJAX FUNCTIONS




if __name__ == '__main__':
   app.run(debug = True)
