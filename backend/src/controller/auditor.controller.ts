import { Request, Response } from 'express';
import { connectDB } from '../db/connection';

export const getPendingCompanies = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const db = await connectDB();
        const pendingCompanies = await db.collection('company').find({ 'status': 'pending' }).toArray();
        
        res.status(200).json({
            success: true,
            data: pendingCompanies
        });
    } catch (error) {
        console.error('Error fetching pending companies:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};


// export const updateCompanyStatus = async (req: Request, res: Response) => {
//     try {
//         const companyId = req.params.id;
//         const { status } = req.body;

//         // Validate status
//         if (!['approve', 'reject'].includes(status)) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Status must be either approve or reject'
//             });
//         }

//         const company = await Company.findById(companyId);

//         if (!company) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Company not found'
//             });
//         }

//         company.status = status;
//         await company.save();

//         return res.status(200).json({
//             success: true,
//             message: `Company status updated to ${status}`,
//             data: company
//         });

//     } catch (error) {
//         console.error('Error updating company status:', error);
//         return res.status(500).json({
//             success: false,
//             message: 'Internal server error'
//         });
//     }
// };