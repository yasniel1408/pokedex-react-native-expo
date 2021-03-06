type ThunkAPIType = {
    dispatch: Function;
    getState: Function;
    extra?: any;
    requestId: string;
    signal: AbortSignal;
    rejectWithValue: Function;
};

export default ThunkAPIType;
