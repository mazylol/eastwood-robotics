import type { PropsWithChildren } from "react";

function toggle(toggled: boolean): string {
    if (!toggled) {
        return "bg-red-500"
    } else {
        return ""
    }
}

export default function Tag(props: {children: PropsWithChildren<string>;}) {
    let toggled = false;

    return (
        <button id="tag" className="px-2 py-1 rounded-md" onClick={() => {
            if (!toggled) {
                console.log("hi");
                document.getElementById("#tag")?.classList.add("bg-red-500");
            }
        }}>{props.children}</button>
    )
}