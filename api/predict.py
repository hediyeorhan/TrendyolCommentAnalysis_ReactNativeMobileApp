import joblib

# -*- coding: utf-8 -*-

class EmotionAnalysis:
    def __init__(self):
        try:
            self.model = joblib.load('/app/logistic_regression_model_92.joblib')
        except Exception as e:
            print("Error loading the model:", e)

    def prediction(self, comment):
        results = {}  
        for i in range(len(comment)):
            prediction = self.model.predict([comment[i]])
            proportion = self.model.predict_proba([comment[i]])
            sentiment = "Positive" if prediction[0] == 2 else ("Neutral" if prediction[0] == 1 else "Negative")
            confidence = proportion[0][1] if prediction[0] == 1 else proportion[0][0]
            results[comment[i]] = {"sentiment": sentiment, "confidence": confidence}
        return results

