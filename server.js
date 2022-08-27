const express = require('express');
const cors = require('cors');
const app = express();
const upload = require('./routes/upload');

// app.use('cors',({
//     origin: '*'
// }));

app.use(cors({
    origin: '*'
}));
app.use('/uploadimg',upload);

app.listen('8000',()=>{
    console.log('listening on port 8000');
})