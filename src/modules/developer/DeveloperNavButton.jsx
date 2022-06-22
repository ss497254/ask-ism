import { useRouter } from "next/router";

export const DeveloperNavButton = ({ title, icon, href }) => {
    const { push } = useRouter();

    return (
        <button
            className="flex text-primary-100 bg-primary-800 rounded-lg text-base font-bold items-center cursor-pointer md:hover:bg-primary-700"
            style={{
                width: 200,
                height: 40,
            }}
            onClick={() => push(href, href)}
        >
            <div className="mr-3 ml-4">{icon}</div>
            <div>{title}</div>
        </button>
    );
};
