const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});


app.post("/", function(req, res){
    console.log(req.body);
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1/(n2*n2)
    res.send("Your BMI Is " + result);
});



app.listen(3000);{
    console.log("Your Server Has Started on port 3000");
}
