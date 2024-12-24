import { Ui } from "./ui.js";

export class Details {
   constructor(id) {
      this.ui = new Ui();

      document.getElementById("btnClose").addEventListener("click", () => {
         document.querySelector(".games").classList.remove("d-none");
         document.querySelector(".details").classList.add("d-none");
      });

      this.getDetails(id);
   }

   async getDetails(idGames) {
      const loading = document.querySelector(".loading");
      loading.classList.remove("d-none");

      const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`;
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
            this.ui.displayDetails(result);
            loading.classList.add("d-none");
        } catch (error) {
            console.error(error);
        }
   }
}
