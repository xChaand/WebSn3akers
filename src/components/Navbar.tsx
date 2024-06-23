import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { Smartphone } from "lucide-react";

export default function Navbar() {
  let user: Boolean = true;
  let admin: Boolean = true;
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span className="text-red-600">Web</span>Sn
            <span className="text-red-600">3</span>akers
          </Link>
          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Logout
                </Link>
                {admin && (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: "sm",
                      variant: "outline",
                    })}
                  >
                    Dashboard
                  </Link>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
