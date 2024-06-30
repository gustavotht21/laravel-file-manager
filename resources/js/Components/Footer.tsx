import {footerNavigation} from "@/Helpers/WelcomeLayout/Data";
import React, {ReactElement, SVGAttributes} from "react";

export default function Footer(): ReactElement {
    return <footer
        className="bg-gray-50 dark:bg-gray-950"
        aria-labelledby="footer-heading"
    >
        <h2
            id="footer-heading"
            className="sr-only"
        >
            Footer
        </h2>
        <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                <div className="space-y-8 xl:col-span-1">
                    <img
                        className="h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg"
                        alt="Company name"
                    />
                    <p className="text-gray-500 dark:text-gray-400 text-base">
                        Fazendo do mundo um lugar melhor com soluções tecnológicas.
                    </p>
                    <div className="flex space-x-6">
                        {footerNavigation.social.map((item: {
                            name: string;
                            href: string;
                            icon: (props: SVGAttributes<SVGElement>) => ReactElement
                        }) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
                            >
                                <span className="sr-only">{item.name}</span>
                                <item.icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 tracking-wider uppercase">Soluções</h3>
                            <ul
                                role="list"
                                className="mt-4 space-y-4"
                            >
                                {footerNavigation.solutions.map((item: { name: string; href: string }) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 tracking-wider uppercase">Suporte</h3>
                            <ul
                                role="list"
                                className="mt-4 space-y-4"
                            >
                                {footerNavigation.support.map((item: { name: string; href: string }) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 tracking-wider uppercase">Empresa</h3>
                            <ul
                                role="list"
                                className="mt-4 space-y-4"
                            >
                                {footerNavigation.company.map((item: { name: string; href: string }) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 tracking-wider uppercase">Legal</h3>
                            <ul
                                role="list"
                                className="mt-4 space-y-4"
                            >
                                {footerNavigation.legal.map((item: { name: string; href: string }) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                                            target="_blank"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-200 dark:border-gray-700 py-8">
                <p className="text-base text-gray-400 dark:text-gray-300 xl:text-center">
                    &copy; {new Date().getFullYear()} Gustavo Casagrande Borges. Todos os direitos reservados.
                </p>
            </div>
        </div>
    </footer>;
}
