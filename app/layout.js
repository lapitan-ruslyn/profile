import "../page.css";

export const metadata = {
  title: "Ruslyn Lapitan | Programmer Profile",
  description:
    "Meet Ruslyn Lapitan, a 3rd-year BSIT student majoring in Network Design and Management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
