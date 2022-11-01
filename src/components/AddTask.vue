<template>
  <div class="row justify-content-center mt-5">
    <h1 class="text-secondary text-center">Todo Item</h1>
    <div class="col-lg-8 col-md-10 text-light mt-4">
      <label for="newtask">New Task</label>
      <input
        type="text"
        name="newtask"
        id="newtask"
        class="form-control py-2 my-3"
        placeholder="Enter New Task..."
        autocomplete="off"
        v-model="task"
      />
      <button type="button" class="btn btn-warning" @click="addTask">
        Add Task
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data: () => {
    return {
      task: "",
    };
  },
  methods: {
    addTask() {
      if (this.task === "") {
        this.$notify({
          group: "foo",
          title: "Required",
          text: "Task field is required",
          type: "warn",
        });
      } else {
        this.$store.commit("addTodo", { task: this.task, done: false });
        this.task = "";
        this.$notify({
          group: "foo",
          title: "Created",
          text: "Your task has been added to todo list",
        });
      }
    },
  },
};
</script>

<style scoped></style>
