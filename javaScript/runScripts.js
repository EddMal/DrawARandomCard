

// Create reference to button from index.html
const btn0 = document.querySelector('#btn0');
const imageDiv = document.querySelector('#imageDiv');


// Best practise declare a const object for "global" variables to reduce clutter.
/* const app = {
    deckID: null,
    deckIDFetched:false,
    x3: null,
    x4: false
}; */

console.log('Start');

// ask for a new deck, a waist to create a new deck every time, if time fix a ceck to se if 
//deck is "alive" if not used it is "throw away" after 2 weeks.
// https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1

// Draw a card in the new deck add the deck id.
// https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1

//Back of a card image
// https://deckofcardsapi.com/static/img/back.png

// Workaround use "new" insead of deck id if a deck wont be reused.
//https://deckofcardsapi.com/api/deck/new/draw/?count=2

/* const getCardAsync = async() =>{
    const getDeckID = await
        fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

    const data = await getDeckID.json();
    console.log(data);
    console.log(data.deck_id);
    app.deckID = await data.deck_id;
    console.log(app.deckID);
    
           
        
    // End get deck id---
    getCard();
    
} */

/* const getCardAsync = async() =>{
    const getDeckID = await
        fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

    const data = await getDeckID.json();
    console.log(data);
    console.log(data.deck_id);
    app.deckID = await data.deck_id;
    console.log(app.deckID);
    
           
        
    // End get deck id---
    getCard();
    
} */

/* const getCard = () =>{
    console.log('https://deckofcardsapi.com/api/deck/<<'+`${app.deckID }`+'>>/draw/?count=1');
    fetch('https://deckofcardsapi.com/api/deck/<<'+`${app.deckID }`+'>>/draw/?count=1', {
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
} */
function init(){
    imageDiv.innerHTML = '';
            
    let img = document.createElement('img'); 
    console.log(img);
    

    img.setAttribute("src","https://deckofcardsapi.com/static/img/back.png"); 
    img.setAttribute("clientHeight","100%"); 
    

    imageDiv.appendChild(img);

    console.log(imageDiv);
}

init();
// Should be changed to reuse deck instead of creating a new for every press.
const getCard = () =>{
    
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1', {
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
        console.log(data.cards[0].image);

            imageDiv.innerHTML = '';
            
            let img = document.createElement('img'); 
            console.log(img);
            

            img.setAttribute("src",data.cards[0].image); 
            img.setAttribute("clientHeight","100%"); 
            
        
            imageDiv.appendChild(img);

            console.log(imageDiv);
        
    })
    .catch(err => console.log('Error: ' + err));
}


btn0.addEventListener('click', getCard)

