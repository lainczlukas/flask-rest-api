from REST_API import app
from REST_API.models import Article
from flask import render_template, request, jsonify, make_response


@app.route("/", methods=['GET'])
def home():
    return render_template("home.html")

@app.route("/form", methods=['POST'])
def form():
    if request.method == 'POST':
            req = request.get_json()

            print(req)

            return make_response(jsonify({'message': 'json received'}), 200)

@app.route("/form/<int:id>", methods=['GET'])
def get_article(id):
    return make_response(jsonify({'message': 'article id is {}'.format(id)}), 200)