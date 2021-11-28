const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.redirect('index.html');
})
 
app.listen(3000, function(){
    console.log('Server On')
})