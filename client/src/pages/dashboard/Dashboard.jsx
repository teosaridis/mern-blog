import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "./DashSidebar";
import DashProfile from "./DashProfile";
import DashPosts from "./DashPosts";
import DashUsers from "./DashUsers";
import DashComments from "./DashComments";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:inline md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile...*/}
      {tab === "profile" && <DashProfile />}
      {/* posts...*/}
      {tab === "posts" && <DashPosts />}
      {/* users...*/}
      {tab === "users" && <DashUsers />}
      {/* users...*/}
      {tab === "comments" && <DashComments />}
    </div>
  );
}
