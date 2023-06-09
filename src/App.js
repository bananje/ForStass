import './App.css';
import Layout from "./components/Layout/Layout]";
import {Route, Routes} from "react-router-dom";
import Main from "./components/pages/Main";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="" element={<Main />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
