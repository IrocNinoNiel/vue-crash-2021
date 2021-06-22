<template>
    <div v-for="task in tasks" :key="task._id">
        <Task :task="task" @delete-task="$emit('delete-task',task._id)" @toggle-reminder="$emit('toggle-reminder',task._id)" />
    </div>
</template>

<script>
    import Task from './Task.vue';
    export default {
        name:'Tasks',
        components:{
            Task
        },
        props:{
            tasks:Array
        },
        emits: ['delete-task','toggle-reminder']
    }
</script>

<style scoped>

</style>