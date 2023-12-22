const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get('/whoami',(req,res)=>{
    res.send("Hello I am signaling server");
})
app.listen(process.env.PORT || 3000)