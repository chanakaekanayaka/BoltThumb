import  express  from "express";
import { deleteThumbnail, generateThumbnail } from "../controller/ThumbnailController.js";


const ThumbnailRouter = express.Router();

ThumbnailRouter.post('/generate', generateThumbnail)
ThumbnailRouter.delete('/delete/:id', deleteThumbnail)

export default ThumbnailRouter;