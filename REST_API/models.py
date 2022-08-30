from REST_API import db

class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    body = db.Column(db.String(150))

    def __repr__(self):
        return f"Article title: {self.title}, body: {self.body}"