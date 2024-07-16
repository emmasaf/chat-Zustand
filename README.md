# Project Title: Chat Application with Chatbot Elements

## Overview

This project is a chat application with chatbot elements, built using modern web development technologies. The application does not have a backend and leverages various libraries and frameworks to provide a robust and efficient user experience.

## Technologies Used

- **Zustand**: State management library for React.
- **React**: For building server-side rendering and static web applications.
- **Dayjs**: Library for manipulating and formatting dates.
- **Ant Design Icons**: Icon library from Ant Design.
- **Ant Design**: UI component library for building user interfaces.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js
- Yarn package manager

### Installation

1. Clone the repository to your local machine:
    ```sh
    git clone repo-name
    ```

2. Navigate to the project directory:
    ```sh
    cd repo-name
    ```

3. Install the dependencies using Yarn:
    ```sh
    yarn install
    ```

### Running the Project

To start the development server, run the following command:

```sh
yarn run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

```css
├── public
│   └── images
├── src
│   ├── widgets
│   ├── pages
│   ├── shared
│   ├── features
│   ├── App.css
│   ├── main.jsx
│   └── App.jsx
```

## Usage

### State Management

State management is handled using **Zustand**. The store configuration can be found in the `shared/zustand/store` directory. This allows for efficient and easy-to-use state management across the application.

### Date Handling

**Dayjs** is used for all date-related functionalities. It provides an easy API for formatting, parsing, and manipulating dates.

### Icons and UI Components

The project uses **Ant Design Icons** for consistent and scalable icons, and **Ant Design** for UI components, ensuring a clean and professional user interface.

