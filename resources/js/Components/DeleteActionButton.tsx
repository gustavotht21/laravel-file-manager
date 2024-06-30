import React, {ReactElement, useState} from "react";
import Modal from "@/Components/Modal";
import {useForm} from "@inertiajs/react";
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import {TLink} from "@/types/routing";

export default function DeleteActionButton({
                                               href,
                                               message = "Delete",
                                               className = ""
                                           }: {
    href: TLink,
    message?: string | ReactElement,
    className?: string;
}) {
    const [confirmingComponentDeletion, setConfirmingComponentDeletion] = useState<boolean>(false);

    const confirmComponentDeletion = (): void => {
        setConfirmingComponentDeletion(true);
    };

    const {delete: destroy} = useForm();

    const closeDeleteModal = (): void => {
        setConfirmingComponentDeletion(false);
        destroy(route(...href));
    };

    const closeModal = (): void => {
        setConfirmingComponentDeletion(false);
    };
    return <div>
        <DangerButton
            onClick={confirmComponentDeletion}
            className={className}
        >
            {message}
        </DangerButton>
        <Modal
            show={confirmingComponentDeletion}
            onClose={() => setConfirmingComponentDeletion(false)}
        >
            <form className="p-6 relative flex flex-col justify-center items-center">
                <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Confirm delete
                </h1>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
                    Are you sure that want to delete this item?
                </p>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
                    This action cannot be undone.
                </p>
                <div className={"flex w-full justify-around mt-4"}>
                    <SecondaryButton
                        onClick={closeModal}
                    >
                        Cancel
                    </SecondaryButton>

                    <DangerButton
                        onClick={closeDeleteModal}
                    >
                        {message}
                    </DangerButton>
                </div>
            </form>
        </Modal>
    </div>;
}
