from flask import Flask, render_template, request, jsonify
import numpy as np

app = Flask(__name__)

@app.route('./State_of_stress/')
def index():
    return render_template('index.html')

@app.route('/7', methods=['POST'])
def plot():
    data = request.json
    sigma_x = data['sigma_x']
    sigma_y = data['sigma_y']
    tau_xy = data['tau_xy']

    # Calculate the center and radius of the Mohr circle
    sigma_avg = (sigma_x + sigma_y) / 2
    radius = np.sqrt(((sigma_x - sigma_y) / 2)**2 + tau_xy**2)
    sigma_1 = sigma_avg + radius
    sigma_2 = sigma_avg - radius

    # Generate points for the Mohr circle
    theta = np.linspace(0, np.pi, 100)
    x = sigma_avg + radius * np.cos(theta)
    y = radius * np.sin(theta)

    return jsonify({
        'x': x.tolist(),
        'y': y.tolist(),
        'sigma_1': sigma_1,
        'sigma_2': sigma_2
    })

if __name__ == '__main__':
    app.run(debug=True)