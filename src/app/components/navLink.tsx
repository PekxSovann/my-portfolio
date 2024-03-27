import Link from 'next/link';

interface Props {
  href: string,
  title: string
}

const NavLink = ({ href, title }: Props) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[##acacb0] sm:text-xl rounded md:p-0 hover:text-white hover:underline"
    >
      {title}
    </Link>
  );
};

export default NavLink;