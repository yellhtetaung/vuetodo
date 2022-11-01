<template>
  <div class="container">
    <notifications group="foo" class="mt-3" />
    <AddTask />
    <transition-group
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutRight"
      class="row justify-content-center mt-3"
    >
      <TodoItem
        v-for="(todo, index) in $store.getters.getTodos"
        :key="index"
        :todo="todo"
        :index="index"
      />
    </transition-group>
  </div>
</template>

<script>
import AddTask from "@/components/AddTask";
import TodoItem from "@/components/TodoItem";
export default {
  name: "App",
  components: { TodoItem, AddTask },
};
</script>
