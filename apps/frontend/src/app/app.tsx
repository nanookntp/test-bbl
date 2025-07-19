// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MantineProvider } from '@mantine/core';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

//internal
import '../styles.css';
import Form from './items/Form';
import Items from './items/Items';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <main className="app">
          <BrowserRouter>
            <Routes>
              <Route path="/items/new" element={<Form />} />
              <Route path="/" element={<Items />} />
            </Routes>
          </BrowserRouter>
        </main>
      </MantineProvider>
      </QueryClientProvider>
  );
}

export default App;
