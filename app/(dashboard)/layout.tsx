import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* Sidebar */}
      <div className="w-64 shrink-0">
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="flex flex-col flex-1">
        <Navbar />

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
      </div>

    </div>
  );
}