const express = require('express');
const app=express()
const PORT=process.env.PORT;
app.listen(PORT,function(){
    app.use(express.static("frontend"))
    console.log('Successfully running at http://localhost:'+PORT)
})