import DashHome from "@/app/components/Dashboard";
import { SessionProvider } from "next-auth/react";

export default function Dashboard() {
  return (
    <SessionProvider>
      <div>
        <DashHome />
        <h1>Dashboard</h1>
      </div>
    </SessionProvider>
  );
}
