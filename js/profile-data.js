/**
 * PROFILE DATA
 * ============
 * Edit this file to update CV content. Everything here is rendered by js/main.js.
 */

const PROFILE = {
  name: "Suresh Gopalkrishna",
  credentials: "Dr.-Ing.",
  tagline: "Simulation & Machine Learning Engineer — Heat Transfer, Inverse Problems, Physics-Informed Neural Networks",
  location: "Munich (Neuried), Germany",
  status: "Open to new opportunities in Simulation, CFD & Heat Transfer — deepening AI/ML skills for engineering applications",
  email: "suresh.gopalkrishna@icloud.com",
  // phone: "+49 162 793 3085",
  github: "suresh-gopalkrishna", // GitHub username used to pull public repositories
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sureshgopalkrishna/" },
    { label: "GitHub", url: "https://github.com/suresh-gopalkrishna" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=qLmcb7cAAAAJ&hl=en" },
    { label: "ResearchGate", url: "https://www.researchgate.net/profile/Suresh-Babu-Gopalkrishna-2" },
    { label: "ORCID", url: "https://orcid.org/0000-0002-5758-0881" },
    { label: "Website", url: "https://www.sureshgopalkrishna.com" }
  ],

  about: "Mechanical engineer and Dr.-Ing. specialising in thermal simulation, inverse heat conduction and finite element analysis, with a growing focus on physics-informed machine learning for engineering problems. Background spans academic research (400+ quenching experiments, 1000+ FEM simulations, seven master's theses supervised) and industry roles applying scientific machine learning to thermal systems.",

  experience: [
    {
      start: "2026-07", end: null,
      role: "Actively Seeking New Opportunities",
      org: "Simulation · CFD · Heat Transfer",
      location: "Munich, Germany",
      tags: ["industry"],
      bullets: [
        "Actively interviewing for roles in simulation, CFD and thermal engineering.",
        "Deepening AI/ML skills for engineering applications through targeted certifications (see Courses & Certifications)."
      ]
    },
    {
      start: "2023-06", end: null,
      role: "Collaborative / Independent Researcher — Thermal Simulation",
      org: "Institute of Thermodynamics and Fluid Dynamics, Otto von Guericke University Magdeburg",
      location: "Magdeburg, Germany",
      tags: ["research"],
      bullets: [
        "Applied an inverse heat conduction model to 50+ experimental cases using Python for transient heat transfer of metal quenching.",
        "Developed and validated a Physics-Informed Neural Network (PINN) achieving 2.7% mean relative heat flux error on synthetic data.",
        "Applied the PINN model to experimental AA6082 infrared data, recovering a peak heat flux of 10.9 MW/m² with a temperature RMSE of 1.73 K.",
        "Published 2+ peer-reviewed articles; ongoing collaboration on data-driven thermal analysis."
      ]
    },
    {
      start: "2025-03", end: "2026-06",
      role: "Simulation Engineer",
      org: "Integrated Thermal Research Private Limited",
      location: "Bengaluru, India",
      tags: ["industry"],
      bullets: [
        "Developed thermal simulation solutions focused on Physics-Informed Neural Networks (PINNs), scientific machine learning and computational heat transfer.",
        "Built Python and TensorFlow workflows for data analysis, neural network training, model validation and thermal simulation using experimental temperature data."
      ]
    },
    {
      start: "2024-04", end: "2024-07",
      role: "Research Engineer II — Physical Modeling",
      org: "BERT Labs Private Limited",
      location: "Bengaluru, India",
      tags: ["research", "industry"],
      bullets: [
        "Applied first-principles calculations and reduced-order modeling for physics-based process analysis.",
        "Performed data analysis and feature selection for process modeling and engineering applications."
      ]
    },
    {
      start: "2022-11", end: "2023-05",
      role: "Post-Doctoral Researcher — Experimental & Numerical Modelling",
      org: "Otto von Guericke University Magdeburg (LTV / WSÜ)",
      location: "Magdeburg, Germany",
      tags: ["research"],
      bullets: [
        "Advanced inverse heat conduction methods and finite element tools for industrial quenching applications.",
        "Contributed to the SmartProSys project on thermal analysis of energy-conversion processes."
      ]
    },
    {
      start: "2018-12", end: "2023-05",
      role: "Research Associate — Experimental & Numerical Modelling",
      org: "Institute of Thermodynamics and Fluid Dynamics, Otto von Guericke University Magdeburg",
      location: "Magdeburg, Germany",
      tags: ["research"],
      bullets: [
        "Developed an in-house 2D/3D finite element solver in MATLAB to quantify heat flux by solving inverse thermal problems.",
        "Executed 1,000+ large-scale MATLAB / COMSOL simulations to quantify thermal stresses and heat fluxes during heat treatment of hot metals.",
        "Conducted 400+ high-temperature quenching experiments using infrared thermography at 200 fps to validate FE and inverse heat conduction models.",
        "Supervised 7 master's theses in heat transfer analysis, cooling processes and numerical modelling.",
        "Authored peer-reviewed journal publications and technical reports in FEA, inverse heat conduction and heat transfer.",
        "Advised on course selection and study planning as Course Advisor for the M.Sc. Chemical and Energy Engineering programme (02/2019–02/2020)."
      ]
    },
    {
      start: "2016-03", end: "2016-10",
      role: "Mechanical Engineer",
      org: "Narsipur Auto Components Private Limited (supplier to TVS Motors)",
      location: "Bengaluru, India",
      tags: ["industry"],
      bullets: [
        "Implemented IATF 16949 / ISO quality management and process control for precision automotive components, reducing defect rates by ~90%.",
        "Applied SPC, 8D methodology, Kaizen and Six Sigma for root-cause analysis and continuous improvement.",
        "Awarded 'Best Engineer' twice for production efficiency and team leadership."
      ]
    },
    {
      start: "2014-07", end: "2014-08",
      role: "Intern — Helicopter Engine Division",
      org: "Hindustan Aeronautics Limited",
      location: "Bengaluru, India",
      tags: ["industry"],
      bullets: [
        "Studied aircraft engine overhaul processes for Rolls-Royce and turboprop engines through technical discussions with in-house teams."
      ]
    }
  ],

  education: [
    {
      start: "2019-04", end: "2022-10",
      degree: "Doctor of Engineering (Dr.-Ing.) — Process and Systems Engineering",
      org: "Otto von Guericke University Magdeburg — Institute of Fluid Dynamics and Thermodynamics",
      location: "Magdeburg, Germany",
      grade: "magna cum laude",
      detail: "Thesis: Local Heat Transfer and Stress Analysis during Quenching of Moving Metal Plates using Array of Jets. Supervisor: Prof. Eckehard Specht."
    },
    {
      start: "2016-10", end: "2018-10",
      degree: "Master of Science (M.Sc.) — Chemical and Energy Engineering",
      org: "Otto von Guericke University Magdeburg",
      location: "Magdeburg, Germany",
      grade: "Thesis grade 1.3 (sehr gut)",
      detail: "Thesis: Thermal Stresses in Quenching of Plate by Array of Jets and Sprays."
    },
    {
      start: "2011-09", end: "2015-07",
      degree: "Bachelor of Engineering (B.E.) — Mechanical Engineering",
      org: "AMC Engineering College, Visvesvaraya Technological University",
      location: "Bengaluru, India",
      grade: "First Class with Distinction (German scale 1.9)",
      detail: "Thesis: Development and Testing of a Pneumatic Engine."
    }
  ],

  skills: {
    "Programming": ["Python", "MATLAB", "C++"],
    "Simulation & FEA": ["ANSYS Mechanical", "ANSYS Fluent", "COMSOL Multiphysics", "STAR-CCM+", "Finite Element Analysis", "Inverse Heat Conduction", "CFD"],
    "AI / Machine Learning": ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Physics-Informed Neural Networks", "Scientific Machine Learning", "Surrogate Modelling", "Generative AI / LLMs"],
    "Experimental": ["Infrared Thermography", "Quenching Rigs for Hot Metals", "Transient Temperature Measurement"],
    "CAD & Tools": ["Solid Edge", "CATIA V5", "SolidWorks", "HyperMesh", "LaTeX"],
    "Languages": ["English (C1–C2)", "German (B1–B2)", "Kannada (mother tongue)"]
  },

  research: {
    summary: "Seven journal publications, nine conference papers/presentations and seven master's theses supervised in heat transfer, inverse problems and thermal process engineering. Full list below.",
    journalPublications: [
      "S. B. Gopalkrishna, A. K. Nallathambi, E. Specht, \"Inverse Heat Conduction Method to Estimate Heat Flux during Quenching of Hot Metals with Infrared Thermography Measurements,\" Applied Thermal Engineering, Vol. 304, Part 2, 132481, 2026.",
      "S. B. Gopalkrishna, G. A. Kulkarni, S. Ryll, E. Specht, \"Heat Transfer Analysis during Quenching of Moving Metal Plates using Water Jets from a Mold,\" Thermal Science and Engineering Progress, Vol. 64, 103792, 2025.",
      "A. Dernbecher, S. Bhaskaran, N. Vorhauer-Huget, J. Seidenbecher, S. Gopalkrishna, L. Briest, A. Dieguez-Alonso, \"Investigation on the intra-particle anisotropic transport properties of a beech wood particle during pyrolysis,\" Particuology, Vol. 98, pp. 172–190, 2025.",
      "S. Palaniswamy, S. Murugesan, J. J. P. Remani, S. B. Gopalkrishna, A. K. Nallathambi, D. Juhre, E. Specht, \"Experimental Investigation of Heat Transfer during Quenching of Semi-solid Aluminium Plate under Hot Cracking Condition,\" Thermal Science and Engineering Progress, Vol. 48, 102372, 2024.",
      "N. M. Narayan, S. B. Gopalkrishna, B. Mehdi, S. Ryll, U. Fritsching, E. Specht, \"Multiphase numerical modeling of boiling flow and heat transfer for liquid jet quenching of a moving metal plate,\" International Journal of Thermal Sciences, Vol. 194, 108587, 2023.",
      "N. Vorhauer-Huget, J. Seidenbecher, S. Bhaskaran, F. Schenkel, L. Briest, S. Gopalkrishna, J. Barowski, A. Dernbecher, L. Hilfert, I. Rolfes, A. Dieguez-Alonso, \"Dielectric and physico-chemical behavior of single thermally thick wood blocks under microwave assisted pyrolysis,\" Particuology, Vol. 86, pp. 291–303, 2023.",
      "S. B. Gopalkrishna, E. Specht, \"Physics-Informed Neural Networks for Two-Dimensional Transient Inverse Heat Conduction: Surface Heat Flux Recovery from Infrared Thermography during Aluminium Alloy Quenching,\" AI Thermal Fluids, in progress, 2026."
    ],
    conferencePapers: [
      "\"Inverse Heat Conduction Method to Estimate the Unknown Surface Heat Flux during Quenching Process,\" 7th Thermal and Fluids Engineering Conference (TFEC), Las Vegas, USA, May 2022.",
      "\"Thermal Stresses in Quenching of Moving Plate by an Array of Jets,\" Symposium and Workshop for Analytical Youth on Applied Mechanics, BITS Goa, India, 2018.",
      "\"Investigation of Distortion in Quenching of Seamless Tubes,\" Student Technical Conference on Petroleum and Drilling Engineering related Geoscience & Geothermic, Freiburg, Germany, 2018.",
      "\"Inverse Heat Conduction with Tikhonov Regularization to Estimate the Unknown Heat Flux in Quenching of Metals,\" International Conference on Analysis, Inverse Problems and Applications, IIT Madras, Chennai, India, 2022.",
      "\"Einfluss der Oberflächenrauheit, der Wasserqualität und der Metallart auf den Wärmeübergang bei der Kühlung von Metallen mit unterschiedlichen Düsenarten,\" 2. Aachener Ofenbau und Thermprocess Kolloquium, Aachen, Germany, 2019.",
      "\"Investigation of Heat Transfer in Arrays of Water Jets and Sprays,\" European Conference on Heat Treatment (ECHT) — Quenching and Distortion Engineering, 2021.",
      "\"Quenching of Moving Metal Plates with Flat Sprays and Single Full Jet Nozzle,\" 3. Aachener Ofenbau und Thermoprozess Kolloquium, Aachen, Germany, 2021.",
      "\"Analysis of Heat Transfer in Quenching of Moving Sheets with Flat Sprays,\" 7th Thermal and Fluids Engineering Conference (TFEC), USA, 2022.",
      "\"Experimental Investigation of Quenching of Moving Hot Metal Plate with Water Using Flat Spray Nozzles,\" 7th World Congress on Momentum, Heat and Mass Transfer (MHMT'22), Lisbon, Portugal, 2022."
    ],
    supervision: [
      "Sravan Kumar Sidrala — Experimental Investigation during Quenching of Metals with Different Configuration of Full Jet Nozzle Fields (2020)",
      "Balaji Reddy Pongupalli V. — Experimental Investigation during Quenching of Hot Moving Metal Plate with Spray Nozzle Fields (2020)",
      "Stephan Ryll — Untersuchung von Modell-Brauseköpfen für die Abschreckung von Metallplatten (2020)",
      "Meesala Rudra Venkata Santhoshkumar — Product Development of a Self-Adjusting Degas Valve in an Automobile Vehicle Cooling System (2021, with Schaeffler Group)",
      "Sai Kalyan Kolapally — Thermal Analysis of Quenching Process for Hot Moving Plate: A Numerical Approach (2022)",
      "Prasanna Selvarajan — Three-Dimensional Inverse Heat Conduction Problem to Estimate the Unknown Heat Fluxes during Quenching Process (2023)",
      "Dintakurthi Praveen — Heat Transfer Analysis during Quenching with Array of Jets (2023)"
    ],
    teaching: [
      "Advanced Heat and Mass Transfer, M.Sc. course — Summer 2020 & Summer 2022, Otto von Guericke University Magdeburg",
      "Wärmetechnik, M.Sc. course — Summer 2022, Otto von Guericke University Magdeburg",
      "Verbrennungstechnik, B.Sc. course — Winter 2022, Otto von Guericke University Magdeburg"
    ],
    grants: [
      "Intensivekühlung II — Intensive Cooling of Hot Metal Plates, Institute of Fluid Dynamics and Thermodynamics, OvGU Magdeburg (2018–2021)",
      "SmartProSys — Design of Novel Fluidized Bed Process for Plastics Recycling, OvGU Magdeburg (08/2022–06/2023)"
    ],
    membershipsAwards: [
      "Committee Member, Furnace-independent Mold – Aluminium, Deutsche Gesellschaft für Materialkunde (DGM), since 09/2022",
      "Committee Member, Continuous Casting, Deutsche Gesellschaft für Materialkunde (DGM), since 12/2023",
      "Reviewer — Materials Today: Proceedings (Elsevier), TFEC-2022 (ASTFE), Applied Thermal Engineering (Elsevier)",
      "Certificate of Reviewing, Materials Today: Proceedings, Elsevier, 2020"
    ]
  }
};
