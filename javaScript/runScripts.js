

// Create reference to button from index.html
const btn0 = document.querySelector('#btn0');
const textDiv = document.querySelector('#text');


// Best practise declare a const object for "global" variables to reduce clutter.
const app = {
    deckID: null,
    deckIDFetched:false,
    x3: null,
    x4: false
};

console.log('Start');

// ask for a new deck, a waist to create a new deck every time, if time fix a ceck to se if 
//deck is "alive" if not used it is "throw away" after 2 weeks.
// https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1

// Draw a card in the new deck add the deck id.
// https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1

//Back of a card image
// https://deckofcardsapi.com/static/img/back.png


const getDeckID = () =>{
//get deck id---
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res =>{
        if(res.ok){
            return res.json();
        }
        throw new Error('Failed get new deck');
    })
    .then(data => {
        console.log(data.deck_id);
        app.deckID = data.deck_id;
        console.log(app.deckID);
        console.log('https://deckofcardsapi.com/api/deck/<<'+`${data.cardID}`+'>>/draw/?count=1');
        getCard();
    })
    .catch(err => console.log('Error: ' + err));
// End get deck id---
}


const getCard = () =>{
    
    fetch('https://deckofcardsapi.com/api/deck/<<'+`${id}`+'>>/draw/?count=1', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res =>{
        if(res.ok)
         return res.json();
        throw new Error('Failed access the deck');
    })
    .then(data => {
        console.log(data);

        textDiv.innerHTML = '';
        //change from forEach to something more suitable for the Object result..
        data.result.forEach(element => {
            
            textDiv.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"> ${element.properties.name}</h3>
                    <p class="card-text"> Personal info: ${element.description} </p>
                    <p class="card-text"> Height:${element.properties.height}</p>
                    <p class="card-text"> Hair Color: ${element.properties.hair_color}</p>
                    <p class="card-text"> Date of birth: ${element.properties.birth_year}</p>
                    <br>
                </div>
            </div>
            `
        })
    })
    .catch(err => console.log('Error: ' + err));
}


btn0.addEventListener('click', getDeckID)

