export const reportError = (store: any) => (next: any) => (actionInfo: any) => {
  const {
    action: { type, payload },
  } = actionInfo;
  if (type.contains("ERROR")) {
    console.error(payload);
  }
  next(actionInfo);
};
