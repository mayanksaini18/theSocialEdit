import React from "react";
import Container from "@/app/components/Container";
import FadeIn from "@/app/components/FadeIn";
import FooterNavigation from "@/app/components/FooterNavigation";
import Link from "next/link";

const ArrowIcon = (props) => {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
};

const NewsletterForm = () => {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  );
};

function FooterCTA() {
  return (
    <div className="bg-[#F7F7F3] py-24 sm:py-32">
      <Container>
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl sm:leading-tight">
              IDEA? <br /> STOP THINKING. <br /> START GROWING.
            </h2>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-medium text-black transition hover:bg-yellow-300"
            >
              Contact Us <span>→</span>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FooterCTA />
      <Container className="mt-24">
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <FooterNavigation />
            <div className="flex lg:justify-end">
              <NewsletterForm />
            </div>
          </div>
          <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
            <Link
              href="/"
              aria-label="Home"
              className="flex flex-col leading-none"
            >
              <span className="text-xs italic tracking-wide text-black">
                THE
              </span>
              <span className="text-2xl font-semibold italic text-yellow-500">
                SOCIAL EDIT
              </span>
            </Link>
            <p className="text-sm text-neutral-700">
              &copy; {new Date().getFullYear()} The Social Edit. All rights
              reserved.
            </p>
          </div>
        </FadeIn>
      </Container>
    </footer>
  );
};

export default Footer;
