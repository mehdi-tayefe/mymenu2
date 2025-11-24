
import Layout from './component/layout/Layout';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.jsx"
import Admin from './pages/Admin.jsx';
import NotFound from './pages/NotFound.jsx';


function App() {
  return (
    <div>
      <Layout>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/*' element={<NotFound />} />
       </Routes>
      </Layout>
    </div>
  );
}

export default App;
