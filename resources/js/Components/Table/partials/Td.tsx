import React, {ReactElement, ReactNode} from "react";
import {twMerge} from "tailwind-merge";

export default function Td({
                               children,
                               colSpan = 1,
                               rowSpan = 1,
                               className
                           }: {
    colSpan?: number;
    rowSpan?: number;
    className?: string;
    children?: ReactNode;
}) {
    return <td
        scope="col"
        className={twMerge("px-4 py-8", className)}
        colSpan={colSpan}
        rowSpan={rowSpan}
    >
        {children}
    </td>;
}
