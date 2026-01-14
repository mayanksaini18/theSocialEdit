"use client";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import Container from "@/app/components/Container";
import Link from "next/link";
import Logo from "@/app/components/Logo";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Button from "@/app/components/Button";
import clsx from "clsx";
import Offices from "@/app/components/Offices";
import SocialMedia from "@/app/components/SocialMedia";
import Footer from "@/app/components/Footer";


const Header = ({
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
}) => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Home" className="flex flex-col leading-none">
          <span
            className={clsx(
              "text-xs italic tracking-wide",
              invert ? "text-white" : "text-black"
            )}
          >
            THE
          </span>
          <span className="text-2xl font-semibold italic text-yellow-500">
            SOCIAL EDIT
          </span>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-x-6">
          <Button
  href="/contact"
  className="bg-yellow-500 text-white transition-all duration-300 hover:scale-110  hover:shadow-lg"
>
  Contact us
</Button>


          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded.toString()}
            aria-controls={panelId}
            aria-label="Toggle navigation"
            className={clsx(
              "-m-2.5 rounded-full p-2.5 transition",
              invert ? "hover:bg-white/10" : "hover:bg-black/10"
            )}
          >
            <Icon
              className={clsx(
                "h-6 w-6",
                invert ? "fill-yellow-500" : "fill-black"
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  );
};

const NavigationRow = ({ children }) => {
  return (
    <div className="even:mt-px sm:bg-black">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  );
};

const NavigationItem = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="group relative flex items-center px-6 py-10
                 text-white transition
                 hover:text-yellow-400
                 sm:px-16 sm:py-20"
    >
      {/* Hover background */}
      <span className="absolute inset-0 bg-yellow-500/10 opacity-0 transition-opacity group-hover:opacity-100" />

      {/* Text */}
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

const Navigation = () => {
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/work">Our Work</NavigationItem>
        <NavigationItem href="/about">About Us</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/process">Our Process</NavigationItem>
        <NavigationItem href="/blog">Blog</NavigationItem>
      </NavigationRow>
    </nav>
  );
};

const RootLayoutInner = ({ children }) => {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const openRef = useRef();
  const closeRef = useRef();
  const navRef = useRef();
  const shouldReduceMotion = useReducedMotion();
  useEffect(() => {
    function onClick(event) {
      if (event.target.closest("a")?.href === window.location.href) {
        setExpanded(false);
      }
    }
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className="absolute left-0 right-0 top-2 z-40 pt-14"
          aria-hidden={expanded ? "true" : undefined}
          inert={expanded ? "" : undefined}
        >
          {/* Header */}
          <Header
            panelId={panelId}
            icon={HiMenuAlt4}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded);
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true })
              );
            }}
          />
        </div>
        <motion.div
          layout
          id={panelId}
        style={{ height: expanded ? "auto" : "0.5rem" }}
        className="relative z-50 overflow-hidden bg-black pt-2"
          aria-hidden={expanded ? undefined : "true"}
          inert={!expanded}
        >
        <motion.div layout className="bg-neutral-950">
          <div ref={navRef} className="bg-black pb-16 pt-14">
              <Header
                invert
                panelId={panelId}
                icon={IoMdClose}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded);
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true })
                  );
                }}
              />
            </div>
            {/* Navigation */}
            <Navigation />
            <div className="relative bg-black before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-950">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                  {/* <div>
                    <h2 className="font-display text-base font-semibold text-white">
                      Our offices
                    </h2>
                    <Offices
                      invert
                      className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                    />
                  </div> */}
                  <div className="sm:border-l sm:border-transparent sm:pl-16">
                    <h2 className="font-display text-base font-semibold text-white">
                      Follow us
                    </h2>
                    <SocialMedia className="mt-6" invert />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>
      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto bg-white pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <main className="w-full flex-auto">{children}</main>
          {/* Footer */}
          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );

};

const RootLayout = ({ children }) => {
  const pathName = usePathname();
  return <RootLayoutInner key={pathName}>{children}</RootLayoutInner>;
};

export default RootLayout;
