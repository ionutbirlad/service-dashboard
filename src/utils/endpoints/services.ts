import { type Service } from '../../types/Service';
import { type ApiResponse } from '../../types/ApiResponse';
import services from '../../data/services';

type FetchStatus = '200' | '500';

const fetchServices = (status: FetchStatus): Promise<ApiResponse<Service[] | string>> => {
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
