import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans ">
      <h1>Hello World</h1>
     <Link href="/dashboard">Go to Dashboard</Link>
     <Link href="/setting">Go to Setting</Link>
     <Link href="/study">Go to Study</Link>
     <Link href="/analytics">Go to Analytics</Link>
    </div>
  );
}
