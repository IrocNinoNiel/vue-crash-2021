<template>
    <button @click="$emit('show-add-task')"  class="btn" :style="{background:color}">{{ text }}</button>   
</template>

<script>
    export default {
        name:'Button',
        props:{
            text:String,
            color:String,
        },
    }
</script>

<style scoped>

</style>