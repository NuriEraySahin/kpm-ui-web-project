import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout";
import Loader from "./components/widget/Loader";

import Keyboard from "./components/widget/Keyboard";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="home" element={<Layout path="home" />} />
        <Route path="files" element={<Layout path="files" />} />
        <Route path="controls" element={<Layout path="controls" />} />
        <Route path="settings" element={<Layout path="settings" />} />
        <Route path="temperature" element={<Layout path="temperature" />} />
        <Route path="printer" element={<Layout path="printer" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
