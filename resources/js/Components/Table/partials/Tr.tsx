import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

export function Tr({children, className}: {
    children: ReactNode;
    className?: string;
}): ReactNode {
    return <tr className={twMerge("dark:even:bg-gray-700", className)}>
        {children}
    </tr>;
}
