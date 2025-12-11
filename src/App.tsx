import { useState, useEffect } from 'react';

import { type Service } from './types/Service';
import fetchServices from './utils/endpoints/services';

function App() {
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
    <ul>
      {data?.map((service: Service) => (
        <li>{service.id}</li>
      ))}
    </ul>
  );
}

export default App;
