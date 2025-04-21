import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  const { status = 500, message = 'Something went wrong' } = err;

  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }

  res.status(status).json({
    status: status,
    message,
    data: err.message,
  });
};
