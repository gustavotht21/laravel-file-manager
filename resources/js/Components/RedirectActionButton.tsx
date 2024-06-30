import {Link} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import {TLink} from "@/types/routing";
import {ReactElement} from "react";

export default function RedirectActionButton({
                                                 href,
                                                 message,
                                                 className = "",
                                             }: {
    href: string | TLink;
    message: string | ReactElement;
    className?: string;
}) {
    return <Link
        href={typeof href === "string"
              ? route(href)
              : route(...href)}
    >
        <PrimaryButton
            type="button"
            className={className}
        >
            {message}
        </PrimaryButton>
    </Link>;
}
