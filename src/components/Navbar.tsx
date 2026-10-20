import Link from "next/link";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>PT Makan Bergizi Gratis</div>
      <ul className={styles.navLinks}>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
