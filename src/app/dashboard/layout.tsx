import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { FaHome, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = [
    { label: 'To Do', icon: <FaHome />, href: '/dashboard/todo' },
    { label: 'Users', icon: <FaUsers />, href: '/dashboard/users' },
    { label: 'Settings', icon: <FaCog />, href: '/dashboard/settings' },
    { label: 'Logout', icon: <FaSignOutAlt />, href: '/' },
  ];
  return (
    <>
      <Navigation navigation={menuItems} />
      <Header name='Ahmad Akbar' img='' />
      <main>{children}</main>
    </>
  );
}
