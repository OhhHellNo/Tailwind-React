const First = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-40">
        <h1 className="font-display max-w-xl bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-6xl leading-tight font-bold tracking-tight text-transparent">
          Unleash the power of intuitive finance
        </h1>
        <p className="mx-auto mt-10 max-w-2xl text-center text-xl text-neutral-500 selection:bg-white">
          Say goodbye to the outdated financial tools. Every small business
          owner, regardless of the background, can now manage their business
          like a pro. Simple. Intuitive. And never boring.
        </p>
        <div className="mt-8 flex w-full max-w-2xl">
          <input
            type="text"
            placeholder="Enter your Email"
            className="focus:ring-primary mr-4 flex-1 rounded-2xl border border-neutral-700 px-4 py-2 text-center text-white transition duration-200 placeholder:text-neutral-500 focus:ring-2 focus:outline-none"
          />

          <button className="relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-2 text-white">
            <div className="via-primary absolute inset-x-0 -bottom-px h-px w-full bg-linear-to-r from-transparent to-transparent"></div>
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default First;
