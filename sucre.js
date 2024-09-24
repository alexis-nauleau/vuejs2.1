const double = (n) => n * 2;

function triple(nombre) {
  return nombre * 2;
}

console.log(double(2));
console.log(triple(2));

Vue.component('todo-item', {
  template: '<li>This is a todo <span>{{message}}</span></li>',
  data:function(){
      return {
      message: ' hello '
    };
  }
})


let app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js!",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("").toUpperCase();
      console.log("test", this.message);
    },
  },
});
