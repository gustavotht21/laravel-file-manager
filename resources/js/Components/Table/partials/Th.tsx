import React from "react";
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/24/outline";
import {twMerge} from "tailwind-merge";

export function Th({text, ordering}: {
    text: string;
    ordering?: {
        field: string;
        onClick: () => void;
    };
    className?: string;
}) {
    const {order, direction} = route().params;

    return <th
        scope="col"
        className={twMerge("h-12", ordering?.field && "cursor-pointer select-none")}
        onClick={ordering?.onClick}
    >
        <span className={ordering?.field && "flex justify-center items-center gap-x-2"}>
            {text} {
            ordering && (order === ordering?.field &&
                (direction == "asc"
                 ? <ChevronUpIcon className={"w-4 h-4 text-sky-500 dark:text-sky-400"}/>
                 : <ChevronDownIcon className={"w-4 h-4 text-sky-500 dark:text-sky-400"}/>))
        }
        </span>
    </th>;
}
