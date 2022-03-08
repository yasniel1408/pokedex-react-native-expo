type ValidationErrorsType = {
    errorMessage: string;
    field_errors: Record<string, string>;
    response: Response;
};

export default ValidationErrorsType;
