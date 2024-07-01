import React, {FormEvent, ReactElement, useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {PageProps} from "@/types";
import {Head, Link, useForm} from "@inertiajs/react";
import BreadChump from "@/Components/Breadcrumb";
import FormsLayout from "@/Layouts/FormsLayout";
import TextFormField from "@/Components/TextFormField";
import {TChangeElement, TFileCreateForm} from "@/types/forms";
import FileFormField from "@/Components/FileFormField";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "@/Components/PrimaryButton";
import SuccessfullyTransition from "@/Components/SuccessfullyTransition";

export default function FileCreate({auth}: PageProps): ReactElement {

    const {
        data,
        setData,
        errors,
        processing,
        recentlySuccessful,
        post,
        reset
    } = useForm<TFileCreateForm>({
        name: "",
        file: undefined
    });

    const onHandleChange = (e: TChangeElement<TFileCreateForm>): void => {
        setData(e.target.name, e.target.value);
    };

    const [fileName, setFileName]: [string, (value: (((prevState: string) => string) | string)) => void] = useState<string>("");

    const onHandleFileChange = (e: TChangeElement<TFileCreateForm>): void => {
        setFileName(e.target.files[0]?.name || "");
        setData(e.target.name, e.target.files[0]);
    };

    const submit = (e: FormEvent): void => {
        e.preventDefault();
        post(route("file.store"), {
            onSuccess: () => reset(),
        });
    };

    return <Authenticated user={auth.user}>
        <Head title="Add File"/>

        <BreadChump
            routes={[{
                name: "Add File",
                href: "file.create"
            }]}
        />

        <SuccessfullyTransition
            recentlySuccessful={recentlySuccessful}
            text={"File successful added"}
        />

        <FormsLayout onSubmit={submit}>
            <FormsLayout.Body type="linear">
                <TextFormField<TFileCreateForm>
                    field="name"
                    label="File name"
                    value={data.name}
                    errors={errors.name}
                    onHandleChange={onHandleChange}
                />

                <FileFormField<TFileCreateForm>
                    field="file"
                    fileName={fileName}
                    errors={errors.file}
                    onHandleChange={onHandleFileChange}
                />
            </FormsLayout.Body>

            <FormsLayout.Actions>
                <PrimaryButton disabled={processing}>
                    {processing
                     ? "Saving"
                     : "Save"}
                </PrimaryButton>

                <Link href={route("file.index")}>
                    <SecondaryButton>
                        Cancel
                    </SecondaryButton>
                </Link>
            </FormsLayout.Actions>
        </FormsLayout>
    </Authenticated>;
}
