from REST_API import db

class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    body = db.Column(db.String(150), nullable=False)

    def __repr__(self):
        return f"Article title: {self.title}, body: {self.body}"