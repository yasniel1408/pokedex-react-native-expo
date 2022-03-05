export const logActions = (store: any) => (next: any) => (action: any) => {
  console.log("dispatching:", action);
  next(action);
};
