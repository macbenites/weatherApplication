import Context from "./Context.js";
import About from "./components/About.jsx";
import Cards from "./components/Cards.jsx";
import City from "./components/City.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";
import styled from "styled-components";

export default () => {
  return (
    <PageContainer>
      <ContentWrap>
        <Context.Provider>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/about" element={<About />} />
                <Route exact path="/" element={<Cards />} />
                <Route exact path="/" element={<Footer />} />
                <Route exact path="/ciudad/:ciudadId" element={<City />} />
              </Routes>
              <Toaster />
            </Layout>
          </BrowserRouter>
        </Context.Provider>
      </ContentWrap>
      <Footer />
    </PageContainer>
  );
};
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const ContentWrap = styled.div`
  flex: 1;
`;
