# Job Portal Application

A job portal application built with React.js and Spring Boot. The platform allows users to browse available jobs, view detailed information about each job, and apply for positions by submitting their basic details through a form.

## Features

- **Landing Page**: An initial page with an "Apply" button that redirects users to the job listings page.
- **Job Listings**: Displays available job listings pulled from a connected database.
- **Job Details**: Displays detailed information about a job when clicked.
- **Application Form**: Users can apply for a job by filling out a form with their basic details, which are stored in a separate database table.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Spring Boot
- **Database**: PostgreSQL (or any database configured in the Spring Boot application)

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (for React.js frontend)
- **Java 17** (for Spring Boot backend)
- **Maven** (for Spring Boot project)
- **PostgreSQL** (or any other compatible database)

### Setup

#### 1. Clone the repository:

```bash
git clone https://github.com/your-username/job-portal.git
cd job-portal
```
#### 2. Configure Database:
The job_portal_backend folder has the code related to backend. All works perfect except for the fact that i have left the credentials empty to be filled by you. Hence create a database in postgresql (as postgresql driver is used) and then fill in the credentials like url, username and password. No need for table creation as it will be handled by Spring-JPA.
```bash
spring.datasource.url=jdbc:postgresql://localhost:5432/your_database_name
spring.datasource.username=your_username
spring.datasource.password=your_password
```
#### 3.Run the Backend (Spring Boot):
Use Either Eclipse or IntelliJ IDEA CE or any preferred IDE for running the backend prior to running the frontend

#### 4.Manually import the CSV data:
After running the backend program, Go and check the database. You will notice two tables been created namely,
- **jobcarddata**
- **jobfillformdata**
  
Manually insert the data from **Job_Card_Details.CSV** into the **jobcarddata** (One time process). This will ensure that you have job data readily available for the display.

#### 5.Run the Frontend (Spring Boot):
To start the frontend application:
```bash
cd jobPortal
npm install
npm run dev
```
### How it Works?
- **Landing Page:** Users land on the homepage and click the "Apply" button.
- **Job Listings:** After clicking "Apply", users are redirected to a page where they can see available jobs fetched from the database.
- **Job Details:** Clicking on a job opens a page with more details about that job.
- **Application Form:** Once the user clicks "Apply" on a job details page, they are taken to a form where they can enter their basic details (name, email, etc.). Upon submission, their data is stored in the database.

## Contributing
1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature-branch
   ```
3. **Commit your changes**:
   ```bash
   git commit -am 'Add new feature'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature-branch
   ```
5. **Create a new Pull Request.**



## License

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

This project is licensed under the [MIT License](LICENSE).



