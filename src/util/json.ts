import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

type Member = {
    name: {
        first: string;
        last: string;
    };
    grade: number;
    roles: string[];
    tidbit: string;
};

export function readMembers(): Member[] {
    const baseDirectory = process.cwd(); // Get the current working directory
    const directoryPath = path.join(baseDirectory, "public/team/members"); // Adjust the path accordingly

    const files = fs.readdirSync(directoryPath);

    const fileContentsList = [];

    for (const file of files) {
        const filePath = path.join(directoryPath, file);

        if (path.extname(filePath) === ".json") {
            try {
                const fileContent = fs.readFileSync(filePath, "utf8");
                const parsedContent = JSON.parse(fileContent);

                fileContentsList.push(parsedContent);
            } catch (error) {
                console.error(`Error reading file ${file}: ${error}`);
            }
        }
    }

    return fileContentsList;
}
