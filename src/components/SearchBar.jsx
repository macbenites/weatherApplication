import { useState, useContext } from "react";
import styled from "styled-components";
import { useCityByName } from "../hooks/useCity";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../Context";
import toast from "react-hot-toast";

function SearchBar() {
  const { cities } = useContext(Context);

  const [search, setSearch] = useState("");
  const { searchCity } = useCityByName();
  const location = useLocation();
  const navigate = useNavigate();
  const useOnSubmit = (e) => {
    e.preventDefault();
    if (cities.length === 3) {
      toast.error("Limite de ciudades");
    } else {
      (!cities.find((c) => c.name.toLowerCase() === search.toLowerCase()) &&
        toast.promise(searchCity(search), {
          loading: "Loading",
          success: "Got the data",
          error: "City not found",
        })) ||
        toast.error("Ciudad repetida");

      setSearch("");
    }
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <SearchContainer>
      <Search onSubmit={useOnSubmit}>
        <input
          type="text"
          placeholder="Buscar ciudad..."
          value={search}
          autoComplete="off"
          required
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>
    </SearchContainer>
  );
}

const Search = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 1rem;
  margin: 2rem;
  font-size: 1.2em;
  border-radius: 5px;
  border: solid 2px #010101;

  &:hover {
    outline: 3px solid transparent;
    border: solid 2px #7f5af0;
  }

  input {
    color: #fffffe;
    padding: 5px;
    outline: none;
    border: none;
    width: 100%;
    font-size: 1.1rem;
    background-color: transparent;
  }
`;

const SearchContainer = styled.div``;

export default SearchBar;
