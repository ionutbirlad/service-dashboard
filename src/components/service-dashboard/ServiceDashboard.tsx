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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const [servicesRes, filtersRes] = await Promise.all([
          fetchServices('200'),
          fetchFilters('200'),
        ]);

        if (ignore) return;

        setServices(servicesRes.body);
        setFilters(filtersRes.body);
      } catch (err) {
        if (ignore) return;
        setError(`Failed to load data: ${err}`);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  const onFilterChange = (value: string) => {
    console.log(value);
  };

  if (loading) {
    return (
      <div className="dashboard__fullpage-loader">
        <div className="dashboard__fullpage-loader-spinner" />
        <p>Loading dashboard…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard__fullpage-error">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <main className="dashboard__inner">
        <ServiceFilters filters={filters} onFilterChange={onFilterChange} />
        <ServiceList services={services} />
      </main>
    </div>
  );
}

export default ServiceDashboard;
