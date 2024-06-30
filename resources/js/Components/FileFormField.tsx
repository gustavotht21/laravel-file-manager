import React, {ReactElement} from "react";
import InputError from "@/Components/InputError";
import {TChangeElement} from "@/types/forms";
import FileInput from "@/Components/FileInput";

export default function FileFormField<TForm>({
                                                 field,
                                                 fileName,
                                                 errors,
                                                 onHandleChange,
                                                 className = ""
                                             }: {
    field: string;
    onHandleChange: (e: TChangeElement<TForm>) => void;
    fileName: string;
    errors: string | undefined;
    className?: string;
}): ReactElement {

    field = field.toLowerCase();

    return <div className={className}>
        <FileInput
            id={field}
            name={field}
            fileName={fileName}
            onChange={onHandleChange}
        />
        <InputError
            message={errors}
            className="mt-2"
        />
    </div>;
}
