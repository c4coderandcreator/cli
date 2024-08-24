#!/usr/bin/env node

const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

// Set up the CLI tool
program.argument("<file>", "file path").action((file) => {
  // Read the file content
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      process.exit(1);
    }

    // Count the number of words
    const wordCount = data.trim().split(/\s+/).length;
    console.log(`You have ${wordCount} words in this file`);
  });
});

// Parse the command-line arguments
program.parse(process.argv);
