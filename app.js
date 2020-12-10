const app = Vue.createApp({
  data() {
    return {
      formData: {
        title: "",
        description: "",
        status: "ps",
      },
      todos: [],
      selectedIndex: null,
      selectedStatus: "all",
    }
  },
  methods: {
    clearForm() {
      this.formData = {
        title: "",
        description: "",
        status: "ps",
      }
    },
    backgroundRow(status) {
      return {
        "bg-red" : status === "waiting",
        "bg-green" : status === "completed",
        "bg-blue" : status === "in_progress",
      }
    },
    addTodo() {
      this.todos.push({id: this.todos.length + 1, ...this.formData});
      this.clearForm();
      // console.log(...this.todos);
    },
    editedTodo(id) {
      this.selectedIndex = this.todos.findIndex(todo => todo.id === id);
      this.formData = {
        title: this.todos[this.selectedIndex].title,
        description: this.todos[this.selectedIndex].description,
        status: this.todos[this.selectedIndex].status,
      };
    },
    editTodo() {
      this.todos[this.selectedIndex] = {
        id: this.todos[this.selectedIndex].id,
        title: this.formData.title,
        description: this.formData.description,
        status: this.formData.status,
      }
      this.clearForm();
      this.selectedIndex = null;
    },
  },
  computed: {
    showTodo() {
      return this.selectedStatus === "all" ? this.todos : this.todos.filter(todo => todo.status === this.selectedStatus);
    }
  }
});

app.mount("#app");