new Vue({
    el: "#app",
    data: {
      cuteCats: []
    },
    methods: {
  
      getCuteCats() {
        fetch("https://api.thecatapi.com/v1/images/search?limit=10")
          .then(response => response.json())
          .then(data => {
            this.cuteCats = data;
          })
          .catch(error => {
            console.error("Error when searching for cats:", error);
          });
      }
    }
  })