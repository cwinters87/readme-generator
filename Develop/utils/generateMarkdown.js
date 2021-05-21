// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   let badge;
//   switch(license) {
//     case "Apache 2.0":
//       badge = "[![badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
//       break;
//     case "Boost Software 1.0":
//       badge = "[![badge](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
//       break;
//     case "Eclipse Public 1.0":
//       badge = "[![badge](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
//       break;
//     case "MIT":
//       badge = "[![badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//       break;
//     case "Mozilla 2.0":
//       badge = "[![badge](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
//       break;
//     case "None":
//       badge = "";
//       break;
//   }
//   return badge
// }

function renderLicenseBadge(choice) {
  let badge = {
    'Apache 2.0': function () {
      return '[![badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    },
    'Boost Software 1.0': function () {
      return '[![badge](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    },
    'Eclipse Public 1.0': function () {
      return '[![badge](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    },
    'MIT': function () {
      return '[![badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    },
    'Mozilla 2.0': function () {
      return '[![badge](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    },
    'None': function () {
      return '';}    
  };
  return badge[choice]();
}

// let's call it
    // var drink = getDrink('coke');
    // console.log(drink); // 'Coke'







    

// Please see below!!!:
//I have the badges themselves link to the license. I built it into the function above - Chris Winters
    // TODO: Create a function that returns the license link
    // If there is no license, return an empty string
    //function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   let section;
//   switch(license) {
//     case "Apache 2.0":
//       section = `## License
// [![badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) <br /> This application is covered by the ${license} license.`;
//       break;
//     case "Boost Software 1.0":
//       section = `## License
// [![badge](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt) <br /> This application is covered by the ${license} license.`;
//       break;
//     case "Eclipse Public 1.0":
//       section = `## License
// [![badge](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0) <br /> This application is covered by the ${license} license.`;
//       break;
//     case "MIT":
//       section = `## License
// [![badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <br /> This application is covered by the ${license} license.`;
//       break;
//     case "Mozilla 2.0":
//       section = `## License
// [![badge](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0) <br /> This application is covered by the ${license} license.`;
//       break;
//     case "None":
//       section = "";
//       break;
//   }
//   return section
// }

function renderLicenseSection(choice) {
  let section = {
    'Apache 2.0': function () {
      return `## License
[![badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) <br /> This application is covered by the ${choice} license.`;
    },
    'Boost Software 1.0': function () {
      return `## License
[![badge](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt) <br /> This application is covered by the ${choice} license.`;
    },
    'Eclipse Public 1.0': function () {
      return `## License 
[![badge](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0) <br /> This application is covered by the ${choice} license.`;
    },
    'MIT': function () {
      return `## License
[![badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <br /> This application is covered by the ${choice} license.`;
    },
    'Mozilla 2.0': function () {
      return `## License
[![badge](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0) <br /> This application is covered by the ${choice} license.`;
    },
    'None': function () {
      return '';
    }    
  };
  return section[choice]();
}






// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${data.title}</h1>
  
${renderLicenseBadge(data.license)}<br />
## Description
${data.description}
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
${renderLicenseSection(data.license)}
## Contributing
👪 ${data.contributing}
## Tests
✏️ ${data.test}
## Questions
🙋‍♂️ Email or reach me on my GitHub <br />
<br />
:octocat: Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
<br />
✉️ Email me with any questions: ${data.email}<br /><br />
🌟This README was generated by ${data.contributing} using the [readme-generator](https://github.com/cwinters87/readme-generator)
`;
}

module.exports = generateMarkdown;
