// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license ==='MIT'){
        return '![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)'
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// N/A

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// N/A

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  - ${data.why}
  - ${data.problem}
  - ${data.learn}
  ## Table of Contents
  - [license](#license)
  - [features](#features)
  - [credits](#credits)
  - [questions](#questions)

  ## License
  - ${renderLicense(data.lisense)}
  go to [https://choosealicense.com/](https://choosealicense.com/).

  ## features
  - ${data.features}

  ## credits
  - ${data.contributors}
  - ${data.thirdparty}

  ## questions
  if you have any questions contact me at ${data.email}.

`;
}

module.exports = generateMarkdown;