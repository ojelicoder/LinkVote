import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Loading from './components/Loading';
import Header from './components/Header';
import List from './pages/LinkList';
import NewLink from './pages/NewLink';

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/new-link" element={<NewLink />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
