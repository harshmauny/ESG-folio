
import express, { response } from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './db/connection';
import authRoutes from './routes/authRoutes';
import companyRoutes from './routes/company.route';
import auditorRoutes from './routes/auditor.route';
import { verifyToken } from './utils/utils';


import cors from 'cors';
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/company', companyRoutes);
//app.use('/api/auditor', auditorRoutes);

app.use('/api/company',companyRoutes)
// Routes
/* app.use('/api/auth', authRoutes);

 */
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

