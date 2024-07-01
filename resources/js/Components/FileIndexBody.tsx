import TableFiles from "@/Components/Tables/TableFiles";
import React, {ReactElement} from "react";
import {IFile} from "@/types/app/models/models";
import {Link} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function FileIndexBody({files}: { files: IFile[] }): ReactElement {
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

        <TableFiles files={files}/>
    </>;
}
