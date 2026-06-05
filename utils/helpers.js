const formatResponse = (data) => {
  return {
    success: true,
    data,
    timestamp: new Date().toISOString(),
  };
};

const handleError = (res, error, message = "Internal Server Error") => {
  console.error(error);
  res.status(500).json({
    success: false,
    message,
    error: error.message,
  });
};

module.exports = {
  formatResponse,
  handleError,
};
