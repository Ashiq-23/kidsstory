import './App.css';
import Header from './componets/header';
import Kochi from './componets/kochi';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { CommentProvider } from './componets/CommentProvider';

const Hpage = lazy(() => import('./componets/homepage'));
const Apage = lazy(() => import('./componets/aboutpage'));

function App() {
  return (
    <>
      <CommentProvider>
        <Header />
        <section>
          <Suspense
            fallback={
              <div>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Hpage />} />
              <Route path="/about" element={<Apage />} />
              <Route path="/koc" element={<Kochi />} />
            </Routes>
          </Suspense>
        </section>
      </CommentProvider>
    </>
  );
}

export default App;
