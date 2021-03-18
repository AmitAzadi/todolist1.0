const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let itemslist=["I have to attend class","Going gym in evening"];
let workItems=[];

app.get("/", function(req, res) {

let today= new Date();

let options={
  weekday:"long",
  day:"numeric",
  month:"long"
};

  let day=today.toLocaleDateString("en-US",options);

  res.render("list",{listTitle:day,newListItems:itemslist});

});

app.post("/",function(req,res){
  let data=req.body.abcd;

  if(req.body.list==="coding")
  {
    workItems.push(data);
    res.redirect("/coding");
  }
  else{
    itemslist.push(data);
    res.redirect("/");
  }

});

app.get("/coding",function(req,res){
  res.render("list",{listTitle:"Coding",newListItems:workItems});
});

app.get("/about",function(req,res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server is working on port 3000");
});
