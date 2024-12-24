
export class Ui {
    displayGame(data) {
        let gamecard = ``;
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
            // console.log("LOOP");
            gamecard += `
          <div class="col-sm-6 col-md-4 col-lg-3 col-12">
            <div data-id="${data[i].id}" class="card h-100 p-3 bg-main shadow position-relative"  role="button" >
              <img src="${data[i].thumbnail}" class="card-img-top" alt="...">
              <div class="card-body px-0">
                <div class="card-header px-0 border-bottom-0 d-flex justify-content-between align-items-center">
                  <p class="parg-size text-white fw-bold ">${data[i].title}</p>
                  <p class="btn nav-bg text-white parg-size ">Free</p>
                </div>
                <p class="card-text text-center"> ${data[i].short_description}</p>
              </div>
              <div class="card-footer pb-0 px-0 text-body-secondary d-flex justify-content-between ">
                <span class="bg-sec rounded-2 p-1">${data[i].genre}</span>
                <span class="bg-sec rounded-2 p-1">${data[i].platform}</span>
              </div>
            </div>
          </div>
            `

        }
        // console.log("ADD");
        document.getElementById("colRow").innerHTML = gamecard;
    }

    displayDetails(data) {
      
        const content = `
        <div class="col-md-4">
        <img src="${data.thumbnail}" class="w-100" alt="image details" />
        </div>
        <div class="col-md-8">
        <h3>Title: ${data.title}</h3>
        <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
        <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
        <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
        <p>${data.description}</p>
        <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
        </div>
        `;

        document.getElementById("detailsContent").innerHTML = content;
    }
}