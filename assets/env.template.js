(function (window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["baseUrl"] = "${BASE_URL}";
  window["env"]["appVersion"] = "${APP_VERSION}";
  window["env"]["gaTrackingId"] = "${GA_TRACKING_ID}";
  window["env"]["AmplitudeApiKey"] = "${AMPLITUDE_API_KEY}";
})(this);
