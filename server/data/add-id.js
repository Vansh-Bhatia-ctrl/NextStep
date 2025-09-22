const fs = require("fs");
const mongoose = require("mongoose");

// Function to process a JSON file and add IDs
function addIdsToFile(inputFilePath, outputFilePath) {
  try {
    console.log(`Processing ${inputFilePath}...`);

    // Read the JSON file
    const data = JSON.parse(fs.readFileSync(inputFilePath, "utf8"));

    // Generate consistent ObjectIds
    function generateObjectId() {
      return new mongoose.Types.ObjectId().toString();
    }

    // Process each entry in the array
    data.forEach((entry, entryIndex) => {
      console.log(`  Processing entry ${entryIndex + 1}...`);

      // Generate IDs for domains
      entry.domains.forEach((domain, domainIndex) => {
        domain._id = generateObjectId();
      });

      // Generate IDs for courses and link to domains
      entry.courses.forEach((course, courseIndex) => {
        course._id = generateObjectId();
        // Link to the first domain in this entry (assuming one domain per entry)
        if (entry.domains.length > 0) {
          course.domainId = entry.domains[0]._id;
        }
      });

      // Generate IDs for modules and link to courses
      entry.modules.forEach((module, moduleIndex) => {
        module._id = generateObjectId();
        // Link to the first course in this entry (assuming one course per entry)
        if (entry.courses.length > 0) {
          module.courseId = entry.courses[0]._id;
        }
      });

      // Generate IDs for lessons and link to modules
      const lessonIds = [];
      entry.lessons.forEach((lesson, lessonIndex) => {
        lesson._id = generateObjectId();
        lessonIds.push(lesson._id);
        // Link to the first module in this entry (assuming one module per entry)
        if (entry.modules.length > 0) {
          lesson.moduleId = entry.modules[0]._id;
        }
      });

      // Update modules with lesson IDs
      if (entry.modules.length > 0) {
        entry.modules[0].lessonIds = lessonIds;
      }

      // Generate IDs for learning contents and link to lessons
      entry.learningContents.forEach((content, contentIndex) => {
        content._id = generateObjectId();
        // Link to corresponding lesson by index
        if (entry.lessons[contentIndex]) {
          content.lessonId = entry.lessons[contentIndex]._id;
          entry.lessons[contentIndex].contentId = content._id;
        }
      });

      console.log(
        `    Entry ${entryIndex + 1} processed: ${
          entry.domains.length
        } domains, ${entry.courses.length} courses, ${
          entry.modules.length
        } modules, ${entry.lessons.length} lessons, ${
          entry.learningContents.length
        } contents`
      );
    });

    // Write the updated data to output file
    fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2));

    console.log(`✅ ${inputFilePath} processed successfully!`);
    console.log(`📁 Output saved to: ${outputFilePath}`);
    console.log(`📊 Summary for ${inputFilePath}:`);
    console.log(`  - Total entries processed: ${data.length}`);
    console.log(
      `  - Total domains: ${data.reduce(
        (sum, entry) => sum + entry.domains.length,
        0
      )}`
    );
    console.log(
      `  - Total courses: ${data.reduce(
        (sum, entry) => sum + entry.courses.length,
        0
      )}`
    );
    console.log(
      `  - Total modules: ${data.reduce(
        (sum, entry) => sum + entry.modules.length,
        0
      )}`
    );
    console.log(
      `  - Total lessons: ${data.reduce(
        (sum, entry) => sum + entry.lessons.length,
        0
      )}`
    );
    console.log(
      `  - Total learning contents: ${data.reduce(
        (sum, entry) => sum + entry.learningContents.length,
        0
      )}`
    );
    console.log("");

    return true;
  } catch (error) {
    console.error(`❌ Error processing ${inputFilePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log("🚀 Starting ID generation process...\n");

  // List of files to process
  const filesToProcess = [
    {
      input: "./web-dev-advacned-with-ids.json",
      output: "./web-dev-advanced-with-correct-ids.json",
    },
  
  ];

  let successCount = 0;
  let totalFiles = filesToProcess.length;

  // Process each file
  for (const file of filesToProcess) {
    // Check if input file exists
    if (!fs.existsSync(file.input)) {
      console.log(`⚠️  Skipping ${file.input} - file not found`);
      continue;
    }

    const success = addIdsToFile(file.input, file.output);
    if (success) {
      successCount++;
    }
  }

  // Final summary
  console.log("🎉 Process completed!");
  console.log(
    `📈 Successfully processed ${successCount} out of ${totalFiles} files`
  );

  if (successCount > 0) {
    console.log("\n📂 Output files created:");
    filesToProcess.forEach((file) => {
      if (fs.existsSync(file.output)) {
        console.log(`  - ${file.output}`);
      }
    });
  }
}

// Run the script
main().catch(console.error);
