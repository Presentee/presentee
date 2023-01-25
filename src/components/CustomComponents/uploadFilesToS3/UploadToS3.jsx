import React from 'react'
import AWS from 'aws-sdk';

// AWS configuration with access key and secret access key
AWS.config.update({
  accessKeyId: '',
  secretAccessKey: ''
});

// Creating a new S3 object
const s3 = new AWS.S3();

// Bucket parameters
const params = {
  Bucket: 'presentee-storage-edfa6fc8124948-staging'
};

// listObjects function to list all objects in the specified bucket
s3.listObjects(params, function (err, data) {
  if (err) {
    // Logging error if any
    console.log(err, err.stack);
  } else {
    // Iterating through each object in the bucket
    data.Contents.forEach(function (object) {
      // Logging the key of each object
      console.log(object.Key);
    });
  }
});





