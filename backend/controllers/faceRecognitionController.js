import dotenv from 'dotenv';
dotenv.config();

import { ClarifaiStub, grpc } from 'clarifai-nodejs-grpc';

const stub = ClarifaiStub.grpc();

const metadata = new grpc.Metadata();
metadata.set('authorization', 'Key ' + process.env.PAT);

const getFaceRecognition = (req, res) => {
  console.log('getFaceRecognition');
  const { imageUrl } = req.body;
  console.log('imageUrl', imageUrl);
  const request = {
    user_app_id: {
      user_id: process.env.USER_ID,
      app_id: process.env.APP_ID,
    },
    model_id: process.env.MODEL_ID,
    inputs: [
      {
        data: {
          image: {
            url: imageUrl,
          },
        },
      },
    ],
  };

  stub.PostModelOutputs(request, metadata, (err, response) => {
    if (err) {
      console.log('Error: ', err);
      return;
    }
    console.log('response', response);
    const data = response.outputs[0].data.regions;
    const clarifaiFaces = data.map((region) => {
      return {
        ...region.region_info.bounding_box,
        id: region.id,
      };
    });
    res.json(clarifaiFaces);
  });
};

export { getFaceRecognition };
