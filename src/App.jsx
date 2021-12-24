import Context from "./Context.js";
import About from "./components/About.jsx";
import Cards from "./components/Cards.jsx";
import City from "./components/City.jsx";
import { Route, Routes, Switch } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/Layout.jsx";
import { Toaster } from "react-hot-toast";

export default () => {
  return (
    <Context.Provider>
      <Container>
        <Layout>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route exact path="/" element={<Cards />} />
            <Route exact path="/ciudad/:ciudadId" element={<City />} />
          </Routes>
          <Toaster />
        </Layout>
      </Container>
    </Context.Provider>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
