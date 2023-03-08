import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center ">
            Eye
            <span className="text-[#553492]">9</span>
            {" "}News</h1>
        </Link>

        <div
          className="flex items-center justify-end
            space-x-2"
        >
          {/* Dark Mode */}

          <button
            className="hidden md:inline bg-[#35362E] text-white
                px-4 lg:px-8 py-2 lg:py-4 rounded-lg dark:bg-[#3C3C32]"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
