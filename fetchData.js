import React from 'react';

const UseFetch = (page) => fetch(`http://localhost:4000/api/${page}.json`,  {
    method: 'GET', 
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'include', 
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
  })
  export default UseFetch;