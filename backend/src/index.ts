
import express, { response } from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './db/connection';
import authRoutes from './routes/authRoutes';
import { verifyToken } from './utils/utils';

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

app.use(verifyToken);

// Routes
/* app.use('/api/auth', authRoutes);
 */
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

