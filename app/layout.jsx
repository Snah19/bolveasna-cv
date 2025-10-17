import { volkhov } from "@/fonts";
import "./globals.css";

export const metadata = {
  title: "Bol Veasna - CV",
  description: "Professional infomation about Bol Veasna",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${volkhov.className}`}
      >
        {children}
      </body>
    </html>
  );
}
