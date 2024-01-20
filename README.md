# Multistep Form Project:Eloken Achraf Ait Mk

[![Status](https://img.shields.io/badge/Status-In%20Progress-blueviolet)]()
[![License](https://img.shields.io/badge/License-MIT-green)]()

Welcome to the repository of my Multistep Form project. This project is a testament to my passion for crafting seamless and engaging user experiences. Inspired by given Eloken Design, the project is built using Next.js, Tailwind CSS, and various technologies, showcasing my commitment to creating dynamic and user-friendly web applications.
## Table of Contents
- [About the Project](#about-the-project)
  - [Multistep Form](#multistep-form)
  - [Reusable Components](#reusable-components)
  - [Modal Implementation](#modal-implementation)
  - [Responsive Design](#responsive-design)
- [Technologies Used](#technologies-used)
- [How to Deploy Locally](#how-to-deploy-locally)
- [Screenshots](#screenshots)
- [Live Demo](#live-demo)


## About the Project

The Multistep Form project is an embodiment of my dedication to building forms that go beyond mere functionality. It provides users with a delightful journey through collecting information at each step, resulting in an aesthetically pleasing and informative final UI screen. The project underscores the importance of functionality, reusability, and creative styling in web application development.

## Key Features

### Multistep Form
- Effortless navigation forward and backward in the form, enabling users to collect information step by step.

### Reusable Components
- Utilization of reusable components to enhance maintainability and scalability, ensuring a robust and efficient codebase.

### Modal Implementation
- A seamlessly integrated modal accessible via the "Quit" option, providing users with a smooth and intuitive exit experience.

### Dynamic Data Usage
- Leveraging JSON data dynamically to filter products based on the user's supplied power in KWH, ensuring a personalized and efficient form-filling experience.

### Responsive Design
- Optional but implemented responsive design for an enhanced user experience across various devices, promoting accessibility for all users.

### Styling and Animations
- Creative styling, including a harmonious blend of colors, typography, and illustrations, elevating the visual appeal of the project. Thoughtful animations enhance the overall user experience.

## Technologies Used

The project leverages the following technologies:

- [![Next.js](https://img.shields.io/badge/Next.js-61DAFB?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
- [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
- [![Shadcn/ui](https://img.shields.io/badge/Shadcn/ui-0081CB?style=for-the-badge)](https://shadcn/ui)
- [![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
- [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)


## How to Deploy Locally

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/achrafaitmbarek/eloken-exo.git
   ```
2.Accédez au répertoire du projet :
  ```bash
   cd eloken-exo 
   ```
3.Installez les dépendances :
  ```bash
   npm install
```
4.Démarrez l'application :
  ```bash 
   npm run dev
```
## Screenshots

![Alt text](<screenshots/Screenshot 2024-01-10 at 5.38.05 AM.png>) 
![Alt text](<screenshots/Screenshot 2024-01-10 at 5.38.44 AM.png>) 
![Alt text](<screenshots/Screenshot 2024-01-10 at 5.39.50 AM.png>) 
![Alt text](<screenshots/Screenshot 2024-01-10 at 5.42.52 AM.png>) 
![Alt text](<screenshots/Screenshot 2024-01-10 at 5.43.08 AM.png>) 
![Alt text](<screenshots/Screenshot 2024-01-10 at 5.43.37 AM.png>) 
![Alt text](<screenshots/Screenshot 2024-01-10 at 5.43.53 AM.png>) 
![Alt text](<screenshots/Screenshot 2024-01-10 at 5.44.20 AM.png>)
## data 
```javascript
{
  "productsSuggestions": [
    {
      "title": "Pompe à chaleur 1",
      "powerRange": { "min": 1000, "max": 4999 },
      "price": 3456,
      "image": "path/to/img7",
      "pacType": "Air/Eau",
      "gasType": "R330",
      "warranty": 2,
      "isPacSystemModule": true
    },
    {
      "title": "Pompe à chaleur 2",
      "powerRange": { "min": 5000, "max": 10000 },
      "price": 5678,
      "image": "path/to/img8",
      "pacType": "Air/Air",
      "gasType": "R430",
      "warranty": 3,
      "isPacSystemModule": true
    },
    {
      "title": "Pompe à chaleur 3",
      "powerRange": { "min": 10000, "max": 15000 },
      "price": 7890,
      "image": "path/to/img7",
      "pacType": "Air/Eau",
      "gasType": "R380",
      "warranty": 4,
      "isPacSystemModule": true
    },
    {
      "title": "Pompe à chaleur 4",
      "powerRange": { "min": 15000, "max": 30000 },
      "price": 1234,
      "image": "path/to/img8",
      "pacType": "Air/Air",
      "gasType": "R380",
      "warranty": 5,
      "isPacSystemModule": true
    }
  ]
}
```
## Live Demo ?

Check out here : https://eloken-exo-alt.vercel.app/

Explore the project, and feel free to provide feedback or contribute to further enhance this multistep form experience. Thank you for visiting!

**Happy Form-Filling!**
**eloken Experience**

