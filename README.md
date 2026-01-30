
# Neo-Brutalist Sales Dashboard ⚡

![License](https://img.shields.io/badge/license-MIT-black?style=for-the-badge)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

> **"Bold, raw, and functional."** A high-performance sales dashboard built with modern web technologies and a distinct Neo-Brutalist aesthetic.

## 🚀 Overview

This project is a modern Sales Dashboard that breaks away from standard corporate designs. It leverages **Neo-Brutalism**—a design trend characterized by high contrast, bold typography, and raw layouts—to present data in a striking and readable format.

Beyond the visuals, this application integrates **Google Gemini AI** to provide real-time, context-aware insights based on the sales data displayed.

### ✨ Key Features

-   **🎨 Neo-Brutalist Design**: distinct high-contrast UI with bold borders and vibrant colors.
-   **🤖 AI-Powered Insights**: Integrated Google Gemini API to analyze sales trends on the fly.
-   **📊 Dynamic Data Visualization**: Interactive charts using `recharts`.
-   **⚡ High Performance**: Built on Vite + React 19 for instant updates and zero lag.
-   **📱 Fully Responsive**: Optimized for all screen sizes.

---

## 🛠️ Tech Stack

-   **Framework**: [React 19](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Charts**: [Recharts](https://recharts.org/)
-   **AI Integration**: [Google Generative AI SDK](https://ai.google.dev/)

---

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   Node.js (v20+ recommended)
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/neo-brutalist-sales-dashboard.git
    cd neo-brutalist-sales-dashboard
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env.local` file in the root directory and add your Google Gemini API key:
    ```env
    VITE_GEMINI_API_KEY=your_api_key_here
    ```
    > 🔑 *You can get an API key from [Google AI Studio](https://aistudio.google.com/).*

4.  **Run the development server**
    ```bash
    npm run dev
    ```

---

## 📂 Project Structure

```
neo-brutalist-sales-dashboard/
├── 📁 src/
│   ├── 📁 components/    # UI Components (Charts, Cards, Sidebar)
│   ├── 📁 services/      # API Services (Gemini AI integration)
│   ├── 📄 App.tsx        # Main application logic
│   ├── 📄 constants.ts   # Config constants (Colors, Data)
│   └── 📄 main.tsx       # Entry point
├── 📄 .env.local         # Environment variables (GitIgnored)
└── 📄 tailwind.config.js # Tailwind configuration
```

---

## 🎯 Learning Outcomes

This project demonstrates proficiency in:
-   Building complex UIs with **React 19** and **TypeScript**.
-   Implementing **Data Visualization** in a business context.
-   Integrating **Generative AI** APIs into frontend applications.
-   Applying advanced **CSS/Tailwind** for custom design systems.

---

<p align="center">
  Built with 🖤 by <a href="https://github.com/your-username">Bruno Fernandes</a>
</p>
