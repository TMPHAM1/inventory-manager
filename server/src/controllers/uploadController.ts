import { Request, Response } from 'express';
import cloudinary from '../config/cloudinary';
import { Readable } from 'stream';

export const uploadImage = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.file) {
            res.status(400).json({ message: 'No file uploaded' });
            return;
        }

        // Convert buffer to stream for Cloudinary
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: 'inventory-management',
                resource_type: 'auto'
            },
            (error, result) => {
                if (error) {
                    console.error('Cloudinary upload error:', error);
                    res.status(500).json({ message: 'Error uploading image', error: error.message });
                    return;
                }

                res.status(200).json({
                    message: 'Image uploaded successfully',
                    url: result?.secure_url,
                    publicId: result?.public_id,
                    width: result?.width,
                    height: result?.height
                });
            }
        );

        // Pipe the buffer to Cloudinary
        Readable.from(req.file.buffer).pipe(stream);

    } catch (error: any) {
        console.error('Upload error:', error);
        res.status(500).json({ message: 'Error uploading image', error: error.message });
    }
};
