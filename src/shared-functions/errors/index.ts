function convertErrorToString(error: any): string {
  if (!error) return 'An unknown error occured.';
  if (error.message) return error.message;

  try {
    return error.toString();
  } catch (e) {
    return 'An unknown error occured.';
  }
}

export { convertErrorToString };