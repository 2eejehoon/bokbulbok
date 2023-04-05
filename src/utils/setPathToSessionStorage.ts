export const setPathToSessionStorage = () => {
  const storage = globalThis?.sessionStorage;
  if (!storage) return;

  const prevPath = storage.getItem("currentPath");
  storage.setItem("prevPath", prevPath as string);

  const pathName = globalThis.location.search
    ? globalThis.location.pathname + globalThis.location.search
    : globalThis.location.pathname;

  storage.setItem("currentPath", pathName);
};
