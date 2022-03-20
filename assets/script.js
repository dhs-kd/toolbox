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



const cardDiv = document.getElementById("card-container-row");


class Card {
    constructor(title, desc, url) {
        self.title = title;
        self.desc = desc;
        self.url = url;
    }

    render() {
        let card = document.createElement('div');
        card.innerHTML = ```
        <div class="col">
        <div class="card text-center">
            <div class="card-body">
                <h5 class="card-title">${self.title}</h5>
                <p class="card-text">${self.desc}</p>
                <a href="./tools/${self.url}.html" class="btn btn-primary">الدخول</a>
            </div>
        </div>
        </div>
        ```
        cardDiv.appendChild(card)
    }
}


var cardlist = [
    new Card("test title", "watermelons", 'backup')
];


for (let card of cardlist) {
    card.render()
}