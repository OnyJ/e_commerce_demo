"use client";

import { useAtom } from "jotai";
import { userAtom } from "@/globalState";
import AddArticle from "@/components/articles/AddArticle";
import InsertName from "@/components/InsertName";

const Dashboard = () => {
  const [user] = useAtom(userAtom);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Votre activité, {user.name}</p>
      <AddArticle />
      <InsertName />
    </div>
  );
};

export default Dashboard;
