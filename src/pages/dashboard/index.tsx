"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import DataTableWithForm from "../../components/forms/DataTableWithForm";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { connected } = useWallet();
  const router = useRouter();
  useEffect(() => {
    if (!connected) {
      router.replace('/');
    }
  }, [connected, router]);


  return (
    <main>
      <div style={{ height: "100%", width: "100%" }}>
        <DataTableWithForm />
      </div>
    </main>
  );
};

export default Dashboard;
