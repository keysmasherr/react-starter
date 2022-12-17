const severity = Object.freeze({
  ERROR: "error",
  INFO: "info",
  WARNING: "warning",
  SUCCESS: "success",
});

const LOCAL_STORAGE_KEYS = Object.freeze({
  TOKEN: 'admin_token',
  CURRENT_USER: 'admin_currentUser',
});

export { severity, LOCAL_STORAGE_KEYS };
