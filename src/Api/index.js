export const fetchJokeApi = () => {
  
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  return fetch('https://icanhazdadjoke.com', config).then((res) => res.json());
};



