import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

export default function Tr({children, className}: {
    children: ReactNode;
    className?: string;
}) {
    return <tr
        className={twMerge("odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700 border-b border-gray-100 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200", className)}
    >
        {children}
    </tr>;
}
