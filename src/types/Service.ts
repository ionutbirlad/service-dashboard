type ServiceStatus = 'healthy' | 'degrated' | 'down';

export type Service = {
  id: string;
  name: string;
  description: string;
  status: ServiceStatus;
  lastUpdated: string;
};
