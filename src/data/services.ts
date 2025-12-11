import { type Service } from '../types/Service';

const services: Service[] = [
  {
    id: 'svc-auth',
    name: 'Authentication Service',
    description: 'Handles user login, token generation, and session validation.',
    status: 'healthy',
    lastUpdated: '2025-01-10T08:12:45Z',
  },
  {
    id: 'svc-api-gw',
    name: 'API Gateway',
    description: 'Entry point for all internal and external API traffic.',
    status: 'degraded',
    lastUpdated: '2025-01-10T08:05:12Z',
  },
  {
    id: 'svc-billing',
    name: 'Billing Engine',
    description: 'Processes payments, invoices, and subscription renewals.',
    status: 'down',
    lastUpdated: '2025-01-10T07:59:03Z',
  },
  {
    id: 'svc-notify',
    name: 'Notification Service',
    description: 'Sends emails, SMS messages, and system alerts.',
    status: 'healthy',
    lastUpdated: '2025-01-10T08:14:27Z',
  },
  {
    id: 'svc-storage',
    name: 'Object Storage',
    description: 'Stores user-uploaded media and long-term archival data.',
    status: 'degraded',
    lastUpdated: '2025-01-10T07:48:10Z',
  },
  {
    id: 'svc-analytics',
    name: 'Analytics Processor',
    description: 'Runs scheduled jobs to generate business metrics dashboards.',
    status: 'healthy',
    lastUpdated: '2025-01-10T08:10:01Z',
  },
  {
    id: 'svc-search',
    name: 'Search Indexer',
    description: 'Indexes documents and provides fast full-text search.',
    status: 'down',
    lastUpdated: '2025-01-10T07:30:54Z',
  },
  {
    id: 'svc-profiles',
    name: 'User Profile Service',
    description: 'Stores and updates user preferences and profile metadata.',
    status: 'healthy',
    lastUpdated: '2025-01-10T08:15:55Z',
  },
];

export default services;
