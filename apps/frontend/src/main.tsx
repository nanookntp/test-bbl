import * as ReactDOM from 'react-dom/client';

// internal
import App from './app/app';

import '@mantine/core/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
