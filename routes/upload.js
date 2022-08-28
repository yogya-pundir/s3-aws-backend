const express = require('express');
const router = express.Router();

const multer  = require('multer')

const upload = multer({ dest: 'uploads/' })
const { uploadFile } = require('../s3');

router.post('/' ,upload.single('image'), async(req,res) => {

 
    console.log('req.file',req.file)
   const uploadResult = await uploadFile(req.file);
   console.log('uploadResult',uploadResult);
    
    res.status(200).send({
        imgUrl:uploadResult.Location
    });
})

module.exports = router;