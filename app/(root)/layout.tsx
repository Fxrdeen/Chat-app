import SidebarWrapper from "@/components/shared/sidebar/SidebarWrapper";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <SidebarWrapper>{children}</SidebarWrapper>;
};

export default Layout;
