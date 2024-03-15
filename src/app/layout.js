import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import "./modal.css";
import "./pickupModal.css";
import Header from "./_reuse-components/Header";
import Nav from "./_reuse-components/Nav";
import NextTopLoader from "nextjs-toploader";
const Nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "IC Restaurent",
  description: "Food and Beer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Nunito.className}>
        <NextTopLoader showSpinner={false} />
        <Header />

        {children}
        <Nav />
      </body>
    </html>
  );
}
