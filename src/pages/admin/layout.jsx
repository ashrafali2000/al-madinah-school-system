"use client";
import ContentProvider from "../../components/admin/contextApi/contentProvider";
import DashboardProvider from "../../components/admin/contextApi/dashboardProvider";
import AuthForm from "../../components/admin/dashboard/components/authModal";
import Loader from "../../components/admin/dashboard/components/common/Loader";
import Header from "../../components/admin/dashboard/components/Header";
import Sidebar from "../../components/admin/dashboard/components/Sidebar";

import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="bg-gray-200">
          {loading ? (
            <Loader />
          ) : (
            <ContentProvider>
              <DashboardProvider>
                <AuthForm />

                <div className="flex h-screen overflow-hidden">
                  <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                  />

                  <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Header
                      sidebarOpen={sidebarOpen}
                      setSidebarOpen={setSidebarOpen}
                    />

                    <main>
                      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                        {children}
                      </div>
                    </main>
                  </div>
                </div>
              </DashboardProvider>
            </ContentProvider>
          )}
        </div>
      </body>
    </html>
  );
}
