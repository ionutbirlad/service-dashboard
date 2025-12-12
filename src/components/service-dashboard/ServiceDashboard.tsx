import { useState, useEffect } from 'react';

import './service-dashboard.css';

import { type Service, type ServiceStatus } from '../../types/Service';
import fetchFilters from '../../utils/endpoints/filters';
import fetchServices from '../../utils/endpoints/services';

import ServiceFilters from '../service-filters/ServiceFilters';
import ServiceList from '../service-list/ServiceList';

function ServiceDashboard() {
  const [filters, setFilters] = useState<ServiceStatus[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    let ignore = false;

    fetchFilters('200')
      .then((res) => {
        if (!ignore) setFilters(res.body);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    let ignore = false;

    fetchServices('200')
      .then((res) => {
        if (!ignore) setServices(res.body);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="dashboard">
      <main className="dashboard__inner">
        <ServiceFilters filters={filters} />
        <ServiceList services={services} />
      </main>
    </div>
  );
}

export default ServiceDashboard;
