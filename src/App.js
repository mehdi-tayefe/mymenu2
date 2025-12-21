
import Layout from './component/layout/Layout';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.jsx"
import Admin from './pages/Admin.jsx';
import NotFound from './pages/NotFound.jsx';
import { MenuContextProvider } from './context/MenuContext.jsx';
import Shopping from './pages/Shopping.jsx';


function App() {
  return (
    <div>
      <MenuContextProvider >

        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/*' element={<NotFound />} />
            <Route path='/shopping' element={<Shopping />} />
          </Routes>
        </Layout>


      </MenuContextProvider>

    </div>
  );
}

export default App;
