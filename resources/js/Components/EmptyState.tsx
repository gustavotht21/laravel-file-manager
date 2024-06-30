import React, {ReactElement} from "react";

export default function EmptyState({
                                       icon = undefined,
                                       title,
                                       subtitle
                                   }: {
    icon?: ReactElement;
    title: string;
    subtitle: string;
}): ReactElement {
    return <div className="w-full flex justify-center items-center">
        <div className="text-center">
            {icon}
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{title}</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">{subtitle}</p>
        </div>
    </div>;
}
