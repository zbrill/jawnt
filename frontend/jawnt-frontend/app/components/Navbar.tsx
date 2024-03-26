import Link from "next/link";

export function Navbar() {
    return (
      <nav>
        <ul>
          <li><Link href="/requests">Requests</Link></li>
          <li><Link href="/management">Management</Link></li>
        </ul>
      </nav>
    );
  }