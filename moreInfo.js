const baseURL = 'https://ghibliapi.herokuapp.com/films';
let main = document.querySelector('.main');
let filmStats;

// Film Description
fetch(`${baseURL}`)
    .then(response => response.json())
    .then(json => object(json));

    function object(json) {
        console.log(json);
        filmStats = json;

        let title = document.createElement('h1');
        title.className = 'title';
        title.innerText = `${json[0].title}`;

        main.appendChild(title);
    }