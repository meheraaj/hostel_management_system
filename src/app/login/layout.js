import { ABeeZee } from "next/font/google";

const abeezee = ABeeZee({
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "Login",
  description: "Login using user account",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${abeezee.className} antialiased bg`}>{children}</body>
    </html>
  );
}
