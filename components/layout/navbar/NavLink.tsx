export default function NavLink({ scrollTo, label }: { scrollTo: () => void; label: string }) {
  return (
    <div className="group/navlink relative w-fit text-2xl lg:text-xl">
      <button className="" onClick={scrollTo}>
        {label}
      </button>
      <button
        className="absolute left-0 top-0 h-full w-full underline underline-offset-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover/navlink:opacity-100"
        aria-hidden
        onClick={scrollTo}
      >
        {label}
      </button>
    </div>
  );
}
