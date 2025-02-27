import Link, { LinkProps } from "next/link";
import React from "react";

type ButtonProps = Partial<LinkProps> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
  title: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({ title, href, onClick, className, ...rest }: ButtonProps) {
  const baseClasses = `
    flex flex-row items-center justify-between gap-4 px-8 py-3 group duration-500 bg-green hover:scale-110 duration-300 font-semibold rounded-full
    ${className}
  `;

  const textClasses = `
    uppercase text-white
  `;

  return href ? (
    <Link href={href} className={baseClasses} {...rest}>
      <div className={textClasses}>{title}</div>
    </Link>
  ) : (
    <button onClick={onClick} className={baseClasses}>
      <div className={textClasses}>{title}</div>
    </button>
  );
}