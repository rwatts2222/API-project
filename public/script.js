const baseURL = 'https://ghibliapi.herokuapp.com/films';
let main = document.querySelector('.main');
let row = document.querySelector('.row');
let container = document.querySelector('.container');

let info;

// Fetch API data
fetch(`${baseURL}`)
    .then(response => response.json())
    .then(json => titleCards(json));
    
        // Film Titles
        function titleCards(info) {
         info = info;
         console.log(info);

          for (let i = 0; i < 20; i++) {
            // create card
            let card = document.createElement('div');
            card.className = 'card';
            card.style.width = "18rem";
                
            // create title
            let filmName = document.createElement('h2');
            filmName.className = 'filmName';
            filmName.innerText = `${info[i].title}`;
            
            // create button to open modal
            let button = document.createElement('button');
            button.className = 'button';
            button.type = 'button';
            button.innerHTML = "More Information";
            button.dataset.toggle = "modal"
            button.dataset.target = ".modal"

            button.onclick = function() {
                modal.style.display = "block";
              }

            // append card, title, and button to main section
            main.appendChild(card);
            card.appendChild(filmName);
            card.appendChild(button);


            // create modal
            let modal = document.createElement('div');
            modal.className = 'modal';
            modal.id = `modal-${i}`;
            document.getElementsByClassName('modal')
            main.appendChild(modal);
            
            let modalContent = document.createElement('div');
            modalContent.className = 'modalContent';
            modal.appendChild(modalContent);

            let span = document.createElement('span');
            span.className = 'span';
            span.innerText = "\u2715";
            modalContent.appendChild(span);

            // Create table to format modal card
            let modalTable = document.createElement('table');
            modalTable.className = 'modalTable';
            modalContent.appendChild(modalTable);

            // Table title
            let modalTitle = document.createElement('th');
            modalTitle.className = 'modalTitle';
            modalTitle.innerText = `${info[i].title}`
            modalTitle.colSpan = '2';
            modalTable.appendChild(modalTitle);

            // Summary
            let summaryRow = document.createElement('tr')
            summaryRow.className = 'summaryRow';
            modalTable.appendChild(summaryRow);

            let summaryHeading = document.createElement('th');
            summaryHeading.className = 'summaryHeading';
            summaryHeading.innerText = "Summary: ";
            summaryRow.appendChild(summaryHeading);

            let summary = document.createElement('td');
            summary.className = 'summary';
            summary.innerText = `${info[i].description}`;
            summaryRow.appendChild(summary);

            // Year
            let yearRow = document.createElement('tr')
            yearRow.className = 'yearRow';
            modalTable.appendChild(yearRow);

            let yearHeading = document.createElement('th');
            yearHeading.className = 'yearHeading';
            yearHeading.innerText = "Year: ";
            yearRow.appendChild(yearHeading);

            let year = document.createElement('td');
            year.className = 'year';
            year.innerText = `${info[i].release_date}`;
            yearRow.appendChild(year);
            
            // Director
            let directorRow = document.createElement('tr');
            directorRow.className = 'directorRow';
            modalTable.appendChild(directorRow);

            let directorHeading = document.createElement('th');
            directorHeading.className = 'directorHeading';
            directorHeading.innerText = "Director: "
            directorRow.appendChild(directorHeading);

            let director = document.createElement('td');
            director.className = 'director';
            director.innerText = `${info[i].director}`;
            directorRow.appendChild(director);

            // Rotten Tomatoes Score
            let rtRow = document.createElement('tr');
            rtRow.className = 'rtRow';
            modalTable.appendChild(rtRow);

            let rtHeading = document.createElement('th');
            rtHeading.className = 'rtHeading';
            rtHeading.innerText = "Rotten Tomatoes Score:";
            rtRow.appendChild(rtHeading);

            let rtScore = document.createElement('td');
            rtScore.className = 'rtScore';
            rtScore.innerText = `${info[i].rt_score}%`;
            rtRow.appendChild(rtScore);
            

              span.onclick = closeModal;
              function closeModal() {
                modal.style.display = "none";
              }

            // Close modal if clicked outside
            window.onclick = function(event) {
              if (event.target.classList[0] === 'modal') {
                closeModal();
                document.getElementById(`${event.target.id}`).style.display = "none"
              }
            }
          }
        }