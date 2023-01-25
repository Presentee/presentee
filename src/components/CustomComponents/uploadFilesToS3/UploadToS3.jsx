import React from 'react'
import AWS from 'aws-sdk';

AWS.config.update({
accessKeyId: 'AKIA3VSIZQAYF6NXX4GS',
secretAccessKey: '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'
});

const s3 = new AWS.S3();
const params = {
  Bucket: 'presentee-storage-edfa6fc8124948-staging'
};
s3.listObjects(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else {
    data.Contents.forEach(function(object) {
      console.log(object.Key);
    });
}
});