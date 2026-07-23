// questions2.js – 100 Level Second Semester Course Questions
window.questions = {
  MTH102: {
    "2023": [
      { text: "Integrate ∫ 2x dx", options: ["x² + C", "2x + C", "x + C", "x³ + C"], correct: 0 },
      { text: "Evaluate ∫₀¹ x dx", options: ["0.5", "1", "0", "2"], correct: 0 },
      { text: "What is the derivative of ln(x)?", options: ["1/x", "x", "e^x", "ln(x)"], correct: 0 },
      { text: "Solve dy/dx = 3x²", options: ["y = x³ + C", "y = 3x + C", "y = 6x + C", "y = x² + C"], correct: 0 },
      { text: "∫ sin(x) dx = ?", options: ["-cos(x) + C", "cos(x) + C", "sin(x) + C", "-sin(x) + C"], correct: 0 }
    ],
    "2024": [
      { text: "∫ e^x dx = ?", options: ["e^x + C", "x e^x + C", "e^x + x", "ln|x| + C"], correct: 0 },
      { text: "What is the value of ∫₀^π sin(x) dx?", options: ["2", "0", "1", "π"], correct: 0 },
      { text: "Derivative of x³ is", options: ["3x²", "x²", "3x", "6x"], correct: 0 },
      { text: "∫ (1/x) dx = ?", options: ["ln|x| + C", "x ln x + C", "e^x + C", "1 + C"], correct: 0 },
      { text: "If y = x⁵, then dy/dx = ?", options: ["5x⁴", "x⁴", "5x⁵", "4x⁵"], correct: 0 }
    ],
    "2025": [
      { text: "∫ 5 dx = ?", options: ["5x + C", "x + C", "5 + C", "5x² + C"], correct: 0 },
      { text: "Derivative of cos(x) is", options: ["-sin(x)", "sin(x)", "-cos(x)", "tan(x)"], correct: 0 },
      { text: "∫₀¹ 3x² dx = ?", options: ["1", "0", "3", "2"], correct: 0 },
      { text: "d/dx (tan x) = ?", options: ["sec² x", "csc² x", "sec x tan x", "cot x"], correct: 0 },
      { text: "∫ (2x + 3) dx = ?", options: ["x² + 3x + C", "2x² + 3x + C", "x² + 3 + C", "x² + 3x"], correct: 0 }
    ],
    "2026": [
      { text: "∫₀^π/2 sin(x) dx = ?", options: ["1", "0", "2", "π/2"], correct: 0 },
      { text: "Derivative of sec x is", options: ["sec x tan x", "tan² x", "csc x cot x", "sec² x"], correct: 0 },
      { text: "∫ x³ dx = ?", options: ["x⁴/4 + C", "3x² + C", "x⁴ + C", "4x³ + C"], correct: 0 },
      { text: "If f(x) = ln(x²), then f'(x) = ?", options: ["2/x", "1/x", "2x", "x/2"], correct: 0 },
      { text: "∫ (e^x + 1) dx = ?", options: ["e^x + x + C", "e^x + 1 + C", "x e^x + C", "e^x + C"], correct: 0 }
    ]
  },

  PHY102: {
    "2023": [
      { text: "Ohm's law relates voltage, current, and", options: ["Resistance", "Power", "Capacitance", "Inductance"], correct: 0 },
      { text: "SI unit of electric charge", options: ["Coulomb", "Ampere", "Volt", "Ohm"], correct: 0 },
      { text: "A device that stores electric charge", options: ["Capacitor", "Resistor", "Inductor", "Transformer"], correct: 0 },
      { text: "Magnetic field lines are", options: ["Closed loops", "Open lines", "Straight lines", "Discontinuous"], correct: 0 },
      { text: "The speed of light in vacuum is approx", options: ["3×10⁸ m/s", "3×10⁵ m/s", "3×10⁶ m/s", "3×10⁷ m/s"], correct: 0 }
    ],
    "2024": [
      { text: "Kirchhoff's voltage law states that sum of voltages around a loop is", options: ["Zero", "Maximum", "Minimum", "Infinite"], correct: 0 },
      { text: "Unit of inductance is", options: ["Henry", "Farad", "Ohm", "Tesla"], correct: 0 },
      { text: "A transformer works on the principle of", options: ["Mutual induction", "Self induction", "Electrolysis", "Thermionic emission"], correct: 0 },
      { text: "The force on a charge moving in a magnetic field is given by", options: ["F = qvB sinθ", "F = qE", "F = ma", "F = kq₁q₂/r²"], correct: 0 },
      { text: "In a series LCR circuit at resonance, impedance is", options: ["Minimum and equal to R", "Maximum", "Zero", "Infinite"], correct: 0 }
    ],
    "2025": [
      { text: "Which of the following is a scalar?", options: ["Electric potential", "Electric field", "Force", "Magnetic field"], correct: 0 },
      { text: "The unit of magnetic flux is", options: ["Weber", "Tesla", "Henry", "Farad"], correct: 0 },
      { text: "Lenz's law is a consequence of", options: ["Conservation of energy", "Conservation of charge", "Newton's third law", "Gauss's law"], correct: 0 },
      { text: "In a pure capacitor, current leads voltage by", options: ["90°", "0°", "45°", "180°"], correct: 0 },
      { text: "The refractive index of water is about", options: ["1.33", "1.5", "2.4", "1.0"], correct: 0 }
    ],
    "2026": [
      { text: "Which color of light has the shortest wavelength?", options: ["Violet", "Red", "Green", "Yellow"], correct: 0 },
      { text: "The phenomenon of splitting of light into its components is called", options: ["Dispersion", "Reflection", "Refraction", "Diffraction"], correct: 0 },
      { text: "Ohm's law is not valid for", options: ["Non-ohmic conductors", "Metals at constant temp", "Resistors", "Wires"], correct: 0 },
      { text: "A step-up transformer", options: ["Increases voltage", "Decreases voltage", "Increases current", "Decreases power"], correct: 0 },
      { text: "The SI unit of electric field is", options: ["N/C", "J/C", "V/m", "Both N/C and V/m"], correct: 3 }
    ]
  },

  CHM102: {
    "2023": [
      { text: "General formula of alkanes", options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁"], correct: 0 },
      { text: "Which functional group is present in alcohols?", options: ["-OH", "-COOH", "-CHO", "-NH₂"], correct: 0 },
      { text: "The product of esterification is", options: ["Ester + water", "Alcohol + acid", "Salt + water", "Ketone + alcohol"], correct: 0 },
      { text: "Benzene is an example of", options: ["Aromatic hydrocarbon", "Aliphatic hydrocarbon", "Alkene", "Alkyne"], correct: 0 },
      { text: "The IUPAC name of CH₃COOH is", options: ["Ethanoic acid", "Methanoic acid", "Propanoic acid", "Butanoic acid"], correct: 0 }
    ],
    "2024": [
      { text: "Which of the following is a reducing sugar?", options: ["Glucose", "Sucrose", "Starch", "Cellulose"], correct: 0 },
      { text: "The polymer of ethene is", options: ["Polyethene", "PVC", "Nylon", "Teflon"], correct: 0 },
      { text: "The process of converting alkenes to alkanes is", options: ["Hydrogenation", "Hydration", "Halogenation", "Dehydrogenation"], correct: 0 },
      { text: "Which of the following is not a greenhouse gas?", options: ["Oxygen", "Carbon dioxide", "Methane", "Water vapor"], correct: 0 },
      { text: "The functional group of aldehydes is", options: ["-CHO", "-CO-", "-OH", "-COOH"], correct: 0 }
    ],
    "2025": [
      { text: "What is the main component of natural gas?", options: ["Methane", "Ethane", "Propane", "Butane"], correct: 0 },
      { text: "The process of splitting a large hydrocarbon into smaller ones is called", options: ["Cracking", "Reforming", "Polymerization", "Isomerization"], correct: 0 },
      { text: "Which of the following is an alkene?", options: ["Ethene", "Ethane", "Ethyne", "Methane"], correct: 0 },
      { text: "The product of addition of water to ethene is", options: ["Ethanol", "Ethanal", "Ethanoic acid", "Ethene oxide"], correct: 0 },
      { text: "The molecular formula of benzene is", options: ["C₆H₆", "C₆H₁₂", "C₆H₁₄", "C₆H₁₀"], correct: 0 }
    ],
    "2026": [
      { text: "Which of the following is a secondary alcohol?", options: ["Propan-2-ol", "Propan-1-ol", "2-methylpropan-2-ol", "Ethanol"], correct: 0 },
      { text: "The reaction of an acid with an alcohol gives", options: ["Ester and water", "Salt and water", "Aldehyde and water", "Ketone and water"], correct: 0 },
      { text: "The type of isomerism shown by butane and isobutane is", options: ["Chain isomerism", "Position isomerism", "Functional isomerism", "Geometric isomerism"], correct: 0 },
      { text: "The general formula of alkynes is", options: ["CₙH₂ₙ₋₂", "CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₊₁"], correct: 0 },
      { text: "Which of the following tests is used to distinguish aldehydes from ketones?", options: ["Tollens' test", "Bromine water test", "Baeyer's test", "Lucas test"], correct: 0 }
    ]
  },

  GST112: {
    "2023": [
      { text: "Logic is the study of", options: ["Reasoning", "Language", "Numbers", "Nature"], correct: 0 },
      { text: "A valid argument with true premises is called", options: ["Sound", "Cogent", "Strong", "Weak"], correct: 0 },
      { text: "The law of non-contradiction states that a statement cannot be both", options: ["True and false", "True and true", "False and false", "Probable and improbable"], correct: 0 },
      { text: "A syllogism consists of how many propositions?", options: ["3", "2", "4", "1"], correct: 0 },
      { text: "The statement 'All men are mortal' is a", options: ["Universal affirmative", "Particular affirmative", "Universal negative", "Particular negative"], correct: 0 }
    ],
    "2024": [
      { text: "The converse of 'If it rains, then the ground is wet' is", options: ["If ground is wet, then it rained", "If it does not rain, ground is not wet", "It rains and ground is not wet", "None of the above"], correct: 0 },
      { text: "An argument that is intended to provide probable support is", options: ["Inductive", "Deductive", "Valid", "Sound"], correct: 0 },
      { text: "The study of meaning in language is called", options: ["Semantics", "Syntax", "Pragmatics", "Phonetics"], correct: 0 },
      { text: "Which of the following is a fallacy?", options: ["Ad hominem", "Modus ponens", "Modus tollens", "Hypothetical syllogism"], correct: 0 },
      { text: "The law of excluded middle states that a statement is either", options: ["True or false", "True and false", "Neither true nor false", "Probably true"], correct: 0 }
    ],
    "2025": [
      { text: "A deductive argument that is not valid is called", options: ["Invalid", "Weak", "Cogent", "Inductive"], correct: 0 },
      { text: "The term 'cogent' applies to", options: ["Inductive arguments", "Deductive arguments", "Fallacies", "Syllogisms"], correct: 0 },
      { text: "The logical operator '→' represents", options: ["Implication", "Conjunction", "Disjunction", "Negation"], correct: 0 },
      { text: "Which of the following is a tautology?", options: ["P ∨ ¬P", "P ∧ ¬P", "P → Q", "P ↔ Q"], correct: 0 },
      { text: "A fallacy that attacks the person instead of the argument is", options: ["Ad hominem", "Straw man", "Begging the question", "False dilemma"], correct: 0 }
    ],
    "2026": [
      { text: "The proposition 'Some S are not P' is a", options: ["Particular negative", "Universal negative", "Particular affirmative", "Universal affirmative"], correct: 0 },
      { text: "In a categorical proposition, the subject and predicate terms are connected by", options: ["Copula", "Quantifier", "Negation", "Conjunction"], correct: 0 },
      { text: "The square of opposition shows relationships between", options: ["Categorical propositions", "Conditional statements", "Modal statements", "Disjunctive statements"], correct: 0 },
      { text: "A sound argument must be", options: ["Valid and have true premises", "Valid and have false premises", "Invalid but true", "Inductive and strong"], correct: 0 },
      { text: "The fallacy of circular reasoning is also known as", options: ["Begging the question", "Hasty generalization", "Red herring", "Slippery slope"], correct: 0 }
    ]
  },

  CSC102: {
    "2023": [
      { text: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Core Processing Unit"], correct: 0 },
      { text: "Which of these is a high-level programming language?", options: ["Python", "Assembly", "Machine code", "Binary"], correct: 0 },
      { text: "What is the result of 5 % 2 in most languages?", options: ["1", "2", "0", "5"], correct: 0 },
      { text: "Which operator is used for assignment?", options: ["=", "==", "===", ":="], correct: 0 },
      { text: "What is the correct syntax to output 'Hello' in Python?", options: ["print('Hello')", "echo 'Hello'", "printf('Hello')", "cout << 'Hello'"], correct: 0 }
    ],
    "2024": [
      { text: "Which of the following is a loop structure?", options: ["for", "if", "else", "switch"], correct: 0 },
      { text: "What is the extension of a Python file?", options: [".py", ".java", ".c", ".cpp"], correct: 0 },
      { text: "Which data structure uses LIFO?", options: ["Stack", "Queue", "Array", "List"], correct: 0 },
      { text: "What does RAM stand for?", options: ["Random Access Memory", "Readily Available Memory", "Read Access Memory", "Random Allocation Memory"], correct: 0 },
      { text: "Which of the following is not a programming paradigm?", options: ["HTML", "Object-oriented", "Functional", "Procedural"], correct: 0 }
    ],
    "2025": [
      { text: "What is the output of `print(2 ** 3)` in Python?", options: ["8", "6", "9", "5"], correct: 0 },
      { text: "Which symbol is used for single-line comment in Python?", options: ["#", "//", "/*", "--"], correct: 0 },
      { text: "What is the correct way to create a function in Python?", options: ["def myFunction():", "function myFunction()", "create myFunction()", "func myFunction()"], correct: 0 },
      { text: "Which of the following is a mutable data type?", options: ["List", "Tuple", "String", "Integer"], correct: 0 },
      { text: "What does IDE stand for?", options: ["Integrated Development Environment", "Interactive Development Environment", "Integrated Design Environment", "Internal Development Engine"], correct: 0 }
    ],
    "2026": [
      { text: "Which of the following is used to handle exceptions in Python?", options: ["try-except", "if-else", "for-loop", "while-loop"], correct: 0 },
      { text: "What is the output of `len([1,2,3])`?", options: ["3", "2", "1", "0"], correct: 0 },
      { text: "Which keyword is used to define a class in Python?", options: ["class", "struct", "object", "def"], correct: 0 },
      { text: "Which operator compares two values for equality?", options: ["==", "=", "!=", "==="], correct: 0 },
      { text: "What is the purpose of the `break` statement?", options: ["Exit loop", "Skip iteration", "Continue loop", "Stop program"], correct: 0 }
    ]
  }
};