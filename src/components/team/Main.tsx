import { type Member } from "../../util/json.ts";
import Card from "./Card.tsx";
import { useState } from "react";
import Tag from "./Tag.tsx";

export default function Main(props: { members: Member[] }) {
    let [members, setMembers] = useState(props.members);

    return (
        <main>
            <div className="mr-4">
                <ul className="grid grid-flow-col gap-4 justify-end">
                    <Tag>Hei</Tag>
                </ul>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mx-4 my-4 mt-16">
                {members.map((member) => (
                    <Card
                        name={member.name.first + " " + member.name.last}
                        grade={member.grade}
                        roles={member.roles}
                        image={member.image}
                    >
                        {member.tidbit}
                    </Card>
                ))}
            </div>
        </main>
    );
}
