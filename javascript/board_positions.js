function boardPositions(){
  board_positions = {
    vice_president: {
      title: "Vice-President",
      image: "vice-president",
      short_description: "As Vice-President, you co-run the executive board.
      You will engage in many entrepreneurial and managerial tasks, and be a
      vital part of the Executive Board.",
      requirements: ["Fluent English", "Very High Motivation", "Interests in Crypto & Blockchain", "High Social Skills"],
      tasks: ["The Vice-President assist the President in his matters of management and coordination of the board.",
      "The Vice-President assists the President in the creation of the strategy of the society.",
      "The Vice-President takes over the responsibilities of the President in his absence.",
      "The Vice-President assists in the content creation for the society’s events."],
      authority: ["In case of absence of the President, the Vice-President has the final decision authority over the actions of the board.",
      "In case of absence of the President, the Vice-President has a casting vote in matters that the board must vote upon.",
      "The Vice-President has signing authority in the name of the society."],
      accountability: ["The Vice-President acocuntable to the rest of the Executive Board and the President for a careful execution of his responsibilities."]
    },
    head_of_finance: {
      title: "Head of Finance",
      image: "finance",
      short_description: "As Head of Finance, you are in charge of all financial affairs of the society.",
      requirements: ["Fluent English", "High Motivation", "Good Knowledge of Financial Accounting", "Internship experiences in finance are of advantage"],
      tasks: ["The Head of Finance manages all financial affairs of the society.",
      "The Head of Finance sets up the society’s bank accounts & crypto wallets.",
      "The Head of Finance pursues financial sponsoring for the society.",
      "The Head of Finance develops the department of finance.",
      "The Head of Finance assists in the content creation for the society’s events."],
      authority: ["The Head of Finance has signing authority for financial affairs.",
      "Unless vetoed by the President or Vice President, the Head of Finance has full autonomy within his own department."],
      accountability: ["The Head of Finance is acocuntable to the rest of the Executive Board and the President for a careful execution of his responsibilities."]
    },
    head_of_it: {
      title: "Head of Informational Technology",
      image: "it",
      short_description: "As Head of Informational Technology, you are in charge of all IT affairs of the society.
      You build and mantain the website and you lead the society's blockchain development team.",
      requirements: ["Fluent English", "High Motivation", "Good Coding Skills (Web-Dev, Python, others of advantage)", "Knowledge about Blockchain", "Social/teaching Skills"],
      tasks: ["The Head of IT manages all technical affairs of the society.",
      "The Head of IT manages & develops the society’s website.",
      "The Head of IT teaches the blockchain technology to the members.",
      "The Head of IT develops the department of IT.",
      "The Head of IT assists in the content creation for the society’s events."],
      authority: ["The Head of IT has admin rights on all accounts/servers of the society.",
      "Unless vetoed by the President or Vice President, the Head of IT has full autonomy within his own department."],
      accountability: ["The Head of IT is acocuntable to the rest of the Executive Board and the President for a careful execution of his responsibilities."]
    },
    head_of_academic_affairs: {
      title: "Head of Academic Affairs",
      image: "academic-affairs",
      short_description: "As Head of Academic Affairs, you are in charge of the content (mainly crypto market analysis) of our weekly meetings.
      You have a deep knowledge and high interest in the crypto markets. In the future, you are set out to lead a team of
      junior crypto analysts.",
      requirements: ["Fluent English", "High Motivation", "Good Knowledge about Crypto", "Presentation Skills", "Internship experiences in finance are of advantage"],
      tasks: ["The Head of Academic Affairs manages all academic affairs of the society.",
      "The Head of Academic Affairs is responsible for the creation of content (i.e. analysis of cryptomarkets) for the society’s events.",
      "The Head of Academic Affairs develops the department of Academic Affairs.",
      "When established, the Head of Academic Affairs coordinates and manages the team of junior analysts."],
      authority: ["When established, the Head of Academic Affairs has the final decision power within his own department.",
      "Unless vetoed by the President or Vice President, the Head of Academic Affairs has full autonomy within his own department."],
      accountability: ["The Head of Academic Affairs is acocuntable to the rest of the Executive Board and the President for a careful execution of his responsibilities."]
    },
    head_of_marketing: {
      title: "Head of Marketing",
      image: "marketing",
      short_description: "As Head of Marketing, you are in charge of the marketing process. You develop design concepts & the society's brand identity.
      Additionally, you manage all the social media affairs of the society.",
      requirements: ["Fluent English", "High Motivation", "Skills in Design", "Interests in Marketing"],
      tasks: ["The Head of Marketing develops the society's brand identity & graphical designs.",
      "The Head of Marketing manages the society’s marketing & social media.",
      "The Head of Marketing develops the department of marketing.",
      "The Head of Marketing assists in the content creation for the society’s events."],
      authority: ["The Head of Marketing has admin rights on all social media accounts of the society.",
      "Unless vetoed by the President or Vice President, the Head of Marketing has full autonomy within his own department."],
      accountability: ["The Head of Marketing is acocuntable to the rest of the Executive Board and the President for a careful execution of his responsibilities."]
    },
    head_of_legal_affairs: {
      title: "Head of Legal Affairs",
      image: "legal-affairs",
      short_description: "As Head of Legal Affairs, you are in charge of the creation of all legal documents of the society.
      Further on, you incorporate the society officially into the SHSG. Also, you are in charge of the creation & appointment of the Judicial Committee.",
      requirements: ["Fluent English", "High Motivation", "High Interest in Legal Affairs", "Working Autonomously"],
      tasks: ["The Head of Legal Affairs manages all legal affairs of the society.",
      "The Head of Legal Affairs drafts up a constitution for the society and is responsible for the accreditation of the society at HSG.",
      "The Head of Legal Affairs determines the three justices of the Judicial Committee, when established.",
      "The Head of Legal Affairs develops the department of legal affairs.",
      "The Head of Legal Affairs assists in the content creation for the society’s events."],
      authority: ["Unless vetoed by the President or Vice President, the Head of Legal Affairs has full autonomy within his own department.",
      "The Head of Legal Affairs has full autonomy in the selection of the three justices of the Judicial Committee."],
      accountability: ["The Head of Legal Affairs is acocuntable to the rest of the Executive Board and the President for a careful execution of his responsibilities."]
    },
    chief_of_staff: {
      title: "Chief of Staff",
      image: "staff",
      short_description: "As Chief of Staff, you are responsible for the recruitment of members to our society.
      Also, you are the first point of contact from our members to the Executive Board. You manage and engage our community.",
      requirements: ["Fluent English", "High Motivation", "High Social Skills", "German/French is Beneficial"],
      tasks: ["The Chief of Staff manages all members of the club.",
      "The Chief of Staff is responsible for the recruitment of new members.",
      "The Chief of Staff manages the personal data of new members.",
      "The Chief of Staff affairs develops his department.",
      "The Chief of Staff assists in the content creation for the society’s events."],
      authority: ["Unless vetoed by the President or Vice President, the Chief of Staff has full autonomy within his own department."],
      accountability: ["The Chief of Staff is acocuntable to the rest of the Executive Board and the President for a careful execution of his responsibilities."]
      },
    head_of_social_events: {
      title: "Head of Social Events",
      image: "socials",
      short_description: "As the Head of Social Events, you organise the gatherings of our society. You are in charge of the
      organisation of the weekly meetings, but also of social events such as visits, speeches from invitees or our society's parties.",
      requirements: ["Fluent English", "High Motivation", "High Socials Skills", "Managerial Talent"],
      tasks: ["The head of Social Events develops the department of Social Events.",
      "The head of Social Events is responsible for the logistical organisation & planning of all Social Events."],
      authority: ["Unless vetoed by the President or Vice President, the head of Social Events has full autonomy within his own department."],
      accountability: ["The Head of Social Events is acocuntable to the rest of the Executive Board and the President for a careful execution of his responsibilities."]
    }
  }
}

export {boardPositions}


