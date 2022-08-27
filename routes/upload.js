const express = require('express');
const router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/' ,upload.single('image'), async(req,res) => {

    console.log(req.file)

})

module.exports = router;