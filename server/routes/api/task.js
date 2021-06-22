const express = require('express');
const ObjectId = require('mongodb').ObjectID;

const Task = require('../../model/Task');

const router = express.Router();


// Get Post
router.get('/', async (req,res)=>{
    await Task.find()
        .then(task=>res.send(task))
        .catch(err=>console.log(err));
})

// Get One Post
router.get('/:id', async (req,res)=>{
    console.log(req.params.id);
    await Task.findOne({_id:ObjectId(req.params.id)})
        .then(task=>res.send(task))
        .catch(err=>console.log(err));
})

// Add Post
router.post('/', async(req,res)=>{
    const {text,day,reminder} = req.body;

    const newTask = new Task({
        text,
        day,
        reminder,
    })
    newTask.save()
        .then(task => res.send(task))
        .catch(err=>console.log(err));
})

// Delete Post
router.delete('/:id', async(req,res)=>{
    await Task.deleteOne({_id:ObjectId(req.params.id)})
        .then(()=>res.send('Deleted'))
        .catch(err=>console.log(err));
});

// Update Post
router.put('/:id',async(req,res)=>{
    const {text,day,reminder} = req.body;

    await Task.updateOne({_id:ObjectId(req.params.id)},{$set:{text:text,day:day,reminder:reminder}})
        .then(async task=>{
            await Task.findOne({_id:ObjectId(req.params.id)})
                .then(task1=>res.send(task1))
                .catch(err=>console.log(err));
        })
        .catch(err=>console.log(err));
})

module.exports = router;