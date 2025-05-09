function errorMiddleware(err, req, next) {
    console.error('Error: ', err);

    const statusCode = err.status || 500;
    res.status(statusCode).json({ message: err.message });
}

module.exports = errorMiddleware;