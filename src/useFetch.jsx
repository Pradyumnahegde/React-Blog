import { useState, useEffect } from "react";  

const useFetch = (url) => {   
  const [error, setError] = useState(null);   
  const [data, setData] = useState(null);   
  const [isPending, setIsPending] = useState(true);    

  useEffect(() => {   
    setTimeout(() => {   
      fetch(url)         
        .then((res) => {           
          if (!res.ok) throw Error("Could not fetch the data");           
          return res.json();         
        })         
        .then((data) => {           
          setData(data);           
          setIsPending(false);           
          setError(null);         
        })         
        .catch((err) => {           
          setIsPending(false);           
          setError(err.message);  
          console.log('fetch aborted')       
        });   
    }, 1000);   

  }, [url]);    

  return { data, isPending, error }; 
};

export default useFetch;
