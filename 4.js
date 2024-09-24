Vue.filter("capitalize", function (value, prefix, suffix) {
  return prefix + value.toUpperCase() + suffix;
});
new Vue({
  el: "#app",
  data: {
    message: "salut",
  },
});
