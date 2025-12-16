import { SERVICE_STATUS_VALUES, type ServiceStatus } from '../../types/Service';
import { ORDER_BY_FILTER_VALUES, type OrderByFilterValue } from '../../types/OrderByFilter';

import './service-filters.css';

type ServiceFiltersProps = {
  filters: ServiceStatus[];
  status: ServiceStatus | null;
  onFilterChange: (value: ServiceStatus | null) => void;
};

function isServiceStatus(v: string): v is ServiceStatus {
  return (SERVICE_STATUS_VALUES as readonly string[]).includes(v);
}

function ServiceFilters({ filters, status, onFilterChange }: ServiceFiltersProps) {
  const handleStatusFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = e.currentTarget.value;

    if (v === '') return onFilterChange(null);
    if (isServiceStatus(v)) return onFilterChange(v);

    return onFilterChange(null);
  };

  return (
    <div className="service-filters">
      <div className="service-filters__inner">
        <div className="service-filters__selects">
          <div className="service-filters__selects--status-filter">
            <label htmlFor="status-select">Status filter:</label>

            <select
              name="statuses"
              id="status-select"
              onChange={handleStatusFilterChange}
              value={status ?? ''}
            >
              <option value="">All</option>
              {filters.map((filter) => (
                <option value={filter}>{filter}</option>
              ))}
            </select>
          </div>
          <div className="service-filters__selects--sort-by">
            <label htmlFor="orderby-select">Order by:</label>

            <select name="orderby-options" id="orderby-select">
              <option value="name">Name</option>
              <option value="status">Status</option>
              <option value="lastUpdated">Last updated</option>
            </select>
          </div>
        </div>
        <div className="service-filters__search">
          <div className="service-filters__search-input">
            <label htmlFor="services-search">Search services:</label>
            <input type="search" id="services-search" name="q" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceFilters;
