new Vue({
  el: "#app",
  data: {
    message: "salut ",
    link: "http://google.fr",
    cliques: "google",
    succes: false,
    personnes: ["steven", "christophe", "omar", "cédric", "maeva","axel" ,"alexis","le vrai hugo","hugo de Roanne","chahine","maître BOURABA"],
    info: false,
    infos: false,
  },
  methods: {
    close: function () {
      this.succes = false; //change la valeur des succès à false
      this.info = false; //change la valeur des succès à false
      this.infosfalse = false; //change la valeur des succès à false
      this.message = "fermé";
    },
  },
});

let count = new Vue({
  el: "#count",
  data: {
    second: 0,
  },
  mounted: function () {
    this.$interval = setInterval(() => {
      this.second++;
    }, 1000);
  },
  destroyed: function () {
    clearInterval(this.$interval);
  },
});
