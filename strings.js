document.getElementById("calculate").addEventListener("click", () => {
    const string1 = document.getElementById("string1").value;
    const string2 = document.getElementById("string2").value;
    const string3 = document.getElementById("string3").value;

    const strings = [string1, string2, string3];
    const operations = [
        { name: "length", func: (str) => str.length },
        { name: "slice", func: (str) => str.slice(0, 3) },
        { name: "substring", func: (str) => str.substring(1, 4) },
        { name: "substr", func: (str) => str.substr(1, 3) },
        { name: "replace", func: (str) => str.replace(/a/g, "@") },
        { name: "replaceAll", func: (str) => str.replaceAll("e", "3") },
        { name: "toUpperCase", func: (str) => str.toUpperCase() },
        { name: "toLowerCase", func: (str) => str.toLowerCase() },
        { name: "concat", func: (str) => str.concat(" - example") },
    ];

    let resultText = "";

    strings.forEach((str, index) => {
        if (str.trim() === "") return; // Skip empty strings
        const operation = operations[Math.floor(Math.random() * operations.length)];
        const result = operation.func(str);
        resultText += `String ${index + 1}: "${str}" --> Operation: ${operation.name} --> Result: "${result}"\n`;
    });

    document.getElementById("resultBox").value = resultText || "No strings provided!";
});

document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("string1").value = "";
    document.getElementById("string2").value = "";
    document.getElementById("string3").value = "";
    document.getElementById("resultBox").value = "";
});
