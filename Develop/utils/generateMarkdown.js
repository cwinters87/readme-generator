// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  switch(license) {
    case "Apache 2.0":
      badge = "![badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      break;
    case "Boost Software 1.0":
      badge = "![badge](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
      break;
    case "Eclipse Public 1.0":
      badge = "[![badge](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "MIT":
      badge = "![badge](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "Mozilla 2.0":
      badge = "![badge](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
      break;
    case "None":
      badge = "";
      break;
  }
  return badge
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${data.title}</h1>
  
${renderLicenseBadge(data.license)}<br />
## Description
🔍 ${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
💾 ${data.installation}
## Usage
💻 ${data.usage}
## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br />
This application is covered by the ${data.license} license. 
## Contributing
👪 ${data.contributing}
## Tests
✏️ ${data.test}
## Questions
✋ ${data.questions}<br />
<br />
:octocat: Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
<br />
✉️ Email me with any questions: ${data.email}<br /><br />
_This README was generated with ❤️ by [README-generator](https://github.com/cwinters87/readme-generator)
`;
}

module.exports = generateMarkdown;
