import {ChevronRightIcon} from "@heroicons/react/24/solid";
import {IBreadChumpRoute} from "@/types";
import {ReactElement} from "react";
import BreadcrumbNavLink from "@/Components/Breadcrumb/BreadcrumbNavLink";

export default function BreadChump({routes}: {
    routes: IBreadChumpRoute[];
}): ReactElement {
    return (
        <nav
            className="flex py-6 px-4 sm:px-6 select-none"
            aria-label="Breadcrumb"
        >
            <ol
                role="list"
                className="flex items-center space-x-2"
            >
                <BreadcrumbNavLink
                    name={"Home"}
                    href={"dashboard"}
                />
                {routes.map((page: IBreadChumpRoute) => <BreadcrumbNavLink
                    key={page.name}
                    name={page.name}
                    href={page.href}
                    active={route().current(typeof page.href === "string"
                                            ? page.href
                                            : page.href[0])}
                    icon={<ChevronRightIcon
                        className="flex-shrink-0 h-4 w-4"
                        aria-hidden="true"
                    />}
                />)}
            </ol>
        </nav>
    );
}
