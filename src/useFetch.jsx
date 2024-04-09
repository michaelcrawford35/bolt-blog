import { useState, useEffect } from 'react';

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        // setTimeout to simulate load time and test displaying something else while loading data.
        setTimeout(() => {
            fetch(`http://localhost:3000${endpoint}`)
            .then(response => {
                if (!response.ok) {
                    throw Error('Could not fetch data.')
                }
                return response.json()
            })
            .then(data => {
                setData(data)
                setIsLoading(false);
                setError(null)
            })
            .catch(err => {
                setData(null)
                setIsLoading(false);
                setError(err.message);
            })
        }, 1000);
    }, [endpoint]);

    return { data, isLoading, error }
}

export default useFetch;