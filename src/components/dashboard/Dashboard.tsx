import { useState, useEffect } from 'react';

import './dashboard.css';

import { type Service } from '../../types/Service';
import fetchServices from '../../utils/endpoints/services';

function Dashboard() {
  const [data, setData] = useState<Service[] | string>();

  useEffect(() => {
    fetchServices('200')
      .then((res) => {
        setData(res.body);
      })
      .catch((err) => {
        setData(err);
      });
  }, []);

  return (
    <div className="dashboard">
      <main className="dashboard__inner">
        <ul>
          {/* {data?.map((service: Service) => (
            <li key={service.id}>{service.id}</li>
          ))} */}
        </ul>
      </main>
    </div>
  );
}

export default Dashboard;
