export const menuItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Electrical Services",
    path: "/electrical-services",
    children: [
      {
        label: "EICR Electrical Certificate",
        path: "/eicr-electrical-certificate",
      },
      {
        label: "PAT Testing",
        path: "/pat-testing",
      },
    ],
  },
  {
    label: "Gas Services",
    path: "/gas-services",
    children: [
      {
        label: "Boiler Installation",
        path: "/boiler-installation",
      },
      {
        label: "Boiler Services",
        path: "/boiler-services",
      },
      {
        label: "Gas Safety Check",
        path: "/gas-safety-check",
      },
    ],
  },
  {
    label: "Fire Services",
    path: "/fire-services",
    children: [
      {
        label: "Emergency Lighting Certificate",
        path: "/emergency-lighting-certificate",
      },
      {
        label: "Fire Risk Assessment",
        path: "/fire-risk-assessment",
      },
      {
        label: "Fire Alarm Certificate",
        path: "/fire-alarm-certificate",
      },
      {
        label: "Fire Extinguisher Services",
        path: "/fire-extinguisher-services",
      },
      {
        label: "Fire Door Survey",
        path: "/fire-door-survey",
      },
    ],
  },
  {
    label: "Health & Safety",
    path: "/health-and-safety",
    children: [
      {
        label: "Energy Performance Certificate",
        path: "/energy-performance-certificate",
      },
      {
        label: "Asbestos Surveys",
        path: "/asbestos-surveys",
      },
    ],
  },
  {
    label: "Book Services",
    path: "/book-service",
  },
  {
    label: "Contact",
    path: "/contact",
  },
]