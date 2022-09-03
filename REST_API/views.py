from REST_API import app, db
from REST_API.models import Article
from flask import render_template, request, jsonify, make_response


@app.route("/", methods=['GET'])
def home():
    return render_template("home.html")


@app.route("/form", methods=['POST', 'UPDATE', 'DELETE'])
def form():
    if request.method == 'POST':
            req = request.get_json()

            title = req['title']
            body = req['body']
            article = Article(title=title, body=body)
            db.session.add(article)
            db.session.commit()

            return make_response(jsonify(get_articles()), 200)
    
    elif request.method == 'DELETE':
        id = request.get_json()['id']

        article = Article.query.get(id)
        if article is not None:
            Article.query.filter_by(id=id).delete()
            db.session.commit()

        return make_response(jsonify(get_articles()), 200)

    elif request.method == 'UPDATE':
        req = request.get_json()

        id = req['id']
        title = req['title']
        body = req['body']

        db.session.query(Article).filter_by(id=id).update({'title': title, 'body': body})
        db.session.commit()

        return make_response(jsonify(get_articles()), 200)

def get_articles():
    articles = Article.query.limit(5).all()

    data = []

    for article in articles:
        data.append({'id': article.id, 'title': article.title, 'body': article.body})

    return data
