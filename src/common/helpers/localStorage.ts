//Todo: add comments
const storage = {
  setValueIntoKey(key: string, value: any) {
    localStorage.setItem(key, value);
  },
  getValueFromKey(key: string) {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      return localStorage.getItem(key);
    }
  },
  setObjectIntoKey(key: string, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  },
  getObjectFromKey(key: string) {
    return JSON.parse(localStorage.getItem(key) || "{}");
  },
  setLanguage(lang: string) {
    this.setValueIntoKey("lang", lang);
  },
  setModeTheme(theme: string) {
    this.setValueIntoKey("theme", theme);
  },
  setAccessToken(token: string) {
    this.setValueIntoKey("token", token);
  },
  setRefreshToken(refreshToken: string) {
    this.setValueIntoKey("refreshToken", refreshToken);
  },
  getAccessToken() {
    const token = this.getValueFromKey("token");
    if (!token) return null;
    return token;
  },
  getRefreshToken() {
    const token = this.getValueFromKey("refreshToken");
    if (!token) return "";
    return token;
  },
  getLanguage() {
    return this.getValueFromKey("lang");
  },
  getModeTheme() {
    return this.getValueFromKey("theme");
  },
  removeAccessToken() {
    const token = this.getAccessToken();
    if (!token) return null;
    localStorage.removeItem("token");
  },
  removeRefreshToken() {
    const token = this.getRefreshToken();
    if (!token) return null;
    localStorage.removeItem("refreshToken");
  },
  removePersist() {
    localStorage.removeItem("persist:root");
  },
  removeLanguage() {
    localStorage.removeItem("lang");
  },
  removeModeTheme() {
    localStorage.removeItem("theme");
  },
  clearStorage() {
    localStorage.clear();
  },
};

export default storage;
