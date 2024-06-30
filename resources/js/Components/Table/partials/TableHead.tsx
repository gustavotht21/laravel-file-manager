import {ReactNode} from "react";

export default function TableHead({children}: {
    children: ReactNode;
}) {
    return <thead className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-50">
    {children}
    </thead>;
}
