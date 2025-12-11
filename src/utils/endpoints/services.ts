import { type Service } from '../../types/Service';
import { type ApiResponse, type FetchStatus } from '../../types/ApiResponse';
import services from '../../data/services';

const fetchServices = (status: FetchStatus): Promise<ApiResponse<Service[]>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === '200') {
        resolve({ status: 'ok', body: services });
      } else {
        reject({ status: 'bad', body: 'something went wrong' });
      }
    }, 1500);
  });
};

export default fetchServices;
