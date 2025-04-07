import React from "react";
import Navbar from "./Navbar";
import { useGlobalContext } from "./context";
import CartContainer from "./CartContainer";

const App = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <main>
        <div className="loading" style={{ marginTop: "Green" }}></div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer/>
    </main>
  );
};

export default App;
