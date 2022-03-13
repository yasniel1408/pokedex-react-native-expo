const capitalizeString = ({ string }: { string: string }): string => {
    const result = string.split('')[0].toUpperCase() + string.substring(1);
    return result;
};

export default capitalizeString;
