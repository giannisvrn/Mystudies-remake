import { useState,useEffect } from "react";

const useFetch = (url) => { 
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log('Fetched data:', data);
            setData(data);
          })
          .catch(error => console.error('Error fetching subjects:', error));
      }, [url]);

    return { data}
}

export default useFetch;