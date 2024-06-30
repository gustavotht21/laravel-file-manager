import {forwardRef, TextareaHTMLAttributes, useEffect, useImperativeHandle, useRef} from "react";

export default forwardRef(function TextAreaInput(
    {
        className = "",
        isFocused = false,
        ...props
    }: TextareaHTMLAttributes<HTMLTextAreaElement> & {
        isFocused?: boolean
    },
    ref
) {
    const localRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <textarea
            {...props}
            className={
                "w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-sky-500 dark:focus:border-sky-600 focus:ring-sky-500 dark:focus:ring-sky-600 rounded-md shadow-sm resize-none mt-1 " +
                className
            }
            ref={localRef}
            rows={4}
        />
    );
});
