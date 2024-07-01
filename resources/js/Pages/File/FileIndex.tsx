import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import {PageProps} from "@/types";
import {IFile} from "@/types/app/models/models";
import TableFiles from "@/Components/Tables/TableFiles";
import React from "react";
import EmptyState from "@/Components/EmptyState";
import {DocumentPlusIcon} from "@heroicons/react/24/outline";

export default function FileIndex({auth, files}: PageProps<{
    files: IFile[];
}>) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                File Index
            </h2>}
        >
            <Head title="File Index"/>

            {files.length !== 0
             ? <TableFiles files={files}/>
             : <EmptyState
                 title={"No files found"}
                 subtitle={"Create a new file"}
                 icon={DocumentPlusIcon}
                 href={route("file.create")}
             />}
        </AuthenticatedLayout>
    );
}
