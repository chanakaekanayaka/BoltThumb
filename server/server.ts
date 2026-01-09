import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import AuthRouter from './routes/AuthRoutes.js';
import ThumbnailRouter from './routes/ThumbnailRouter.js';
import UserRouter from './routes/UserRoutes.js';

declare module 'express-session' {
    interface SessionData {
        isLoggedIn: boolean;
        userId: string;
    }
}

// Connect to MongoDB
await connectDB();

const app = express();

// --- FIX 1: Trust Proxy ---
// Vercel uses a reverse proxy. This must be 'trust proxy' (fixed typo) 
// to allow the 'secure' cookie flag to work.
app.set('trust proxy', 1);

// --- FIX 2: CORS Configuration ---
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', "https://bolt-thumb.vercel.app"],
    credentials: true, // Required for sessions/cookies
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// --- FIX 3: Robust Session Config ---
app.use(session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    name: 'bolt_thumb_sid', // Custom name for the session cookie
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 Days
        httpOnly: true, // Prevents XSS
        // On Vercel (Production), these MUST be true/none
        secure: process.env.NODE_ENV === 'production', 
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        path: '/'
    },
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI as string,
        collectionName: 'sessions',
        autoRemove: 'native' // Efficient session cleanup
    })
}));

app.use(express.json());

// Basic Route
app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live and Sessions are configured!');
});

// API Routes
app.use('/api/auth', AuthRouter);
app.use('/api/thumbnail', ThumbnailRouter);
app.use('/api/user', UserRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});