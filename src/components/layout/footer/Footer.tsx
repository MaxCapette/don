import Image from "next/image";
import "./footer.css";
import UselessGithub from "@/components/ui/uselessGithub";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside className="footerAside">
    
        <p>
          Useless Facts.
          <br />
          Providing useless facts since 2023
        </p>
      </aside>
      <Link href="/facts">
      <UselessGithub />
      </Link>
    </footer>
  );
}
