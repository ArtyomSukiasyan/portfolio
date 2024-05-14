import { descriptionContent, fullName } from "../constants/config";

export const metadata = {
  title: fullName,
  description: descriptionContent,
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
