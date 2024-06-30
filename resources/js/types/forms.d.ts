import {ChangeEvent} from "react";

export type TChangeElement<TForm> = ChangeEvent<HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement> & {
    target: {
        name: keyof TForm;
        value: TForm[keyof TForm];
        files?: File | string | undefined;
    }
}

export interface ISelectItem {
    name: string;
    value: string;
}

type TFileCreateForm = {
    name: string;
    file?: File | (File & string);
}
