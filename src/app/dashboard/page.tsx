"use client";
import DashHome from "@/app/components/Dashboard";
import { SessionProvider, useSession } from "next-auth/react";

export default function Dashboard() {
  return (
    <SessionProvider>
      <div>
        <DashHome />
      </div>
    </SessionProvider>
  );
}
