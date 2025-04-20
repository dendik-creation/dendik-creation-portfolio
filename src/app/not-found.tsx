"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="h-full">
        <div className="flex flex-col items-center justify-center h-full text-center mt-12">
          <h2 className="text-3xl text-red-300 mb-3 font-bold">Error</h2>
          <h1 className="text-9xl font-bold" style={{ letterSpacing: 25 }}>
            404
          </h1>
          <p className="mt-4 text-lg">
            I can’t seem to find the page you are looking for!
          </p>
          <Link href="/" className="mt-6">
            <button className="px-4 py-2 text-green-300 border border-green-300 rounded hover:bg-green-300 hover:text-gray-800 transition duration-300 ease-in-out">
              Go back to Home
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
