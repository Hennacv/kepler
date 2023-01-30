import Link from "next/link";

type NavItem = {
  text: string,
  href: string,
  active: boolean,
}

export function NavItem({ text, href, active}: NavItem) {
  return (
    <Link
      href={href}
      className={`nav__item ${ active ? "active" : ""}`}
    >
        {text}
    </Link>
    )
}