import React, {PropsWithChildren, ReactNode} from "react";
import {twMerge} from "tailwind-merge";

export function Td({children, className = "", colSpan = 1, rowSpan = 1}: PropsWithChildren<{
    className?: string;
    colSpan?: number;
    rowSpan?: number;
}>): ReactNode {
    return <td
        scope="col"
        className={twMerge("whitespace-nowrap py-4 pl-4 pr-3 text-gray-600 dark:text-gray-300 sm:pl-6", className)}
        colSpan={colSpan}
        rowSpan={rowSpan}
    >
        {children}
    </td>;
}
