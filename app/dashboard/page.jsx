import { AuthProvider } from "@/app/Providers";
import MessagesInfo from "../ui/messages-info";

export default function DashboardPage() {
  return (
    <div>
      <AuthProvider>
        <MessagesInfo />
      </AuthProvider>
    </div>
  );
}
