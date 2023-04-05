export const setPathToSessionStorage = () => {
  const storage = window.sessionStorage;
  if (!storage) return;

  const prevPath = storage.getItem("currentPath");
  storage.setItem("prevPath", prevPath as string);

  const pathName = window.location.search
    ? window.location.pathname + window.location.search
    : window.location.pathname;

  storage.setItem("currentPath", pathName);
};
