import { type Member } from "../../util/json.ts";
import Card from "./Card.tsx";
import { useState } from "react";

export default function Main(props: { members: Member[] }) {
    let [members, setMembers] = useState(props.members);

    return (
        <main>
            <h1 className="text-center mt-16 text-6xl font-bold">The Team</h1>
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
