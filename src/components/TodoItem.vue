<!--eslint-disable-->
<template>
  <div class="col-lg-8 col-md-10 mt-3">
    <div class="card p-3">
      <div class="row align-items-center">
        <div
          class="col-7 text-start"
          :class="{ taskCompleted: todo.done }"
          @dblclick="editToggle = !editToggle"
        >
          <input
            type="text"
            class="form-control"
            v-model="todo.task"
            v-if="editToggle"
            @keypress.enter="updateTask"
          />
          <span v-else>{{ todo.task }}</span>
        </div>
        <div class="col-5 text-end">
          <button
            type="button"
            class="btn btn-success mx-md-2 mx-sm-1"
            @click="completeTask(index)"
          >
            <i class="fas fa-check py-2"></i>
          </button>
          <button
            type="button"
            class="btn btn-danger mx-md-2 mx-sm-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="removePadding"
          >
            <i class="fas fa-trash py-2"></i>
          </button>
        </div>
        <!--Modal-->
        <div
          class="modal"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">Are You Sure?</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  @click="deleteTask(index)"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo", "index"],
  data: () => {
    return {
      editToggle: false,
    };
  },
  methods: {
    updateTask() {
      this.$store.commit("editTodo", { task: this.task, done: false });
      this.editToggle = false;
      this.$notify({
        group: "foo",
        title: "Updated",
        text: "Your task has been edited",
      });
    },
    completeTask(index) {
      this.$store.commit("completeTodo", index);
      this.$notify({
        group: "foo",
        title: "Completed",
        text: "Your task has been completed",
      });
    },
    deleteTask(index) {
      this.$store.commit("deleteTodo", index);
      this.$notify({
        group: "foo",
        title: "Deleted",
        text: "Your task has been removed from todo list",
        type: "error",
      });
    },
    removePadding() {
      document.querySelector("body").style.paddingRight = "0px";
      document.querySelector("body").style.overflowX = "hidden";
    },
  },
};
</script>

<style scoped></style>
