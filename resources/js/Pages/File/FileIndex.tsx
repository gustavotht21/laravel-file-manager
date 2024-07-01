import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import {PageProps} from "@/types";
import {IFile} from "@/types/app/models/models";
import TableFiles from "@/Components/Tables/TableFiles";

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

            <TableFiles files={files}/>
        </AuthenticatedLayout>
    );
}
