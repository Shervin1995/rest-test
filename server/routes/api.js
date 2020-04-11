var express = require('express')
var router = express.Router()
var ObjectID = require('mongodb').ObjectID
var MongoClient = require('mongodb').MongoClient
var db
MongoClient.connect('mongodb://localhost:27017/',
  function(err,client){
    db = client.db('firstDB')
})


// get
router.get( '/api' , function(req,res){
  db.collection('firstCollection').find().toArray(function(err,results){
    res.json(results)
  })
})

// del
router.delete('/api/:id1',(req,res)=>{
	let id =  ObjectID(req.params.id1)
	db.collection('firstCollection').deleteOne(
		{_id: id},
		(err,result)=>{
      if (err){console.log(err)}
      })
    })

// insert
router.post('/api',(req,res)=>{
	db.collection('firstCollection').insertOne(
		req.body,
		(err,result)=>{
		if(err) return console.log(err)
    })
	})

// update
router.post('/api/update',(req,res)=>{
  let id =  ObjectID(req.body._id)
  db.collection('firstCollection').updateOne(
    {_id: id},
    {$set: {name: req.body.name, age: req.body.age} },
    (err,result)=>{if(err) return console.log(err)}
  )
	})



module.exports = router
