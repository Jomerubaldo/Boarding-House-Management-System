import { Routes, Route } from 'react-router-dom';
import RootLayout from '../shared/components/layouts/RootLayout';
import DashboardPage from '../pages/DashboardPage';
import BoardersPage from '../pages/BoardersPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/boarderlist" element={<BoardersPage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
