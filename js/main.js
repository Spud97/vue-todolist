toDoList = [
  {
    text: "Elemento 1",
    done: false,
  },
  {
    text: "Elemento 2",
    done: true,
  },
  {
    text: "Elemento 3",
    done: false,
  },
  {
    text: "Elemento 4",
    done: false,
  },
];

const appVue = new Vue({
  el: "#app",

  data: {
    list: toDoList,
  },

  methods: {
    cancelElement: function () {
      let index = this.list.indexOf(this.element);
      console.log(index);
      this.list.splice(this.element[index]);
    },
  },
});
