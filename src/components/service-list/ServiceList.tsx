import { type Service } from '../../types/Service';

import './service-list.css';

import ServiceRow from '../service-row/ServiceRow';

function ServiceList({ services }: { services: Service[] }) {
  return (
    <div className="service-list">
      <div className="service-list__container">
        <table className="service-list__table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Last updated</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {services.map((svc) => (
              <ServiceRow key={svc.id} service={svc} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServiceList;
