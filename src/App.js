import { Route, Routes } from 'react-router-dom';
import reset from "styled-reset";
import { createGlobalStyle } from 'styled-components';
import Layout from './pages/Layout';
import './styles/index.css'
import Info from './pages/about/Info';
import Member from './pages/about/Member';
import Main from './pages/Main';
import About from './components/About';
import Business from './pages/about/Business';
import Location from './pages/about/Location';
import NotFound from './common/NotFound';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

function App() {

  return (
    <>
      <GlobalStyle />

      <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Main />} />
            <Route path='/about' element={<About />} >
              <Route index element={<Info />} />
              <Route path='/about/member' element={<Member />} />
              <Route path='/about/business' element={<Business />} />
              <Route path='/about/location' element={<Location />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
