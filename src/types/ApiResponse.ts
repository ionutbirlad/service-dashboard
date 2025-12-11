type ResponseStatus = 'ok' | 'bad';

export type ApiResponse<DataType> = {
  status: ResponseStatus;
  body: DataType;
};

export type FetchStatus = '200' | '500';
