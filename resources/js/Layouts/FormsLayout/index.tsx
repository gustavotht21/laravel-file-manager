import {FormHTMLAttributes, ReactNode} from "react";

const FormsLayout = ({
                         children,
                         ...props
                     }: FormHTMLAttributes<HTMLFormElement> & {
    children: ReactNode
}) => {
    return <form {...props} className={"w-full max-w-7xl mx-auto flex flex-col justify-center items-center mt-6 gap-y-2"}>
        {children}
    </form>;
};

const FormsLayoutBody = ({children}: { children: ReactNode }) => {
    return <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
    </div>;
};

const FormsLayoutActions = ({children}: { children: ReactNode }) => {
    return <div className="w-full mt-6 flex items-center justify-end gap-x-6">
        {children}
    </div>;
};

FormsLayout.Body = FormsLayoutBody;
FormsLayout.Actions = FormsLayoutActions;

export default FormsLayout;


