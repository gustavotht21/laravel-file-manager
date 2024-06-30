import {InputHTMLAttributes} from "react";
import {ArrowDownTrayIcon} from "@heroicons/react/24/solid";

export default function FileInput({
                                      fileName = "",
                                      ...props
                                  }: InputHTMLAttributes<HTMLInputElement> & { fileName: string },
) {
    return (
        <div className="w-full flex items-center justify-center">
            <label
                htmlFor={props.id}
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <ArrowDownTrayIcon className="w-12 h-12 text-gray-600 dark:text-gray-300 mb-2"/>
                    <p className="mb-2 text-md text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Clique para fazer upload</span> ou <span
                        className="font-semibold"
                    >arraste e solte um arquivo</span>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Tamanho máximo de arquivo: <span className="font-semibold">30.0 MB</span>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Arquivos suportados: .pdf
                    </p>
                </div>
                <input
                    className="hidden"
                    id={props.id}
                    type="file"
                    accept=".pdf"
                    {...props}/>
                {
                    fileName
                    ? <p className="text-md text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Arquivo selecionado:</span> {fileName}
                    </p>
                    : <p className="text-md text-gray-500 dark:text-gray-400">
                        Nenhum arquivo selecionado
                    </p>
                }
            </label>
        </div>
    );
};
