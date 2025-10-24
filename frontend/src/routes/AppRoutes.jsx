import { Routes, Route } from 'react-router-dom';
import RootLayout from '../shared/components/layouts/RootLayout';
import Dashboard from '../components/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
