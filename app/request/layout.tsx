import NavbarRequest from "@/app/ui/dashboard/navbarrequest";
import Navbar from "@/app/ui/dashboard/navbarrequest";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavbarRequest />
        {children}
      </body>
    </html>
  );
}
