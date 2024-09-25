import Link from 'next/link';

export default function NavSocial({ link, icon }: { link: string; icon: React.ReactNode }) {
  return (
    <div className="group/navsocial relative w-fit text-lg">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {icon}
      </Link>
    </div>
  );
}
