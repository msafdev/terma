import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weights: [300, 400, 500, 600, 700],
});

export const metadata = {
  title: "Termsaf",
  description: "A terminal-styled portfolio for @msafdev.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`dark text-foreground dark:text-primary font-semibold anim ${sourceCodePro.className}`}
      >
        {children}
      </body>
    </html>
  );
}
