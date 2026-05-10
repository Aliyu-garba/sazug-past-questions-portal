// questions.js
window.questions = {
  MTH101: {
    "2023": [
      { text: "What is the derivative of x²?", options: ["2x", "x", "x²", "1"], correct: 0 },
      { text: "Solve for x: 2x + 3 = 7", options: ["x = 1", "x = 2", "x = 3", "x = 4"], correct: 1 },
      { text: "Value of π approximately?", options: ["3.14", "2.17", "1.62", "3.41"], correct: 0 },
      { text: "Simplify: (x²)(x³)", options: ["x⁵", "x⁶", "x⁸", "x⁹"], correct: 0 },
      { text: "Integral of 2x dx is:", options: ["x² + C", "2x + C", "x + C", "x³ + C"], correct: 0 }
    ],
    "2024": [
      { text: "If f(x) = x² + 3x, what is f'(x)?", options: ["2x + 3", "x + 3", "2x", "x²"], correct: 0 },
      { text: "Solve: 3x - 5 = 10", options: ["x = 3", "x = 5", "x = 15", "x = -5"], correct: 1 },
      { text: "Simplify: (x³)²", options: ["x⁵", "x⁶", "x⁹", "x⁸"], correct: 1 },
      { text: "Derivative of sin(x)?", options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], correct: 0 },
      { text: "Integral of 1/x dx is:", options: ["ln|x| + C", "1/x + C", "x ln(x)", "x²/2"], correct: 0 }
    ],
    "2025": [
      { text: "What is 7 × 8?", options: ["54", "56", "58", "49"], correct: 1 },
      { text: "Solve for x: x² = 16", options: ["x = 4", "x = -4", "x = ±4", "x = 8"], correct: 2 },
      { text: "Derivative of e^x?", options: ["e^x", "x e^(x-1)", "1", "0"], correct: 0 },
      { text: "Simplify: (x²y³)(xy²)", options: ["x³y⁵", "x³y⁶", "x²y⁵", "x²y⁶"], correct: 0 },
      { text: "Integral of 3x² dx?", options: ["x³ + C", "x³ + 3", "3x² + C", "x³/3 + C"], correct: 0 }
    ],
    "2026": [
      { text: "Solve: 5x - 2 = 3", options: ["x = 1", "x = 0", "x = 5", "x = -1"], correct: 0 },
      { text: "Simplify: (2x)(3x²)", options: ["6x²", "6x³", "5x³", "5x²"], correct: 1 },
      { text: "Derivative of ln(x)?", options: ["1/x", "x", "ln(x)", "0"], correct: 0 },
      { text: "What is 12 ÷ 4 + 3?", options: ["6", "9", "4", "3"], correct: 1 },
      { text: "Integral of 5 dx?", options: ["5x + C", "x + C", "5 + C", "x⁵ + C"], correct: 0 }
    ]
  },

  PHY101: {
    "2023": [
      { text: "Unit of force?", options: ["Newton", "Pascal", "Joule", "Watt"], correct: 0 },
      { text: "Acceleration due to gravity?", options: ["9.8 m/s²", "8.9 m/s²", "10 m/s²", "9 m/s²"], correct: 0 },
      { text: "Velocity is defined as?", options: ["Speed with direction", "Speed only", "Distance / Time", "Acceleration"], correct: 0 },
      { text: "Unit of energy?", options: ["Joule", "Newton", "Watt", "Pascal"], correct: 0 },
      { text: "Unit of power?", options: ["Watt", "Newton", "Joule", "Volt"], correct: 0 }
    ],
    "2024": [
      { text: "Three point masses are placed on the x-axis: 300g at x=0, 500g at x=40cm, and 400g at x=70cm. The center of mass is:", options: ["40cm", "45cm", "50cm", "52cm"], correct: 2 },
      { text: "The dimensions of the ratio of (a) radius to arc length and (b) radius of gyration to radius of particle are:", options: ["L, L", "L⁰, L⁰", "L⁻¹, L", "L, L⁻¹"], correct: 1 },
      { text: "The following are examples of fundamental units except:", options: ["kg", "Kelvin", "Ampere", "Newton"], correct: 3 },
      { text: "A car speed reaches 30 m/s in 10s. What was the car speed in km/h?", options: ["108 km/h", "100 km/h", "120 km/h", "84 km/h"], correct: 0 },
      { text: "The work done by non-conservative forces on a 4000kg car was -2000J. The mechanical energy is:", options: ["Always zero", "Always negative", "Dependent on path", "Not conserved"], correct: 3 },
      { text: "For a particle moving along a circular path, its total energy is:", options: ["Always positive", "Always negative", "Conserved", "Varying"], correct: 2 },
      { text: "If a sphere has mass 4kg and radius 0.2m, what is the moment of inertia?", options: ["0.064 kgm²", "0.64 kgm²", "6.4 kgm²", "64 kgm²"], correct: 0 },
      { text: "The angle θ in radians is s/r. Find a, b for θ = sᵃ rᵇ:", options: ["a=1, b=1", "a=1, b=-1", "a=-1, b=1", "a=0, b=0"], correct: 1 },
      { text: "The dimensions of density and power are:", options: ["ML⁻³, ML²T⁻³", "ML³, ML²T²", "ML⁻³, MLT⁻²", "ML⁻², ML²T⁻³"], correct: 0 },
      { text: "Given v² = u² + 2as, what are the dimensions of 'a'?", options: ["LT⁻¹", "LT⁻²", "L²T⁻²", "L⁻¹T"], correct: 1 },
      { text: "Potential energy and kinetic energy are types of ______ energy:", options: ["Thermal", "Elastic", "Electric", "Mechanical"], correct: 3 },
      { text: "Gravitational force between objects of masses M and m is proportional to:", options: ["Sum of masses", "Inversely to r", "Product of masses", "Square of r"], correct: 2 },
      { text: "An angle in radians is arc length 's' to radius 'r'. Find b for θ = s/rᵇ:", options: ["0", "1", "2", "-1"], correct: 1 },
      { text: "Radian is defined as the ratio of length of arc to the radius. The angle is:", options: ["arc/r", "r/arc", "arc*r", "2πr"], correct: 0 },
      { text: "Torque is defined as:", options: ["Product of force and distance", "Product of mass and acceleration", "Force and velocity", "Force/distance"], correct: 0 },
      { text: "Unit of velocity is m/s. Its dimensions are:", options: ["LT⁻¹", "L⁻¹T", "LT⁻²", "MLT⁻¹"], correct: 0 },
      { text: "Value of G in the gravitational force equation?", options: ["6.67x10⁻¹¹ Nm²/kg²", "9.8 m/s²", "3x10⁸ m/s", "1.6x10⁻¹⁹ C"], correct: 0 },
      { text: "The unit of momentum is kg.m/s. Find its dimension:", options: ["MLT⁻¹", "ML²T⁻¹", "MLT⁻²", "ML⁻¹T"], correct: 0 },
      { text: "Find m₁ if force is 2.4x10⁻⁸ N, r=5m, and m₂ = 3m₁:", options: ["10kg", "15.42kg", "10.428kg", "1642.8kg"], correct: 2 },
      { text: "In classical mechanics, systems of particles are categorized into:", options: ["Discrete and Continuous", "Vectors and Scalars", "Nuclear/Atomic", "Kinetic/Potential"], correct: 0 }
    ],
    "2025": [
      { text: "Which is a vector quantity?", options: ["Velocity", "Speed", "Mass", "Distance"], correct: 0 },
      { text: "Unit of electric current?", options: ["Ampere", "Volt", "Ohm", "Coulomb"], correct: 0 }
    ],
    "2026": [
      { text: "Which instrument measures current?", options: ["Ammeter", "Voltmeter", "Wattmeter", "Galvanometer"], correct: 0 },
      { text: "Acceleration due to gravity symbol?", options: ["g", "a", "G", "v"], correct: 0 }
    ]
  },

  GST111: {
    "2023": [
      { text: "Correct spelling?", options: ["Accommodation", "Accomodation", "Acommodation", "Accommadation"], correct: 0 },
      { text: "Plural of 'child'?", options: ["children", "childs", "childes", "child"], correct: 0 },
      { text: "Antonym of 'happy'?", options: ["sad", "glad", "joyful", "cheerful"], correct: 0 },
      { text: "Synonym of 'fast'?", options: ["quick", "slow", "lazy", "late"], correct: 0 },
      { text: "Choose correct preposition: She is good ___ maths.", options: ["at", "in", "on", "for"], correct: 0 }
    ],
    "2024": [
      { text: "Plural of 'foot'?", options: ["feet", "foots", "foote", "fots"], correct: 0 },
      { text: "Choose correct article: ___ apple a day keeps the doctor away.", options: ["An", "A", "The", "None"], correct: 0 }
    ],
    "2025": [],
    "2026": []
  },

  CHM101: {
    "2023": [
      { text: "Water formula?", options: ["H2O", "CO2", "O2", "NaCl"], correct: 0 },
      { text: "pH of neutral solution?", options: ["7", "0", "14", "1"], correct: 0 },
      { text: "Atomic number of hydrogen?", options: ["1", "2", "8", "6"], correct: 0 },
      { text: "Salt formed from HCl and NaOH?", options: ["NaCl", "KCl", "H2O", "NaOH"], correct: 0 },
      { text: "Chemical symbol of Sodium?", options: ["Na", "S", "K", "Cl"], correct: 0 }
    ],
    "2024": [],
    "2025": [],
    "2026": []
  },

  PHY107: {
    "2023": [
      { text: "Instrument to measure current?", options: ["Ammeter", "Voltmeter", "Wattmeter", "Galvanometer"], correct: 0 },
      { text: "Instrument to measure voltage?", options: ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"], correct: 0 },
      { text: "Instrument to measure resistance?", options: ["Ohmmeter", "Voltmeter", "Ammeter", "Wattmeter"], correct: 0 },
      { text: "Instrument to measure temperature?", options: ["Thermometer", "Voltmeter", "Ammeter", "Barometer"], correct: 0 },
      { text: "Instrument to measure pressure?", options: ["Barometer", "Thermometer", "Voltmeter", "Ammeter"], correct: 0 }
    ],
    "2024": [],
    "2025": [],
    "2026": []
  },

  CHM107: {
    "2023": [
      { text: "Apparatus used for heating substances?", options: ["Bunsen burner", "Beaker", "Test tube", "Funnel"], correct: 0 },
      { text: "Used to measure liquid volume?", options: ["Measuring cylinder", "Burette", "Pipette", "Funnel"], correct: 0 },
      { text: "Used to filter mixtures?", options: ["Funnel", "Bunsen burner", "Beaker", "Test tube"], correct: 0 },
      { text: "Used to mix chemicals?", options: ["Stirring rod", "Bunsen burner", "Funnel", "Pipette"], correct: 0 },
      { text: "Used to hold small amounts of chemicals?", options: ["Test tube", "Beaker", "Funnel", "Flask"], correct: 0 }
    ],
    "2024": [],
    "2025": [],
    "2026": []
  }
};