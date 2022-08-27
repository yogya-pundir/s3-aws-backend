const express = require('express');
const router = express.Router();

const multer  = require('multer')

const upload = multer({ dest: 'uploads/' })
const { uploadFile } = require('../s3');

router.post('/' ,upload.single('image'), async(req,res) => {

    console.log(req.file)
   const result = await uploadFile(req.file);
   console.log('result',result);

})

module.exports = router;