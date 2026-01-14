export default function StickyLeft(){
  return (
    <div className="lg:sticky lg:top-32 ">
      <p className="text-sm text-neutral-500 mb-4">
        Digital marketing agency that are
      </p>

      <h2 className="font-display text-5xl sm:text-6xl font-medium text-neutral-950 leading-tight">
        Jack of all trades,
        <br />
        master of results!
      </h2>

      <p className="mt-6 text-neutral-600 max-w-md">
        We wear many hats (and rock them all), but at the end of the day we get the
        job done, no matter the challenge!
      </p>

      <div className="mt-10 flex items-center gap-4">
        <button className="rounded-full bg-black px-6 py-3 text-white">
          Talk to us.
        </button>
        <span className="h-12 w-12 flex items-center justify-center rounded-full bg-yellow-400 text-black">
          ↗
        </span>
      </div>
    </div>
  );
};
