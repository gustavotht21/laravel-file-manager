import React, {ReactNode} from "react";
import {ChevronUpIcon} from "@heroicons/react/24/outline";
import {twMerge} from "tailwind-merge";

export function Th({text, ordering, className = "", colSpan = 1, rowSpan = 1}: {
    text: string;
    ordering?: {
        field: string;
        onClick: () => void;
    }
    className?: string;
    colSpan?: number;
    rowSpan?: number;
}): ReactNode {
    const {order, direction} = route().params;

    return <th
        scope="col"
        className={twMerge("py-3.5 pl-4 pr-3 text-left font-semibold sm:pl-6", ordering && ordering.field && "cursor-pointer select-none", className)}
        onClick={ordering && ordering.onClick}
        colSpan={colSpan}
        rowSpan={rowSpan}
    >
        <span className={ordering && ordering.field && "flex justify-start items-center gap-x-2"}>
            {text}
            {ordering && (order === ordering?.field &&
                <span className="p-0.5 flex-none rounded bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-300">
                    <ChevronUpIcon
                        className={twMerge("h-4 w-4", direction === "desc" && "rotate-180")}
                        aria-hidden="true"
                    />
                </span>)}
        </span>
    </th>;
}
