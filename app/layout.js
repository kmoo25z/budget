import { Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Finance",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/*header*/}
        <Header />
        {/*main content*/}
        <main className="min-h-screen">{children}</main>
        {/*footer*/}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Finance</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
