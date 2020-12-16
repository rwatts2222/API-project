const baseURL = 'https://ghibliapi.herokuapp.com/films';
let main = document.querySelector('.main');
let filmInfo;

// Card 1

    for (let i = 0; i < filmInfo; i++) {
        fetch(`${baseURL}`)
        .then(response => response.json())
        .then(json => titles(json));
    

        function titles(json) {
        console.log(json);
        filmInfo = json;

        let card = document.querySelector('.card');
        let cardBody = document.querySelector('.card-body');

        let filmName = document.createElement('h2');
        filmName.className = 'filmName';
        filmName.innerText = `${json[0].title}`;

        card.insertBefore(filmName, cardBody);
        }
    }
    // Film 1 More Information
    //     function moreInformation(moviePosition) {
        
    //         console.log(filmInfo[moviePosition].description)
    // // Description
    //         let description1 = document.createElement('h3');
    //         description1.className = 'description1';
    //         description1.innerText = `${filmInfo[moviePosition].description}`;  
    //         document.write(description1.innerText);

    //         let date1 = document.createElement('h3');
    //         date1.className = 'date1';
    //         date1.innerText = `${filmInfo[moviePosition].release_date}`;
    //         document.write(date1.innerText);

    //         let director1 = document.createElement('h3');
    //         director1.className = 'director1';
    //         director1.innerText = `${filmInfo[moviePosition].director}`;
    //         document.write(director1.innerText);

    //         let score1 = document.createElement('h3');
    //         score1.className = 'score1';
    //         score1.innerText = `${filmInfo[moviePosition].rt_score}`;
    //         document.write(score1.innerText);

    //         }

            // button1.addEventListener('click', () => {
            // moreInformation(0);    
            
        
            // });
    

    




    // Card 2
    fetch(`${baseURL}`)
    .then(response => response.json())
    .then (json => object2(json));

    function object2(json) {    
    let card2 = document.querySelector('.card2');
    let cardBody2 = document.querySelector('.card2-body');

    let film2 = document.createElement('h2');
    film2.className = 'film2';
    film2.innerText = `${json[1].title}`;

    card2.insertBefore(film2, cardBody2);

        // Film 2 More Information
        function moreInformation(moviePosition) {
        
            console.log(filmInfo[moviePosition].description)
            // Description
            let description2 = document.createElement('h3');
            description2.className = 'description2';
            description2.innerText = `${filmInfo[moviePosition].description}`;      
            }
        
            button2.addEventListener('click', () => {
                moreInformation(1);       
                
            });
    }







