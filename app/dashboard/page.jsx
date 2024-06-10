import { AuthProvider } from "@/app/Providers";
import MessagesInfo from "../ui/messages-info";
import Sidebar from "../ui/adminPage/sidebar";

export default function DashboardPage() {
  return (
    <>
      <div className="flex">
        <AuthProvider>
          <Sidebar />
          <MessagesInfo />
        </AuthProvider>
      </div>
    </>
  );
}
