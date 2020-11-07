import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/">
      <a>
        <img src="images/logoAlexooO.svg" alt="logo" className="logo" />
      </a>
    </Link>
  );
}
