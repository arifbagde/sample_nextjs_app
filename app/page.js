import Image from "next/image";
import Link from "next/link";
import {FormContextProvider} from './Context/FormContext'

export default function Home() {
  return (
      <div className="flex min-h-screen items-start justify-center font-sans">
      <h1>Home Page</h1>
      <Link href={'/basicInformation'}>User Details Form</Link>
      </div>
  );
}
