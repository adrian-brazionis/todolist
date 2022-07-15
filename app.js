const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const newTasks = []; //array que almacenara las nuevas tareas
const newWorks = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    
    const day = date.getDate();

    res.render('todolist', {listName: day, newItems: newTasks});
});

app.get("/work", (req, res) => {
  res.render('todolist', {listName: "Work list", newItems: newWorks});
})

app.post("/", (req, res) => {
  const newTask = req.body.task;

  if (req.body.list === "Work") {   //el req.body.(list ===> sale del name del button)
    newWorks.push(newTask);  //agrega la nueva tarea al array
    res.redirect("/work");    
  } else {
    newTasks.push(newTask);  //agrega la nueva tarea al array
    res.redirect("/");
  };
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000.");
});
