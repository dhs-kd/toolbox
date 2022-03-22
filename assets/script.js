


const cardDiv = document.getElementById("card-container-row");


class Card {
    constructor(title, desc, url) {
        this.title = title;
        this.desc = desc;
        this.url = url;
    }

}


var cardlist = [
    new Card("Rectangular To Polar Coordinates", "تحويل الاحداثيات الكارتيزينيةالى احداثيات قطبية", 'rectToPolar')
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