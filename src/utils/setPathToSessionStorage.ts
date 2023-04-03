export const setPathToSessionStorage = () => {
  const storage = globalThis?.sessionStorage;
  if (!storage) return;

  const prevPath = storage.getItem("currentPath");
  storage.setItem("prevPath", prevPath as string);

  if (globalThis.location.search) {
    const pathName = globalThis.location.pathname + globalThis.location.search;
    storage.setItem("currentPath", pathName);
  } else {
    const pathName = globalThis.location.pathname;
    storage.setItem("currentPath", pathName);
  }
  const currentPath = storage.getItem("currentPath");
};
