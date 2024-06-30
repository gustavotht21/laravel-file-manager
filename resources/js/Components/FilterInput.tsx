import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import TextInput from "@/Components/TextInput";
import React from "react";
import {ISelectItem, TChangeElement} from "@/types/forms";
import SelectInput from "@/Components/SelectInput";

export default function FilterInput<TForm>({
                                               onHandleChange,
                                               onHandleChangeSelect,
                                               filterByOptions,
                                           }: {
    onHandleChange: (e: TChangeElement<TForm>) => void;
    onHandleChangeSelect: (e: TChangeElement<TForm>) => void;
    filterByOptions: ISelectItem[];
}) {
    return <div className="w-3/4 mx-auto flex justify-center gap-4">
        <div className="w-full mx-auto flex justify-center items-center gap-8 content-stretch">
            <div className="w-full relative">
                <div className="w-full absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <MagnifyingGlassIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
                </div>
                <TextInput
                    type="search"
                    id="search"
                    placeholder="Buscar"
                    className="ps-10 w-full"
                    onChange={onHandleChange}
                />
            </div>
        </div>
        <div className="w-full mx-auto flex justify-center items-center gap-8 content-stretch">
            <SelectInput
                className="w-full"
                name="filterBy"
                value={route().params.filter}
                onChange={onHandleChangeSelect}
                items={filterByOptions}
            />
        </div>
    </div>;
}
