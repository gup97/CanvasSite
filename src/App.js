import Canvas from "./component/Canvas";
import Page from "./pages";
import ItemList from "pages/ItemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/item" element={<ItemList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
