import Link from "next/link";

export const HeaderLink = ({ href, children }) => {
  return (
    <div className="py-4 mx-3">
      <Link href={href}>{children}</Link>
    </div>
  );
};
