
import Layout from './component/layout/Layout';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.jsx"

import NotFound from './pages/NotFound.jsx';
import { MenuContextProvider } from './context/MenuContext.jsx';



function App() {
  return (
    <div>
      <MenuContextProvider >

        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/*' element={<NotFound />} />

          </Routes>
        </Layout>


      </MenuContextProvider>

    </div>
  );
}

export default App;
