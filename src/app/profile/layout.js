import { ABeeZee } from "next/font/google";

const abeezee = ABeeZee({
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "Update Profile",
  description: "Update the profile using credentials",
};

export default function ProfileLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${abeezee.className} antialiased bg`}>{children}</body>
    </html>
  );
}
