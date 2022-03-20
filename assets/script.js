function rectToPolar(div, x, y) {
    let vect = {
        x: [0, x],
        y: [0, y],
        type: 'scatter',
        name: ""
    }
    let layout = {
        title: "Rectangular Coordinates to Polar Coordinates",
        yaxis: { title: "Y axis" }
    }
    Plotly.newPlot(div, [vect], layout)
}

// rectToPolar('plt', 3, 4)