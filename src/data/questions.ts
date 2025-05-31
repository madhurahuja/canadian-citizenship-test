import { Question } from '../types';

// All available questions
export const allQuestions: Question[] = [
  {
    id: 1,
    question: "What is the capital city of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correctAnswer: "Ottawa",
    explanation: "Ottawa, located in Ontario, is the capital city of Canada.",
    category: "Geography"
  },
  {
    id: 2,
    question: "Who is Canada's Head of State?",
    options: ["The Prime Minister", "The Governor General", "The King", "The President"],
    correctAnswer: "The King",
    explanation: "King Charles III is Canada's Head of State and King of Canada.",
    category: "Government"
  },
  {
    id: 3,
    question: "What are the three levels of government in Canada?",
    options: [
      "Federal, provincial/territorial, and municipal",
      "Executive, legislative, and judicial",
      "National, regional, and local",
      "Crown, Parliament, and Senate"
    ],
    correctAnswer: "Federal, provincial/territorial, and municipal",
    explanation: "Canada has three levels of government: federal (national), provincial/territorial (regional), and municipal (local).",
    category: "Government"
  },
  {
    id: 4,
    question: "What is the name of the Canadian national anthem?",
    options: ["O Canada", "God Save the King", "The Maple Leaf Forever", "Canada Fair"],
    correctAnswer: "O Canada",
    explanation: "O Canada is the national anthem of Canada, officially adopted in 1980.",
    category: "Symbols"
  },
  {
    id: 5,
    question: "What document officially made Canada a country?",
    options: ["The Constitution Act", "The British North America Act", "The Charter of Rights and Freedoms", "The Proclamation of Independence"],
    correctAnswer: "The British North America Act",
    explanation: "The British North America Act of 1867 created the Dominion of Canada.",
    category: "History"
  },
  {
    id: 6,
    question: "What are the two official languages of Canada?",
    options: ["English and French", "English and Spanish", "French and Spanish", "English and Indigenous languages"],
    correctAnswer: "English and French",
    explanation: "Canada's two official languages are English and French, as established by the Official Languages Act of 1969.",
    category: "Language"
  },
  {
    id: 7,
    question: "What is the name of the Canadian police force?",
    options: ["RCMP", "FBI", "Provincial Police", "National Police"],
    correctAnswer: "RCMP",
    explanation: "The Royal Canadian Mounted Police (RCMP) is Canada's national police force.",
    category: "Government"
  },
  {
    id: 8,
    question: "Which ocean is on Canada's West Coast?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Arctic Ocean", "Indian Ocean"],
    correctAnswer: "Pacific Ocean",
    explanation: "The Pacific Ocean borders Canada's west coast along British Columbia.",
    category: "Geography"
  },
  {
    id: 9,
    question: "What is the maple leaf on Canada's flag colored?",
    options: ["Red", "Green", "White", "Blue"],
    correctAnswer: "Red",
    explanation: "The maple leaf on Canada's national flag is red, set against a white background with red bars on either side.",
    category: "Symbols"
  },
  {
    id: 10,
    question: "When did the Canadian Charter of Rights and Freedoms become part of the Constitution?",
    options: ["1982", "1867", "1931", "1976"],
    correctAnswer: "1982",
    explanation: "The Canadian Charter of Rights and Freedoms became part of the Constitution when it was patriated in 1982.",
    category: "History"
  },
  {
    id: 11,
    question: "What is the largest province in Canada by area?",
    options: ["Quebec", "Ontario", "British Columbia", "Alberta"],
    correctAnswer: "Quebec",
    explanation: "Quebec is the largest Canadian province by area, covering 1,542,056 square kilometers.",
    category: "Geography"
  },
  {
    id: 12,
    question: "Who was the first Prime Minister of Canada?",
    options: ["Sir John A. Macdonald", "William Lyon Mackenzie King", "Sir Wilfrid Laurier", "Robert Borden"],
    correctAnswer: "Sir John A. Macdonald",
    explanation: "Sir John A. Macdonald was Canada's first Prime Minister, serving from 1867 to 1873 and 1878 to 1891.",
    category: "History"
  },
  {
    id: 13,
    question: "What is the term length for Senators in Canada?",
    options: ["Until age 75", "6 years", "4 years", "8 years"],
    correctAnswer: "Until age 75",
    explanation: "Canadian Senators can serve until they reach the mandatory retirement age of 75.",
    category: "Government"
  },
  {
    id: 14,
    question: "What animal is an official symbol of Canada?",
    options: ["Beaver", "Moose", "Polar Bear", "Eagle"],
    correctAnswer: "Beaver",
    explanation: "The beaver is an official symbol of Canada, representing the importance of the fur trade in Canada's history.",
    category: "Symbols"
  },
  {
    id: 15,
    question: "What is the name of the ceremony where new citizens receive their citizenship?",
    options: ["Citizenship Ceremony", "Naturalization Ceremony", "Canadian Oath Ceremony", "Welcome Ceremony"],
    correctAnswer: "Citizenship Ceremony",
    explanation: "New citizens receive their citizenship at a Citizenship Ceremony where they take the Oath of Citizenship.",
    category: "Citizenship"
  },
  {
    id: 16,
    question: "What is the name of the highest mountain in Canada?",
    options: ["Mount Logan", "Mount Robson", "Mount Saint Elias", "Mount Baker"],
    correctAnswer: "Mount Logan",
    explanation: "Mount Logan in Yukon is Canada's highest peak at 5,959 meters.",
    category: "Geography"
  },
  {
    id: 17,
    question: "Which province joined Confederation last?",
    options: ["Newfoundland and Labrador", "Alberta", "Saskatchewan", "Manitoba"],
    correctAnswer: "Newfoundland and Labrador",
    explanation: "Newfoundland and Labrador joined Confederation in 1949.",
    category: "History"
  },
  {
    id: 18,
    question: "What is the name of Canada's national winter sport?",
    options: ["Ice Hockey", "Curling", "Skiing", "Snowboarding"],
    correctAnswer: "Ice Hockey",
    explanation: "Ice Hockey was officially declared Canada's winter sport in 1994.",
    category: "Symbols"
  },
  {
    id: 19,
    question: "What is the significance of the Canadian Constitution Act of 1982?",
    options: [
      "It patriated the Constitution from Britain",
      "It created Canada",
      "It established the provinces",
      "It created the Supreme Court"
    ],
    correctAnswer: "It patriated the Constitution from Britain",
    explanation: "The Constitution Act of 1982 patriated the Constitution, making Canada fully independent from Britain.",
    category: "History"
  },
  {
    id: 20,
    question: "What is the role of the Supreme Court of Canada?",
    options: [
      "To interpret and protect the Constitution",
      "To create new laws",
      "To collect taxes",
      "To manage foreign relations"
    ],
    correctAnswer: "To interpret and protect the Constitution",
    explanation: "The Supreme Court is Canada's highest court and final court of appeal, responsible for interpreting and protecting the Constitution.",
    category: "Government"
  },
  {
    id: 21,
    question: "What is the significance of Treaty Rights in Canada?",
    options: [
      "Special rights guaranteed to Indigenous peoples",
      "International trade agreements",
      "Provincial boundaries",
      "Municipal bylaws"
    ],
    correctAnswer: "Special rights guaranteed to Indigenous peoples",
    explanation: "Treaty Rights are constitutionally protected rights that were negotiated between Indigenous peoples and the Crown.",
    category: "Rights"
  },
  {
    id: 22,
    question: "What is the role of the Governor General?",
    options: [
      "Represents the King in Canada",
      "Leads the opposition party",
      "Manages the economy",
      "Commands the military directly"
    ],
    correctAnswer: "Represents the King in Canada",
    explanation: "The Governor General is the King's representative in Canada and performs ceremonial and constitutional duties.",
    category: "Government"
  },
  {
    id: 23,
    question: "Which document protects Canadians' rights and freedoms?",
    options: [
      "The Canadian Charter of Rights and Freedoms",
      "The British North America Act",
      "The Constitution Act of 1867",
      "The Statute of Westminster"
    ],
    correctAnswer: "The Canadian Charter of Rights and Freedoms",
    explanation: "The Canadian Charter of Rights and Freedoms, part of the Constitution Act 1982, protects the rights and freedoms of all Canadians.",
    category: "Rights"
  },
  {
    id: 24,
    question: "What is the meaning of the term 'responsible government'?",
    options: [
      "The government must resign if it loses the confidence of Parliament",
      "The government must balance its budget",
      "The government must consult citizens on all decisions",
      "The government must follow international law"
    ],
    correctAnswer: "The government must resign if it loses the confidence of Parliament",
    explanation: "Responsible government means that the government must maintain the confidence of the elected Parliament to stay in power.",
    category: "Government"
  },
  {
    id: 25,
    question: "What is the significance of the Red Ensign in Canadian history?",
    options: [
      "It was Canada's former flag",
      "It's the current provincial flag of Ontario",
      "It represents the Canadian Navy",
      "It's a symbol of the RCMP"
    ],
    correctAnswer: "It was Canada's former flag",
    explanation: "The Red Ensign served as Canada's unofficial flag until it was replaced by the current Maple Leaf flag in 1965.",
    category: "History"
  },
  {
    id: 26,
    question: "What is Canada's national summer sport?",
    options: ["Lacrosse", "Baseball", "Soccer", "Cricket"],
    correctAnswer: "Lacrosse",
    explanation: "Lacrosse was declared Canada's national summer sport in 1994, the same year hockey was declared the national winter sport.",
    category: "Symbols"
  },
  {
    id: 27,
    question: "Which Indigenous peoples are recognized in the Constitution?",
    options: [
      "First Nations, Inuit, and Métis",
      "Only First Nations",
      "First Nations and Inuit only",
      "First Nations and Métis only"
    ],
    correctAnswer: "First Nations, Inuit, and Métis",
    explanation: "The Constitution recognizes three groups of Indigenous peoples: First Nations, Inuit, and Métis.",
    category: "Rights"
  },
  {
    id: 28,
    question: "What is the name of Canada's federal parliament building?",
    options: ["Parliament Hill", "House of Commons", "Centre Block", "Peace Tower"],
    correctAnswer: "Centre Block",
    explanation: "Centre Block is the main building of the Canadian parliamentary complex on Parliament Hill in Ottawa.",
    category: "Government"
  },
  {
    id: 29,
    question: "Which province has French as its only official language?",
    options: ["Quebec", "New Brunswick", "Ontario", "Manitoba"],
    correctAnswer: "Quebec",
    explanation: "Quebec is the only province where French is the sole official language, as established by the Charter of the French Language.",
    category: "Language"
  },
  {
    id: 30,
    question: "What is the significance of Vimy Ridge in Canadian history?",
    options: [
      "A major WWI victory that helped forge Canadian identity",
      "The location of the first Parliament",
      "Where the Constitution was signed",
      "Site of the first European settlement"
    ],
    correctAnswer: "A major WWI victory that helped forge Canadian identity",
    explanation: "The Battle of Vimy Ridge in 1917 was a defining moment in Canadian history, marking Canada's emergence as a nation.",
    category: "History"
  },
  {
    id: 31,
    question: "What is the purpose of the Official Languages Act?",
    options: [
      "To make English and French equal in federal institutions",
      "To make everyone bilingual",
      "To eliminate other languages",
      "To promote only French"
    ],
    correctAnswer: "To make English and French equal in federal institutions",
    explanation: "The Official Languages Act ensures equality of English and French in Parliament, federal courts, and federal institutions.",
    category: "Language"
  },
  {
    id: 32,
    question: "What is the role of the Opposition in Parliament?",
    options: [
      "To question and challenge the government",
      "To support all government decisions",
      "To represent only their constituents",
      "To manage provincial affairs"
    ],
    correctAnswer: "To question and challenge the government",
    explanation: "The Official Opposition's role is to question government actions and present alternatives to government proposals.",
    category: "Government"
  },
  {
    id: 33,
    question: "Which territory has the largest Indigenous population by percentage?",
    options: ["Nunavut", "Northwest Territories", "Yukon", "None of these"],
    correctAnswer: "Nunavut",
    explanation: "Nunavut has the largest Indigenous population by percentage, with Inuit making up about 85% of the population.",
    category: "Demographics"
  },
  {
    id: 34,
    question: "What is the significance of the Royal Proclamation of 1763?",
    options: [
      "It established Indigenous land rights",
      "It created Canada",
      "It established the RCMP",
      "It declared independence from Britain"
    ],
    correctAnswer: "It established Indigenous land rights",
    explanation: "The Royal Proclamation of 1763 established the basis for Indigenous land rights in Canada and the treaty-making process.",
    category: "Rights"
  },
  {
    id: 35,
    question: "What is the meaning of the term 'confederation' in Canadian history?",
    options: [
      "The union of British colonies into Canada",
      "Independence from Britain",
      "The creation of provinces",
      "The establishment of democracy"
    ],
    correctAnswer: "The union of British colonies into Canada",
    explanation: "Confederation refers to the process by which British colonies united to form the Dominion of Canada in 1867.",
    category: "History"
  },
  {
    id: 36,
    question: "What is the role of the Senate in Canada?",
    options: [
      "To review and revise legislation",
      "To create new laws independently",
      "To elect the Prime Minister",
      "To manage foreign affairs"
    ],
    correctAnswer: "To review and revise legislation",
    explanation: "The Senate is Canada's upper house, responsible for reviewing, amending, and either approving or rejecting bills passed by the House of Commons.",
    category: "Government"
  },
  {
    id: 37,
    question: "What is the significance of the Multiculturalism Act?",
    options: [
      "It recognizes and promotes cultural diversity",
      "It restricts immigration",
      "It establishes official languages",
      "It defines citizenship requirements"
    ],
    correctAnswer: "It recognizes and promotes cultural diversity",
    explanation: "The Canadian Multiculturalism Act of 1988 recognizes and promotes the understanding that multiculturalism reflects Canada's diversity.",
    category: "Rights"
  },
  {
    id: 38,
    question: "Which document outlines the rights of Indigenous peoples in Canada?",
    options: [
      "Section 35 of the Constitution Act",
      "The Charter of Rights",
      "The Indian Act",
      "The Citizenship Act"
    ],
    correctAnswer: "Section 35 of the Constitution Act",
    explanation: "Section 35 of the Constitution Act, 1982, recognizes and affirms Aboriginal and treaty rights of Indigenous peoples.",
    category: "Rights"
  },
  {
    id: 39,
    question: "What is the significance of D-Day for Canada?",
    options: [
      "Canadian troops played a key role in the Normandy invasion",
      "Canada declared war on Germany",
      "Canada gained independence",
      "The Constitution was signed"
    ],
    correctAnswer: "Canadian troops played a key role in the Normandy invasion",
    explanation: "On D-Day (June 6, 1944), Canadian forces played a crucial role in the Allied invasion of Normandy, landing on Juno Beach.",
    category: "History"
  },
  {
    id: 40,
    question: "What is the purpose of the Canadian Human Rights Act?",
    options: [
      "To prevent discrimination in federal jurisdiction",
      "To establish voting rights",
      "To regulate immigration",
      "To manage healthcare"
    ],
    correctAnswer: "To prevent discrimination in federal jurisdiction",
    explanation: "The Canadian Human Rights Act prohibits discrimination in areas of federal jurisdiction and promotes equal opportunity.",
    category: "Rights"
  },
  {
    id: 41,
    question: "What is the significance of the Medicine Line?",
    options: [
      "The 49th parallel border with the US",
      "A traditional healing route",
      "A railway line",
      "A trade route"
    ],
    correctAnswer: "The 49th parallel border with the US",
    explanation: "The Medicine Line is the Indigenous peoples' name for the 49th parallel border between Canada and the US.",
    category: "Geography"
  },
  {
    id: 42,
    question: "What was the Underground Railroad?",
    options: [
      "A network helping escaped slaves reach Canada",
      "Canada's first subway system",
      "A secret military tunnel",
      "An early trading route"
    ],
    correctAnswer: "A network helping escaped slaves reach Canada",
    explanation: "The Underground Railroad was a network of secret routes and safe houses helping escaped slaves reach freedom in Canada.",
    category: "History"
  },
  {
    id: 43,
    question: "What is the significance of the Persons Case?",
    options: [
      "It recognized women as persons under the law",
      "It established voting rights",
      "It created citizenship rules",
      "It defined marriage rights"
    ],
    correctAnswer: "It recognized women as persons under the law",
    explanation: "The 1929 Persons Case ruled that women were 'persons' under the law and could be appointed to the Senate.",
    category: "Rights"
  },
  {
    id: 44,
    question: "Which province is known as 'Canada's Ocean Playground'?",
    options: ["Nova Scotia", "Prince Edward Island", "New Brunswick", "Newfoundland and Labrador"],
    correctAnswer: "Nova Scotia",
    explanation: "Nova Scotia's license plates carry the slogan 'Canada's Ocean Playground' due to its extensive coastline and maritime heritage.",
    category: "Geography"
  },
  {
    id: 45,
    question: "What is the purpose of the Clarity Act?",
    options: [
      "To set rules for provincial separation",
      "To establish language rights",
      "To regulate trade",
      "To manage immigration"
    ],
    correctAnswer: "To set rules for provincial separation",
    explanation: "The Clarity Act (2000) sets the rules for how the federal government would negotiate potential provincial separation.",
    category: "Government"
  },
  {
    id: 46,
    question: "What is the significance of Louis Riel in Canadian history?",
    options: [
      "A Métis leader who fought for minority rights",
      "The first Prime Minister",
      "A famous explorer",
      "A Supreme Court judge"
    ],
    correctAnswer: "A Métis leader who fought for minority rights",
    explanation: "Louis Riel was a Métis leader who fought for minority rights and led the Red River and North-West Rebellions.",
    category: "History"
  },
  {
    id: 47,
    question: "What is the purpose of the Indian Act?",
    options: [
      "To govern matters pertaining to First Nations status",
      "To establish trade with India",
      "To regulate immigration",
      "To manage foreign relations"
    ],
    correctAnswer: "To govern matters pertaining to First Nations status",
    explanation: "The Indian Act is a Canadian law that governs matters pertaining to First Nations status, bands, and reserves.",
    category: "Rights"
  },
  {
    id: 48,
    question: "What is the role of the Bank of Canada?",
    options: [
      "To manage monetary policy",
      "To provide personal banking",
      "To collect taxes",
      "To fund government programs"
    ],
    correctAnswer: "To manage monetary policy",
    explanation: "The Bank of Canada is Canada's central bank, responsible for monetary policy, printing money, and maintaining financial stability.",
    category: "Government"
  },
  {
    id: 49,
    question: "What is the significance of the Quiet Revolution?",
    options: [
      "A period of rapid change in Quebec",
      "A peaceful protest movement",
      "A technological advancement",
      "An environmental initiative"
    ],
    correctAnswer: "A period of rapid change in Quebec",
    explanation: "The Quiet Revolution was a period of rapid social and political change in Quebec during the 1960s.",
    category: "History"
  },
  {
    id: 50,
    question: "What is the role of Elections Canada?",
    options: [
      "To administer federal elections",
      "To choose the Prime Minister",
      "To create election laws",
      "To register political parties only"
    ],
    correctAnswer: "To administer federal elections",
    explanation: "Elections Canada is an independent agency responsible for conducting federal elections and referendums.",
    category: "Government"
  },
  {
    id: 51,
    question: "What is the significance of the Canadian Pacific Railway?",
    options: [
      "It united Canada from coast to coast",
      "It connected Canada to the US",
      "It was the first subway system",
      "It was built for mining"
    ],
    correctAnswer: "It united Canada from coast to coast",
    explanation: "The Canadian Pacific Railway, completed in 1885, fulfilled a promise to British Columbia and united Canada from coast to coast.",
    category: "History"
  },
  {
    id: 52,
    question: "What is the purpose of the Canada Health Act?",
    options: [
      "To ensure universal healthcare access",
      "To train doctors",
      "To build hospitals",
      "To regulate medical research"
    ],
    correctAnswer: "To ensure universal healthcare access",
    explanation: "The Canada Health Act ensures universal access to healthcare through a publicly funded healthcare system.",
    category: "Rights"
  },
  {
    id: 53,
    question: "Which province was the first to grant women the right to vote?",
    options: ["Manitoba", "Ontario", "Quebec", "British Columbia"],
    correctAnswer: "Manitoba",
    explanation: "Manitoba was the first province to grant women the right to vote in 1916.",
    category: "Rights"
  },
  {
    id: 54,
    question: "What is the significance of Nunavut's creation?",
    options: [
      "It gave Inuit people self-government",
      "It created a new military base",
      "It established a trade route",
      "It opened mining operations"
    ],
    correctAnswer: "It gave Inuit people self-government",
    explanation: "Nunavut was created in 1999 as a result of the largest land claim agreement in Canadian history, giving Inuit people self-government.",
    category: "Government"
  },
  {
    id: 55,
    question: "What is the purpose of the Official Languages Commissioner?",
    options: [
      "To ensure language rights are respected",
      "To teach languages",
      "To translate documents only",
      "To conduct language tests"
    ],
    correctAnswer: "To ensure language rights are respected",
    explanation: "The Official Languages Commissioner ensures that the language rights of Canadians are respected in federal institutions.",
    category: "Language"
  },
  {
    id: 56,
    question: "What is the significance of the October Crisis?",
    options: [
      "A period of civil unrest in Quebec",
      "A financial crisis",
      "A natural disaster",
      "A military conflict"
    ],
    correctAnswer: "A period of civil unrest in Quebec",
    explanation: "The October Crisis of 1970 was a period of civil unrest in Quebec that led to the only peacetime use of the War Measures Act.",
    category: "History"
  },
  {
    id: 57,
    question: "What is the purpose of the Canada Pension Plan (CPP)?",
    options: [
      "To provide retirement income",
      "To fund healthcare",
      "To support education",
      "To build infrastructure"
    ],
    correctAnswer: "To provide retirement income",
    explanation: "The Canada Pension Plan provides retirement, disability, and survivor benefits to contributing Canadians.",
    category: "Rights"
  },
  {
    id: 58,
    question: "What is the significance of the Meech Lake Accord?",
    options: [
      "An unsuccessful constitutional amendment",
      "A environmental protection treaty",
      "A trade agreement",
      "A military alliance"
    ],
    correctAnswer: "An unsuccessful constitutional amendment",
    explanation: "The Meech Lake Accord was an unsuccessful attempt to gain Quebec's acceptance of the 1982 Constitution Act.",
    category: "History"
  },
  {
    id: 59,
    question: "What is the purpose of the Canadian Radio-television and Telecommunications Commission (CRTC)?",
    options: [
      "To regulate broadcasting and telecommunications",
      "To produce TV shows",
      "To operate radio stations",
      "To sell telecommunications equipment"
    ],
    correctAnswer: "To regulate broadcasting and telecommunications",
    explanation: "The CRTC regulates and supervises Canadian broadcasting and telecommunications systems.",
    category: "Government"
  },
  {
    id: 60,
    question: "What is the significance of the Group of Seven?",
    options: [
      "Canadian landscape painters",
      "Political leaders",
      "First Nations chiefs",
      "Economic advisors"
    ],
    correctAnswer: "Canadian landscape painters",
    explanation: "The Group of Seven were famous Canadian landscape painters who helped develop a distinctive Canadian art style.",
    category: "Culture"
  },
  {
    id: 61,
    question: "What is the significance of the Red River Rebellion?",
    options: [
      "A Métis uprising to protect their rights",
      "A dispute over fishing rights",
      "A workers' strike",
      "A border conflict with the US"
    ],
    correctAnswer: "A Métis uprising to protect their rights",
    explanation: "The Red River Rebellion of 1869-70 was led by Louis Riel to protect Métis rights and land as Manitoba joined Confederation.",
    category: "History"
  },
  {
    id: 62,
    question: "What is the purpose of the Employment Insurance (EI) program?",
    options: [
      "To provide temporary financial help to unemployed Canadians",
      "To create new jobs",
      "To train workers",
      "To regulate employment standards"
    ],
    correctAnswer: "To provide temporary financial help to unemployed Canadians",
    explanation: "Employment Insurance provides temporary financial assistance to unemployed Canadians while they look for work or upgrade their skills.",
    category: "Rights"
  },
  {
    id: 63,
    question: "Which province is known as 'The Land of Living Skies'?",
    options: ["Saskatchewan", "Alberta", "Manitoba", "Ontario"],
    correctAnswer: "Saskatchewan",
    explanation: "Saskatchewan's license plates carry the slogan 'Land of Living Skies' due to its dramatic cloud formations and northern lights.",
    category: "Geography"
  },
  {
    id: 64,
    question: "What is the significance of the Famous Five?",
    options: [
      "Women who fought for equal rights",
      "First Nations chiefs",
      "Supreme Court judges",
      "Military leaders"
    ],
    correctAnswer: "Women who fought for equal rights",
    explanation: "The Famous Five were women who fought to have women legally recognized as 'persons' in the 1929 Persons Case.",
    category: "Rights"
  },
  {
    id: 65,
    question: "What is the purpose of the Citizenship Act?",
    options: [
      "To define who can be a Canadian citizen",
      "To regulate immigration",
      "To establish voting rights",
      "To manage foreign relations"
    ],
    correctAnswer: "To define who can be a Canadian citizen",
    explanation: "The Citizenship Act defines who is eligible for Canadian citizenship and how it can be obtained or lost.",
    category: "Rights"
  },
  {
    id: 66,
    question: "What is the significance of Pier 21 in Canadian history?",
    options: [
      "Main immigration entry point for newcomers",
      "Major trading port",
      "Military base",
      "First parliament building"
    ],
    correctAnswer: "Main immigration entry point for newcomers",
    explanation: "Pier 21 in Halifax was the main entry point for immigrants to Canada from 1928 to 1971, known as Canada's Ellis Island.",
    category: "History"
  },
  {
    id: 67,
    question: "What is the purpose of the Canada Labour Code?",
    options: [
      "To protect workers' rights in federal industries",
      "To set minimum wage for all workers",
      "To create jobs",
      "To manage international trade"
    ],
    correctAnswer: "To protect workers' rights in federal industries",
    explanation: "The Canada Labour Code sets standards for working conditions and workers' rights in federally regulated industries.",
    category: "Rights"
  },
  {
    id: 68,
    question: "What is the significance of the Château Frontenac?",
    options: [
      "A symbol of Quebec City's heritage",
      "The first Parliament building",
      "A military fortress",
      "A First Nations meeting place"
    ],
    correctAnswer: "A symbol of Quebec City's heritage",
    explanation: "The Château Frontenac is an iconic hotel and symbol of Quebec City, recognized as a National Historic Site.",
    category: "Culture"
  },
  {
    id: 69,
    question: "What is the purpose of the Canadian Security Intelligence Service (CSIS)?",
    options: [
      "To gather intelligence and ensure national security",
      "To police cities",
      "To guard the border",
      "To protect wildlife"
    ],
    correctAnswer: "To gather intelligence and ensure national security",
    explanation: "CSIS is Canada's primary intelligence agency, responsible for gathering intelligence and protecting national security.",
    category: "Government"
  },
  {
    id: 70,
    question: "What is the significance of the Rideau Canal?",
    options: [
      "A historic waterway and UNESCO site",
      "A modern shipping route",
      "A power generation facility",
      "A water treatment system"
    ],
    correctAnswer: "A historic waterway and UNESCO site",
    explanation: "The Rideau Canal is a UNESCO World Heritage Site and the oldest continuously operated canal system in North America.",
    category: "Culture"
  },
  {
    id: 71,
    question: "What is the purpose of the Access to Information Act?",
    options: [
      "To give citizens access to government records",
      "To regulate internet access",
      "To control media content",
      "To manage telecommunications"
    ],
    correctAnswer: "To give citizens access to government records",
    explanation: "The Access to Information Act gives Canadian citizens the right to access records held by federal government institutions.",
    category: "Rights"
  },
  {
    id: 72,
    question: "What is the significance of the Calgary Stampede?",
    options: [
      "A major cultural celebration of western heritage",
      "A political convention",
      "A trade fair",
      "A film festival"
    ],
    correctAnswer: "A major cultural celebration of western heritage",
    explanation: "The Calgary Stampede is a world-famous rodeo and festival celebrating western Canadian culture and heritage.",
    category: "Culture"
  },
  {
    id: 73,
    question: "What is the purpose of the Canadian Armed Forces?",
    options: [
      "To defend Canada and support international peace",
      "To enforce domestic laws",
      "To control immigration",
      "To manage natural resources"
    ],
    correctAnswer: "To defend Canada and support international peace",
    explanation: "The Canadian Armed Forces defend Canada, support international peace missions, and assist in domestic emergencies.",
    category: "Government"
  },
  {
    id: 74,
    question: "What is the significance of the Quebec Winter Carnival?",
    options: [
      "The largest winter carnival in the world",
      "A political gathering",
      "A trade show",
      "A sports competition"
    ],
    correctAnswer: "The largest winter carnival in the world",
    explanation: "The Quebec Winter Carnival is the largest winter carnival in the world, celebrating Quebec's winter culture and heritage.",
    category: "Culture"
  },
  {
    id: 75,
    question: "What is the purpose of the Canada Elections Act?",
    options: [
      "To regulate federal elections",
      "To appoint judges",
      "To manage provincial elections",
      "To control political parties"
    ],
    correctAnswer: "To regulate federal elections",
    explanation: "The Canada Elections Act sets the rules for federal elections and ensures they are fair and democratic.",
    category: "Government"
  },
  {
    id: 76,
    question: "What is the significance of the CN Tower?",
    options: [
      "A symbol of Canadian engineering achievement",
      "The first television station",
      "A government office building",
      "A historic fort"
    ],
    correctAnswer: "A symbol of Canadian engineering achievement",
    explanation: "The CN Tower in Toronto was the world's tallest free-standing structure until 2007 and symbolizes Canadian engineering excellence.",
    category: "Culture"
  },
  {
    id: 77,
    question: "What is the purpose of the Canadian Human Rights Tribunal?",
    options: [
      "To hear discrimination cases",
      "To create new laws",
      "To manage immigration",
      "To regulate business"
    ],
    correctAnswer: "To hear discrimination cases",
    explanation: "The Canadian Human Rights Tribunal hears cases of discrimination under the Canadian Human Rights Act.",
    category: "Rights"
  },
  {
    id: 78,
    question: "What is the significance of the Royal Canadian Mint?",
    options: [
      "Produces Canada's coins and medals",
      "Prints paper money",
      "Sets interest rates",
      "Collects taxes"
    ],
    correctAnswer: "Produces Canada's coins and medals",
    explanation: "The Royal Canadian Mint produces all of Canada's circulation coins and commemorative medals.",
    category: "Government"
  },
  {
    id: 79,
    question: "What is the purpose of the Canada Revenue Agency (CRA)?",
    options: [
      "To collect taxes and deliver benefits",
      "To create jobs",
      "To regulate banks",
      "To manage trade"
    ],
    correctAnswer: "To collect taxes and deliver benefits",
    explanation: "The CRA administers tax laws and delivers social and economic benefit programs through the tax system.",
    category: "Government"
  },
  {
    id: 80,
    question: "What is the significance of the National War Memorial?",
    options: [
      "Honors Canadians who died in military service",
      "Commemorates Confederation",
      "Celebrates Olympic athletes",
      "Recognizes prime ministers"
    ],
    correctAnswer: "Honors Canadians who died in military service",
    explanation: "The National War Memorial in Ottawa honors all Canadians who died in military service to their country.",
    category: "Culture"
  },
  {
    id: 81,
    question: "What is the purpose of the Competition Act?",
    options: [
      "To maintain fair market competition",
      "To regulate sports",
      "To manage education",
      "To control immigration"
    ],
    correctAnswer: "To maintain fair market competition",
    explanation: "The Competition Act maintains and encourages fair competition in the Canadian marketplace.",
    category: "Government"
  },
  {
    id: 82,
    question: "What is the significance of the Order of Canada?",
    options: [
      "Highest civilian honor in Canada",
      "Military decoration",
      "Academic award",
      "Sports achievement"
    ],
    correctAnswer: "Highest civilian honor in Canada",
    explanation: "The Order of Canada is the country's highest civilian honor, recognizing outstanding achievement and service.",
    category: "Culture"
  },
  {
    id: 83,
    question: "What is the purpose of the Privacy Act?",
    options: [
      "To protect personal information held by government",
      "To regulate internet use",
      "To control media",
      "To manage telecommunications"
    ],
    correctAnswer: "To protect personal information held by government",
    explanation: "The Privacy Act protects personal information held by federal government institutions and gives citizens right of access.",
    category: "Rights"
  },
  {
    id: 84,
    question: "What is the significance of the Canadian Broadcasting Corporation (CBC)?",
    options: [
      "National public broadcaster",
      "Private media company",
      "Government department",
      "International news agency"
    ],
    correctAnswer: "National public broadcaster",
    explanation: "The CBC is Canada's national public broadcaster, providing Canadian programming in English and French.",
    category: "Culture"
  },
  {
    id: 85,
    question: "What is the purpose of the Immigration and Refugee Board?",
    options: [
      "To make decisions on immigration and refugee matters",
      "To control borders",
      "To issue passports",
      "To manage customs"
    ],
    correctAnswer: "To make decisions on immigration and refugee matters",
    explanation: "The Immigration and Refugee Board is an independent tribunal that makes decisions on immigration and refugee matters.",
    category: "Government"
  },
  {
    id: 86,
    question: "What is the significance of the Canadian Museum of History?",
    options: [
      "Preserves and presents Canadian history",
      "Art gallery",
      "Science center",
      "Sports hall of fame"
    ],
    correctAnswer: "Preserves and presents Canadian history",
    explanation: "The Canadian Museum of History is the country's largest and most popular museum, showcasing Canadian history and culture.",
    category: "Culture"
  },
  {
    id: 87,
    question: "What is the purpose of the Canada Student Loans Program?",
    options: [
      "To help students pay for post-secondary education",
      "To fund universities",
      "To hire teachers",
      "To build schools"
    ],
    correctAnswer: "To help students pay for post-secondary education",
    explanation: "The Canada Student Loans Program provides financial assistance to students pursuing post-secondary education.",
    category: "Rights"
  },
  {
    id: 88,
    question: "What is the significance of the Canadian National Vimy Memorial?",
    options: [
      "Commemorates WWI battle and sacrifice",
      "Celebrates Confederation",
      "Honors prime ministers",
      "Marks independence"
    ],
    correctAnswer: "Commemorates WWI battle and sacrifice",
    explanation: "The Canadian National Vimy Memorial in France commemorates Canadian sacrifice in WWI, particularly at Vimy Ridge.",
    category: "History"
  },
  {
    id: 89,
    question: "What is the purpose of the Canada Mortgage and Housing Corporation (CMHC)?",
    options: [
      "To help Canadians access housing",
      "To build roads",
      "To manage parks",
      "To regulate banking"
    ],
    correctAnswer: "To help Canadians access housing",
    explanation: "CMHC helps Canadians access affordable housing and contributes to housing market stability.",
    category: "Government"
  },
  {
    id: 90,
    question: "What is the significance of the Canadian Charter of Rights and Freedoms?",
    options: [
      "Protects fundamental rights and freedoms",
      "Regulates trade",
      "Controls immigration",
      "Manages natural resources"
    ],
    correctAnswer: "Protects fundamental rights and freedoms",
    explanation: "The Charter is part of Canada's Constitution and protects the fundamental rights and freedoms of all Canadians.",
    category: "Rights"
  },
  {
    id: 91,
    question: "What is the purpose of the Canada Council for the Arts?",
    options: [
      "To support Canadian artists and arts organizations",
      "To build theaters",
      "To regulate media",
      "To manage museums"
    ],
    correctAnswer: "To support Canadian artists and arts organizations",
    explanation: "The Canada Council for the Arts provides grants and services to support Canadian artists and arts organizations.",
    category: "Culture"
  },
  {
    id: 92,
    question: "What is the significance of the Canadian Pacific Railway?",
    options: [
      "Connected Canada from coast to coast",
      "First subway system",
      "Urban transit network",
      "International trade route"
    ],
    correctAnswer: "Connected Canada from coast to coast",
    explanation: "The Canadian Pacific Railway, completed in 1885, physically united Canada and was crucial to national development.",
    category: "History"
  },
  {
    id: 93,
    question: "What is the purpose of the Canada Pension Plan Investment Board?",
    options: [
      "To invest pension contributions",
      "To provide healthcare",
      "To manage employment",
      "To regulate banking"
    ],
    correctAnswer: "To invest pension contributions",
    explanation: "The CPPIB invests Canada Pension Plan contributions to help ensure long-term sustainability of the pension fund.",
    category: "Government"
  },
  {
    id: 94,
    question: "What is the significance of the National Film Board of Canada?",
    options: [
      "Produces and distributes Canadian films",
      "Regulates movie theaters",
      "Issues film ratings",
      "Controls television"
    ],
    correctAnswer: "Produces and distributes Canadian films",
    explanation: "The National Film Board produces and distributes distinctive Canadian films and other audiovisual works.",
    category: "Culture"
  },
  {
    id: 95,
    question: "What is the purpose of the Official Languages Act?",
    options: [
      "To ensure equality of English and French",
      "To eliminate other languages",
      "To promote only French",
      "To restrict language use"
    ],
    correctAnswer: "To ensure equality of English and French",
    explanation: "The Official Languages Act ensures equality of status for English and French in federal institutions.",
    category: "Language"
  },
  {
    id: 96,
    question: "What is the significance of the Canadian War Museum?",
    options: [
      "Preserves Canada's military history",
      "Government office building",
      "Training facility",
      "Research center"
    ],
    correctAnswer: "Preserves Canada's military history",
    explanation: "The Canadian War Museum preserves and presents Canada's military history and its impact on the nation.",
    category: "Culture"
  },
  {
    id: 97,
    question: "What is the purpose of the Canada Border Services Agency?",
    options: [
      "To manage Canada's borders",
      "To issue passports",
      "To regulate trade",
      "To control airlines"
    ],
    correctAnswer: "To manage Canada's borders",
    explanation: "The CBSA manages Canada's borders, enforcing laws relating to trade and travel, immigration, and border security.",
    category: "Government"
  },
  {
    id: 98,
    question: "What is the significance of the Bluenose schooner?",
    options: [
      "A symbol on the Canadian dime",
      "A military vessel",
      "A passenger ship",
      "A modern icebreaker"
    ],
    correctAnswer: "A symbol on the Canadian dime",
    explanation: "The Bluenose, a famous racing schooner, is featured on the Canadian dime and symbolizes Maritime heritage.",
    category: "Symbols"
  },
  {
    id: 99,
    question: "What is the purpose of the Canadian Transportation Agency?",
    options: [
      "To regulate transportation systems",
      "To build roads",
      "To operate airlines",
      "To manage traffic"
    ],
    correctAnswer: "To regulate transportation systems",
    explanation: "The Canadian Transportation Agency regulates the national transportation system to ensure it is efficient and accessible.",
    category: "Government"
  },
  {
    id: 100,
    question: "What is the significance of the Last Spike?",
    options: [
      "Completion of the transcontinental railway",
      "First oil discovery",
      "Mining milestone",
      "Construction achievement"
    ],
    correctAnswer: "Completion of the transcontinental railway",
    explanation: "The Last Spike, driven in 1885, symbolizes the completion of the Canadian Pacific Railway and the unification of Canada.",
    category: "History"
  }
];

// Function to get a random subset of questions
export const getRandomQuestions = (count: number, category: string = 'all'): Question[] => {
  let availableQuestions = category === 'all' 
    ? allQuestions 
    : allQuestions.filter(q => q.category === category);

  // Shuffle questions using Fisher-Yates algorithm
  const shuffled = [...availableQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Return requested number of questions or all if count is larger than available questions
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

// Export a default set of questions for backward compatibility
export const questions = getRandomQuestions(20); 