import { type Service } from '../../types/Service';
import services from '../../data/services';

type FetchStatus = '200' | '500';

const fetchServices = (status: FetchStatus): Promise<Service[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === '200') {
        resolve(services);
      } else {
        reject('something went wrong');
      }
    }, 1500);
  });
};

export default fetchServices;
