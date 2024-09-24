class notificationsStore {
  constructor() {
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.state.count++;
  }
  decrement() {
    this.state.count--;
  }
}
let notifications_store= new notificationsStore()
let counter = {
    data:function(){
        return{
            state: notifications_store.state
        }
    },
  template: `<div>{{state}}</button>  </div>`,
};

let notifications = {
  components: { counter },
  methods:{
    addNotification: function(){
        notifications_store/increment()
    }
  },
  template: `<div>
        <counter></counter>
        <button @click="addNotification>Incrémenter</button>  
    </div>`,
};

let vm = new Vue({
  el: "#app",
  components: { notifications, counter },
  data: {},
  methods: {},
});
