import {twMerge} from "tailwind-merge";
import {PlusIcon} from "@heroicons/react/24/solid";
import React from "react";

export default function Stats({stat}: {
    stat: {
        stat: number;
        redirect: string;
        change: number;
        name: string;
        icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
            title?: string;
            titleId?: string
        } & React.RefAttributes<SVGSVGElement>>;
        id: number
    }
}) {
    return <div
        className="relative bg-white dark:bg-gray-800 pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
    >
        <dt>
            <div className="absolute bg-indigo-500 rounded-md p-3">
                <stat.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                />
            </div>
            <p className="ml-16 text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{stat.name}</p>
        </dt>
        <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{stat.stat}</p>
            <p
                className={twMerge(
                    stat.change === 0
                    ? "text-gray-500 dark:text-gray-400"
                    : "text-green-600 dark:text-green-500",
                    "ml-2 flex items-center text-sm font-semibold"
                )}
            >
                {stat.change === 0
                 ? <PlusIcon
                     className="self-center flex-shrink-0 h-4 w-4 text-gray-500 dark:text-gray-400"
                     aria-hidden="true"
                 />
                 : <PlusIcon
                     className="self-center flex-shrink-0 h-4 w-4 text-green-500 dark:text-green-500"
                     aria-hidden="true"
                 />}
                <span className="sr-only">Incrementado em</span>
                {stat.change} este mês
            </p>
            <div className="absolute bottom-0 inset-x-0 bg-gray-50 dark:bg-gray-700 px-4 py-4 sm:px-6">
                <div className="text-sm">
                    <a
                        href={stat.redirect}
                        className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
                    >
                        Visualizar registros<span className="sr-only"> {stat.name} stats</span>
                    </a>
                </div>
            </div>
        </dd>
    </div>;
}
