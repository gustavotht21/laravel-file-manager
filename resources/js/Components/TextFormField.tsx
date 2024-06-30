import React, {ReactElement} from "react";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import {TChangeElement} from "@/types/forms";

export default function TextFormField<TForm>({
                                                 field,
                                                 label,
                                                 value,
                                                 errors,
                                                 onHandleChange,
                                                 className = ""
                                             }: {
    field: string;
    label: string;
    onHandleChange: (e: TChangeElement<TForm>) => void;
    value: string | number;
    errors: string | undefined;
    className?: string;
}): ReactElement {
    return <div className={className}>
        <InputLabel
            htmlFor={field}
            value={label}
        />
        <TextInput
            type="text"
            id={field}
            name={field}
            autoComplete={field}
            onChange={onHandleChange}
            value={value}
        />
        <InputError
            message={errors}
            className="mt-2"
        />
    </div>;
}
