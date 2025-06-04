import Navbar from "@/components/shared/Navbar";
import NavigationMenu from "@/components/shared/NavigationMenu";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <main>
        <Navbar />
        <NavigationMenu />
        {children}
      </main>

  );
}
