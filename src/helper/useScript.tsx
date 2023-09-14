import {useEffect} from 'react';

const useScript = (url: string, async?: boolean) => {
    useEffect(() => {
        const script = document.createElement('script');

        console.log('useScript: ', url);
        script.src = url;
        script.async = typeof async == "boolean" ? async : true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
};

export default useScript;