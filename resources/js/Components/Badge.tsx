import React from "react";
import {twMerge} from "tailwind-merge";

export default function Badge({text, iconColor, className}: {
    text: string;
    iconColor?: string;
    className?: string;
}) {
    return <span className={twMerge("inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-semibold text-gray-900 dark:text-gray-100", className)}>
        {iconColor && <svg
            className={"-ml-0.5 mr-1.5 h-3 w-3 fill-current"}
            viewBox="0 0 8 8"
            color={iconColor}
        >
            <circle
                cx={4}
                cy={4}
                r={3}
            />
        </svg>}
        {text}
      </span>;
}
