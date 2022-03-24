


const cardDiv = document.getElementById("card-container-row");


class Card {
    constructor(title, desc, url) {
        this.title = title;
        this.desc = desc;
        this.url = url;
    }

}


var cardlist = [
    new Card("Rectangular To Polar Coordinates", "تحويل الاحداثيات الكارتيزينية الى احداثيات قطبية", 'rectToPolar'),
    new Card('Polar to Rectangular Coordinates', 'تحويل الاحداثيات القطبية الى احداثيات كارتيزينية', 'polarToRect'),
    new Card('Circular Motion Simulation', 'محاكاة واقعية للحركة الدائرية', 'circularMotion')
];


for (let card of cardlist) {
    cardDiv.innerHTML+= `
    <div class="col-md">
        <div class="card text-center">
            <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.desc}</p>
                <a href="./tools/${card.url}.html" class="btn btn-primary">الدخول</a>
            </div>
        </div>
    </div>
    `

}