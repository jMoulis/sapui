export default class RouterStorage {
  constructor(key) {
    this.storageKey = key;
  }

  addToRouter = object => {
    const actualRouter = localStorage.getItem(this.storageKey);
    let newRouter = { ...object };
    if (actualRouter) {
      const parsedActualRouter = JSON.parse(actualRouter);
      newRouter = {
        ...parsedActualRouter,
        ...object,
      };
    }
    localStorage.setItem(this.storageKey, JSON.stringify(newRouter));
  };

  getRouter = router => {
    const actualRouter = localStorage.getItem(this.storageKey || router);
    if (actualRouter) return JSON.parse(actualRouter);
    return null;
  };
}
