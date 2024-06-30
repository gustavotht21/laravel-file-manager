import {
    AdjustmentsHorizontalIcon,
    BoltIcon,
    ComputerDesktopIcon,
    DevicePhoneMobileIcon,
    MagnifyingGlassIcon,
    ShieldCheckIcon
} from "@heroicons/react/16/solid";
import React, {ReactElement, SVGAttributes} from "react";
import {DocumentTextIcon} from "@heroicons/react/24/solid";

export const features: {
    name: string;
    description: string;
    icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGAttributes<SVGSVGElement>> & {
        title?: string,
        titleId?: string
    } & React.RefAttributes<SVGSVGElement>>;
}[] = [
    {
        name       : "Administração da fiscalização",
        description: "Cadastre, atualize ou remova permissionários, empresas e suas frotas de ônibus",
        icon       : AdjustmentsHorizontalIcon,
    },
    {
        name       : "Busca eficiente",
        description: "Busque e filtre instantaneamente qualquer coisa dentro do sistema.",
        icon       : MagnifyingGlassIcon,
    },
    {
        name       : "Acesse de qualquer lugar",
        description: "Acesse, busque e administre de qualquer lugar, basta ter acesso à internet.",
        icon       : DevicePhoneMobileIcon,
    },
    {
        name       : "Segurança e confiabilidade",
        description: "Construído visando a sua segurança e a proteção dos seus dados com recursos de ponta.",
        icon       : ShieldCheckIcon,
    },
    {
        name       : "Interface aprimorada",
        description: "Construído para ser simples e amigável, porém robusto, garantindo o máximo de proveito das ferramentas do sistema",
        icon       : ComputerDesktopIcon,
    },
    {
        name       : "Acesso rápido",
        description: "Visualize, crie e gerencie rapidamente qualquer coisa. O sistema é otimizado para acessar qualquer funcionalidade rapidamente.",
        icon       : BoltIcon,
    },
];
export const blogPosts: {
    date: string;
    preview: string;
    datetime: string;
    author: { imageUrl: string; name: string; href: string };
    imageUrl: string;
    id: number;
    href: string;
    title: string;
    category: { name: string; href: string };
    readingLength: string
}[] = [
    {
        id           : 1,
        title        : "Aprenda a usar o sistema",
        href         : "#",
        date         : "06 de junho de 2024",
        datetime     : "2020-03-16",
        category     : {name: "Artigo", href: "#"},
        imageUrl     :
            "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
        preview      :
            "Um rápido guia para você entender as bases do sistema e começar a trabalhar.",
        author       : {
            name    : "Gustavo Borges",
            imageUrl:
                "https://github.com/gustavotht21.png",
            href    : "#",
        },
        readingLength: "10 min",
    },
];
export const footerNavigation: {
        solutions: { name: string; href: string }[];
        support: { name: string; href: string }[];
        company: { name: string; href: string }[];
        legal: { name: string; href: string }[];
        social: { name: string; href: string; icon: (props: SVGAttributes<SVGElement>) => ReactElement }[];
    } = {
        solutions: [
            {name: "ProSchedule", href: "https://proschedule.devborges.tech/"},
            {name: "Sistema Certificados", href: "https://sistemacertificados.devborges.tech/"},
            {name: "Sistema Engenharia", href: "https://sistemaengenharia.devborges.tech/"},
            // {name: "Insights", href: "#"},
        ],
        support  : [
            // {name: "Pricing", href: "#"},
            // {name: "Documentation", href: "#"},
            {name: "Guias", href: "#"},
            // {name: "API Status", href: "#"},
        ],
        company  : [
            {name: "Contato", href: "mailto:contato@sistemapermissionarios.devborges.tech"},
            // {name: "Blog", href: "#"},
            // {name: "Jobs", href: "#"},
            // {name: "Press", href: "#"},
            // {name: "Partners", href: "#"},
        ],
        legal    : [
            {name: "Política de privacidade", href: "#"},
            {name: "Termos de uso", href: "#"},
        ],
        social   : [
            {
                name: "Instagram",
                href: "https://www.instagram.com/borges_gustavo21/",
                icon: (props: SVGAttributes<SVGElement>) => (
                    <svg
                        fill="currentColor"
                        viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                name: "GitHub",
                href: "https://github.com/gustavotht21",
                icon: (props: SVGAttributes<SVGElement>) => (
                    <svg
                        fill="currentColor"
                        viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/gustavocasagrandeborges/",
                icon: (props: SVGAttributes<SVGElement>) => (
                    <svg
                        fill="currentColor"
                        viewBox="0 0 56.693 56.693" {...props}>
                        <g>
                            <path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z"/>
                            <path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z"/>
                        </g>
                    </svg>
                ),
            },
            {
                name: "Currículo Lattes",
                href: "http://lattes.cnpq.br/6302055568388302",
                icon: (props: SVGAttributes<SVGElement>) => (
                    <DocumentTextIcon className="fill-current" {...props}/>
                ),
            },
        ],
    }
;
