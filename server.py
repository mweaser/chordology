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

#CHORD DATA
data = [
    {
        "id": 1,
        "chord": "A",
        "image":"",
        "layout": [
            [2, 1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 2, 1, 3, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    },
    {
        "id": 2,
        "chord": "Em",
        "image":"",
        "layout": [
            [1, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0],
            [0, 1, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]
    },
    {
        "id": 3,
        "chord": "G",
        "image":"",
        "layout": [
            [0, 0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 3],
            [0, 0, 0, 0, 0, 0]
        ]
    },
    {
        "id": 4,
        "chord": "D",
        "image":"",
        "layout": [
            [2, 2, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 2],
            [0, 0, 0, 0, 3, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    },
    {
        "id": 5,
        "chord": "C",
        "image":"",
        "layout": [
            [2, 0, 0, 1, 0, 1],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 2, 0, 0, 0],
            [0, 3, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    },
    {
        "id": 6,
        "chord": "Am",
        "image":"",
        "layout": [
            [2, 1, 0, 0, 0, 1],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 2, 3, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
    }
]

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


# ROUTES


@app.route('/')
def home():
   return render_template('home.html')


@app.route('/quiz')
def quiz():
   return render_template('quiz.html')



# AJAX FUNCTIONS

# ajax for people.js
@app.route('/add_name', methods=['GET', 'POST'])
def add_name():
    global data
    global current_id

    json_data = request.get_json()
    name = json_data["name"]

    # add new entry to array with
    # a new id and the name the user sent in JSON
    current_id += 1
    new_id = current_id
    new_name_entry = {
        "name": name,
        "id":  current_id
    }
    data.append(new_name_entry)

    #send back the WHOLE array of data, so the client can redisplay it
    return jsonify(data = data)



if __name__ == '__main__':
   app.run(debug = True)
