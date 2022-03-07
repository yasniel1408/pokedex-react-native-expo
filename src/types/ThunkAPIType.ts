type ThunkAPIType = {
    dispatch: Function;
    getState: Function;
    extra?: any;
    requestId: string;
    signal: AbortSignal;
};

export default ThunkAPIType;
