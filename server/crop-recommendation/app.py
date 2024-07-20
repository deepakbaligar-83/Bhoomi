# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from sklearn.ensemble import RandomForestClassifier
# import pandas as pd
# import joblib

# app = Flask(__name__)
# CORS(app)

# # Load or create the model
# def create_model():
#     # Sample data for demonstration; replace with your actual dataset
#     data = pd.DataFrame({
#         'soil_ph': [6.5, 7.0, 5.5, 6.0],
#         'soil_moisture': [20, 30, 40, 50],
#         'temperature': [25, 35, 20, 35],
#         'rainfall': [200, 150, 300, 250],
#         'humidity': [60, 70, 80, 90],
#         'crop_type': ['Wheat', 'Rice', 'Barley', 'Maize']
#     })

#     X = data[['soil_ph', 'soil_moisture', 'temperature', 'rainfall', 'humidity']]
#     y = data['crop_type']

#     model = RandomForestClassifier(n_estimators=100)
#     model.fit(X, y)

#     joblib.dump(model, 'crop_model.pkl')

# try:
#     model = joblib.load('crop_model.pkl')
# except:
#     create_model()
#     model = joblib.load('crop_model.pkl')

# @app.route('/recommend', methods=['POST'])
# def recommend():
#     data = request.json
#     input_data = [[
#         data['soil_ph'],
#         data['soil_moisture'],
#         data['temperature'],
#         data['rainfall'],
#         data['humidity']
#     ]]
#     prediction = model.predict(input_data)
#     return jsonify({'recommended_crop': prediction[0]})

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.ensemble import RandomForestClassifier
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

# Load or create the model
def create_model():
    # Load CSV data (update the path to match your actual file location)
    crop_data = pd.read_csv('D:/React/bhoomi/server/crop-recommendation/crop_recommendation.csv')
    
    # Data cleaning and preprocessing if needed
    # For example, handling missing values or encoding categorical variables
    
    X = crop_data[['soil_ph', 'soil_moisture', 'temperature', 'rainfall', 'humidity']]
    y = crop_data['crop_type']

    # Create and train the model
    model = RandomForestClassifier(n_estimators=100)
    model.fit(X, y)

    # Save the model
    joblib.dump(model, 'crop_model.pkl')

try:
    # Try to load the existing model
    model = joblib.load('crop_model.pkl')
except:
    # If the model doesn't exist, create and train a new one
    create_model()
    model = joblib.load('crop_model.pkl')

@app.route('/recommend', methods=['POST'])
def recommend():
    # Get data from the request
    data = request.json
    input_data = [[
        data['soil_ph'],
        data['soil_moisture'],
        data['temperature'],
        data['rainfall'],
        data['humidity']
    ]]
    
    # Make predictions using the model
    prediction = model.predict(input_data)
    
    # Return the recommended crop as JSON response
    return jsonify({'recommended_crop': prediction[0]})

if __name__ == '__main__':
    # Run the Flask app
    app.run(debug=True)
