from REST_API import app
from REST_API.models import Article
from flask import render_template, request, jsonify, make_response


@app.route("/", methods=('GET', 'POST'))
def home():
    if request.method == 'POST':
            req = request.get_json()

            print(req)

            return make_response(jsonify({'message': 'json received'}), 200)
    else:
        return render_template("home.html")