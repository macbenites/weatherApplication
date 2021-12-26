import React, { Suspense } from "react";
import Context from "./Context.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import styled from "styled-components";

export default () => {
  const Layout = React.lazy(() => import("./components/Layout.jsx"));
  const About = React.lazy(() => import("./components/About.jsx"));
  const Cards = React.lazy(() => import("./components/Cards.jsx"));
  const City = React.lazy(() => import("./components/City.jsx"));
  const Footer = React.lazy(() => import("./components/Footer.jsx"));

  return (
    <Suspense fallback="<h1>Cargando</h1>">
      <PageContainer>
        <ContentWrap>
          <Context.Provider>
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/" element={<Cards />} />
                  <Route exact path="/ciudad/:ciudadId" element={<City />} />
                  <Route path="*" element={<h2>Not Found</h2>} />
                </Routes>
                <Toaster />
              </Layout>
            </BrowserRouter>
          </Context.Provider>
        </ContentWrap>
        <Footer />
      </PageContainer>
    </Suspense>
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
