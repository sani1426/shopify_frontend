import NavigationMenu from "@/components/shared/NavigationMenu";
import Topbar from "@/components/shared/Topbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <main>
        <Topbar />
        <NavigationMenu />
        {children}
      </main>

  );
}
