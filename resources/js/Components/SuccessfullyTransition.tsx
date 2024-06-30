import {CheckCircleIcon} from "@heroicons/react/24/solid";
import {Transition} from "@headlessui/react";
import React, {ReactElement} from "react";

export default function SuccessfullyTransition({
                                                   recentlySuccessful,
                                                   text
                                               }: {
    recentlySuccessful: boolean;
    text: string | string[];
}): ReactElement {

    const lineClassName: string = "text-md text-emerald-600 dark:text-emerald-400 text-start";

    return (
        <Transition
            show={recentlySuccessful}
            enter="transition ease-in-out"
            enterFrom="opacity-0"
            leave="transition ease-in-out"
            leaveTo="opacity-0"
        >
            <div
                className="fixed top-12 right-6 bg-white shadow-md dark:bg-gray-700 flex items-center p-4 justify-center gap-4 rounded-lg"
            >
                <CheckCircleIcon className="text-emerald-500 w-8"/>
                <div className={"max-w-xl"}>
                    {typeof text === "string"
                     ? <p className={lineClassName}>{text}</p>
                     : text.map(
                            (line: string, index: number) => <p
                                key={index}
                                className={lineClassName}
                            >
                                {line}
                            </p>)}
                </div>
            </div>
        </Transition>
    );
}
