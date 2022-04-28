var express = require('express');
const { get } = require('express/lib/response');
const path = require('path');

var app= express();

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'views/index.html'));
});

app.get('/pagina1',function(req,res){
    res.send("<h1>sono bellissimo!</h1>");
});

app.listen(3000, function(){
    console.log("è connesso al terminale alla porta 3000")
});