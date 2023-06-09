import './App.css';
import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Main from "./components/pages/Main";
import Products from "./components/pages/Products";
import AdminPage from "./components/pages/AdminPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="main" element={<Main />} />
                <Route path="products" element={<Products />} />
                <Route path="admin" element={<AdminPage />}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
