import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen items-start justify-start font-sans">
      <h1>Home Page</h1>
      <Link className={'py-2 bg-blue-100 text-black rounded-sm'}href={'/basicInformation'}>User Details Form</Link>
      </div>
  );
}
