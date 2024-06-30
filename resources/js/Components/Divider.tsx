import React, {ReactElement} from "react";

export default function Divider({text, action}: {
    text: string;
    action?: ReactElement;
}) {
    return <div className="relative">
        <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
        >
            <div className="w-full border-t border-gray-300 dark:border-gray-700"/>
        </div>
        <div className="relative flex items-center justify-between">
        <span className="pr-3 bg-gray-100 dark:bg-gray-900 text-xl font-semibold text-gray-900 dark:text-gray-100">
          {text}
        </span>
            {action && action}
        </div>
    </div>;
}
