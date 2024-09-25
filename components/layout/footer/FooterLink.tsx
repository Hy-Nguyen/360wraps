export default function FooterLink({ label, scrollTo }: { label: string; scrollTo: () => void }) {
  return (
    <div className="group/footerItem relative w-fit text-lg">
      <button className="" onClick={scrollTo}>
        {label}
      </button>
      <button
        className="absolute left-0 top-0 h-full w-full underline underline-offset-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover/footerItem:opacity-100"
        aria-hidden
      >
        {label}
      </button>
    </div>
  );
}
