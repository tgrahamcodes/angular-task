# **Angular Task**

This is an Nx-powered Angular application designed for user management. It retrieves the user data from JSONPlaceholder, and then provides filtering capabilities, a search filter, and a favorite system.

## -- Features --
- **User Card Grid View**  Displays users dynamically fetched from an API.
- **Search & Filtering**  Users can be filtered using a search bar.
- **Favorites System**  Users can be marked as favorites and persist via NgRx store.
- **Profile Page**  Each user has a dedicated profile page.
- **State Management**  NgRx is used for handling favorite users.
- **Unit & E2E Testing**  Implemented using Jest and Playwright.
- **Tailwind CSS Styling**  Ensures a modern, responsive UI.

---

## -- Getting Started --

### **1. Install Dependencies**
Run the following command to install required packages:
```sh
npm install
```

### **2. Run the Application**
Start the application locally using (from the root dir):
```sh
npx nx run angular-task:serve
```

### **3. Run Unit Tests**
To run unit tests using **Jest**:
```sh
npx nx run angular-task:test
```

### **4. Run End-to-End (E2E) Tests**
To execute **Playwright E2E tests**:
```sh
npx nx run angular-task-e2e:e2e
```

---

## ** Project Structure**
```
angular-task/
│── apps/
│   ├── angular-task/          # Main Angular application
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── pages/     # Newly added Components for Home & User Profile
│   │   │   │   ├── services/  # API services & user data fetching
│   │   │   │   ├── store/     # NgRx store for favorites
│   │   │   ├── assets/
│   │   │   ├── environments/
│   │   ├── project.json       # Nx project configuration
│   ├── angular-task-e2e/      # End-to-end tests
│── libs/                      # Nx workspace libraries (if needed)
│── nx.json                    # Nx workspace settings
│── package.json               # Dependencies & scripts
│── README.md                   # Documentation
│── tsconfig.base.json          # TypeScript base configuration
│── tsconfig.spec.json          # Test-specific TypeScript configuration
```

---

## **Configuration**
This project is built with:
- **Nx**  For workspace & project management.
- **Angular**  For frontend UI development.
- **NgRx**  For state management (favorites feature).
- **Jest**  For unit testing.
- **Playwright**  For end-to-end (E2E) testing.
- **Tailwind CSS**  For responsive and modern UI design.
