import { descriptionContent, domain, fullName } from "../constants/config";
import "../styles/globals.css";
import "../styles/theme.css";

export const metadata = {
  title: fullName,
  description: descriptionContent,
  openGraph: {
    title: `${fullName} portfolio`,
    description: descriptionContent,
    metadataBase: new URL(domain),
    openGraph: {
      images: "/favicon.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="/images/favicon.png"
        type="image/x-icon"
      />
      <body>{children}</body>
    </html>
  );
}
