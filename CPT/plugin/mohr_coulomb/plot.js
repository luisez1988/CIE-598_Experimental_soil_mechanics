// Function to generate Mohr Circle data
function generateMohrCircle(sigma_x, sigma_y, tau_xy) {
    const center = (sigma_x + sigma_y) / 2;
    const radius = Math.sqrt(Math.pow((sigma_x - sigma_y) / 2, 2) + Math.pow(tau_xy, 2));

    const theta = [];
    const x = [];
    const y = [];

    for (let i = 0; i <= 360; i++) {
        theta.push(i);
        x.push(center + radius * Math.cos(i * Math.PI / 180));
        y.push(radius * Math.sin(i * Math.PI / 180));
    }

    return { x, y, center, radius };
}

// Example values for sigma_x, sigma_y, and tau_xy
const sigma_x = 50;
const sigma_y = 20;
const tau_xy = 15;

// Generate Mohr Circle data
const mohrCircleData = generateMohrCircle(sigma_x, sigma_y, tau_xy);

// Plot the Mohr Circle
Plotly.newPlot('mohrCircle', [{
    x: mohrCircleData.x,
    y: mohrCircleData.y,
    type: 'scatter',
    mode: 'lines',
    name: 'Mohr Circle'
}, {
    x: [mohrCircleData.center],
    y: [0],
    type: 'scatter',
    mode: 'markers',
    name: 'Center',
    marker: { size: 10 }
}], {
    title: '',
    xaxis: { 
        title: 'Normal Stress (σ)', 
        scaleanchor: 'y', 
        scaleratio: 1,
        titlefont: {
            family: 'Times New Roman, monospace',
            size: 32,
            color: '#000000'
        }
    },
    yaxis: { 
        title: 'Shear Stress (τ)',
        titlefont: {
            family: 'Times New Roman, monospace',
            size: 32,
            color: '#000000'
        }
    },
    aspectratio: { x: 1, y: 1 },
    plot_bgcolor: 'rgba(0,0,0,0)',
    paper_bgcolor: 'rgba(0,0,0,0)',
});
