import { type Service } from '../../types/Service';

import './service-row.css';

function ServiceRow({ service }: { service: Service }) {
  return (
    <tr key={service.id}>
      <td>
        <strong>{service.name}</strong>
      </td>
      <td>
        <span className={`status-badge status-${service.status}`}>{service.status}</span>
      </td>
      <td>{new Date(service.lastUpdated).toLocaleString()}</td>
      <td>{service.description}</td>
    </tr>
  );
}

export default ServiceRow;
