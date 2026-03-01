import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";

export default function MyNavbar({ }) {
    return (
        <nav className="w-full border-b bg-background">
            <div className="mx-auto flex h-14 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="LogoIcon.png"
                        className="h-6 sm:h-9"
                        alt="Personal Logo"
                    />
                    <span className="text-xl font-semibold text-foreground">
                        BC
                    </span>
                </Link>

                <div className="hidden items-center gap-2 md:flex">
                    <Button variant="ghost" asChild>
                        <Link href="/">Home</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <a href="https://tools.brettcarney.com" target="_blank" rel="noreferrer">
                            Toolbox
                        </a>
                    </Button>
                </div>

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Open menu">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="flex flex-col gap-2 pt-10">
                            <Button variant="ghost" asChild>
                                <Link href="/">Home</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <a href="https://tools.brettcarney.com" target="_blank" rel="noreferrer">
                                    Toolbox
                                </a>
                            </Button>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
