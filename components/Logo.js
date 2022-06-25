import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/">
      <a>
        <img src="images/alexooodevlogo.png" alt="logo" className="logo" />
      </a>
    </Link>
  );
}
