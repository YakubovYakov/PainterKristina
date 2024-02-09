import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import NAvbar from "../Navbar/Navbar";
import Art from "../Art/Art";
import ArtCard from "../ArtCard/ArtCard";
import Contact from "../Contact/contact";
import Mk from "../Mk/Mk";
import Footer from "../Footer/Footer";
import Delivery from "../Delivery/Delivery";
import Cooperation from "../Cooperation/Сooperation";
import About from "../About/About";
import Design from "../Design/Design";
import Order from "../Order/Order";

function App() {
  return (
    <body className="main-page">
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <NAvbar />
              <Main />              
            </>
          }
        />
        <Route
          path="/art"
          element={
            <>
              <NAvbar />
              <Art />
              <ArtCard/>
              <Mk/>
              <Footer/>
            </>
          }
        />

        <Route 
         path="/contact"
         element={
          <>
          <NAvbar />
          <Contact />
          </>
         }
        />

<Route 
         path="/about"
         element={
          <>
          <NAvbar />
          <About />
       
          </>
         }
        />

<Route 
         path="/delivery"
         element={
          <>
          <NAvbar />
          <Delivery />
          </>
         }
        />
        <Route 
         path="/cooperation"
         element={
          <>
          <NAvbar />
          <Cooperation />
          </>
         }
        />
           <Route 
         path="/order"
         element={
          <>
          <NAvbar />
          <Order />
          </>
         }
        />
        <Route 
         path="/design"
         element={
          <>
          <NAvbar />
          <Design />
          <Footer/>
          </>
         }
        />
      </Routes>
    </body>
  );
}

export default App;
