let vm = new Vue({
  el: "#app",
  data: { firstname: "alexis", lastname: "Nauleau", fullName: "" },
  computed: {
    fullname: {
      get: function () {
        return this.firstname + " " + this.lastname;
      },
      set: function (value) {
        //console.log(value)
        let parts = value.split(" ");
        this.firstname = parts[0];
        this.lastname = parts[1];
      },
    },
  },
});
