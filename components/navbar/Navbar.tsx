import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { BookMarked, Menu, NotebookPen } from "lucide-react";
import Link from "next/link";

import UserAvatar from "../userAvatar/UserAvatar";
import { auth } from "@/auth";
export const Navbar = async () => {
  const session = await auth()

  return (
    <div className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <h1>HelpMingle</h1>
          </div>{" "}
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <BookMarked className="h-4 w-4" />
              first
            </Link>
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <NotebookPen className="h-4 w-4" />
              second
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <h1 className="md:flex items-center gap-2 font-semibold text-3xl hidden">HelpMingle</h1>
      <div className="w-full flex-1"></div>
      {session ?
        <UserAvatar session={session} /> : <Button size={"lg"} asChild>
          <Link href={"/api/auth/signin"}>Get Started</Link>
        </Button>}
    </div>
  );
};
