import Canvas from "./component/Canvas";
import Page from "./pages";
import ItemList from "pages/ItemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import MockUp from "pages/MockUp";
import ContactPage from "pages/ContactPage";
import DetailPage from "pages/DetailPage";
import SubmitPage from "pages/SubmitPage";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/item" element={<ItemList />} />
        <Route path="/item/:id" element={<DetailPage />} />
        <Route path="/mockup" element={<MockUp />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/com" element={<SubmitPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
