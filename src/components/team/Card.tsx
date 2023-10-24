import type { PropsWithChildren } from "react";

function roleToColor(role: string) {
    switch (role) {
        case "Programming":
            return "bg-yellow-500";
        case "Website":
            return "bg-purple-500";
        case "Construction":
            return "bg-blue-500";
        case "Marketing":
            return "bg-green-500";
        case "Video":
            return "bg-red-500";
        case "Engineering Notebook":
            return "bg-cyan-500";
        case "Driving":
            return "bg-gray-500";
    }
}

export default function Card(props: {
    name: string;
    grade: number;
    roles: string[];
    image: string;
    children: PropsWithChildren<string>;
}) {
    return (
        <div className="bg-gray-300 rounded-lg shadow-lg">
            <img
                src={props.image}
                alt={props.name}
                className="mx-auto rounded-t-lg"
            />
            <div className="p-4">
                <h2 className="text-2xl font-bold text-center">
                    {props.name}
                    <span className="ml-4 bg-primary p-1 rounded-md text-gray-200">
                        {props.grade}th
                    </span>
                </h2>
                <ul className="sm:text-sm md:text-md lg:text-lg font-semibold flex-wrap flex flex-row text-gray-300 mt-4 justify-center">
                    {props.roles.map((role, key) => {
                        return (
                            <li
                                className={`py-1 px-2 mx-1 my-1 text-xs rounded-md ${roleToColor(
                                    role,
                                )}`}
                                key={key}
                            >
                                {role}
                            </li>
                        );
                    })}
                </ul>
                <hr className="my-4 border-b-2 border-gray-500" />
                <p className="text-gray-700">{props.children}</p>
            </div>
        </div>
    );
}
