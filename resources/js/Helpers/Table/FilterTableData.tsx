import {router} from "@inertiajs/react";

export function FilterItems<T extends object, TForm>(
    items: T[],
    query: string,
): T[] {
    const filter: keyof T = route().params.filter as keyof T;

    return filter === undefined || filter === "all"
           ? items.filter((item: T): boolean => {
            return Object
                .values(item)
                .some(item => item !== null
                    && item?.toString()
                        .toLowerCase()
                        .includes(query));
        })
           : items.filter((item: T): boolean => {
            return String(item[filter]).toLowerCase().includes(query);
        });
}

export function FilterItemsBy(filter: string): void {
    router.visit(route(route().current() as string, {
        ...route().params,
        filter: filter,
    }), {
        preserveScroll: true,
    });
}

export function SortBy(field: string, routeParameters?: Record<string, string>): void {
    const {order, direction}: Record<string, string> = route().params;

    let newDirection: string | null =
        order !== field
        ? "asc"
        : direction === "asc"
          ? "desc"
          : null;

    let parameters: Record<string, string | number | null> =
        newDirection
        ? {
                ...route().params,
                order    : field,
                direction: newDirection,
            }
        : {
                ...route().params,
                order    : null,
                direction: null,
            };

    router.visit(route(route().current() as string, {
        ...parameters,
        ...routeParameters,
    }), {
        preserveScroll: true,
    });
}
