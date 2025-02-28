import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="max-w-6xl mx-auto h-[100vh] flex flex-col justify-center items-center font-sans">
        <h1 className="text-4xl">
          Welcome to <span className="text-amber-800 font-serif">Order Status</span>
        </h1>
        <h2 className="text-2xl">
          This displays and mimics a order screen for a cafe.
        </h2>
        <p>
          Check out the <Link href="/order">orders</Link>
        </p>
      </div>
    </main>
  );
}
