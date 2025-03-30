export function setCookie(name: string, value: string, days: number = 365) {
  let expires = '';
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  expires = '; expires=' + date.toUTCString();
  document.cookie = `${name}=${value}${expires}; path=/`;
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
}
