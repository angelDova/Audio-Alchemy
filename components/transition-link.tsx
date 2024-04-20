"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatedPageOut } from "@/utils/animations";

interface Props {
  href: string;
  label: string;
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatedPageOut(href, router);
    }
  };

  return (
    <button
      className="text-xl text-neutral-900 hover:text-neutral-700"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TransitionLink;
