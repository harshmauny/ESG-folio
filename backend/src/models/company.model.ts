import { User } from "./user.model";

export class Investor extends User{
    e_carbonEmmissions: number;
    e_energyEfficiency: number;
    e_waterUsage: number;
    e_wasteManagement: number;
    e_biodiversityImpact: string;
    s_employeeDiversityRatio: number; 
    s_laborPracticesScore: number; 
    s_workplaceInjuryRate: number; 
    s_communityInvestment: number; 
    s_customerSatisfaction: number;
    g_boardDiversityRatio: number; 
    g_executivePayRatio: number; 
    g_corruptionIncidents: number;
    g_shareholderRightsScore: number; 
    g_dataPrivacyCompliance: boolean;
    
    constructor(id: number, name: string, email: string, password: string) {
        super(id, name, email, password, 'company');
        this.e_carbonEmmissions = 0;
        this.e_energyEfficiency = 0;
        this.e_waterUsage = 0;
        this.e_wasteManagement = 0;
        this.e_biodiversityImpact = '';
        this.s_employeeDiversityRatio = 0;
        this.s_laborPracticesScore = 0;
        this.s_workplaceInjuryRate = 0;
        this.s_communityInvestment = 0;
        this.s_customerSatisfaction = 0;
        this.g_boardDiversityRatio = 0;
        this.g_executivePayRatio = 0;
        this.g_corruptionIncidents = 0;
        this.g_shareholderRightsScore = 0;
        this.g_dataPrivacyCompliance = false;
    }
}