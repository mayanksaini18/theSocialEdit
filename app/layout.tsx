import RootLayout from "./components/RootLayout";
import "./globals.css";

export const metadata = {
 title: {
    template: "%s - Built X",
    default: "Built X - Content Marketing, Web Solutions, & Brand Strategy",
  },
  description:
    "A premier content marketing agency delivering powerful brand strategy and bespoke web solutions to elevate your online presence.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
