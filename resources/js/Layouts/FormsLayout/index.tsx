import {FormHTMLAttributes, ReactNode} from "react";
import {twMerge} from "tailwind-merge";

const FormsLayout = ({
                         children,
                         ...props
                     }: FormHTMLAttributes<HTMLFormElement> & {
    children: ReactNode
}) => {
    return <form {...props} method={"post"}
                 className={"w-full max-w-7xl mx-auto flex flex-col justify-center items-center mt-6 gap-y-2"}
    >
        {children}
    </form>;
};

const FormsLayoutBody = ({children, type = "grid"}: { children: ReactNode; type?: "linear" | "grid" | string }) => {
    const className: string = {
        linear: "flex flex-col gap-4",
        grid  : "grid grid-cols-1 md:grid-cols-2 gap-4",
    }[type] || type;

    return <div className={twMerge("w-full", className)}>
        {children}
    </div>;
};

const FormsLayoutActions = ({children}: { children: ReactNode }) => {
    return <div className="w-full mt-6 flex items-center justify-end gap-x-4">
        {children}
    </div>;
};

FormsLayout.Body = FormsLayoutBody;
FormsLayout.Actions = FormsLayoutActions;

export default FormsLayout;


