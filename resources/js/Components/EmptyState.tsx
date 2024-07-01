import React, {ReactElement} from "react";
import {Link} from "@inertiajs/react";

export default function EmptyState({
                                       icon: Icon,
                                       title,
                                       href,
                                       subtitle
                                   }: {
    icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
        title?: string,
        titleId?: string
    } & React.RefAttributes<SVGSVGElement>>;
    title: string;
    href: string;
    subtitle?: string;
}): ReactElement {
    return <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-6"><Link
        href={href}
        as={"button"}
        className="relative block w-full border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-lg p-12 text-center hover:border-gray-400 dark:hover:border-gray-600 focus:outline-none dark:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-indigo-500"
    >
        {<Icon
            className="mx-auto h-12 w-12 text-gray-400"
        />}
        <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{title}</p>
        {subtitle && <span className="mt-1 text-sm text-gray-500 dark:text-gray-300">{subtitle}</span>}
    </Link></div>;
}
