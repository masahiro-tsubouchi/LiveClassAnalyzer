# Live Class Analyzer

A React-based web application for analyzing student engagement in virtual classrooms. This application includes:

- Video conferencing using LiveKit
- Analytics panel with screen match scoring
- Student status tracking

## Project Structure

The application consists of:

- Video Room component for live streaming
- Analytics Panel for visualizing match scores
- Student Status List for monitoring student activity
- Instructor Dashboard page that integrates all components

## Running with Docker Compose

This project is configured to run in a Docker container for easy setup and consistent environments.

### Prerequisites

- Docker installed on your machine
- Docker Compose (included in Docker Desktop)

### Running the Application

1. Navigate to the project directory:
   ```
   cd /Users/tsubouchi/windsurf/LiveClassAnalyzer
   ```

2. Build and start the application with Docker Compose:
   ```
   docker compose up --build
   ```

3. Access the application in your browser at:
   ```
   http://localhost:3000
   ```

The application will be running in development mode, with hot-reloading enabled for changes to the source code.

## Development Notes

- The LiveKit components are used for video conferencing
- The Tremor library provides chart components for analytics
- Ant Design is used for UI components like the layout and menu

If you need to modify the Docker configuration:
- `Dockerfile` contains the container setup
- `docker-compose.yml` defines the service configuration
