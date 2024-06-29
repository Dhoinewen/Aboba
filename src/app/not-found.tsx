import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="mb-3 text-2xl font-semibold">Not Found</h2>
        <p className={'m-0 max-w-[30ch] text-balance text-sm opacity-50'}>
          Could not find requested page
        </p>
      </div>
      <Link
        href="/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className="text-2xl font-semibold">
          Go Home{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </Link>
    </main>
  );
}
