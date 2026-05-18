import pickle
import numpy as np
from flask import Flask, render_template, request

app = Flask(__name__)

# Load model
model = pickle.load(open("ML project 2.pkl", "rb"))

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        temp = float(request.form["temperature"])
        humidity = float(request.form["humidity"])
        aqi = float(request.form["aqi"])
        pollution = float(request.form["pollution"])

        features = np.array([[temp, humidity, aqi, pollution]])

        prediction = model.predict(features)

        if prediction[0] == 1:
            result = "Safe Environment"
        else:
            result = "Not Safe"

        return render_template("predict.html", prediction_text=result)

    except Exception as e:
        return str(e)
    @app.route('/')
    def home():
        return render_template('index.html')
    @app.route('/about')
    def about_page():
        return render_template('about.html')
    @app.route('/predict')
    def predict_page():
        return render_template('predict.html')
    @app.route('/contact')
    def contact_page():
        return render_template('contact.html')

if __name__ == "__main__":
    app.run(debug=True)