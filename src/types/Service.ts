export const SERVICE_STATUS_VALUES = ['healthy', 'degraded', 'down'] as const;
export type ServiceStatus = (typeof SERVICE_STATUS_VALUES)[number];

export type Service = {
  id: string;
  name: string;
  description: string;
  status: ServiceStatus;
  lastUpdated: string;
};
