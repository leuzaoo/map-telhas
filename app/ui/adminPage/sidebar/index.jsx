"use client";
import { useSession } from "next-auth/react";

export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="bg-primary">
      <p>{session?.user?.name}</p>
    </div>
  );
}
