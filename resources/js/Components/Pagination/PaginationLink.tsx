import {Link} from "@inertiajs/react";
import {ReactElement} from "react";
import {twMerge} from "tailwind-merge";

export default function PaginationLink({link, active, content, className}: {
    link: string;
    content: string | ReactElement | number;
    active: boolean;
    className?: string;
}) {
    return <li>
        <Link
            href={link}
            className={
                twMerge(
                    "flex items-center justify-center min-w-12 h-8 leading-tight text-gray-500 border border-gray-300 dark:border-gray-700 dark:text-gray-400",
                    active
                    ? "bg-gray-100 dark:bg-gray-900 text-emerald-500 dark:text-emerald-400 cursor-default font-bold"
                    : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white",
                    className
                )}
        >
            {content}
        </Link>
    </li>;
}
