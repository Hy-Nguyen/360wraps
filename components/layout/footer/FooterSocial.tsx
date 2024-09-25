import Link from 'next/link';

interface FooterSocialProps {
  label: string;
  link: string;
  icon: React.ReactNode;
}

export default function FooterSocial({ label, link, icon }: FooterSocialProps) {
  return (
    <div className="group/footer-social relative flex w-fit cursor-pointer items-center gap-2 text-lg">
      <Link href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        {icon}
        {label}
      </Link>
      <div className="absolute inset-0 flex items-center gap-2 underline underline-offset-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover/footer-social:opacity-100">
        <div className="opacity-0">{icon}</div>
        <span aria-hidden>{label}</span>
      </div>
    </div>
  );
}
