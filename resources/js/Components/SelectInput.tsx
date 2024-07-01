import {SelectHTMLAttributes} from "react";
import {ISelectItem} from "@/types/forms";

export default function SelectInput({
                                        className = "",
                                        isFocused = false,
                                        items = [],
                                        ...props
                                    }: SelectHTMLAttributes<HTMLSelectElement> &
    { isFocused?: boolean; items: ISelectItem[] }) {

    return (
        <select
            {...props}
            className={
                "w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm " +
                className
            }
        >
            {items.map((item: ISelectItem) => {
                return <option
                    key={item.value}
                    value={item.value}
                >{item.name}</option>;
            })}
        </select>
    );
};
