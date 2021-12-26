import { useState, createContext } from "react";
export const Context = createContext();

const Provider = ({ children }) => {
  const [cities, setCities] = useState([]);

  const value = {
    cities,
    handleClose: (id) => {
      setCities(cities.filter((c) => c.id !== id));
    },

    handleCities: (city) => {
      !cities.find((c) => c.id === parseInt(city.id)) &&
        cities.length < 3 &&
        setCities([...cities, city]);
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const contextObject = {
  Provider,
  Consumer: Context.Consumer,
};
export default contextObject;
