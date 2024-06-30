import {ReactNode} from "react";

export function TableBody({children}: {
    children: ReactNode
}): ReactNode {
    return (
        <tbody className="divide-y divide-gray-300 dark:divide-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200">
        {children}
        </tbody>
    );
}
