const fs = require("fs");

fs.readFile("file.txt", "utf-8", function (err, data) {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    const lines = data.split("\n");
    let outputLines = [];

    for (const line of lines) {
        const parts = line.split(";");
        let modifiedLine = "";

        if (parts.length < 9 || parts[7].trim() !== "") {
            if (parts.length === 7) {
                parts[6] = parts[6] + ";;" + parts[6] + "." + parts[0];
            } else if (parts.length === 8) {
                parts[7] = parts[7] + ";" + parts[7] + "." + parts[0];
            }
        }

        let aux = parts[0];
        parts[0] = parts[0] + "Ped";
        modifiedLine = parts.join(";");
        modifiedLine += ";;;;;;;;;;;;;;" + aux;
        

        outputLines.push(modifiedLine);
    }

    const outputText = outputLines.join("\n");

    fs.writeFile("output.txt", outputText, "utf-8", (err) => {
        if (err) {
            console.error("Error writing file:", err);
        } else {
            console.log("File written successfully!");
        }
    });
});