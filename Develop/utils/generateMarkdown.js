// TODO: Create a function that returns a license badge based on which license is passed insection of README
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "The Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache License 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "The Unlicense":
      return "http://unlicense.org/";
    case "MIT License":
      return "https://opensource.org/licenses/MIT";
    case "GNU General Public License v3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "Mozilla Public License 2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseBadge(license)}(${renderLicenseLink(license)})`;
  }else{
    return;
  }
   
}

function licenseDisplay(license) {
  if (license) {
    return `Licensed under [${license}](${renderLicenseLink(license)})`;
  } else {
    return "No license";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseSection(data.license)}

  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing Guidelines](#contributing-guidelines)
  4. [Tests](#tests)
  5. [License](#license)
  6. [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing Guidelines
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ${licenseDisplay(data.license)}

  ## Questions
  For any questions, contact me at:
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}
  `;
}

module.exports = generateMarkdown;