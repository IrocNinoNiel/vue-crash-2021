<template>
    <header>
        <h1>{{ title }}</h1>
        <Button v-show="homePage" :text="showAddTask ? 'Close' : 'Add Task'" :color="showAddTask ? 'red' : 'green'" @click="$emit('show-add-task')"/>
    </header>
</template>

<script>
    import Button from './Button'
    export default{
        name: 'Header',
        props: {
            title:{
                type: String,
                default: 'Default Title'
            },
            showAddTask:{
                type: Boolean,
                default: false
            }
        },
        components:{
            Button,
        },
        computed: {
            homePage() {
                if(this.$route.path === '/'){
                    return true
                } else {
                    return false
                }
            }
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items:center;
        margin-bottom: 20px;
    }
</style>