# Data Manager Integration Guide

This guide details the architectural changes and modifications made to the DevPortfolio project to decouple hardcoded data from the React frontend, centralizing it into a Python-based data management system.

## 🎯 Overview
The primary goal of this update was to establish a single source of truth for all the portfolio's content (text, links, projects, skills). This was achieved by introducing an Object-Oriented Programming (OOP) Python script utilizing **Pydantic** for type safety and data integrity.

## 🏗️ New Architecture

A new directory named `data_manager` was created at the root of the project to house the backend logic for data management.

### 1. The Data Source (`data_manager/data.py`)
This file serves as the strict schema definition and the data repository.
*   **Pydantic Models**: We defined strict data schemas such as `HeroData`, `AboutData`, `Project`, and `ExperienceItem`. This ensures that all data adheres to the correct types (e.g., ensuring `github` is a string, and `level` is an integer).
*   **Instantiation**: The file initializes a `PortfolioData` object named `portfolio_data` that holds the entirety of the portfolio's content.

### 2. The OOP Manager (`data_manager/manager.py`)
This script acts as the bridge between the Python data and the React frontend.
*   **PortfolioManager Class**: An object-oriented class responsible for taking the Pydantic data instance and exporting it.
*   **JSON Serialization**: It safely converts the Python data into a JSON string and writes it directly to `src/data/portfolio.json` within the React app.

---

## 🔄 React Component Changes

To consume the newly generated `src/data/portfolio.json`, several React components were refactored. 

### 1. The Main Shell (`App.jsx`)
*   **Data Import**: Imports the centralized JSON file: `import portfolioData from './data/portfolio.json';`
*   **Prop Drilling**: Passes the relevant slices of data down to each child component (e.g., `<Hero data={portfolioData.hero} />`).
*   **Footer Data**: Replaced hardcoded name, bio, and social links in the footer with references to `portfolioData.hero`.

### 2. Section Components
Every section component was modified to accept a `data` prop and map over it, rather than utilizing hardcoded arrays or text:

*   **`Hero.jsx`**: Replaced static titles, bio, and resume download link with `data.name`, `data.bio`, and `data.resume_link`.
*   **`About.jsx`**: Replaced the static highlight cards. Implemented dynamic icon rendering by importing `* as Icons from "lucide-react"` and resolving the icon component from the string name provided in the JSON (`Icons[item.icon_name]`).
*   **`Skills.jsx`**: Mapped over `data.categories` to generate the skill progress bars and utilized dynamic icon rendering for the category and key strength icons.
*   **`Projects.jsx`**: Removed the hardcoded `projects` array. The component now filters and renders projects based on the `data` prop, passing the dynamic github and live links to the buttons.
*   **`Experience.jsx`**: Refactored to map over `data.work`, `data.education`, and `data.certifications` arrays.
*   **`Contact.jsx`**: Replaced hardcoded contact details (email, phone, location) with values from `data`. Also updated the resume download button to use `hero.resume_link`.

---

## 🛠️ How to Update Your Portfolio Data

Updating your portfolio is now a streamlined, developer-friendly process.

1. **Modify the Data:**
   Open `data_manager/data.py` and locate the `portfolio_data` object at the bottom of the file. Make your text edits, add new projects, or update your skills directly in this Python file.
2. **Generate the JSON:**
   Open your terminal and run the manager script:
   ```bash
   python data_manager/manager.py
   ```
3. **View Changes:**
   The script will automatically update `src/data/portfolio.json`. If your Vite development server (`npm run dev`) is running, the browser will instantly hot-reload with your new data!
