import { Router } from 'express';
import multer from 'multer';
import { uploadImage } from '../controllers/uploadController';

const router = Router();

// Configure multer for memory storage (no disk writes)
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit
    },
    fileFilter: (req, file, cb) => {
        // Accept images only
        if (!file.mimetype.startsWith('image/')) {
            cb(new Error('Only image files are allowed!'));
            return;
        }
        cb(null, true);
    }
});

// POST /upload - Upload single image
router.post('/', upload.single('image'), uploadImage);

export default router;
