Vue.component("mon-test", {
  props: {
    type: {
      type: [String, Number],
      default: "success",
    },
    message: String,
    header: String,
  },
  template: `<div :class="type">
                  <div class="close" @click.prevent="close">✖</div>
                  <div class="header">{{ header }}</div>
                  <div>{{ message }}</div>
              </div>`,
  methods: {
    close() {
      this.$emit("close");
    },
  },
});

Vue.component("counter", {
  props: {
    start: { type: Number, default: 0 },
  },
  data: function () {
    // vue quil y a 2 compteurs, le data seulement ne fonctionne pas il faut faire une fonction
    return {
      count: 0,
    };
  },
  methods: {
    increment: function () {
      this.count++;
    },
    decrement: function () {
      this.count--;
    },
  },
  mounted: function () {
    this.count = this.start;
  },
  template: `<div>
                <span>{{ count }}</span><br>
                <button @click="increment">Incrémenter</button>
                <button @click="decrement">Décrementer</button>
            </div>`,
});

new Vue({
  el: "#app",
  data: {
    message: "composants",
    //type: "error",  par défaut le type est "success"
    alert: false,
  },
  methods: {
    showAlert() {
      this.alert = true;
    },
    hideAlert() {
      this.alert = false;
    },
  },
});
