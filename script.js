const baseURL = 'https://ghibliapi.herokuapp.com/films';
let main = document.querySelector('.main');
let cardContainer = document.querySelector('.cardContainer');
let filmInfo;


fetch(baseURL)
    .then(response => response.json())
    .then(json => titles(json));
    
    // Film Titles
        function titles(json) {
            filmInfo = json;
            
            for (let i = 0; i < 3; i++) {
                let card = document.createElement('div');
                card.className = 'card';
                card.style.width = "18rem";
                card.innerText = "test";
                
                

                // create button
                let moreInfoButton = document.createElement('button');
                moreInfoButton.className = 'btn btn-dark';
                moreInfoButton.type = 'button';
                moreInfoButton.innerHTML = "More Information";
                let button = document.querySelector('.btn btn-dark')
                
                cardContainer.appendChild(card);
                cardBody.appendChild(button);

            
                
               


                
                let filmName = document.createElement('h2');
                filmName.className = 'filmName';
                filmName.innerText = `${json[i].title}`;

                card.insertBefore(filmName, cardBody);

            }    
            
            
            
        
    }









    // // Card 2
    // fetch(`${baseURL}`)
    // .then(response => response.json())
    // .then (json => object2(json));

    // function object2(json) {    
    // let card2 = document.querySelector('.card2');
    // let cardBody2 = document.querySelector('.card2-body');

    // let film2 = document.createElement('h2');
    // film2.className = 'film2';
    // film2.innerText = `${json[1].title}`;

    // card2.insertBefore(film2, cardBody2);

    //     // Film 2 More Information
    //     function moreInformation(moviePosition) {
        
    //         console.log(filmInfo[moviePosition].description)
    //         // Description
    //         let description2 = document.createElement('h3');
    //         description2.className = 'description2';
    //         description2.innerText = `${filmInfo[moviePosition].description}`;      
    //         }
        
    //         button2.addEventListener('click', () => {
    //             moreInformation(1);       
                
    //         });
    // }







