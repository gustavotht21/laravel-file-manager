import React, {useState} from "react";
import Table from "@/Components/Table";
import {Th} from "@/Components/Table/partials/Th";
import {Tr} from "@/Components/Table/partials/Tr";
import {Td} from "@/Components/Table/partials/Td";
import {FilterItems, FilterItemsBy, SortBy} from "@/Helpers/Table/FilterTableData";
import {ISelectItem, TChangeElement} from "@/types/forms";
import FilterInput from "@/Components/FilterInput";
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/16/solid";
import {IFile} from "@/types/app/models/models";
import {Link} from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
import DeleteActionButton from "@/Components/DeleteActionButton";
import PrimaryButton from "@/Components/PrimaryButton";

type TForm = {
    filterBy: TFileFilters;
}

const filterByOptions: ISelectItem[] = [{
    name : "Filtrar por: Tudo",
    value: "all"
}, {
    name : "Filtrar por: Nome",
    value: "name"
}, {
    name : "Filtrar por: Data de criação",
    value: "created_at"
}];

export default function TableFiles({
                                       files,
                                   }: {
    files: IFile[];
}) {

    const [showLicensees, setShowLicensees] = useState<IFile[]>(files);

    const onHandleChange = (e: TChangeElement<TForm>): void => {
        setShowLicensees(FilterItems<IFile, TForm>(files, e.target.value.toLowerCase()));
    };

    const onHandleChangeSelect = (e: TChangeElement<TForm>): void => {
        FilterItemsBy(e.target.value);
    };

    return <>
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex justify-end">
            <Link
                href={route("file.create")}
                className="self-end"
            >
                <PrimaryButton>
                    New file
                </PrimaryButton>
            </Link>
        </div>

        <FilterInput<TForm>
            onHandleChange={onHandleChange}
            onHandleChangeSelect={onHandleChangeSelect}
            filterByOptions={filterByOptions}
        />

        <Table
            head={<tr>
                <Th
                    ordering={{
                        field  : "name",
                        onClick: () => SortBy("name")
                    }}
                    text={"Nome"}
                    key={"name"}
                />
                <Th
                    ordering={{
                        field  : "created_at",
                        onClick: () => SortBy("created_at")
                    }}
                    text={"Data de Criação"}
                    key={"created_at"}
                    className="hidden lg:table-cell"
                />
                <Th text={"Ações"}/>
            </tr>
            }
            body={showLicensees.map((file: IFile, index: number) => {
                return <Tr
                    key={index}
                >
                    <Td>
                        {file.name}
                        <dl className="font-normal lg:hidden">
                            <dt className="sr-only">Created At</dt>
                            <dd className="mt-1 truncate text-gray-700 dark:text-gray-400">{file.created_at}</dd>
                        </dl>
                    </Td>
                    <Td className="hidden lg:table-cell">{file.created_at}</Td>
                    <Td>
                        <div className="flex items-center gap-2">
                            <Link href={route("dashboard")}>
                                <SecondaryButton>
                                    <PencilSquareIcon className="w-5 h-5"/>
                                </SecondaryButton>
                            </Link>
                            <DeleteActionButton
                                href={["dashboard", {
                                    file: file.id
                                }]}
                                message={<TrashIcon className="w-5 h-5"/>}
                            />
                        </div>
                    </Td>
                </Tr>;
            })}
        />
    </>;
};
