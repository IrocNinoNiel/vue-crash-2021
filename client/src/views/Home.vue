<template>
    <div>
        <div v-show="showAddTask">
            <AddTask @add-task="addTask"/>
        </div>
        <Tasks :tasks="tasks" @delete-task="deleteTask" @toggle-reminder="toggleReminder" />
    </div>
</template>

<script>
import AddTask from '../components/AddTask.vue';
import Tasks from '../components/Tasks.vue';

export default {
    name:'Home',
    components: {
        AddTask,
        Tasks
    },
    data() {
        return {
            tasks:[],
        }
    },
    props: ['showAddTask'],
    methods: {

        async deleteTask(_id){

            const id = _id;
            if(confirm('Are you sure?')){
                const res = await fetch(`api/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                });

                res.status == 200 ? this.tasks = this.tasks.filter(task => task._id !== _id) : alert('Error Deleting task');
            }
        
        },
        async toggleReminder(_id){

            const taskToToggle = await this.fetchTask(_id);

            const updTask = {...taskToToggle,reminder: !taskToToggle.reminder};

            const id = _id;
            const res = await fetch(`api/tasks/${id}`, {
                method: 'PUT',
                headers: {
                'Content-type': 'application/json'
                },
                body: JSON.stringify(updTask)
            });

            const data = await res.json();

            res.status == 200 ? this.tasks = this.tasks.map(task => task._id === _id ? {...task,reminder: data.reminder} : task) : alert('Error Updating Task');
        },
        async addTask(newTask){
            const res = await fetch('api/tasks', {
                method: 'POST',
                headers: {
                'Content-type': 'application/json'
                },
                body: JSON.stringify(newTask)
            });


            const data = await res.json();

            this.tasks = [...this.tasks,data];
        },
        async fetchTasks() {
            const res = await fetch('api/tasks');

            const data = await res.json();

            return data;
        },

        async fetchTask(_id) {
            const id = _id
            const res = await fetch(`api/tasks/${id}`);
            const data = await res.json();

            return data;  
        }
    },
    async created() {
        this.tasks = await this.fetchTasks();
    }
}
</script>