export const setPathToSessionStorage = () => {
  const storage = globalThis?.sessionStorage;
  if (!storage) return;

  const prevPath = storage.getItem("currentPath") || "/";

  const currentPath = globalThis.location.search
    ? globalThis.location.pathname + globalThis.location.search
    : globalThis.location.pathname;

  if (prevPath === currentPath) return;

  storage.setItem("prevPath", prevPath);
  storage.setItem("currentPath", currentPath);
};
