import Script from "next/script";
import "./globals.css";


export const metadata = {
  title: "StudentStash Exchange",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      </body>

    </html>
  );
}
