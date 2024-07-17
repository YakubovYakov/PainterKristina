import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import Art from "../Art/Art";
import ArtCard from "../ArtCard/ArtCard";
import Contact from "../Contact/Сontact";
import Mk from "../Mk/Mk";
import Footer from "../Footer/Footer";
import Delivery from "../Delivery/Delivery";
import Cooperation from "../Cooperation/Сooperation";
import About from "../About/About";
import Design from "../Design/Design";
import Order from "../Order/Order";

function App() {
  return (
    <div className="main-page">
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Main />
            </>
          }
        />
        <Route
          path="/art"
          element={
            <>
              <Navbar />
              <Art />
              <ArtCard />
              <Mk />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/delivery"
          element={
            <>
              <Navbar />
              <Delivery />
            </>
          }
        />
        <Route
          path="/cooperation"
          element={
            <>
              <Navbar />
              <Cooperation />
            </>
          }
        />
        <Route
          path="/order"
          element={
            <>
              <Navbar />
              <Order />
            </>
          }
        />
        <Route
          path="/design"
          element={
            <>
              <Navbar />
              <Design />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
