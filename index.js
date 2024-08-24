const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program.argument("<file>", "file path").action((file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      process.exit(1);
    }

    const wordCount = data.trim().split(/\s+/).length;
    console.log(`You have ${wordCount} words in this file`);
  });
});

program.parse(process.argv);
