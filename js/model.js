import { Ui } from "./ui.js";
import { Details } from "./details.js";
export class Game {
    constructor() {
        this.getGameInfo("shooter");
        this.ui = new Ui(); 
        
        document.querySelectorAll(".navbar-nav a").forEach((link) => {
            link.addEventListener("click", (e) => {
               document.querySelector(".navbar-nav .active").classList.remove("active");
               e.target.classList.add("active");
               this.getGameInfo(e.target.dataset.category);
            });
         });

    }
    async getGameInfo(category) {    
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '7dd1cb7f1bmsh6bcb9670ab255b0p1c4522jsne044f7278f83',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        };
        try {
            console.log("fetch");
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            this.ui.displayGame(result);
            this.startEvent();
            loading.classList.add("d-none");
        } catch (error) {
            console.error(error);
        }
    }

    startEvent() {
        document.querySelectorAll(".card").forEach((item) => {
           item.addEventListener("click", () => {
              const id = item.dataset.id;
              this.showDetails(id);
           });
        });
     }
  
     showDetails(idGame) {
        const details = new Details(idGame);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
     }
}
