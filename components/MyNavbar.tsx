import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function MyNavbar({ }) {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <NavbarBrand
                // as={{
                //   $$typeof: Symbol(react.forward_ref),
                //   render: LinkWithRef
                // }}
                href="/navbars"
            >
                <img
                    src="LogoIcon.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="Personal Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    BC
                </span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink
                    href="/"
                    active={true}
                >
                    Home
                </NavbarLink>
                <NavbarLink href="https://tools.brettcarney.com">
                    Toolbox
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
