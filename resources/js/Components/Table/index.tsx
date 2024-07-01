import {ReactNode} from "react";
import {TableHead} from "@/Components/Table/partials/TableHead";
import {TableBody} from "@/Components/Table/partials/TableBody";

export default function Table({head, body, className}: {
    head: ReactNode;
    body: ReactNode;
    className?: string;
}) {
    return <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <table className="w-full table-fixed shadow-md rounded overflow-hidden divide-y divide-gray-300 dark:divide-gray-500">
            <TableHead children={head}/>
            <TableBody children={body}/>
        </table>
    </div>;
}
