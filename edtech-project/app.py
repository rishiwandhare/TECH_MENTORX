from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # Dummy login (hackathon friendly)
        username = request.form["username"]
        return redirect(url_for("dashboard"))
    return render_template("login.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

@app.route("/roadmap")
def roadmap():
    return render_template("roadmap.html")

@app.route("/quiz")
def quiz():
    return render_template("quiz.html")

if __name__ == "__main__":
    app.run(debug=True)