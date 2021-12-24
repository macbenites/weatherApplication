import { useState, createContext } from "react";
export const Context = createContext();

const Provider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const value = {
    cities,
    error,
    loading,
    handleError: (isError) => {
      setError(isError);
    },

    handleClose: (id) => {
      setCities(cities.filter((c) => c.id !== id));
    },
    handleLoading: (isLoad) => {
      setLoading(isLoad);
    },
    handleCities: (city) => {
      !cities.find((c) => c.id === parseInt(city.id)) &&
        cities.length < 3 &&
        setCities([...cities, city]);
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
