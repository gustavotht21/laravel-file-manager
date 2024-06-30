import {ReactNode} from "react";
import TableHead from "@/Components/Table/partials/TableHead";
import TableBody from "@/Components/Table/partials/TableBody";
import {twMerge} from "tailwind-merge";

export function Table({head, body, fixed}: {
    head: ReactNode;
    body: ReactNode;
    fixed?: boolean
}) {
    return <div className={"flex justify-center max-w-7xl w-full mx-auto py-6 px-4 sm:px-6 lg:px-8"}>
        <div className="relative overflow-x-auto shadow-md rounded-lg w-full">
            <table
                className={twMerge("w-[1080px] lg:w-full text-sm text-center text-gray-900", fixed && "table-fixed")}
            >
                <TableHead children={head}/>
                <TableBody children={body}/>
            </table>
        </div>
    </div>;
}
