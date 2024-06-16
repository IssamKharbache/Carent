import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/navbar/Header";
import Footer from "@/components/navbar/Footer";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Carent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <NextTopLoader color="#341f97" height={10} showSpinner={false} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
