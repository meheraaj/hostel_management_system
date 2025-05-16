import { ABeeZee } from "next/font/google";

const abeezee = ABeeZee({
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "Signup",
  description: "Create new account",
};

export default function SignupLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${abeezee.className} antialiased bg`}>{children}</body>
    </html>
  );
}
