const express = require('express');
const path = require ('path');
const app = express();
const members = require('./members');
  app.get('/api/members',(req,res)=>{
    res.json(members);


  });
    //set static folder
    app.use(express.static(path.join(__dirname,'public')));


 








const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`));