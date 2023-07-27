const app = require('./app.js');   // app.js    

const PORT = process.env.PORT || 5000;   // port

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});   // listen to port


