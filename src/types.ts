/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SlaTarget {
  priority: string; // e.g. "P1 - Critical", "P2 - High"
  description: string;
  core: string;      // e.g. "4 Hours"
  premier: string;   // e.g. "1 Hour"
  platinum: string;  // e.g. "15 Minutes"
  protocol: string;  // Simulated actions taken automatically
}

export interface ServiceTier {
  id: string;
  name: string;
  price: number;
  unit: string;
  tagline: string;
  features: string[];
  slaP1: string;
  badge?: string;
  isPopular?: boolean;
}

export interface LeadSubmission {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  deviceCount: number;
  employeeCount: number;
  sector: string; // Legal, Healthcare, Financial, Enterprise, Startup, General B2B
  complianceNeeded: string[]; // HIPAA, GDPR, PCI-DSS, local CR audit
  preferredTier: string;
  message?: string;
  status: 'pending' | 'reviewed' | 'dispatched';
  timestamp: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  metric: string;
  metricLabel: string;
}

export interface SlaScenario {
  id: string;
  title: string;
  severity: 'P1' | 'P2' | 'P3' | 'P4';
  priorityLabel: string;
  triggerEvent: string;
  remediationAction: string;
}
