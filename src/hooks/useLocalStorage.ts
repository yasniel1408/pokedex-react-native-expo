import { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLocalStorage = ({ key }: { key: string }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const saveDataAtLocalStorage = useCallback(
        async ({ data: newData }) => {
            try {
                await AsyncStorage.setItem(key, JSON.stringify(newData));
                setLoading(false);
            } catch (err) {
                setError(JSON.stringify(err));
            }
        },
        [key, setLoading, setError],
    );

    const getLocalStorageData = useCallback(async () => {
        try {
            const element: any = await AsyncStorage.getItem(key);
            setData(JSON.parse(element));
            setLoading(false);
        } catch (err) {
            setError(JSON.stringify(err));
        }
    }, [key, setLoading, setError]);

    return { getLocalStorageData, saveDataAtLocalStorage, data, loading, error };
};

export default useLocalStorage;
