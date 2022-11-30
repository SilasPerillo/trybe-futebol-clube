export const ok = (data: any) => ({
  statusCode: 200,
  message: data,
});

export const badRequest = (message: string) => ({
  statusCode: 400,
  message: { message },
});

export const unauthorized = (message: string) => ({
  statusCode: 401,
  message: { message },
});
