import { Routes, Route } from 'react-router-dom';
import { PageLayout } from '@/components/layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Invest } from '@/pages/Invest';
import { Contact } from '@/pages/Contact';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageLayout>
            <Home />
          </PageLayout>
        }
      />
      <Route
        path="/about"
        element={
          <PageLayout>
            <About />
          </PageLayout>
        }
      />
      <Route
        path="/invest"
        element={
          <PageLayout>
            <Invest />
          </PageLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <PageLayout>
            <Contact />
          </PageLayout>
        }
      />
    </Routes>
  );
}

export default App;
