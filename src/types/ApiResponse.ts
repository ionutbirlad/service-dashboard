type ResponseStatus = 'ok' | 'bad';

export type ApiResponse<DataType> = {
  status: ResponseStatus;
  body: DataType;
};
