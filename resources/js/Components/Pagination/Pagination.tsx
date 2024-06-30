import {ReactNode} from "react";
import {ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon} from "@heroicons/react/24/outline";
import {ChevronRightIcon} from "@heroicons/react/24/solid";
import {IPagination} from "@/types";
import PaginationLink from "@/Components/Pagination/PaginationLink";

export default function Pagination<T>({items}: {
    items: IPagination<T>;
}) {
    const lastPage: number = Math.min(Math.max(items.current_page + 2, 5), items.last_page);
    const firstPage: number = Math.max(1, lastPage - 4);

    const range: (start: number, end: number) => number[] = (start: number, end: number): number[] => {
        if (start >= end) {
            return [];
        }

        return [...Array(end - start + 1).keys()].map((key: number): number => key + start);
    };

    return (
        <div className="w-full flex flex-col gap-y-4 justify-center items-center pb-6 select-none">
            <p className="dark:text-gray-300">Página {items.current_page} de {items.last_page}</p>
            <nav>
                <ul className="flex -space-x-px text-sm rounded-lg">
                    <PaginationLink
                        content={<ChevronDoubleLeftIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>}
                        link={items.first_page_url as string}
                        active={!items.prev_page_url}
                        className={"rounded-l-lg"}
                    />
                    <PaginationLink
                        content={<ChevronLeftIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>}
                        link={items.prev_page_url as string}
                        active={!items.prev_page_url}
                    />

                    <div className="hidden sm:flex -space-x-px text-sm">
                        {range(firstPage, lastPage).map((page: number): ReactNode => {
                            return <PaginationLink
                                key={`${page}`}
                                content={page}
                                link={route(route().current() as string, {
                                    page: page,
                                })}
                                active={items.current_page === page}
                            />;
                        })}
                    </div>

                    <PaginationLink
                        content={<ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>}
                        link={items.next_page_url as string}
                        active={!items.next_page_url}
                    />
                    <PaginationLink
                        content={<ChevronDoubleRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>}
                        link={items.last_page_url as string}
                        active={!items.next_page_url}
                        className={"rounded-r-lg"}
                    />
                </ul>
            </nav>
        </div>
    );
}
