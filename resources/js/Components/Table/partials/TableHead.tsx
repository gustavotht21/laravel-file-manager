import {ReactNode} from "react";

export function TableHead({children}: {
    children: ReactNode
}): ReactNode {
    return <thead className="text-sm text-gray-900 dark:text-gray-50 bg-gray-200 dark:bg-gray-600">
    {children}
    </thead>;
}
