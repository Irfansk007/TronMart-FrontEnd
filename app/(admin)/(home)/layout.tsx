import AdminHeader from "@/components/AdminHeader";
import Topbar from "@/components/Topbar";


interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <div>
      <Topbar />
      <AdminHeader />
      {children}
    </div>
  );
};

export default layout;
