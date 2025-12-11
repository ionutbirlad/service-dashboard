import { useState, useEffect } from 'react';

import './service-dashboard.css';

import { type Service, type ServiceStatus } from '../../types/Service';
import fetchFilters from '../../utils/endpoints/filters';
import fetchServices from '../../utils/endpoints/services';

import ServiceFilters from '../service-filters/ServiceFilters';
import ServiceList from '../service-list/ServiceList';

function ServiceDashboard() {
  const [filters, setFilters] = useState<ServiceStatus[]>([]);
  const [data, setData] = useState<Service[]>([]);

  useEffect(() => {
    fetchFilters('200')
      .then((res) => {
        setFilters(res.body);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    fetchServices('200')
      .then((res) => {
        setData(res.body);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="dashboard">
      <main className="dashboard__inner">
        <ServiceFilters filters={filters} />
        <ServiceList services={data} />
      </main>
    </div>
  );
}

export default ServiceDashboard;
