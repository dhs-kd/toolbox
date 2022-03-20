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
        this.title = title;
        this.desc = desc;
        this.url = url;
    }

}


var cardlist = [
    new Card("test title", "watermelons", 'backup')
];


for (let card of cardlist) {
    let mycard = document.createElement('div')
    mycard.innerHTML= `
    <div class="col">
        <div class="card text-center">
            <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.desc}</p>
                <a href="./tools/${card.url}.html" class="btn btn-primary">الدخول</a>
            </div>
        </div>
    </div>
    `
    cardDiv.appendChild(mycard)
}