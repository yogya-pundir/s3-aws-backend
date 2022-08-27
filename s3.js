require('dotenv').config();
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');

const AWS = require('aws-sdk');
 const SESConfig = {
     apiVersion: "2010-12-01",
     accessKeyId: process.env.aws_access_key_id,
     accessSecretKey: process.env.aws_secret_access_key,
     region: "us-east-1"
 }
 AWS.config.update(SESConfig);

const bucketname = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accesskey = process.env.aws_access_key_id;
const secretaccesskey = process.env.aws_secret_access_key;

const s3 = new S3({
    region,
    accesskey,
    secretaccesskey
})


//upload a file to s3

 function uploadFile(file){
    const readStream = fs.createReadStream(file.path);

    const uploadparams = {
        Bucket : bucketname,
        Body : readStream,
        Key : file.filename
    }
    return s3.upload(uploadparams).promise()

}

exports.uploadFile = uploadFile