import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Base() {
  return (
    <div>
        <Navbar />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}

export default Base;