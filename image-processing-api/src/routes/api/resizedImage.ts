import path from 'path';
import express from 'express';
import { resize } from '../../utils/images';
import validateQueryParams from '../../middleware/validateQueryParams';
import serveCachedImageIfExists from '../../middleware/serveCachedImageIfExists';
import validateFileExists from '../../middleware/validateFileExists';

const resizedImage = express.Router();

// Prepare options used in sendFile responses
const options = {
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true,
  },
};

resizedImage.use(validateQueryParams);
resizedImage.use(serveCachedImageIfExists);
resizedImage.use(validateFileExists);

// Endpoint used to resize an image
resizedImage.get(
  '/',
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<void> => {
    const filename = req.query.filename as string;
    const width = Number(req.query.width);
    const height = Number(req.query.height);

    // Prep full-sized file path using __dirname
    const filepath = path.join(
      __dirname,
      '../../../assets/full',
      `${filename}.jpeg`
    );

    // Prep thumbnail path using __dirname
    const thumbpath = path.join(
      __dirname,
      '../../../assets/thumb',
      `${filename}_${width}_${height}.jpeg`
    );

    try {
      // Call the resize utility asynchronously
      await resize(filepath, thumbpath, width, height);
    } catch (err) {
      next(err);
    }

    // Send the thumbnail as a response
    res.sendFile(thumbpath, options);
  }
);

export default resizedImage;
