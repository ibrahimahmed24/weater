const bodyParser  = require('body-parser')
const express =require('express')
const hbs =require('hbs')
const path =require('path')


const pathpublic=path.join(__dirname,'./public')




const pathtaptet=path.join(__dirname,'./taptet/aboud')
const pathtaptet2=path.join(__dirname,'./taptet/asht')


app.use(express.static(pathpublic))
app.set('taptetaboud',hbs)
app.set('vews' , pathtaptet)
app.use(express.static(pathpublic))

hbs.registerPartials(pathtaptet2)
const app =express()
app.use(bodyParser.json())

app.get('/' ,(req,res) =>{
  res.send('hi this is weather app')
})
 
app.get('',(req,res) =>{
    res.send('this is weather end point.')
})
app.get('*',(req,res) =>{
    res.send('npage not found')
})
app.listen(3000)