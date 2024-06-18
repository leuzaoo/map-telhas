import { AuthProvider } from "@/app/Providers";
import MessagesInfo from "../ui/messages-info";
import Sidebar from "../ui/adminPage/sidebar";

export default function DashboardPage({ children }) {
  return (
    <>
      <div className="flex">
        <AuthProvider>
          <div className="fixed top-0 h-full w-[320px]">
            <Sidebar />
          </div>
          <div className="ml-[320px] w-full h-full p-5 overflow-y-auto">{children}</div>
        </AuthProvider>
      </div>
    </>
  );
}
