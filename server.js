const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Matiiv:DfCzghj1997@test-29jfw.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
.then(()=>console.log('connected'))
.catch(error=>{console.log(error)});

var schema = new mongoose.Schema({ first: 'string', last: 'string' });
var postSchemes = mongoose.model('postschemes', schema);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE');
    next();
});

// app.use('/',(req,res,next)=>{
//     var data = postschemes.find({}, function(err, data){
//         if(err){
//             console.log(err);
//             return   
//         }
//         console.log(data);
//         return data
//     });

//     next();
// })

app.post('/data',(req,res,next)=>{
    const post = new postSchemes({
        first: req.body.title,
        last: req.body.content
    })
    post.save();
    res.status(201).json({
        message:'post added'  
    }); 
    next();
});

app.post('/delete',(req,res,next)=>{
    postSchemes.deleteOne({_id:req.body.id})
    .then(()=>{
        res.status(200).json({
            message:'Deleted succesfuly'
        })
    });
});

app.get('/data',(req,res,next)=>{
    postSchemes.find({})
    .then(data=>{
        res.status(200).json({
            message:"post fetched succesfully",
            post:data
        }); 
    });
})
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });