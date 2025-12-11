import { useState, useEffect } from 'react';

import { type Service } from './types/Service';
import fetchServices from './utils/endpoints/services';

function App() {
  const [data, setData] = useState<Service[]>();

  useEffect(() => {
    fetchServices('200')
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setData(err);
      });
  }, []);

  return (
    <ul>
      {data?.map((service) => (
        <li>{service.id}</li>
      ))}
    </ul>
  );
}

export default App;
