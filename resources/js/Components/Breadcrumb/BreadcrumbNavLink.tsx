import {HomeIcon} from "@heroicons/react/20/solid";
import {Link} from "@inertiajs/react";
import {ReactElement} from "react";
import {twMerge} from "tailwind-merge";
import {TLink} from "@/types/routing";

export default function BreadcrumbNavLink({
                                              name,
                                              href,
                                              active = false,
                                              icon = <HomeIcon
                                                  className="flex-shrink-0 h-4 w-4"
                                                  aria-hidden="true"
                                              />
                                          }: {
    name: string;
    href: string | TLink;
    active?: boolean;
    icon?: ReactElement;
}): ReactElement {
    return <li>
        <div
            className={twMerge("flex items-center text-sm font-medium",
                active
                ? "text-gray-500 dark:text-gray-400"
                : "text-gray-600 dark:text-gray-300")}
        >
            {icon}
            {
                active
                ? <p className="ml-2">{name}</p>
                : <Link
                    href={typeof href === "string"
                          ? route(href)
                          : route(...href)}
                    className="ml-2 hover:text-gray-800 dark:hover:text-gray-100"
                    aria-current="page"
                >
                    {name}
                </Link>
            }
        </div>
    </li>;
}
