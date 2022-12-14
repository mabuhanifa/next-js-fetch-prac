import React from "react";
import useSWR from "swr";
const fetcher = async () => {
  const res = await fetch("http://localhost:3004/dashboard");
  const data = await res.json();
  return data;
};
export default function DashboardSWR() {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.likes}!</div>;
}
