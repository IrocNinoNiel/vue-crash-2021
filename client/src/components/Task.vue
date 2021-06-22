<template>
    <div @dblclick="$emit('toggle-reminder', task._id)" :class="[task.reminder ? 'reminder' : '', 'task']" >
        <h3>
            {{ task.text }}
            <button @click="$emit('delete-task',task._id)" class="fas">X</button>
        </h3>
        <p>{{ task.day }}</p>

    </div>
</template>

<script>
export default {
    name:'Task',
    props:{
        task:Object
    },
    methods: {
        onDelete(_id) {
            this.$emit('delete-task',_id)
        }
    }
}
</script>

<style scoped>

.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>