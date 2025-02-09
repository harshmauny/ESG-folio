import mongoose, { Schema, Document } from 'mongoose';

// Environmental metrics interface
interface Environmental {
  emissions: number;
  resourceUse: number;
  innovation: number;
}

// Social metrics interface
interface Social {
  humanRights: number;
  productResponsibility: number;
  workforce: number;
  community: number;
}

// Governance metrics interface
interface Governance {
  management: number;
  shareholders: number;
  csrStrategy: number;
}

// Main company interface
interface ICompany extends Document {
  name: string;
  esg: number;
  environment: number;
  sociaal: number;
  governance: number;
  year: number,
  status:string,
  e: Environmental;
  s: Social;
  g: Governance;
}

const CompanySchema = new Schema<ICompany>({
  name: String,
  esg: Number,
  environment: Number,
  sociaal: Number,
  governance: Number,
  year: Number,
  status: String,
  e: {
    emissions: Number,
    resourceUse: Number,
    innovation: Number
  },
  s: {
    humanRights: Number,
    productResponsibility: Number,
    workforce: Number,
    community: Number
  },
  g: {
    management: Number,
    shareholders: Number,
    csrStrategy: Number
  }
});

export const Company = mongoose.model<ICompany>('Company', CompanySchema);