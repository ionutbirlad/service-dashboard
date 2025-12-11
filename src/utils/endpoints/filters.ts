import { type ServiceStatus } from '../../types/Service';
import { type ApiResponse, type FetchStatus } from '../../types/ApiResponse';
import filters from '../../data/filters';

const fetchFilters = (status: FetchStatus): Promise<ApiResponse<ServiceStatus[]>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === '200') {
        resolve({ status: 'ok', body: filters });
      } else {
        reject({ status: 'bad', body: 'something went wrong' });
      }
    }, 1500);
  });
};

export default fetchFilters;
