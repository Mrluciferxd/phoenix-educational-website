const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UsersData = require('./users.js')
const UsersMessage = require('./usersmessage.js')
const Usercomment = require('./userscomment.js')
const path = require('path')
const { exec } = require('child_process')
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname))
mongoose.connect('mongodb://127.0.0.1:27017/logindata')
    .then(()=>{
    console.log("Database Connected Successfully")
    exec('mkdir welcome')
    })
    .catch(err => {
        console.log('Database Unable to Connect')
        console.log(err)
    })
app.use(express.static('assets'))
app.use(express.urlencoded({extended:true}))
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})
app.post('/usersignup',async (req,res)=>{
    // console.log(req.body)
    const newuser = new UsersData(req.body);
    await newuser.save();
    res.redirect('/')
})
app.get('/showusers', async(req,res)=>{
    const users = await UsersData.find({})
    const mess = await UsersMessage.find({})
    const comments = await Usercomment.find({})
    res.render('showregisterd',{users, mess,comments})
})
app.get('/makecsv', (req,res)=>{
    exec('mongoexport --uri="mongodb://127.0.0.1:27017/logindata" --collection=users  --fields=firstname,lastname,email,password --type=csv --out users.csv')
    res.redirect('/')
})
app.post('/successlogin', async(req,res)=>{
    const username = req.body.email;
    const password = req.body.password;
    const data = await UsersData.findOne({email : username})
    if (data){
    if (data.password === password) {
        res.render('successlogin',{data})
    }} else {
        res.render('invaliduser')
    }
    
})
app.get('/makeusercsv', (req,res)=>{
    exec('mongoexport --uri="mongodb://127.0.0.1:27017/logindata" --collection=usermessages  --fields=name,email,company,phone,address --type=csv --out usersmessage.csv')
    res.redirect('/')
})
app.get('/makecommentcsv', (req,res)=>{
    exec('mongoexport --uri="mongodb://127.0.0.1:27017/logindata" --collection=usercomments  --fields=username,email,comment --type=csv --out userscomment.csv')
    res.redirect('/')
})
app.post('/usermessage', async (req,res)=>{
    const mess = new UsersMessage(req.body);
    await mess.save();
    res.redirect('/')
})
app.post('/blogcomment', async (req,res)=>{
    const comments = new Usercomment(req.body);
    await comments.save();
    res.redirect('/')
})
app.listen(8080,()=>{
    console.log('Listening on 8080')
})