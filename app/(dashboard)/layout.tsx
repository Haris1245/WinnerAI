import NavBar from "@/components/navbar";
import SideBar from "@/components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y0 z-[80] bg-gray-900">
        <div className="text-white">
          <SideBar />
        </div>
      </div>
      <main className="md:pl-72">
        <NavBar />
        {children}
      </main>
    </div>
  );
}
