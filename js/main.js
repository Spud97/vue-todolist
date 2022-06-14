const appVue = new Vue({
  el: "#app",

  data: {
    toDoList: [
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
    ],
    newTaskText: "",
    deletingIndex: null,
  },

  methods: {
    cancelElement() {
      this.toDoList.splice(this.deletingIndex, 1)
    },

    addToDo() {
      const nuovoTask = this.newTaskText.trim();

      if (nuovoTask === "") {
        return;
      }

      this.toDoList.push({
        text: nuovoTask,
        done: false,
      });

      this.newTaskText = "";
    },
  },
});
