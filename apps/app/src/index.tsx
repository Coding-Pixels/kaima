import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './pages/routes';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<AppRoutes />);
