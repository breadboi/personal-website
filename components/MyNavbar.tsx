import { Navbar } from "flowbite-react";

export default function MyNavbar({ }) {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand
                // as={{
                //   $$typeof: Symbol(react.forward_ref),
                //   render: LinkWithRef
                // }}
                to="/navbars"
            >
                <img
                    src="LogoIcon.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="Personal Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    BC
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="https://blog.brettcarney.com">
                    Blog
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}