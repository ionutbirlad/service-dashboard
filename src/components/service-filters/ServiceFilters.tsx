import { type ServiceStatus } from '../../types/Service';

import './service-filters.css';

function ServiceFilters({ filters }: { filters: ServiceStatus[] }) {
  return (
    <div className="service-filters">
      <div className="service-filters__inner">
        FILTERS HERE <br />
        {filters.map((filter) => (
          <>
            <span key={filter}>{filter}</span> <br />
          </>
        ))}
      </div>
    </div>
  );
}

export default ServiceFilters;
