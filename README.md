# Candidate Application Platform

## Description
This is a web application for browsing job listings. Users can filter jobs based on various criteria such as experience, company name, location, remote availability, job role, and minimum base pay.

This is a part of the frontend developer assignment for Weekday.

## Features

 **Job Filtering**: Users can filter jobs based on their preferences using various filter options provided.
- **Infinite Scrolling**: Improve user experience by implementing lazy loading of jobs as the user scrolls, minimizing initial loading times.
- **Responsive Design**: The web app is responsive and works well on both desktop and mobile devices.
- **Easy Apply**: Users can easily apply to job listings directly from the application.
- **Dynamic Sidebar**: The sidebar width adjusts dynamically based on user interaction for better usability.


## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Material-UI**: React UI framework for designing the components with a consistent look and feel.
- **Redux**: State management library for managing application state and data flow.
- **Lodash**: Utility library used for debouncing scroll events for performance optimization.
- **CSS**: For Styling purposes


## Folder Structure


```

|-- frontend
|   |-- node_modules
|   |-- README.md
|   |-- public
|   |-- .gitignore
|   |-- package-lock.json
|   |-- package.json
|   |-- src
|   |   |-- designs
|   |   |   |-- Buttons
|   |   |   |   |-- Apply.js
|   |   |-- constants
|   |   |   |-- assets.js
|   |   |-- index.js
|   |   |-- utils
|   |   |   |-- features
|   |   |   |   |-- jobs
|   |   |   |   |   |-- jobSlice.js
|   |   |   |-- hooks
|   |   |   |   |-- useSalaryEstimation.js
|   |   |   |   |-- useJobListing.js
|   |   |   |-- api.js
|   |   |   |-- appStore.js
|   |   |-- index.css
|   |   |-- components
|   |   |   |-- ShimmerJobCard.js
|   |   |   |-- JobListing.js
|   |   |   |-- JobCard.js
|   |   |   |-- SideNav.js
|   |   |   |-- Filters.js
|   |   |-- App.js

```


## Installation Guide


### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/highonranking/job-search-portal.git
```
2. Navigate to the repository

```
cd job-search-portal
```

3. Install dependencies

```
npm install
```

### Usage

1. Start the development server

```
npm start

```

2. Open your browser and go to http://localhost:3000 to view the application.


## Acknowledgements

- The data used in this project is retrieved from [API endpoint](https://api.weekday.technology/)
- This project was developed as part of an assignment for Weekday.
- Special thanks to [Material-UI](https://mui.com/) for providing the UI components used in this project.

