export const resourceGuides = [
  {
    id: "topic-selection",
    number: "01",
    category: "Research Foundations",
    title: "Choosing a Research Topic",
    shortTitle: "Topic Selection",
    description:
      "Learn how to move from a broad area of interest to a focused, researchable and feasible research problem.",
    introduction:
      "Choosing a research topic is the first major decision in a research project. A strong topic should be relevant to your field, supported by sufficient academic literature, narrow enough to investigate and feasible within your available time, data, skills and resources.",
    sections: [
      {
        id: "what-makes-a-good-topic",
        title: "What makes a good research topic?",
        content: [
          "A good research topic is not simply something that sounds interesting. It should give you a realistic opportunity to investigate a specific issue using appropriate academic evidence.",
          "A suitable topic normally balances academic interest with practical feasibility. You should be able to find relevant literature, define what or whom you will study, establish a manageable scope and access the evidence required for the project.",
          "There is no single formula that makes a topic suitable for every discipline. The expectations of an undergraduate assignment, master's dissertation and doctoral project may differ, as can the requirements of different academic fields.",
        ],
        points: [
          "Relevant to your field or academic programme",
          "Specific enough to investigate in meaningful depth",
          "Supported by sufficient academic literature",
          "Possible to study using available data or participants",
          "Feasible within your deadline and resources",
          "Appropriate for your academic level",
          "Ethically acceptable",
          "Capable of leading to a clear research question",
        ],
        note: "A topic can be interesting and important but still be unsuitable if it is too broad, lacks accessible evidence or cannot be completed within the available constraints.",
      },

      {
        id: "broad-to-specific",
        title: "Move from a broad area to a focused topic",
        content: [
          "Students often begin with a broad area of interest rather than a fully formed research topic. This is normal. The next step is to narrow the area by identifying a particular issue, population, location, organisation, period, variable or relationship that can realistically be investigated.",
          "Preliminary reading is important at this stage because it helps you understand the major themes and debates within the field before you decide exactly what to investigate.",
        ],
        example: {
          label: "Example",
          steps: [
            "Business",
            "Digital Marketing",
            "Social Media Marketing",
            "Instagram Marketing",
            "Instagram marketing among small businesses",
            "Instagram marketing and customer engagement",
            "Instagram marketing and customer engagement among small fashion businesses in Kathmandu",
          ],
        },
        points: [
          "Identify the broad subject area",
          "Explore relevant subtopics",
          "Identify a specific issue or relationship",
          "Define the population or unit being studied",
          "Consider geographical or organisational boundaries",
          "Consider a relevant timeframe where appropriate",
        ],
      },

      {
        id: "topic-problem-question",
        title: "Topic, problem, question and objective are different",
        content: [
          "These concepts are connected, but they are not interchangeable. Confusing them can create weak proposals and inconsistencies between the research problem, questions, objectives and methodology.",
          "The topic describes the broad area. The research problem identifies the particular issue or uncertainty that requires investigation. The research question states what the study is trying to find out. The research objective describes what the researcher intends to do to answer that question.",
        ],
        comparison: [
          {
            term: "Research topic",
            meaning: "The broad subject area being investigated.",
            example: "Instagram marketing and customer engagement",
          },
          {
            term: "Research problem",
            meaning:
              "The specific issue, uncertainty, inconsistency or knowledge gap that requires investigation.",
            example:
              "Small fashion businesses are increasingly using Instagram, but evidence about which forms of Instagram activity are associated with customer engagement in the local context remains limited.",
          },
          {
            term: "Research question",
            meaning: "The specific question the study will investigate.",
            example:
              "How does Instagram marketing influence customer engagement among small fashion businesses in Kathmandu?",
          },
          {
            term: "Research objective",
            meaning:
              "The specific action the researcher will undertake to address the research question.",
            example:
              "To examine the relationship between Instagram marketing activities and customer engagement among small fashion businesses in Kathmandu.",
          },
        ],
      },

      {
        id: "preliminary-research",
        title: "Conduct preliminary research",
        content: [
          "Do not finalise a topic simply because it sounds interesting. Before committing to it, read a small number of relevant academic sources to understand the current state of research.",
          "At this stage, you are not trying to complete your full literature review. The purpose is to become familiar with important concepts, debates, findings, terminology and possible directions for your study.",
          "Recent research can help you understand the current state of the field, while influential earlier studies can help establish important theories, concepts or foundations.",
        ],
        points: [
          "Start with relevant academic databases and scholarly sources",
          "Identify important keywords and alternative terminology",
          "Read recent studies in the area",
          "Identify influential studies where relevant",
          "Look at the main arguments and findings",
          "Pay attention to limitations and recommendations for future research",
          "Keep a record of useful sources and ideas",
        ],
        note: "Reading to develop a research question is different from reading to answer the final research question. At this stage, focus on understanding the field and identifying possible directions.",
      },

      {
        id: "finding-gap",
        title: "Finding a research gap",
        content: [
          "A research gap is an area where existing knowledge is incomplete, limited, inconsistent or insufficient for the context being investigated.",
          "A research gap does not necessarily mean that nobody has ever studied the topic. A study may contribute by examining an existing issue in a different population, location or context, addressing conflicting findings, using a different approach or investigating an aspect that previous studies have not adequately examined.",
          "The gap should emerge from your reading rather than being invented simply to make a topic appear original.",
        ],
        points: [
          "A population that has received limited attention",
          "A geographical or contextual gap",
          "Conflicting findings between studies",
          "A methodological limitation in previous work",
          "A theoretical perspective that has not been sufficiently examined",
          "A relationship that remains insufficiently understood",
          "A limitation or recommendation identified by previous researchers",
        ],
        example: {
          label: "Example",
          steps: [
            "Weak claim: No research exists on Instagram marketing.",
            "Better approach: Existing studies have examined Instagram marketing and customer engagement in several business contexts.",
            "Possible research direction: Previous findings may be less clear for small fashion businesses in a specific local context.",
            "Research question: This leads to a focused question about the relationship between Instagram marketing and customer engagement in that context.",
          ],
        },
      },

      {
        id: "research-question",
        title: "Turning the topic into a research question",
        content: [
          "A research question states the specific issue or problem that the research will investigate. It should be clear, focused, researchable and feasible within the scope of the project.",
          "Research questions are normally refined rather than discovered in one attempt. You may write several versions before reaching a question that properly matches the literature, research objectives, methodology, available evidence and academic requirements.",
          "The wording should reflect what your study actually intends to investigate. A question that is too broad may be impossible to answer thoroughly, while one that is too narrow may not provide enough scope for meaningful analysis.",
        ],
        points: [
          "What exactly am I trying to find out?",
          "Who or what is being studied?",
          "Where is the research situated?",
          "Which variables, concepts or experiences matter?",
          "What evidence will be required?",
          "Can I realistically obtain that evidence?",
          "Can the question be answered within my word limit and timeframe?",
          "Does the question require analysis rather than only simple description?",
        ],
        example: {
          label: "Improve the question",
          steps: [
            "Too broad: What is the impact of social media on business?",
            "Still broad: How does social media affect small businesses?",
            "More focused: How does social media marketing influence customer engagement among small businesses?",
            "Contextualised: How does Instagram marketing influence customer engagement among small fashion businesses in Kathmandu?",
          ],
        },
      },

      {
        id: "feasibility",
        title: "Check whether the topic is feasible",
        content: [
          "A topic can be academically interesting but still unsuitable for your project if you cannot realistically complete the research.",
          "Before finalising the topic, consider whether you can access the required participants, organisations, documents or datasets. Also consider the time available for data collection, analysis and writing.",
          "Feasibility should be considered alongside academic value. A research project needs enough time, appropriate evidence and practical access to be completed successfully.",
        ],
        points: [
          "Do I have enough time to complete the project?",
          "Can I access the required participants or data?",
          "Will organisations permit access where necessary?",
          "Can I find sufficient relevant academic literature?",
          "Do I have the skills required for the proposed analysis?",
          "Can I obtain the necessary resources?",
          "Are there ethical issues that require additional planning or approval?",
          "Is the scope realistic for my academic level and word limit?",
        ],
      },

      {
        id: "topic-checklist",
        title: "Topic evaluation checklist",
        content: [
          "Before finalising a topic, test it against the following questions. If several answers are unclear, the topic may need further refinement.",
        ],
        checklist: [
          "Is the topic clear?",
          "Is it narrow enough to investigate in depth?",
          "Can it be investigated using appropriate evidence?",
          "Can I access the required data or participants?",
          "Is there enough relevant academic literature?",
          "Can I complete it within the available time?",
          "Is the proposed study ethically acceptable?",
          "Does it fit my programme and academic requirements?",
          "Can I develop a clear research question from it?",
          "Can the question be answered with the resources available to me?",
        ],
      },

      {
        id: "common-mistakes",
        title: "Common mistakes",
        content: [
          "Many research problems begin before the actual research begins: the topic is too broad, the question is unclear or the project depends on evidence that the researcher cannot access.",
        ],
        points: [
          "Choosing a topic only because it sounds impressive",
          "Choosing a topic before checking the relevant literature",
          "Making the geographical scope unnecessarily large",
          "Trying to study too many variables at once",
          "Confusing a broad social issue with a research problem",
          "Claiming a research gap without sufficient literature",
          "Choosing a topic without checking data accessibility",
          "Selecting a method before understanding the research question",
          "Changing the topic repeatedly without using preliminary research to guide the decision",
          "Choosing a topic that cannot realistically be completed within the deadline",
        ],
      },
    ],
    keyPrinciple:
      "Do not ask only whether a topic sounds interesting. Ask whether it can become a clear, researchable question that you can realistically answer.",
    checklist: [
      "I can explain my topic in one or two sentences.",
      "I can identify the specific problem I want to investigate.",
      "I have conducted preliminary academic reading.",
      "I understand the main concepts and debates in the area.",
      "I can identify a possible research gap or unresolved issue based on the literature.",
      "I can formulate a focused research question.",
      "I know who or what my study will focus on.",
      "I can access the required data or participants.",
      "The project is feasible within my deadline and resources.",
      "I have considered relevant ethical issues.",
      "The topic and question fit my academic programme and requirements.",
    ],
  },

  {
    id: "research-proposal",
    number: "02",
    category: "Research Foundations",
    title: "Writing a Research Proposal",
    shortTitle: "Research Proposal",
    description:
      "Learn how to turn a research idea into a clear, focused, feasible, and academically justified research proposal.",
    introduction:
      "A research proposal is a plan for a study you intend to conduct. It explains what you want to investigate, why the research matters, what previous research says about the issue, and how you plan to answer your research question. A strong proposal is not simply a description of an interesting topic. It presents a logical argument connecting the research problem, literature, questions, methodology, feasibility, and expected contribution. The exact structure varies by discipline, university, and level of study, so always follow the requirements given by your supervisor or institution.",
    sections: [
      {
        id: "what-is-proposal",
        title: "What Is a Research Proposal?",
        content: [
          "A research proposal is a structured plan for a research project that has not yet been completed. It allows you to explain the proposed study before conducting the actual research.",
          "At its core, a proposal should answer three connected questions: What are you researching? Why does it matter? How will you investigate it?",
          "The proposal also needs to demonstrate that the project is realistic. Your reader should be able to understand what you intend to study, how the study relates to existing research, what evidence you need, and whether you can realistically complete the project with the available time, resources, access, and skills.",
        ],
        points: [
          "It defines the research problem or issue.",
          "It explains the context and significance of the study.",
          "It positions the study within existing literature.",
          "It establishes the research aim, objectives, questions, and where appropriate, hypotheses.",
          "It proposes an appropriate research design and methodology.",
          "It considers ethics, limitations, resources, and feasibility.",
          "It explains the potential contribution or significance of the proposed study.",
        ],
        example: {
          label: "Simple proposal logic",
          steps: [
            "Problem: Many university students report difficulty maintaining consistent academic writing practices.",
            "Gap: Existing studies may examine academic writing broadly, but a particular student population or institutional context may be less explored.",
            "Question: How do undergraduate students perceive the factors affecting their academic writing practices?",
            "Method: Conduct semi-structured interviews with a defined group of undergraduate students and analyse the responses thematically.",
            "Contribution: The study may provide context-specific insight into students' experiences and identify areas for academic support.",
          ],
        },
        checklist: [
          "Can a reader understand exactly what the proposed study is about?",
          "Have you explained why the study is worth conducting?",
          "Is the proposed research realistic within the available time and resources?",
          "Does the methodology logically connect to the research question?",
        ],
      },

      {
        id: "proposal-logic",
        title: "Build the Proposal Around a Clear Logic",
        content: [
          "A strong proposal is not a collection of independent sections. Each part should lead logically to the next.",
          "The research problem should create the need for the study. The literature review should establish what is already known and what remains unresolved. The research questions should define what the study will investigate. The methodology should explain how those questions will be answered. The significance should explain why the expected contribution matters.",
          "One useful way to check the logic is to trace the proposal backwards from the research question: What evidence will be required to answer this question? What method can produce that evidence? Why is that method appropriate? What literature establishes the problem? Why is the resulting research worth doing?",
        ],
        points: [
          "Research problem → establishes the issue requiring investigation.",
          "Literature → establishes what is already known and what remains uncertain.",
          "Research gap → identifies the specific space your study addresses.",
          "Aim → states the overall purpose of the study.",
          "Objectives → break the aim into manageable research tasks.",
          "Research questions → specify what the study will answer.",
          "Methodology → explains the overall research approach.",
          "Methods → describe how evidence will actually be collected and analysed.",
          "Significance → explains the potential value of the research.",
          "Feasibility → demonstrates that the proposed study can realistically be completed.",
        ],
        example: {
          label: "Weak vs connected logic",
          steps: [
            "Weak: 'Social media is popular among students, so I will study social media.'",
            "Stronger: 'Existing research has examined social media use among university students, but limited evidence is available for a particular context or population. This study therefore investigates a defined aspect of social media use through a specific research question and an appropriate method.'",
          ],
        },
        comparison: [
          {
            term: "Topic",
            meaning: "The broad subject area being investigated.",
            example: "Social media use among university students.",
          },
          {
            term: "Research problem",
            meaning:
              "The specific issue, uncertainty, inconsistency, or gap that creates a reason for investigation.",
            example:
              "Existing findings about how social media affects academic engagement are inconsistent in a particular student population.",
          },
          {
            term: "Research aim",
            meaning: "The overall purpose of the proposed study.",
            example:
              "To examine the relationship between social media use and academic engagement among undergraduate students.",
          },
          {
            term: "Research objective",
            meaning:
              "A specific step or outcome that helps achieve the overall aim.",
            example:
              "To identify the main patterns of social media use among the selected students.",
          },
          {
            term: "Research question",
            meaning: "The precise question the study will attempt to answer.",
            example:
              "How does social media use relate to academic engagement among undergraduate students?",
          },
        ],
        checklist: [
          "Does every major section support the same research direction?",
          "Can you explain the connection between the problem, question, and methodology?",
          "Are the objectives practical steps toward achieving the aim?",
          "Does the proposed method actually produce the evidence needed to answer the question?",
        ],
      },

      {
        id: "proposal-structure",
        title: "Understand the Structure of a Proposal",
        content: [
          "There is no single structure that applies to every research proposal. Universities, departments, disciplines, and research levels may require different sections or different ordering.",
          "However, many proposals contain a similar set of core components: a title, introduction or background, literature review, research questions or hypotheses, methodology or research design, significance, feasibility or timeline, references, and sometimes appendices.",
          "Before writing, check your university's guidelines, assignment brief, supervisor's instructions, or research proposal template. A technically well-written proposal can still fail to meet requirements if it ignores the required format.",
        ],
        points: [
          "Title",
          "Introduction or background",
          "Research problem and rationale",
          "Aim and objectives",
          "Research questions and/or hypotheses",
          "Literature review",
          "Research design and methodology",
          "Data collection and analysis plan",
          "Ethical considerations",
          "Significance or expected contribution",
          "Limitations or delimitations",
          "Timeline and resources where required",
          "Proposed chapter structure where required",
          "References",
          "Appendices where necessary",
        ],
        note: "Not every proposal needs every component. Treat this as a planning framework rather than a universal template. Your institution or supervisor's requirements take priority.",
      },

      {
        id: "problem-objectives",
        title: "Define the Problem, Aim, Objectives and Questions",
        content: [
          "The research problem explains what needs to be investigated and why. It should be specific enough to guide the study rather than simply describing a broad topic.",
          "The research aim expresses the overall purpose of the study in one clear statement. Objectives then break that aim into smaller, achievable tasks.",
          "Research questions translate the research problem into questions that the proposed study can realistically answer. In quantitative research, hypotheses may also be appropriate when the study is designed to test predicted relationships or differences.",
          "These elements should be aligned. A proposal becomes difficult to execute when the aim, objectives, research questions, and methodology point in different directions.",
        ],
        points: [
          "Aim: one broad statement describing what the study intends to accomplish.",
          "Objectives: specific actions or outcomes needed to achieve the aim.",
          "Research questions: precise questions the study will investigate.",
          "Hypotheses: testable predictions about relationships, differences, or effects where appropriate.",
        ],
        example: {
          label: "From problem to research questions",
          steps: [
            "Problem: Small businesses increasingly use social media, but the factors associated with effective social media engagement in a specific local context are not well understood.",
            "Aim: To examine factors associated with social media engagement among small businesses in the selected context.",
            "Objective 1: To identify the social media platforms used by selected businesses.",
            "Objective 2: To examine the types of content commonly associated with audience engagement.",
            "Objective 3: To explore business owners' perceptions of factors influencing engagement.",
            "Question 1: Which social media platforms are most commonly used by the selected businesses?",
            "Question 2: What types of content are associated with higher levels of audience engagement?",
            "Question 3: How do business owners perceive the factors influencing social media engagement?",
          ],
        },
        checklist: [
          "Is the aim clear enough to understand without additional explanation?",
          "Are the objectives specific and achievable?",
          "Can each research question actually be answered by the proposed study?",
          "Does each objective contribute to the aim?",
          "Are the questions consistent with the proposed methodology?",
        ],
      },

      {
        id: "proposal-literature",
        title: "Write the Literature Review",
        content: [
          "The literature review in a research proposal provides the scholarly context for the proposed study. Its purpose is not to summarise everything ever written about the topic.",
          "Instead, select literature that helps establish the research problem, important concepts or theories, major findings, disagreements, methodological approaches, and the space your proposed study intends to address.",
          "A proposal literature review should therefore be selective and analytical. Compare relevant studies, identify patterns and disagreements, evaluate important approaches, and show how the proposed study connects to existing scholarship.",
          "The literature review should ultimately help answer the question: Why is another study needed?",
        ],
        points: [
          "Identify the most relevant and credible scholarship.",
          "Group literature by themes, concepts, theories, methods, findings, or debates rather than summarising one source at a time.",
          "Compare and contrast important findings.",
          "Identify limitations, inconsistencies, under-researched contexts, or methodological gaps.",
          "Show how your proposed research relates to previous studies.",
          "Use the literature to justify your research questions and methodological direction.",
        ],
        example: {
          label: "Moving from summary to synthesis",
          steps: [
            "Descriptive: 'Author A found X. Author B found Y. Author C studied Z.'",
            "Analytical: 'Studies A and B identify a relationship between X and Y, whereas study C reports a different pattern. These differences may partly reflect variations in population, context, or measurement approach. However, limited evidence is available for the proposed context, creating a basis for the present study.'",
          ],
        },
        checklist: [
          "Have you selected literature directly relevant to the research problem?",
          "Have you compared and connected studies rather than listing them?",
          "Have you identified what remains uncertain or insufficiently explored?",
          "Does the literature review lead naturally toward your research question?",
        ],
      },

      {
        id: "proposal-methodology",
        title: "Plan the Methodology",
        content: [
          "The methodology section explains how the proposed study will be conducted and why the chosen approach is appropriate. It should be more than a list of research methods.",
          "First identify the overall research approach or design. Then explain what data or evidence will be required, who or what will provide it, how it will be collected, and how it will be analysed.",
          "The methodology must connect directly to the research questions. A survey, interview, experiment, observation, document analysis, case study, statistical procedure, or other method should be selected because it can generate evidence capable of answering the specific questions.",
          "Because the research has not yet been completed, proposals commonly describe planned procedures in future-oriented language. However, follow the conventions required by your discipline or institution.",
        ],
        points: [
          "Research approach: qualitative, quantitative, or mixed methods where appropriate.",
          "Research design: the overall structure of the study.",
          "Population and sample or source selection.",
          "Sampling strategy and inclusion criteria.",
          "Data sources and data collection procedures.",
          "Research instruments or tools.",
          "Data analysis procedures.",
          "Validity, reliability, trustworthiness, or quality considerations where relevant.",
          "Ethical procedures.",
          "Data storage, privacy, and security where relevant.",
          "Justification for methodological choices.",
        ],
        example: {
          label: "Methodology connection",
          steps: [
            "Research question: How do undergraduate students experience academic stress during examination periods?",
            "Approach: Qualitative research.",
            "Method: Semi-structured interviews.",
            "Participants: A defined sample of undergraduate students meeting stated criteria.",
            "Analysis: Thematic analysis of interview data.",
            "Justification: Interviews can provide detailed accounts of participants' experiences and perceptions that may not be captured through predetermined survey responses.",
          ],
        },
        comparison: [
          {
            term: "Methodology",
            meaning:
              "The overall logic, approach, and justification guiding how the research will be conducted.",
            example:
              "A qualitative approach designed to explore participants' experiences.",
          },
          {
            term: "Method",
            meaning:
              "The specific procedure or tool used to collect or analyse evidence.",
            example: "Semi-structured interviews and thematic analysis.",
          },
        ],
        checklist: [
          "Can the proposed methods answer the research questions?",
          "Have you explained why the methods are appropriate?",
          "Have you identified the proposed participants, sources, or data?",
          "Have you explained how the evidence will be analysed?",
          "Have you considered ethical and practical issues?",
        ],
      },

      {
        id: "proposal-feasibility",
        title: "Demonstrate Feasibility and Significance",
        content: [
          "A research idea may be academically interesting but still be unsuitable if it cannot realistically be completed. A strong proposal therefore demonstrates feasibility as well as significance.",
          "Consider whether you can obtain the required data, access participants or sources, use the necessary software or equipment, develop the required skills, obtain ethical approval if necessary, and complete the project within the available timeframe.",
          "Significance explains why the research is worth doing. Depending on the discipline, the contribution may relate to knowledge, theory, methodology, professional practice, policy, an organisation, a community, or a particular research context.",
          "Do not claim that a study will solve a large problem unless the proposed design can genuinely support that claim. A small study can still make a useful contribution when its scope and claims are appropriately defined.",
        ],
        points: [
          "Time: Can every stage be completed within the available period?",
          "Access: Can you reach the participants, organisations, datasets, archives, or other sources required?",
          "Resources: Do you have the necessary software, equipment, funding, facilities, or databases?",
          "Skills: Do you have or can you develop the skills required?",
          "Ethics: Can the study be conducted ethically and receive required approval?",
          "Scope: Is the study narrow enough to be manageable?",
          "Significance: Is there a clear academic, practical, contextual, or methodological reason for conducting it?",
        ],
        example: {
          label: "Reducing an unrealistic study",
          steps: [
            "Too broad: 'This study will examine the impact of social media on all university students in Nepal.'",
            "More feasible: 'This study will examine the relationship between selected social media usage patterns and academic engagement among undergraduate students at selected institutions in a defined study area.'",
            "The narrower version defines the population, context, and variables more clearly and is easier to investigate within a limited research period.",
          ],
        },
        checklist: [
          "Is the scope realistic for your degree and timeframe?",
          "Do you have a realistic route to the required data?",
          "Have you considered ethical approval and participant protection?",
          "Have you identified important resource requirements?",
          "Are your expected contributions proportionate to the study design?",
        ],
      },

      {
        id: "proposal-mistakes",
        title: "Common Research Proposal Mistakes",
        content: [
          "Many weak proposals contain good ideas but fail because the different parts are not connected. A proposal should make its reasoning visible to the reader.",
          "Avoid treating the proposal as a miniature completed dissertation. Its purpose is to present and justify a research plan, so the level of detail should match the requirements of the proposal and the stage of the project.",
          "The most important final check is alignment: the problem should justify the questions, the literature should support the problem and questions, and the methodology should provide a credible way to answer those questions.",
        ],
        points: [
          "Choosing a topic that is too broad to investigate.",
          "Writing a long background section without establishing a specific research problem.",
          "Treating the literature review as a list of summaries.",
          "Claiming a research gap without demonstrating it through relevant literature.",
          "Writing research questions that the proposed methodology cannot answer.",
          "Listing methods without explaining why they are appropriate.",
          "Ignoring sampling, access, ethics, or data-analysis requirements.",
          "Making claims about significance that are much larger than the study can support.",
          "Including unnecessary information simply to make the proposal appear more substantial.",
          "Ignoring the institution's required proposal format or word limit.",
          "Using references inconsistently or failing to reference claims made from sources.",
        ],
        comparison: [
          {
            term: "Interesting topic",
            meaning:
              "A subject that appears relevant or personally interesting.",
            example: "Social media use among students.",
          },
          {
            term: "Researchable problem",
            meaning:
              "A defined issue that can be investigated using appropriate evidence and methods.",
            example:
              "Limited evidence about a specific relationship or experience within a defined population.",
          },
          {
            term: "Large claim",
            meaning:
              "A conclusion or expected contribution that exceeds what the proposed design can reasonably establish.",
            example:
              "Claiming a small survey will explain the effects of social media on all university students.",
          },
          {
            term: "Appropriately scoped claim",
            meaning:
              "A conclusion or contribution limited to the population, context, variables, and evidence actually studied.",
            example:
              "Examining the reported relationship between selected social media behaviours and academic engagement within the defined sample.",
          },
        ],
        checklist: [
          "Is the proposal focused rather than unnecessarily broad?",
          "Does the introduction clearly establish the research problem?",
          "Does the literature review justify the proposed study?",
          "Are the aim, objectives, and research questions aligned?",
          "Does the methodology directly address the research questions?",
          "Have ethical issues and practical limitations been considered?",
          "Is the proposed study feasible within the available time and resources?",
          "Have you followed the required institutional structure and referencing style?",
          "Have you proofread the final proposal for clarity, consistency, grammar, and formatting?",
        ],
      },
    ],
    keyPrinciple:
      "A strong research proposal is a connected argument, not a collection of sections. Start with a clearly defined research problem, establish its context through relevant literature, formulate focused research questions, and then propose a methodology capable of answering those questions. Finally, demonstrate that the study is ethically and practically feasible and explain the contribution it may make. Always adapt the structure and level of detail to the requirements of your university, discipline, supervisor, or research programme.",
    checklist: [
      "Can you explain the proposed research in a few clear sentences?",
      "Is the research problem specific and supported by literature?",
      "Is there a clear reason why the study is needed?",
      "Are the aim, objectives, research questions, and methodology aligned?",
      "Does the literature review critically position the proposed study?",
      "Have you justified your methodological choices?",
      "Have you addressed participants, data, analysis, ethics, and feasibility where relevant?",
      "Is the scope realistic for the available time and resources?",
      "Have you explained the potential significance without overstating the contribution?",
      "Have you followed your institution's required proposal structure, word limit, and referencing style?",
    ],
  },
  {
    id: "literature-review",
    number: "03",
    category: "Research Foundations",
    title: "Literature Review",
    shortTitle: "Literature Review",
    description:
      "Learn how to find, evaluate, organise, synthesise, and critically discuss existing research to build a strong foundation for your study.",
    introduction:
      "A literature review is a critical examination of existing scholarship relevant to a research topic or question. It does more than summarise what individual authors have written. A strong literature review identifies important ideas, themes, theories, findings, debates, methodological approaches, limitations, and gaps, then connects them into a coherent argument. Its purpose is to show what is already known, what remains uncertain or under-researched, and how your research fits within the existing body of knowledge. The exact structure and depth of a literature review vary by discipline, research level, and assignment or institutional requirements.",
    sections: [
      {
        id: "purpose-of-literature-review",
        title: "What Is a Literature Review?",
        content: [
          "A literature review is a structured and critical discussion of relevant existing research and scholarship on a defined topic. It may appear as a chapter or section of a dissertation, thesis, research proposal, journal article, or other academic work, or it may be a standalone assignment.",
          "The purpose is not to prove that you have read a large number of sources. Instead, the review should demonstrate your understanding of the research area and explain how the existing scholarship relates to the question or problem you are investigating.",
          "A strong review tells the reader what has been established, where researchers agree or disagree, what limitations exist, what remains unclear, and why further research may be justified.",
        ],
        points: [
          "Provides scholarly background and context.",
          "Defines important concepts and terminology.",
          "Identifies relevant theories and conceptual perspectives.",
          "Shows major findings and developments in the field.",
          "Compares areas of agreement and disagreement.",
          "Evaluates strengths and limitations of previous research.",
          "Identifies gaps, inconsistencies, or under-researched areas.",
          "Positions your research in relation to existing scholarship.",
        ],
        example: {
          label: "What a literature review should accomplish",
          steps: [
            "Topic: Social media and academic performance.",
            "Weak approach: Summarise ten studies one after another.",
            "Stronger approach: Group studies around themes such as social media use, attention, academic engagement, and academic performance; compare their findings and methods; discuss contradictory results; evaluate limitations; and identify what remains insufficiently understood.",
            "Final connection: Explain how these findings lead to the specific research problem and question being investigated.",
          ],
        },
        checklist: [
          "Have you defined the focus of the review?",
          "Are the sources directly relevant to your research question or topic?",
          "Does the review do more than summarise individual studies?",
          "Does it establish a clear context for your own research?",
        ],
      },

      {
        id: "finding-and-selecting-sources",
        title: "Find and Select Relevant Sources",
        content: [
          "A literature review begins with a purposeful search for relevant scholarship. Searching is not simply a matter of collecting as many papers as possible. You need to identify sources that are relevant, credible, sufficiently current for your field, and useful for answering your research question.",
          "Start with broad searches to understand the field, then progressively refine your keywords as you learn the terminology used by researchers. Search combinations of key concepts, variables, populations, contexts, and related terms.",
          "Academic journal articles are often central sources, but depending on the discipline and research question, books, conference papers, theses, official reports, professional publications, datasets, and other authoritative sources may also be relevant.",
          "Do not automatically exclude older research. Seminal theories, foundational studies, and historically important works may remain essential. At the same time, do not rely heavily on outdated evidence when newer research has substantially changed the field.",
        ],
        points: [
          "Begin with the research topic and key concepts.",
          "Identify alternative terminology and synonyms used in the field.",
          "Use academic databases and library search systems.",
          "Review reference lists of highly relevant papers.",
          "Look for newer studies that cite important earlier research.",
          "Prioritise sources based on relevance, quality, and contribution.",
          "Record complete bibliographic information while reading.",
          "Check whether claims are supported by the original research where possible.",
        ],
        example: {
          label: "Building search terms",
          steps: [
            "Topic: Social media and academic engagement.",
            "Concept 1: social media, social networking sites, social platforms.",
            "Concept 2: academic engagement, student engagement, learning engagement.",
            "Population: university students, undergraduate students, college students.",
            "Possible search combination: ('social media' OR 'social networking') AND ('academic engagement' OR 'student engagement') AND ('university students' OR 'undergraduate students').",
          ],
        },
        checklist: [
          "Have you identified the main concepts in your research question?",
          "Have you searched using alternative keywords?",
          "Are your sources academically credible and relevant?",
          "Have you included important foundational studies where appropriate?",
          "Have you kept accurate records of the sources you use?",
        ],
      },

      {
        id: "evaluate-sources",
        title: "Evaluate the Quality of the Literature",
        content: [
          "Finding a source does not automatically mean that it should be included in your literature review. You need to evaluate what the source actually contributes and how much confidence can reasonably be placed in its findings.",
          "Consider the author's expertise and publication context, the research design, sample or data, methods of analysis, limitations, transparency, and whether the conclusions are supported by the evidence presented.",
          "Critical evaluation does not mean attacking every study. A balanced review can recognise that a study made an important contribution while also identifying limitations that affect how its findings should be interpreted.",
          "The quality of a source should also be considered in relation to your research question. A highly credible study may still be peripheral to your particular research problem.",
        ],
        points: [
          "Relevance: Does the source directly inform your research?",
          "Authority: Who conducted the research and where was it published?",
          "Evidence: What data or evidence supports the claims?",
          "Methodology: Is the research design appropriate for its question?",
          "Sample or context: Who or what was studied?",
          "Analysis: Are the analytical procedures appropriate and sufficiently explained?",
          "Limitations: What limitations did the researchers identify or what limitations can you reasonably identify?",
          "Currency: Is the source sufficiently current for the topic?",
          "Contribution: What does the source add to your understanding?",
        ],
        example: {
          label: "Critical evaluation",
          steps: [
            "Descriptive: 'Study A found that social media use was associated with lower academic engagement.'",
            "Critical: 'Study A reported a negative association between social media use and academic engagement; however, its cross-sectional design limits conclusions about direction or causality. The findings therefore provide evidence of an association rather than demonstrating that social media use caused lower engagement.'",
          ],
        },
        checklist: [
          "Have you evaluated the research rather than simply accepting its conclusions?",
          "Have you considered methodological limitations?",
          "Have you distinguished association from causation where relevant?",
          "Have you considered whether the study's population or context matches your own research?",
        ],
      },

      {
        id: "organising-literature",
        title: "Organise the Literature",
        content: [
          "Once you have collected relevant sources, organise them around a meaningful structure rather than the order in which you found them.",
          "The most useful structure depends on the research area. Common approaches include themes, concepts, theories, methodological approaches, historical development, debates, or combinations of these.",
          "For many research projects, a thematic structure works well because it allows multiple studies to be discussed together. A chronological structure can be useful when understanding how an idea or field developed over time, but simply presenting studies by publication date does not automatically create critical analysis.",
          "A good structure gradually guides the reader from broader background toward the specific issue addressed by your research.",
        ],
        points: [
          "Thematic organisation: group literature around major themes.",
          "Conceptual organisation: organise around key concepts or variables.",
          "Theoretical organisation: compare relevant theories or frameworks.",
          "Chronological organisation: show how research or thinking developed over time.",
          "Methodological organisation: compare different research approaches.",
          "Debate-based organisation: examine competing explanations or viewpoints.",
          "Hybrid organisation: combine two or more approaches when appropriate.",
        ],
        example: {
          label: "Possible thematic structure",
          steps: [
            "Topic: Factors influencing university students' academic performance.",
            "Theme 1: Academic motivation.",
            "Theme 2: Study habits and time management.",
            "Theme 3: Technology and learning behaviour.",
            "Theme 4: Social and environmental factors.",
            "Theme 5: Areas of disagreement and research gaps.",
            "Final section: How these themes establish the need for the proposed study.",
          ],
        },
        checklist: [
          "Can the reader understand why your sections appear in this order?",
          "Are related studies discussed together?",
          "Does each section contribute to the research question?",
          "Does the structure gradually narrow toward your specific research focus?",
        ],
      },

      {
        id: "analysis-and-synthesis",
        title: "Analyse and Synthesise Sources",
        content: [
          "Analysis and synthesis are central to a strong literature review. Analysis involves examining individual studies carefully, while synthesis involves connecting multiple sources to identify broader patterns, relationships, differences, and debates.",
          "A literature review becomes weak when every paragraph follows the same pattern: Author A said this. Author B said this. Author C said this. This creates a sequence of summaries rather than an integrated discussion.",
          "Instead, organise paragraphs around ideas or claims and use multiple sources to support, challenge, refine, or contextualise those ideas.",
          "Synthesis does not mean pretending that all studies agree. Contradictory findings are often important. Your task is to identify differences and consider possible explanations, such as differences in populations, contexts, measurements, samples, research designs, or theoretical assumptions.",
        ],
        points: [
          "Compare findings across studies.",
          "Identify agreements and recurring patterns.",
          "Identify contradictions and disagreements.",
          "Compare research methods and samples.",
          "Examine differences in context or population.",
          "Evaluate the strength and consistency of evidence.",
          "Connect related concepts across different sources.",
          "Develop an evidence-based interpretation of the literature.",
        ],
        example: {
          label: "From a source list to synthesis",
          steps: [
            "Source A reports a positive relationship between study habits and academic performance.",
            "Source B reports a similar relationship in a different student population.",
            "Source C finds a weaker relationship after controlling for other variables.",
            "Synthesis: Across the studies, study habits appear to be associated with academic performance, but the strength of the relationship varies. Differences in population, measurement, and control variables may partly explain the variation.",
            "This synthesis is more informative than presenting the three studies as unrelated summaries.",
          ],
        },
        comparison: [
          {
            term: "Summary",
            meaning: "Explains what an individual source says or found.",
            example:
              "Smith (2024) found that students who reported better time management also reported higher academic performance.",
          },
          {
            term: "Analysis",
            meaning:
              "Examines the evidence, methods, assumptions, strengths, or limitations of a source.",
            example:
              "The study used self-reported measures, which may introduce reporting bias.",
          },
          {
            term: "Synthesis",
            meaning:
              "Connects multiple sources to develop a broader observation or argument.",
            example:
              "Several studies report a positive relationship, although studies using objective performance measures tend to report smaller effects.",
          },
        ],
        checklist: [
          "Are paragraphs organised around ideas rather than authors?",
          "Do you compare multiple sources where appropriate?",
          "Have you discussed contradictory findings?",
          "Have you explained possible reasons for differences?",
          "Can the reader see your interpretation of the literature?",
        ],
      },

      {
        id: "research-gap",
        title: "Identify the Research Gap",
        content: [
          "A research gap is an area where existing knowledge is limited, incomplete, inconsistent, insufficiently tested, or not adequately understood for the purpose of your study.",
          "A gap does not necessarily mean that nobody has ever studied the topic. In many strong research projects, the topic already has substantial literature. The contribution may come from examining a different population, context, period, variable, theory, method, dataset, or unresolved disagreement.",
          "The gap should emerge from your review of the literature rather than being declared without evidence. You need to show what previous research has established and then explain what remains unresolved or insufficiently explored.",
          "The gap should also connect directly to your research question. If the gap concerns a specific population but your research question investigates something unrelated, the literature review and proposed research are not properly aligned.",
        ],
        points: [
          "Contextual gap: limited evidence in a particular setting or environment.",
          "Population gap: limited research involving a particular population.",
          "Methodological gap: previous studies have relied on methods that leave an issue insufficiently explored.",
          "Theoretical gap: existing theories do not adequately explain an aspect of the problem.",
          "Empirical gap: evidence remains limited or inconsistent.",
          "Temporal gap: an issue requires examination in a newer or different period.",
          "Contradictory evidence: credible studies produce substantially different findings.",
          "Application gap: existing knowledge has not been sufficiently examined in a particular practical setting.",
        ],
        example: {
          label: "Constructing a defensible gap",
          steps: [
            "Existing literature: Several studies have examined social media use and academic engagement among university students.",
            "Limitation: Much of the available evidence focuses on large international samples or different educational contexts.",
            "Specific gap: Limited evidence may exist for the particular population and institutional context selected for the proposed study.",
            "Research response: The proposed study investigates the relationship within that defined context.",
            "Important: The exact gap must be established from the literature you actually review rather than assumed in advance.",
          ],
        },
        checklist: [
          "Can you point to specific literature supporting your identified gap?",
          "Have you explained what is missing rather than simply saying 'there is a gap'?",
          "Is the gap specific enough to investigate?",
          "Does your research question directly address the identified gap?",
        ],
      },

      {
        id: "writing-literature-review",
        title: "Write the Literature Review",
        content: [
          "Once the literature has been searched, evaluated, organised, and synthesised, the next task is to turn your analysis into a coherent academic argument.",
          "A common structure includes an introduction, a series of logically organised thematic or conceptual sections, and a conclusion. The exact structure depends on the discipline and purpose of the review.",
          "The introduction should establish the topic, scope, purpose, and organisation of the review. The main sections should develop themes or arguments using integrated evidence from multiple sources. The conclusion should bring the major findings together and show how the review informs the research problem, aim, questions, or future research.",
          "Individual paragraphs should generally have a clear purpose. Introduce the point, provide evidence from relevant sources, compare or evaluate that evidence, and explain what the discussion means for the wider argument.",
        ],
        points: [
          "Introduction: establish topic, scope, purpose, and structure.",
          "Main body: organise literature around meaningful themes or arguments.",
          "Evidence: integrate relevant academic sources.",
          "Critical analysis: evaluate findings, methods, assumptions, and limitations.",
          "Synthesis: connect multiple sources and develop broader observations.",
          "Research gap: show what remains unresolved or insufficiently explored.",
          "Conclusion: summarise the review's overall argument and connect it to the research direction.",
        ],
        example: {
          label: "A useful paragraph pattern",
          steps: [
            "Point: Introduce the theme or claim.",
            "Evidence: Bring in relevant findings from multiple sources.",
            "Comparison: Explain where the sources agree or disagree.",
            "Critical evaluation: Discuss methodological, contextual, or theoretical differences.",
            "Synthesis: State what can reasonably be concluded from the group of studies.",
            "Connection: Explain how the discussion relates to your research question.",
          ],
        },
        checklist: [
          "Does the introduction explain the scope and purpose of the review?",
          "Are the main sections logically connected?",
          "Does each paragraph have a clear analytical purpose?",
          "Are sources integrated rather than listed?",
          "Does the conclusion connect the literature to your research direction?",
        ],
      },

      {
        id: "common-literature-mistakes",
        title: "Common Literature Review Mistakes",
        content: [
          "A literature review can contain many sources and still be academically weak. The quality of the reasoning and synthesis matters more than the number of references.",
          "The most common problem is treating the review as an annotated bibliography: one source is summarised, then another, then another, without showing how the studies relate to each other or to the research question.",
          "Other problems include using sources that are only loosely related to the topic, relying too heavily on outdated or low-quality material, ignoring contradictory evidence, making unsupported claims about research gaps, and describing methods without critically evaluating them.",
          "The final review should make the research landscape clearer, not simply demonstrate how much material you found.",
        ],
        points: [
          "Writing a source-by-source summary.",
          "Including sources because they are interesting rather than relevant.",
          "Using too many citations without developing your own synthesis.",
          "Ignoring studies that contradict your preferred argument.",
          "Claiming a gap without demonstrating it.",
          "Relying heavily on secondary summaries when primary research is available.",
          "Using outdated sources when newer evidence is important.",
          "Treating every published study as equally strong evidence.",
          "Failing to connect the literature review to the research question.",
          "Ending the review without explaining what the literature means for the proposed study.",
          "Using inconsistent or incomplete citations and references.",
        ],
        comparison: [
          {
            term: "Literature review",
            meaning:
              "A critical and synthesised discussion of relevant scholarship.",
            example:
              "Studies are grouped by themes and compared to establish patterns, disagreements, limitations, and gaps.",
          },
          {
            term: "Annotated bibliography",
            meaning:
              "A collection of sources accompanied by individual summaries or evaluations.",
            example:
              "Each source is described separately without necessarily developing an integrated argument.",
          },
          {
            term: "Literature search",
            meaning: "The process of locating potentially relevant sources.",
            example:
              "Searching academic databases using combinations of keywords.",
          },
          {
            term: "Literature review",
            meaning:
              "The analytical and written outcome that interprets and synthesises the relevant sources.",
            example:
              "Explaining what the body of research collectively shows and where uncertainty remains.",
          },
        ],
        checklist: [
          "Have you removed sources that do not meaningfully contribute to the research question?",
          "Have you replaced source-by-source summaries with thematic synthesis?",
          "Have you considered contradictory findings?",
          "Have you critically evaluated important studies?",
          "Is the research gap supported by the literature?",
          "Does the review lead logically to your research question or objectives?",
          "Are all sources accurately cited and referenced?",
        ],
      },
    ],
    keyPrinciple:
      "A literature review is not a catalogue of everything you have read. It is an evidence-based argument about the current state of knowledge in a defined area. Select relevant and credible sources, organise them around meaningful themes or concepts, analyse their strengths and limitations, synthesise agreements and disagreements, identify what remains unresolved, and show how that understanding leads to your research question. The goal is to make the existing research understandable and to establish where your study fits within it.",
    checklist: [
      "Have you clearly defined the scope of your literature review?",
      "Have you searched systematically enough for the purpose and level of your study?",
      "Are your sources relevant, credible, and appropriately current?",
      "Have you included important foundational research where appropriate?",
      "Have you organised the literature around themes, concepts, theories, debates, or another logical structure?",
      "Are you analysing and evaluating sources rather than merely summarising them?",
      "Have you synthesised multiple sources within your discussion?",
      "Have you acknowledged important disagreements and contradictory findings?",
      "Is your research gap specific and supported by evidence?",
      "Does the literature review lead logically to your research aim, objectives, or questions?",
      "Are citations and references accurate and consistent with the required referencing style?",
    ],
  },
  {
    id: "methodology",
    number: "04",
    category: "Research Foundations",
    title: "Research Methodology",
    shortTitle: "Methodology",
    description:
      "Understand how to choose and justify a research approach, design, sampling strategy, data collection method, and analysis plan that fit your research question.",
    introduction:
      "Research methodology explains the overall logic and plan used to conduct a study. It goes beyond naming a method such as a questionnaire or interview. A strong methodology explains what kind of evidence is needed, how that evidence will be obtained and analysed, why the chosen approach is appropriate, and how issues such as ethics, quality, bias, and feasibility will be addressed. The methodology must be aligned with the research problem and research questions. The appropriate approach depends on the discipline, question, population, available evidence, and purpose of the study.",
    sections: [
      {
        id: "what-is-methodology",
        title: "What Is Research Methodology?",
        content: [
          "Research methodology is the overall reasoning and framework that guides how a research study is designed and conducted. It explains the choices made throughout the research process and provides a justification for those choices.",
          "Methodology is broader than a research method. A method is a specific technique used to collect or analyse data, such as a questionnaire, interview, observation, experiment, document analysis, or statistical procedure. Methodology explains why those methods are appropriate for the research question and how they fit together within the overall study.",
          "A strong methodology should allow another reader to understand how the proposed or completed research was designed, what evidence was used, how it was obtained, and how conclusions were reached.",
        ],
        points: [
          "Research approach or methodological orientation.",
          "Research design.",
          "Study population, sample, or data source.",
          "Sampling strategy and selection criteria.",
          "Data collection methods and instruments.",
          "Data analysis procedures.",
          "Quality considerations such as validity, reliability, credibility, or trustworthiness where relevant.",
          "Ethical considerations.",
          "Practical limitations and methodological constraints.",
        ],
        comparison: [
          {
            term: "Methodology",
            meaning:
              "The overall logic, reasoning, and framework guiding the research.",
            example:
              "A qualitative methodology designed to explore participants' experiences.",
          },
          {
            term: "Method",
            meaning:
              "A specific technique used to collect or analyse research evidence.",
            example: "Semi-structured interviews.",
          },
          {
            term: "Research design",
            meaning:
              "The overall structure or plan for answering the research question.",
            example: "A cross-sectional survey design.",
          },
        ],
        checklist: [
          "Can you explain why your chosen methodology fits the research question?",
          "Have you distinguished methodology from individual research methods?",
          "Does the methodology explain how evidence will be collected and analysed?",
          "Have you considered ethics, quality, and practical limitations?",
        ],
      },

      {
        id: "research-approaches",
        title: "Choose a Research Approach",
        content: [
          "The research approach should be selected according to what the study needs to discover, measure, explain, compare, or understand. The choice should come from the research question rather than from a preference for a particular method.",
          "Quantitative research generally works with numerical data and is often used to measure variables, examine patterns or relationships, compare groups, or test hypotheses. Qualitative research generally seeks detailed understanding of experiences, meanings, perceptions, processes, or social contexts. Mixed methods combines qualitative and quantitative approaches within one study when both forms of evidence are needed.",
          "These approaches are not simply labels for different types of questionnaires or interviews. Each approach involves different assumptions, forms of evidence, analytical procedures, and standards for evaluating research quality.",
        ],
        points: [
          "Quantitative: useful when the research requires numerical measurement, comparison, estimation, or statistical examination.",
          "Qualitative: useful when the research requires detailed exploration of meanings, experiences, perspectives, processes, or context.",
          "Mixed methods: useful when both quantitative and qualitative evidence are required and the combination is justified by the research questions.",
          "The choice should be justified by the research problem rather than by convenience alone.",
        ],
        comparison: [
          {
            term: "Quantitative",
            meaning:
              "Primarily uses numerical data to measure variables, examine relationships, differences, or patterns.",
            example:
              "A survey measuring the relationship between study habits and academic performance.",
          },
          {
            term: "Qualitative",
            meaning:
              "Primarily explores meanings, experiences, perceptions, processes, or context in depth.",
            example:
              "Interviews exploring how students experience academic stress.",
          },
          {
            term: "Mixed methods",
            meaning:
              "Combines quantitative and qualitative approaches within a single research project.",
            example:
              "A survey measuring a pattern followed by interviews exploring why participants report that pattern.",
          },
        ],
        example: {
          label: "Let the research question guide the approach",
          steps: [
            "Question: What proportion of students use a particular learning platform? → A quantitative approach may be appropriate because the study requires measurement.",
            "Question: How do students experience using the platform? → A qualitative approach may be appropriate because the focus is on experiences and meanings.",
            "Questions: How common is the behaviour and why do students experience it in particular ways? → A mixed-methods design may be appropriate if both forms of evidence are necessary and can be integrated meaningfully.",
          ],
        },
        checklist: [
          "Does the chosen approach directly fit the research question?",
          "Have you explained why this approach is appropriate?",
          "Are you avoiding choosing a method simply because it is familiar or convenient?",
          "If using mixed methods, can you explain why both forms of evidence are necessary?",
        ],
      },

      {
        id: "research-design",
        title: "Select the Research Design",
        content: [
          "Research design describes the overall structure through which the research question will be investigated. The appropriate design depends on the purpose of the study and the type of evidence required.",
          "Different disciplines use different design classifications. Common examples include descriptive, correlational, experimental, quasi-experimental, cross-sectional, longitudinal, case study, ethnographic, phenomenological, action research, and other designs.",
          "A design should not be selected simply because it sounds academically sophisticated. It should provide a realistic and defensible way to answer the research question.",
        ],
        points: [
          "Descriptive designs focus on describing characteristics, patterns, or distributions.",
          "Correlational designs examine relationships between variables without necessarily establishing causation.",
          "Experimental designs manipulate an intervention or condition under controlled circumstances to investigate effects.",
          "Quasi-experimental designs examine interventions or differences where full randomisation or experimental control is not available.",
          "Cross-sectional studies collect information at a particular point or period in time.",
          "Longitudinal studies examine change or development across multiple time points.",
          "Case study designs investigate a defined case or cases in depth.",
          "Ethnographic approaches investigate culture, practices, or social contexts through sustained engagement.",
          "Phenomenological approaches may be used to explore lived experience.",
          "Action research involves cycles of investigation and action, often within a practical setting.",
        ],
        example: {
          label: "Design follows the purpose",
          steps: [
            "Purpose: Describe how frequently students use a service → A descriptive design may be appropriate.",
            "Purpose: Examine whether two variables are associated → A correlational design may be appropriate.",
            "Purpose: Test the effect of a defined intervention → An experimental or appropriate quasi-experimental design may be considered.",
            "Purpose: Understand one organisation's implementation of a new process → A case study design may be appropriate.",
          ],
        },
        checklist: [
          "Can the design answer the research question?",
          "Have you explained why the design is suitable?",
          "Does the design fit the available population, data, and timeframe?",
          "Are you avoiding claims that the design cannot support?",
        ],
      },

      {
        id: "population-sampling",
        title: "Define the Population and Sampling",
        content: [
          "Sampling determines which people, cases, documents, datasets, observations, or other units will provide evidence for the study. A clear sampling plan is important because the selected evidence affects what conclusions the study can reasonably support.",
          "First define the population or source of interest. Then explain how the sample will be selected and why that strategy is appropriate.",
          "Quantitative studies may use probability or non-probability sampling depending on the research design and access. Qualitative studies often use purposive or other information-oriented sampling strategies designed to obtain participants or cases relevant to the research question.",
          "Sample size should not be treated as a universal number that applies to every study. Its justification depends on the research design, population, analytical requirements, expected variation, available resources, and—in quantitative research—factors such as the intended statistical analysis and precision.",
        ],
        points: [
          "Define the target population or source clearly.",
          "Specify inclusion and exclusion criteria where relevant.",
          "Explain how participants, cases, or data sources will be selected.",
          "State the intended sample size or sampling scope where appropriate.",
          "Justify the sampling strategy.",
          "Consider access, representativeness, information richness, and feasibility.",
          "Recognise the implications of sampling choices for the conclusions.",
        ],
        comparison: [
          {
            term: "Probability sampling",
            meaning:
              "Uses a defined selection process in which units have a known or specified probability of selection.",
            example: "Simple random sampling from a defined population list.",
          },
          {
            term: "Non-probability sampling",
            meaning:
              "Selection does not rely on known probabilities of selection.",
            example:
              "Purposive sampling of participants who meet specific research criteria.",
          },
          {
            term: "Population",
            meaning:
              "The broader group or set of units to which the research is intended to relate.",
            example:
              "Undergraduate students enrolled at the selected institutions.",
          },
          {
            term: "Sample",
            meaning: "The subset of units actually included in the study.",
            example:
              "The selected undergraduate students who participate in the survey.",
          },
        ],
        checklist: [
          "Have you clearly defined who or what is being studied?",
          "Are inclusion and exclusion criteria clear where needed?",
          "Is the sampling strategy appropriate for the research design?",
          "Have you justified the intended sample size or scope?",
          "Have you considered how sampling affects the conclusions you can make?",
        ],
      },

      {
        id: "data-collection",
        title: "Plan Data Collection",
        content: [
          "Data collection describes how the evidence required to answer the research question will actually be obtained. The method should follow from the type of evidence needed.",
          "Common data collection methods include questionnaires, interviews, focus groups, observations, experiments, document analysis, archival research, and use of existing datasets. The appropriate method depends on the research question, population, design, resources, and ethical considerations.",
          "A methodology should explain not only what instrument will be used but also how data collection will be conducted. This may include recruitment, consent, administration procedures, timing, recording, storage, and procedures for maintaining consistency.",
          "If an existing questionnaire, scale, interview guide, or dataset is used, explain its source and suitability. If an instrument is developed by the researcher, explain how it will be designed and, where appropriate, tested or refined.",
        ],
        points: [
          "Identify the data required to answer each research question.",
          "Select an appropriate collection method.",
          "Define recruitment or access procedures.",
          "Explain how participants will provide informed consent where required.",
          "Describe the research instrument or protocol.",
          "Explain how data will be recorded and stored.",
          "Consider pilot testing or pre-testing where appropriate.",
          "Maintain consistency in collection procedures where the design requires it.",
        ],
        example: {
          label: "Matching method to evidence",
          steps: [
            "Questionnaire: useful for collecting standardised responses from a larger group.",
            "Interview: useful for exploring individual experiences, perceptions, or explanations in greater depth.",
            "Focus group: useful for exploring group discussion and interaction around a defined topic.",
            "Observation: useful when behaviour or practice needs to be examined directly.",
            "Document analysis: useful when existing records, texts, policies, reports, or other documents are the primary evidence.",
            "Existing dataset: useful when a suitable dataset already contains the information needed for the research question.",
          ],
        },
        checklist: [
          "Does the collection method produce the evidence required by the research question?",
          "Is the procedure described clearly enough to understand how data will be obtained?",
          "Have recruitment and consent procedures been considered?",
          "Have data storage and privacy requirements been considered?",
          "Would pilot testing or instrument refinement be appropriate?",
        ],
      },

      {
        id: "data-analysis-plan",
        title: "Plan the Data Analysis",
        content: [
          "Data analysis is the process through which collected evidence is organised, examined, interpreted, and used to address the research questions.",
          "The analysis method should be planned before data collection because the type and structure of data required depend partly on the intended analysis. For example, a quantitative study needs variables and measurements suitable for the planned statistical procedures, while qualitative research requires a suitable strategy for coding and interpreting textual or other non-numerical data.",
          "The methodology should identify the planned analytical techniques at an appropriate level of detail. The exact analysis may depend on the final dataset and should not be presented as predetermined when the research design does not justify that certainty.",
        ],
        points: [
          "Quantitative analysis may include descriptive statistics such as frequencies, percentages, means, or measures of variation.",
          "Depending on the research question and data, quantitative analysis may also involve tests of relationships, differences, associations, prediction, or other statistical procedures.",
          "Qualitative analysis may involve coding and developing themes, categories, patterns, narratives, or other forms of interpretation.",
          "Mixed-methods studies require a clear plan for how qualitative and quantitative findings will be connected or integrated.",
          "Explain why the selected analysis is appropriate for the research question and type of data.",
        ],
        example: {
          label: "Align analysis with the question",
          steps: [
            "Question: What percentage of respondents use a particular platform? → Frequencies or percentages may be appropriate.",
            "Question: Is there an association between two measured variables? → An appropriate association or correlation analysis may be considered depending on the variables and assumptions.",
            "Question: How do participants describe their experiences? → Qualitative coding and thematic analysis may be appropriate.",
            "Question: What is the relationship between survey findings and participants' explanations? → A mixed-methods design may require an explicit strategy for integrating the two forms of evidence.",
          ],
        },
        checklist: [
          "Have you identified how each research question will be analysed?",
          "Is the planned analysis appropriate for the type of data?",
          "Have you considered assumptions or requirements of statistical procedures where relevant?",
          "For qualitative research, have you explained how coding or interpretation will be conducted?",
          "If using mixed methods, have you explained how the findings will be integrated?",
        ],
      },

      {
        id: "quality-validity",
        title: "Address Research Quality",
        content: [
          "A methodology should explain how the quality and credibility of the research will be supported. The terminology and criteria vary across research traditions, so do not assume that one quality framework applies equally to every study.",
          "In quantitative research, researchers may consider concepts such as reliability, validity, measurement quality, sampling quality, and the assumptions underlying statistical analysis. In qualitative research, researchers may discuss credibility, dependability, confirmability, reflexivity, transparency, or related concepts depending on the methodology.",
          "The important principle is that the study should provide a defensible basis for its findings. Explain the procedures you will use to reduce avoidable error, bias, inconsistency, or unsupported interpretation.",
        ],
        points: [
          "Reliability: considers the consistency of a measurement or procedure where relevant.",
          "Validity: considers whether the research or measurement adequately supports the intended interpretation.",
          "Credibility: may be used in qualitative research to address the plausibility and trustworthiness of interpretations.",
          "Reflexivity: considers how the researcher's position, assumptions, or relationship to the research may influence the study.",
          "Transparency: clearly documenting research decisions and procedures.",
          "Pilot testing: may identify problems with instruments or procedures before the main data collection.",
          "Triangulation: may involve using multiple sources, methods, researchers, or perspectives where appropriate.",
        ],
        example: {
          label: "Quality depends on the design",
          steps: [
            "Quantitative example: Check whether a questionnaire measures the intended constructs and whether the selected statistical procedure is appropriate for the data.",
            "Qualitative example: Clearly document coding decisions, consider alternative interpretations, and explain how themes were developed.",
            "Mixed-methods example: Explain how the different forms of evidence complement one another and how disagreements between findings will be examined.",
          ],
        },
        checklist: [
          "Have you identified the main quality issues relevant to your methodology?",
          "Have you explained how potential sources of bias or error will be addressed?",
          "Are your quality criteria appropriate for the research tradition?",
          "Have you documented important methodological decisions clearly?",
        ],
      },

      {
        id: "ethics-and-limitations",
        title: "Consider Ethics and Limitations",
        content: [
          "Ethical research requires more than adding a sentence stating that participants will be treated ethically. The methodology should identify relevant risks and explain how participants, data, organisations, communities, or other affected parties will be protected.",
          "Depending on the study, ethical issues may include informed consent, voluntary participation, confidentiality, anonymity, privacy, sensitive questions, vulnerable participants, potential harm, conflicts of interest, deception, data security, and the right to withdraw.",
          "Methodological limitations should also be acknowledged. A limitation is a constraint or weakness that may affect how the findings should be interpreted. A limitation does not automatically invalidate a study. The important point is to recognise its implications and avoid claims that exceed the evidence.",
          "Ethical requirements and approval procedures vary by institution and research context. Follow the relevant institutional ethics requirements before collecting data.",
        ],
        points: [
          "Informed consent where required.",
          "Voluntary participation.",
          "Confidentiality and anonymity where appropriate.",
          "Secure handling and storage of research data.",
          "Protection of personal or sensitive information.",
          "Consideration of potential physical, psychological, social, professional, or other risks.",
          "Additional safeguards for vulnerable participants where applicable.",
          "Transparent reporting of conflicts of interest where relevant.",
          "Clear acknowledgement of methodological limitations.",
        ],
        example: {
          label: "Limitation and implication",
          steps: [
            "Limitation: The study uses a non-probability sample recruited through voluntary participation.",
            "Implication: Participants may differ systematically from people who did not participate.",
            "Appropriate response: Describe the sampling limitation clearly and avoid presenting the findings as automatically representative of the entire population.",
          ],
        },
        checklist: [
          "Have all relevant ethical risks been considered?",
          "Is informed consent addressed where required?",
          "How will participant information and research data be protected?",
          "Have you considered whether any participants require additional safeguards?",
          "Have you identified important methodological limitations?",
          "Do your planned claims remain within the limits of the research design?",
        ],
      },

      {
        id: "common-methodology-mistakes",
        title: "Common Methodology Mistakes",
        content: [
          "A methodology section becomes weak when it describes what the researcher plans to do without explaining why those decisions are appropriate. Every major methodological choice should have a clear connection to the research question and research design.",
          "Another common problem is using technical terminology without demonstrating understanding. Naming a methodology, sampling technique, or statistical test is not enough. The reader needs to understand how and why it will be used.",
          "The final methodology should therefore balance detail and justification. Include enough information to demonstrate that the study is coherent, feasible, ethical, and methodologically defensible without adding technical detail that does not serve the research purpose.",
        ],
        points: [
          "Choosing a method before defining the research question.",
          "Confusing methodology with methods.",
          "Listing a research approach without explaining why it is appropriate.",
          "Using a questionnaire or interview simply because it is convenient.",
          "Choosing a sample size without explaining the basis for the decision.",
          "Failing to explain how participants or data sources will be selected.",
          "Describing data collection but not explaining data analysis.",
          "Selecting statistical techniques without considering the research question, variables, or assumptions.",
          "Ignoring ethical approval or participant protection.",
          "Failing to acknowledge important limitations.",
          "Using research terminology without demonstrating how it applies to the study.",
          "Making causal claims from a design that only establishes association or description.",
        ],
        comparison: [
          {
            term: "Method-driven research",
            meaning:
              "The researcher chooses a familiar method first and then attempts to fit the research question around it.",
            example:
              "Choosing an online questionnaire because it is easy to distribute, regardless of whether it can answer the research question.",
          },
          {
            term: "Question-driven research",
            meaning:
              "The research question determines what evidence is needed, which then guides the methodological choices.",
            example:
              "Selecting interviews because the question requires detailed understanding of participants' experiences.",
          },
          {
            term: "Association",
            meaning:
              "Two variables are related or vary together in some observed way.",
            example:
              "Higher reported study time is associated with higher reported academic performance.",
          },
          {
            term: "Causation",
            meaning:
              "A change in one factor is demonstrated to produce a change in another under an appropriate causal design.",
            example:
              "A properly designed experiment provides evidence about whether an intervention causes a measured outcome.",
          },
        ],
        checklist: [
          "Does the methodology start from the research question rather than the method?",
          "Have you justified the major methodological decisions?",
          "Are the population, sample, collection, and analysis plans clear?",
          "Have you considered quality, ethics, and limitations?",
          "Are your intended conclusions appropriate for the research design?",
        ],
      },
    ],
    keyPrinciple:
      "Good methodology is about alignment. Start with the research question, determine what evidence is needed to answer it, select an appropriate research approach and design, then justify the sampling, data collection, analysis, quality procedures, and ethical safeguards. Do not choose methods simply because they are familiar or convenient. A defensible methodology explains not only what you will do, but why those choices provide an appropriate and feasible way to answer the research question.",
    checklist: [
      "Is the research approach appropriate for the research question?",
      "Is the research design clearly identified and justified?",
      "Have you distinguished methodology, research design, and methods?",
      "Have you clearly defined the population, sample, or data source?",
      "Is the sampling strategy appropriate and justified?",
      "Have you explained how data will be collected?",
      "Have you explained how data will be analysed?",
      "Are quality, validity, reliability, credibility, or related considerations addressed where relevant?",
      "Have you addressed ethical requirements?",
      "Have you acknowledged important methodological limitations?",
      "Are your intended conclusions appropriate for the evidence and design?",
      "Is the entire methodology feasible within your available time, resources, access, and skills?",
    ],
  },
  {
    id: "thesis-dissertation",
    number: "05",
    category: "Academic Writing",
    title: "Thesis & Dissertation Writing",
    shortTitle: "Thesis & Dissertation",
    description:
      "Learn how to structure, develop, connect, and write a complete thesis or dissertation from introduction through conclusion.",
    introduction:
      "A thesis or dissertation is a substantial piece of academic research that presents a focused investigation and communicates what was studied, why it was studied, how the research was conducted, what was found, what those findings mean, and what contribution the research makes. Although many empirical theses follow a familiar pattern of introduction, literature review, methodology, findings, discussion, and conclusion, there is no single structure that applies to every discipline or institution. The final structure should follow your university requirements, disciplinary conventions, supervisor guidance, and the logic of your own research.",
    sections: [
      {
        id: "thesis-vs-dissertation",
        title: "Understand the Thesis and Dissertation",
        content: [
          "A thesis or dissertation is more than a long academic essay. It presents a sustained research project in which the researcher defines a problem or question, engages with existing scholarship, explains a methodological approach, presents and interprets evidence, and develops a reasoned conclusion.",
          "The terms thesis and dissertation are used differently across countries and universities. In some contexts, a dissertation refers to a master's-level research project and a thesis to doctoral research; in others, the terminology is reversed or used interchangeably.",
          "What matters for a student is the specific definition, assessment criteria, format, and submission requirements of their institution and programme.",
        ],
        points: [
          "A thesis or dissertation addresses a defined research problem or question.",
          "It demonstrates engagement with existing academic literature.",
          "It explains and justifies the research methodology.",
          "It presents evidence generated or analysed through the research.",
          "It interprets the evidence rather than merely reporting it.",
          "It develops a conclusion connected to the original research questions.",
          "It identifies the significance, implications, and limitations of the research where appropriate.",
        ],
        checklist: [
          "Do you know the exact requirements for your degree and institution?",
          "Is your research question clearly defined?",
          "Can you explain the overall argument or purpose of your research?",
          "Does every major part of the document contribute to answering the research question?",
        ],
      },

      {
        id: "thesis-structure",
        title: "Understand the Overall Structure",
        content: [
          "A common empirical thesis structure includes an introduction, literature review, methodology, results or findings, discussion, and conclusion. Depending on the discipline, some chapters may be combined, divided into multiple chapters, or organised thematically.",
          "For example, a quantitative study may separate results and discussion, while a qualitative thesis may integrate findings and discussion around themes. Humanities research may organise the body around an argument rather than a conventional methods-results structure.",
          "The correct structure is therefore the one that clearly communicates the research and meets the requirements of the discipline and institution. Looking at recently completed theses in your field can help you understand accepted structures.",
        ],
        points: [
          "Preliminary pages may include title page, declaration, acknowledgements, abstract, table of contents, lists of figures and tables, abbreviations, or other required material.",
          "Introduction: establishes the research problem, context, purpose, questions, and scope.",
          "Literature review: critically examines existing scholarship relevant to the study.",
          "Methodology: explains and justifies how the research was conducted.",
          "Results or findings: presents the evidence produced by the study.",
          "Discussion: interprets the findings and connects them with the research question and existing literature.",
          "Conclusion: answers the research question, summarises the contribution, addresses implications and limitations, and may identify future research.",
          "References: provides complete details of cited sources.",
          "Appendices: contain supporting material where appropriate and permitted.",
        ],
        example: {
          label: "A common empirical structure",
          steps: [
            "Chapter 1 — Introduction: What is the research problem and why does it matter?",
            "Chapter 2 — Literature Review: What does existing research tell us?",
            "Chapter 3 — Methodology: How was the research conducted and why?",
            "Chapter 4 — Results/Findings: What did the research find?",
            "Chapter 5 — Discussion: What do those findings mean?",
            "Chapter 6 — Conclusion: What is the answer, contribution, limitation, and implication?",
          ],
        },
        note: "This is an example rather than a universal chapter template. Your institution may require a different structure, chapter order, number of chapters, or combined findings/discussion format.",
      },

      {
        id: "introduction-chapter",
        title: "Write the Introduction",
        content: [
          "The introduction establishes the research problem and gives the reader a clear understanding of what the thesis investigates and why the study is needed.",
          "A strong introduction moves from the broader context toward the specific research problem, questions, and objectives. It should provide enough background to orient the reader without turning into a second literature review.",
          "The introduction should also establish the scope of the study and usually provide a brief overview of the methodology and the organisation of the thesis, according to the requirements of the discipline.",
        ],
        points: [
          "Introduce the research area.",
          "Provide relevant background and context.",
          "Define important concepts or terms where necessary.",
          "Explain the research problem or rationale.",
          "Identify the research gap or unresolved issue.",
          "State the research aim.",
          "State the research objectives.",
          "Present the research questions and/or hypotheses.",
          "Briefly introduce the methodology or theoretical approach.",
          "Explain the significance or intended contribution where appropriate.",
          "Define the scope, delimitations, or boundaries of the study.",
          "Provide an overview of the thesis structure.",
        ],
        example: {
          label: "Introduction logic",
          steps: [
            "Context: Introduce the broader research area.",
            "Problem: Identify the specific issue requiring investigation.",
            "Evidence: Briefly establish why the issue matters.",
            "Gap: Explain what existing research does not adequately address.",
            "Purpose: State the aim and objectives.",
            "Questions: Present the research questions or hypotheses.",
            "Approach: Briefly explain how the study addresses the problem.",
            "Roadmap: Tell the reader how the remaining thesis is organised.",
          ],
        },
        checklist: [
          "Can a reader understand the research problem after reading the introduction?",
          "Are the aim, objectives, and research questions clearly stated?",
          "Have you established why the research is needed?",
          "Have you clearly defined the scope of the study?",
          "Does the chapter accurately reflect what the completed thesis actually does?",
        ],
      },

      {
        id: "literature-chapter",
        title: "Build the Literature Review Chapter",
        content: [
          "The literature review chapter establishes how the research fits within existing scholarship. It should demonstrate knowledge of relevant research while critically analysing the ideas, findings, theories, and methods that inform the study.",
          "A strong chapter is organised around themes, concepts, theories, debates, or another logical structure rather than simply summarising one source after another.",
          "The chapter should gradually establish the research gap or unresolved issue that provides a rationale for the present study. It should also help establish the conceptual or theoretical foundation used later in the thesis.",
        ],
        points: [
          "Define the scope of the review.",
          "Explain important concepts and terminology.",
          "Discuss relevant theories or conceptual frameworks.",
          "Synthesise important previous research.",
          "Compare findings and methodologies.",
          "Identify agreements, disagreements, and limitations.",
          "Establish the research gap.",
          "Explain how the reviewed literature informs the research questions.",
          "Develop or introduce the theoretical/conceptual framework where relevant.",
          "End with a clear connection to the present study.",
        ],
        example: {
          label: "From literature to research direction",
          steps: [
            "Theme 1: What previous studies establish.",
            "Theme 2: Where findings differ or remain uncertain.",
            "Theme 3: Relevant theories or explanatory frameworks.",
            "Theme 4: Limitations in existing evidence.",
            "Synthesis: What the literature collectively suggests.",
            "Gap: What remains insufficiently understood.",
            "Research response: How the present study addresses that gap.",
          ],
        },
        checklist: [
          "Is the chapter organised logically?",
          "Are studies synthesised rather than simply listed?",
          "Have important disagreements and limitations been discussed?",
          "Does the chapter establish a defensible research gap?",
          "Does it lead logically to your research questions?",
        ],
      },

      {
        id: "methodology-chapter",
        title: "Write the Methodology Chapter",
        content: [
          "The methodology chapter explains what you actually did in the research and why those choices were appropriate. Unlike a research proposal, a completed thesis normally reports completed methodological procedures using the tense and conventions expected by the discipline.",
          "The chapter should provide enough detail for the reader to understand the research design, participants or data sources, sampling, data collection, instruments, analytical procedures, ethical considerations, and relevant quality controls.",
          "Methodological decisions should be justified rather than merely listed. The reader should be able to see how the methodology connects to the research questions.",
        ],
        points: [
          "Research philosophy, paradigm, or theoretical position where relevant.",
          "Research approach and design.",
          "Study population and sampling.",
          "Participants or data sources.",
          "Research instruments.",
          "Data collection procedures.",
          "Data analysis procedures.",
          "Validity, reliability, credibility, trustworthiness, or other quality procedures where relevant.",
          "Ethical considerations and approval where applicable.",
          "Methodological limitations.",
        ],
        example: {
          label: "A methodological explanation",
          steps: [
            "Instead of: 'A questionnaire was used.'",
            "Explain: What the questionnaire measured, how it was developed or selected, who completed it, how participants were recruited, how it was administered, and why a questionnaire was appropriate for answering the research questions.",
            "Then explain how the resulting data were prepared and analysed.",
          ],
        },
        checklist: [
          "Does the chapter clearly explain what was actually done?",
          "Have you justified the major methodological decisions?",
          "Are sampling and data collection procedures sufficiently clear?",
          "Is the analysis procedure explained?",
          "Have you addressed relevant ethical and quality considerations?",
        ],
      },

      {
        id: "results-findings",
        title: "Present Results and Findings",
        content: [
          "The results or findings chapter presents the evidence generated through the research. The organisation should reflect the research questions, hypotheses, methodology, and conventions of the discipline.",
          "The purpose is not to place every piece of collected data into the thesis. Include the evidence necessary to support the analytical points and research argument.",
          "Tables, figures, charts, quotations, extracts, statistical outputs, or other forms of evidence should be introduced and explained clearly. The reader should understand why the evidence is being presented and what aspect of the research question it addresses.",
        ],
        points: [
          "Organise findings around research questions, objectives, hypotheses, themes, variables, cases, or another defensible structure.",
          "Introduce tables and figures before or alongside their presentation.",
          "Use clear titles, labels, units, and numbering.",
          "Report important patterns, differences, relationships, or themes.",
          "Distinguish findings supported by the data from interpretation that belongs in the discussion.",
          "Include enough evidence to substantiate the claims being made.",
          "Avoid overwhelming the reader with irrelevant outputs or repeated information.",
        ],
        example: {
          label: "Presenting quantitative findings",
          steps: [
            "State what was examined.",
            "Present the relevant result using appropriate statistics or a table/figure.",
            "Highlight the important pattern or difference.",
            "Report the result accurately without exaggerating it.",
            "Reserve broader explanations of why the result occurred for the discussion unless your disciplinary convention combines results and discussion.",
          ],
        },
        checklist: [
          "Are the findings organised around the research questions or study objectives?",
          "Does every important table or figure serve a clear purpose?",
          "Have you avoided presenting unnecessary raw output?",
          "Are statistical or qualitative findings reported accurately?",
          "Have you distinguished reporting from interpretation where your structure requires it?",
        ],
      },

      {
        id: "discussion-chapter",
        title: "Discuss and Interpret the Findings",
        content: [
          "The discussion explains what the findings mean. It is where you connect your results back to the research questions, previous literature, theory, and the broader research problem.",
          "A discussion should not simply repeat the results. Instead, it interprets important findings, compares them with previous research, considers possible explanations, identifies implications, and explains what the findings contribute.",
          "Not every finding needs an equally long explanation. Focus on the findings that matter most to the research questions and overall argument.",
        ],
        points: [
          "Return explicitly to the research question or hypothesis.",
          "Interpret the important findings.",
          "Compare findings with relevant previous research.",
          "Explain agreements and disagreements with earlier studies.",
          "Consider plausible explanations for unexpected findings.",
          "Relate findings to relevant theory or conceptual frameworks.",
          "Discuss practical, theoretical, methodological, or other implications where appropriate.",
          "Identify limitations affecting interpretation.",
          "Explain what the findings contribute to existing knowledge.",
        ],
        example: {
          label: "From result to discussion",
          steps: [
            "Result: Students reporting higher study frequency also reported higher academic performance.",
            "Discussion: This pattern is consistent with previous research linking study behaviour and academic outcomes.",
            "Interpretation: One possible explanation is that regular study provides greater opportunities for revision and learning.",
            "Qualification: Because the study is correlational, the result does not by itself establish that increased study frequency causes higher performance.",
            "Contribution: The findings may provide additional evidence within the particular population and context studied.",
          ],
        },
        comparison: [
          {
            term: "Results",
            meaning: "Reports what the analysis found.",
            example:
              "The analysis identified a statistically significant association between X and Y.",
          },
          {
            term: "Discussion",
            meaning:
              "Explains what the finding means and how it relates to research, theory, context, and implications.",
            example:
              "The association is consistent with previous studies, although differences in measurement may explain variations in effect size.",
          },
        ],
        checklist: [
          "Have you answered what the findings mean rather than simply repeating them?",
          "Have you connected important findings to previous research?",
          "Have you addressed unexpected or contradictory findings?",
          "Have you considered the limitations of your interpretations?",
          "Have you explained the contribution or implications of the findings?",
        ],
      },

      {
        id: "conclusion-chapter",
        title: "Write the Conclusion",
        content: [
          "The conclusion brings the thesis together and provides a clear response to the research question or overall research problem. It should not simply repeat the abstract or copy the results chapter.",
          "A strong conclusion briefly synthesises the major findings, explains the contribution of the research, acknowledges important limitations, and identifies appropriate implications or directions for future research.",
          "The conclusion should connect back to the promises made in the introduction. If the introduction established specific research questions and objectives, the conclusion should make clear how the completed study addressed them.",
        ],
        points: [
          "Return to the research problem.",
          "Provide a clear answer to the research question or questions.",
          "Summarise the most important findings or argument.",
          "Explain the contribution or significance of the research.",
          "Discuss important implications where appropriate.",
          "Acknowledge meaningful limitations.",
          "Suggest realistic directions for future research.",
          "Avoid introducing major new evidence or arguments that have not been developed in the thesis.",
        ],
        example: {
          label: "Closing the research loop",
          steps: [
            "Introduction: The study asks how X relates to Y in a defined population.",
            "Findings: The study identifies specific patterns in the relationship.",
            "Discussion: The patterns are interpreted in relation to previous research and theory.",
            "Conclusion: State clearly what the study demonstrates about X and Y within the limits of the research design.",
            "Contribution: Explain what the study adds to existing knowledge.",
            "Future research: Identify specific questions that remain open.",
          ],
        },
        checklist: [
          "Does the conclusion directly answer the research question?",
          "Have you summarised the most important findings rather than every result?",
          "Have you explained the contribution of the study?",
          "Are the limitations and future research directions realistic?",
          "Does the conclusion connect clearly back to the introduction?",
        ],
      },

      {
        id: "chapter-coherence",
        title: "Create Coherence Across Chapters",
        content: [
          "A thesis is one research argument expressed across multiple chapters. Each chapter should have its own purpose while contributing to the overall research question.",
          "Coherence means that the reader can see the connections between chapters. The research questions introduced in the beginning should remain visible throughout the literature review, methodology, findings, discussion, and conclusion.",
          "Signposting helps readers navigate a long document. Chapter introductions, headings, transitions, brief summaries, and references to earlier or later sections can show readers where they are and why the current section matters.",
        ],
        points: [
          "Use consistent terminology for key concepts.",
          "Keep research questions visible throughout the thesis.",
          "Make chapter titles and headings informative.",
          "Begin chapters with a clear purpose and roadmap.",
          "Use transitions to explain relationships between sections.",
          "End chapters by showing what has been established and what comes next.",
          "Ensure that findings correspond to research questions or objectives.",
          "Ensure the conclusion addresses the questions established in the introduction.",
        ],
        example: {
          label: "Research-question tracking",
          steps: [
            "RQ1 is introduced in Chapter 1.",
            "Chapter 2 identifies the literature relevant to RQ1.",
            "Chapter 3 explains how evidence for RQ1 was collected and analysed.",
            "Chapter 4 presents findings relevant to RQ1.",
            "Chapter 5 interprets those findings in relation to previous research.",
            "Chapter 6 provides the final answer to RQ1.",
            "Repeat this logic for every major research question where appropriate.",
          ],
        },
        checklist: [
          "Can you trace each research question through the thesis?",
          "Does every chapter have a clear purpose?",
          "Are key terms used consistently?",
          "Do chapters transition logically into one another?",
          "Does the conclusion fulfil what the introduction promised?",
        ],
      },

      {
        id: "academic-process",
        title: "Manage the Writing Process",
        content: [
          "Writing a thesis is an iterative process. The final document rarely emerges from writing each chapter once in order from Chapter 1 to the conclusion.",
          "Research develops as literature is reviewed, data are collected and analysed, and ideas are refined. Consequently, earlier chapters may need to be revised after later findings become clear.",
          "A practical workflow separates planning, drafting, reviewing, editing, referencing, formatting, and final quality checks. Regularly saving versions and maintaining organised research notes can also reduce the risk of losing work or creating inconsistencies.",
        ],
        points: [
          "Create a realistic writing schedule.",
          "Break large chapters into manageable sections.",
          "Draft before attempting sentence-level perfection.",
          "Maintain a consistent reference-management system.",
          "Track research questions, objectives, variables, themes, or analytical categories.",
          "Use supervisor feedback systematically.",
          "Revise the argument at the chapter and whole-thesis level.",
          "Proofread only after the structure and argument are stable.",
          "Check formatting against institutional submission requirements.",
        ],
        example: {
          label: "A practical revision sequence",
          steps: [
            "Pass 1 — Argument: Is the research story logically structured?",
            "Pass 2 — Chapter coherence: Does each chapter contribute to the overall research question?",
            "Pass 3 — Evidence: Are claims supported by appropriate evidence?",
            "Pass 4 — Analysis: Is the interpretation sufficiently critical and justified?",
            "Pass 5 — Structure: Are headings, transitions, tables, figures, and signposting clear?",
            "Pass 6 — Language: Improve clarity, grammar, academic tone, and concision.",
            "Pass 7 — Technical: Check references, formatting, page numbers, contents, appendices, and submission requirements.",
          ],
        },
        checklist: [
          "Have you separated structural revision from proofreading?",
          "Are you keeping track of supervisor feedback?",
          "Are references being recorded consistently throughout the project?",
          "Have you scheduled enough time for multiple revision rounds?",
        ],
      },

      {
        id: "common-thesis-mistakes",
        title: "Common Thesis & Dissertation Mistakes",
        content: [
          "A thesis can contain substantial research and still be difficult to assess if the argument is unclear. Most problems arise from weak alignment, insufficient critical analysis, poor organisation, or claims that exceed the evidence.",
          "The final document should be treated as one connected research argument rather than six or seven independent assignments placed next to one another.",
        ],
        points: [
          "Choosing a research question that is too broad for the available time and resources.",
          "Writing chapters independently without maintaining a consistent research argument.",
          "Repeating the same background information across multiple chapters.",
          "Turning the literature review into a collection of source summaries.",
          "Describing methodology without explaining or justifying methodological decisions.",
          "Presenting results without connecting them to research questions.",
          "Repeating results in the discussion without interpreting them.",
          "Making causal claims when the research design only establishes association.",
          "Introducing major new arguments or evidence for the first time in the conclusion.",
          "Using headings that do not clearly communicate the content of sections.",
          "Including tables or figures without explaining their relevance.",
          "Inconsistent terminology, referencing, formatting, or chapter numbering.",
          "Ignoring institutional submission requirements.",
        ],
        comparison: [
          {
            term: "Chapter-by-chapter writing",
            meaning:
              "Each chapter is written as though it were an independent assignment.",
            example:
              "The literature review discusses topics that are not connected to the final research questions.",
          },
          {
            term: "Thesis-level writing",
            meaning:
              "Every chapter contributes to one sustained research argument.",
            example:
              "The literature review establishes the gap that the methodology and findings directly address.",
          },
          {
            term: "Reporting",
            meaning: "Communicating what the data or analysis produced.",
            example:
              "The survey results show that 62% of respondents reported X.",
          },
          {
            term: "Interpretation",
            meaning:
              "Explaining what the evidence means in relation to the research question and existing knowledge.",
            example:
              "The finding may indicate a pattern consistent with previous research, while the study design limits causal interpretation.",
          },
        ],
        checklist: [
          "Does the thesis have one clear research story?",
          "Are all chapters connected to the research question?",
          "Have you removed unnecessary repetition?",
          "Have you separated reporting from interpretation where appropriate?",
          "Are claims proportionate to the evidence?",
          "Have you checked the complete document for consistency and institutional requirements?",
        ],
      },
    ],
    keyPrinciple:
      "A thesis or dissertation is one connected research argument, not a collection of unrelated chapters. The introduction establishes the problem and questions, the literature review establishes what is already known and what remains unresolved, the methodology explains how the research addresses the problem, the findings present the evidence, the discussion explains what that evidence means, and the conclusion provides the final answer and contribution. The exact chapter structure can vary, but the logic connecting the research question to the evidence and conclusion must remain clear.",
    checklist: [
      "Does the thesis have a clearly defined research problem and question?",
      "Does the introduction establish the purpose, scope, and structure?",
      "Does the literature review critically position the study?",
      "Does the methodology clearly explain and justify what was done?",
      "Are the findings organised around the research questions or study objectives?",
      "Does the discussion interpret findings in relation to literature and theory?",
      "Does the conclusion clearly answer the research question?",
      "Are the contribution, implications, and limitations appropriately explained?",
      "Is there a clear connection between all chapters?",
      "Are terminology, headings, citations, references, tables, and figures consistent?",
      "Have you followed your institution's formatting, submission, ethical, and referencing requirements?",
    ],
  },
  {
    id: "data-analysis",
    number: "06",
    category: "Research Analysis",
    title: "Data Analysis & Findings",
    shortTitle: "Data Analysis",
    description:
      "Learn how to prepare, analyse, present, and interpret research data while keeping your findings connected to your research questions.",
    introduction:
      "Data analysis is the process of turning collected data into meaningful evidence that can answer your research questions. The exact techniques depend on your research design, discipline, data type, and objectives. Good analysis is not simply producing tables, statistics, or themes. It involves examining the data systematically, identifying meaningful patterns, presenting relevant evidence, and explaining what those findings mean in relation to the research problem.",

    sections: [
      {
        id: "what-is-data-analysis",
        title: "What Is Data Analysis?",
        content: [
          "Data analysis is the systematic process of examining research data to identify patterns, relationships, differences, themes, or other findings that help answer the research questions.",
          "Analysis should be driven by the research design and research questions rather than by whatever techniques are easiest to perform. The same dataset can potentially be analysed in different ways, but the chosen approach should be appropriate for the question being investigated.",
          "Analysis is different from interpretation. Analysis examines what is present in the data; interpretation considers what those findings mean within the context of the research.",
        ],
        comparison: [
          {
            term: "Data",
            meaning: "The information collected or obtained for the research.",
            example:
              "Questionnaire responses, interview transcripts, test scores, observations.",
          },
          {
            term: "Analysis",
            meaning:
              "The systematic examination of data to identify patterns, relationships, differences, or themes.",
            example:
              "Calculating descriptive statistics or identifying themes in interview transcripts.",
          },
          {
            term: "Findings",
            meaning: "The important results that emerge from the analysis.",
            example:
              "Students who reported higher study frequency also reported higher academic performance.",
          },
          {
            term: "Interpretation",
            meaning:
              "An explanation of what the findings mean in the context of the research.",
            example:
              "The relationship may indicate that consistent study routines are associated with stronger academic performance.",
          },
        ],
        example: {
          label: "Simple analysis chain",
          steps: [
            "Research question: Is study frequency associated with academic performance?",
            "Data: Study-frequency responses and academic performance measurements.",
            "Analysis: Examine the distribution of responses and test the relationship between the variables.",
            "Finding: The analysis identifies whether a relationship exists and describes its direction or strength.",
            "Interpretation: Explain what the finding may mean while avoiding claims that the data cannot support.",
          ],
        },
        checklist: [
          "Is the analysis directly connected to the research questions or hypotheses?",
          "Is the chosen analytical approach appropriate for the type of data?",
          "Have you distinguished analysis from interpretation?",
          "Can another reader understand how the findings were produced?",
        ],
      },

      {
        id: "prepare-and-clean-data",
        title: "Prepare and Clean the Data",
        content: [
          "Data preparation should happen before the main analysis. The exact process depends on the type of research, but it commonly involves checking completeness, consistency, accuracy, coding, and formatting.",
          "For quantitative research, preparation may involve identifying missing values, checking invalid responses, coding categorical variables, detecting duplicate records, and ensuring that numerical variables are stored consistently.",
          "For qualitative research, preparation may involve organising interview transcripts, anonymising participants, checking transcription quality, and becoming familiar with the dataset before formal coding.",
          "Do not silently remove inconvenient observations simply because they do not produce the expected result. Decisions about exclusions, missing data, transformations, or corrections should be justified and documented.",
        ],
        points: [
          "Check whether required variables or responses are missing.",
          "Identify duplicate, impossible, or inconsistent entries.",
          "Apply a consistent coding system.",
          "Check units, labels, categories, and variable definitions.",
          "Document exclusions and data-cleaning decisions.",
          "Keep an original copy of the raw dataset.",
          "Anonymise personal or identifying information where required.",
          "Create a clear analysis-ready dataset.",
        ],
        example: {
          label: "Questionnaire example",
          steps: [
            "A survey contains 250 responses.",
            "Five responses contain no answers to the main outcome questions.",
            "Several age values are entered as text while others are numerical.",
            "The researcher establishes a consistent coding system, documents the five incomplete cases, checks the remaining records, and prepares the dataset for analysis.",
            "The cleaning decisions are reported transparently rather than hidden.",
          ],
        },
        checklist: [
          "Have you preserved the original raw data?",
          "Have you documented important cleaning decisions?",
          "Are variables and categories coded consistently?",
          "Have you checked missing, duplicate, or impossible values?",
          "Can you explain why excluded cases were excluded?",
        ],
      },

      {
        id: "quantitative-analysis",
        title: "Quantitative Data Analysis",
        content: [
          "Quantitative analysis uses numerical data to describe patterns, compare groups, examine relationships, or test hypotheses. The appropriate technique depends on the research question, measurement level, study design, sample, and assumptions of the method.",
          "Descriptive analysis is commonly used to summarise the characteristics of the data. Inferential analysis may be used when the research design calls for drawing conclusions beyond the observed sample, subject to the assumptions and limitations of the chosen method.",
          "The purpose of statistical analysis is not to use as many statistical tests as possible. Each analysis should have a clear research purpose.",
        ],
        points: [
          "Frequencies and percentages can describe categorical variables.",
          "Mean, median, and mode can summarise central tendency where appropriate.",
          "Range, variance, and standard deviation can describe variability.",
          "Cross-tabulations can help compare categorical variables.",
          "Correlation can examine association between variables.",
          "Regression can examine relationships between variables while accounting for specified predictors.",
          "Group-comparison tests can examine whether observed differences are statistically supported.",
          "The specific statistical test should be selected according to the research design and data characteristics.",
        ],
        comparison: [
          {
            term: "Descriptive analysis",
            meaning: "Summarises the data that was observed.",
            example: "The average satisfaction score was 4.1 out of 5.",
          },
          {
            term: "Inferential analysis",
            meaning:
              "Uses statistical procedures to evaluate patterns or hypotheses beyond simple description, subject to assumptions and study design.",
            example:
              "Testing whether satisfaction differs significantly between two groups.",
          },
          {
            term: "Association",
            meaning: "Indicates that variables are related in some way.",
            example:
              "Study hours and examination scores are positively associated.",
          },
          {
            term: "Causation",
            meaning:
              "Claims that a change in one factor produces a change in another.",
            example:
              "Increasing study hours causes examination scores to increase.",
          },
        ],
        note: "A statistical association does not automatically establish causation. Causal claims require an appropriate research design and sufficient evidence.",
      },

      {
        id: "qualitative-analysis",
        title: "Qualitative Data Analysis",
        content: [
          "Qualitative analysis is used to make sense of non-numerical data such as interviews, focus groups, observations, documents, or open-ended responses.",
          "A common approach is thematic analysis, where the researcher works systematically through the data to identify meaningful patterns or themes. Other qualitative approaches use different analytical traditions, so the terminology and procedure should match the chosen methodology.",
          "Qualitative analysis should not simply collect interesting quotations. The researcher needs to explain how the data was coded, grouped, interpreted, and connected to the research questions.",
        ],
        points: [
          "Become familiar with the dataset.",
          "Identify meaningful segments of data.",
          "Assign codes to relevant data.",
          "Compare and refine codes.",
          "Group related codes into broader categories or themes where appropriate.",
          "Review whether themes accurately represent the dataset.",
          "Define and name the final themes clearly.",
          "Select representative evidence to support the findings.",
          "Connect themes back to the research questions.",
        ],
        example: {
          label: "Interview analysis example",
          steps: [
            "Researchers interview students about difficulties experienced during online learning.",
            "Initial codes include internet problems, lack of interaction, time management, motivation, and flexible scheduling.",
            "Related codes are reviewed and grouped into broader patterns.",
            "A possible theme could be 'Managing independence and structure in online learning'.",
            "Selected participant quotations are then used as evidence for the theme.",
            "The researcher explains what the theme means rather than presenting quotations without analysis.",
          ],
        },
        comparison: [
          {
            term: "Code",
            meaning: "A label attached to a meaningful segment of data.",
            example: "Poor internet connection.",
          },
          {
            term: "Category",
            meaning: "A broader grouping of related codes where appropriate.",
            example: "Technology-related barriers.",
          },
          {
            term: "Theme",
            meaning:
              "A meaningful pattern or concept developed through analysis.",
            example:
              "Technology barriers shape students' ability to participate consistently.",
          },
        ],
        checklist: [
          "Is there a clear analytical process behind the themes?",
          "Are themes supported by sufficient evidence?",
          "Have quotations been selected because they support an analytical point?",
          "Have you avoided treating one participant's statement as representative of everyone?",
          "Are the themes connected to the research questions?",
        ],
      },

      {
        id: "mixed-methods-analysis",
        title: "Mixed-Methods Analysis",
        content: [
          "Mixed-methods research combines quantitative and qualitative approaches. Analysis therefore requires more than performing two separate analyses; the researcher also needs to consider how the two forms of evidence relate to each other.",
          "Depending on the research design, qualitative and quantitative findings may be compared, connected, or integrated to provide a more complete answer to the research problem.",
          "The integration strategy should be established as part of the research design rather than added casually after both analyses are complete.",
        ],
        example: {
          label: "Mixed-methods example",
          steps: [
            "A survey finds that many students report low satisfaction with online classes.",
            "Interview analysis identifies lack of interaction and technical difficulties as recurring concerns.",
            "The quantitative findings establish the extent of reported dissatisfaction.",
            "The qualitative findings provide context for understanding why participants reported that experience.",
            "The final interpretation explains how the two forms of evidence complement each other.",
          ],
        },
        checklist: [
          "Are both datasets analysed using appropriate methods?",
          "Have you explained how the quantitative and qualitative findings relate?",
          "Do the two forms of evidence complement, contradict, or qualify one another?",
          "Is the integration consistent with the stated mixed-methods design?",
        ],
      },

      {
        id: "tables-figures-visualisation",
        title: "Tables, Figures, and Data Visualisation",
        content: [
          "Tables and figures should make important evidence easier to understand. They should not be included simply to make a research chapter look more substantial.",
          "A good table or figure should have a clear purpose, an informative title, appropriate labels, and enough context for the reader to understand what is being shown.",
          "The surrounding text should guide the reader toward the important pattern or result rather than forcing the reader to interpret the visual independently.",
        ],
        points: [
          "Use tables when exact values or detailed comparisons are important.",
          "Use graphs or charts when patterns, trends, or relationships are easier to understand visually.",
          "Number tables and figures consistently.",
          "Use informative titles and labels.",
          "Clearly label axes, units, categories, and relevant notes.",
          "Refer to every important table or figure in the surrounding text.",
          "Avoid presenting the same information repeatedly in several formats unless there is a clear reason.",
        ],
        example: {
          label: "Weak vs useful presentation",
          steps: [
            "Weak: 'Table 4 shows the results.'",
            "Better: 'Table 4 shows that respondents aged 18–24 reported the highest proportion of daily social-media use.'",
            "The second version tells the reader what matters rather than simply directing them to the table.",
          ],
        },
        checklist: [
          "Does every table or figure have a purpose?",
          "Can the reader understand it without excessive searching?",
          "Are labels, units, and categories clear?",
          "Have you explained the important pattern in the accompanying text?",
          "Have you avoided decorative or redundant visuals?",
        ],
      },

      {
        id: "reporting-findings",
        title: "Reporting Findings Clearly",
        content: [
          "The findings or results section should present the evidence produced by the analysis in a logical structure. The organisation should normally reflect the research questions, objectives, hypotheses, themes, or analytical framework.",
          "A results section is generally more factual and evidence-focused than a discussion section. Where the thesis structure separates results and discussion, extensive interpretation should normally be reserved for the discussion unless disciplinary conventions indicate otherwise.",
          "Start each major results chapter or section by telling the reader what it addresses. Then present the relevant evidence and explain the important patterns.",
        ],
        points: [
          "Organise findings around research questions, objectives, hypotheses, or analytical themes.",
          "Present the most relevant evidence rather than every output produced during analysis.",
          "Use tables, figures, quotations, or other evidence where appropriate.",
          "Report unexpected and negative findings rather than hiding them.",
          "Use precise language when describing statistical results.",
          "Distinguish what the data shows from what you think the finding means.",
          "End major sections by making the analytical significance clear where appropriate.",
        ],
        comparison: [
          {
            term: "Reporting",
            meaning: "Explains what the analysis found.",
            example: "Group A had a higher mean score than Group B.",
          },
          {
            term: "Interpretation",
            meaning: "Explains what the finding may mean.",
            example:
              "The difference may indicate different levels of engagement between the groups.",
          },
          {
            term: "Discussion",
            meaning:
              "Connects findings to research questions, literature, theory, implications, and limitations.",
            example:
              "The finding is consistent with previous studies that identified engagement as an important factor.",
          },
        ],
        note: "The exact boundary between Results, Findings, and Discussion varies by discipline and thesis structure. Follow your department's conventions.",
      },

      {
        id: "interpreting-findings",
        title: "Interpreting Findings Without Overclaiming",
        content: [
          "Interpretation requires moving from the observed evidence to a reasoned explanation of what that evidence may mean. Strong interpretation remains grounded in the data and recognises the limits of the research design.",
          "Researchers should avoid presenting interpretations as certain facts when the evidence only supports a more cautious claim. The strength of the language should match the strength of the evidence.",
          "When findings differ from previous research, the difference should be examined rather than automatically treated as a failure. Differences may relate to population, context, measurement, sample, methodology, timing, or other factors.",
        ],
        comparison: [
          {
            term: "Evidence-supported claim",
            meaning:
              "A conclusion that is directly supported by the study's data and design.",
            example:
              "In this sample, respondents who reported higher study frequency also reported higher academic performance.",
          },
          {
            term: "Overclaim",
            meaning:
              "A conclusion stronger or broader than the evidence permits.",
            example:
              "Studying more always causes students to achieve higher grades.",
          },
          {
            term: "Cautious interpretation",
            meaning:
              "A qualified explanation that recognises uncertainty or limitations.",
            example:
              "The association may indicate that study frequency is related to academic performance, although other factors may also contribute.",
          },
        ],
        points: [
          "Ask whether the finding directly answers the research question.",
          "Consider whether alternative explanations exist.",
          "Compare findings with relevant previous research.",
          "Consider the influence of sample and context.",
          "Distinguish statistical significance from practical or substantive importance.",
          "Avoid causal language when the design cannot support causal inference.",
          "Use cautious language when evidence is limited.",
        ],
        checklist: [
          "Does every major interpretation have evidence behind it?",
          "Have you avoided unsupported causal claims?",
          "Have you acknowledged important uncertainty?",
          "Have you considered alternative explanations?",
          "Are claims limited to the population and context actually studied?",
        ],
      },

      {
        id: "link-findings-research-questions",
        title: "Link Findings to Research Questions",
        content: [
          "The strongest findings chapter has a visible connection between the research questions and the evidence used to answer them. Readers should not have to guess which result answers which question.",
          "A useful approach is to create an analysis map before writing: research question → relevant variables or data → analytical method → finding → interpretation.",
          "This also helps identify unanswered questions, unnecessary analyses, and places where the evidence does not fully support the intended conclusion.",
        ],
        example: {
          label: "Analysis map",
          steps: [
            "RQ1: What factors influence students' satisfaction with online learning?",
            "Data: Survey items measuring satisfaction and possible influencing factors.",
            "Analysis: Descriptive statistics and appropriate relationship/comparison analysis.",
            "Finding: Identify the strongest observed patterns.",
            "Interpretation: Explain what those patterns may indicate.",
            "RQ2: How do students describe their experiences of online learning?",
            "Data: Interview transcripts.",
            "Analysis: Qualitative coding and thematic analysis.",
            "Finding: Present major themes.",
            "Interpretation: Explain how those themes answer the second research question.",
          ],
        },
        checklist: [
          "Can each major finding be linked to a research question?",
          "Have you avoided analyses that do not contribute to the research objectives?",
          "Are all research questions addressed?",
          "Do your conclusions follow logically from the findings?",
        ],
      },

      {
        id: "common-analysis-mistakes",
        title: "Common Data Analysis & Findings Mistakes",
        content: [
          "Many weak research projects do not fail because the researcher collected no data. They fail because the analysis is disconnected from the research questions, the evidence is poorly presented, or the conclusions go beyond what the data supports.",
        ],
        points: [
          "Using statistical tests without explaining why they were appropriate.",
          "Producing tables and charts without analysing the patterns they contain.",
          "Reporting every statistical output instead of selecting relevant evidence.",
          "Treating correlation as proof of causation.",
          "Ignoring missing, contradictory, or unexpected findings.",
          "Choosing qualitative quotations without explaining their analytical significance.",
          "Presenting themes without explaining how they were developed.",
          "Repeating the same information in text, tables, and figures.",
          "Confusing statistical significance with practical importance.",
          "Making claims about a wider population that the sample or design cannot support.",
          "Writing the findings as a list of disconnected observations.",
          "Failing to connect findings with the research questions.",
          "Mixing results and discussion without following the conventions of the discipline.",
          "Changing the analysis simply because the initial results were unexpected.",
        ],
        example: {
          label: "A common reporting problem",
          steps: [
            "Weak: 'There was a significant relationship between X and Y, with p < .05.'",
            "Problem: The statement reports a statistical result but does not explain what relationship was observed or why it matters.",
            "Better: Report the relevant direction or magnitude where appropriate, identify the research question being addressed, and explain the result in context without making an unsupported causal claim.",
          ],
        },
        checklist: [
          "Is every major analysis justified?",
          "Are the findings organised logically?",
          "Are tables and figures explained?",
          "Are unexpected findings reported honestly?",
          "Have you avoided overclaiming?",
          "Are interpretation and evidence clearly connected?",
          "Does the chapter answer the research questions?",
        ],
      },
    ],

    keyPrinciple:
      "Good data analysis is not about producing the largest number of statistics, tables, themes, or charts. It is about using an appropriate and transparent analytical process to turn data into evidence that answers the research questions. Present the important findings clearly, distinguish findings from interpretation, connect the evidence to existing research and theory where appropriate, and make claims no stronger than the evidence allows.",

    checklist: [
      "Is the analysis appropriate for the research questions, design, and type of data?",
      "Have the data been checked, cleaned, coded, and documented appropriately?",
      "Is the analytical process transparent enough for the reader to understand?",
      "Are quantitative and qualitative techniques used appropriately?",
      "Are tables, figures, and quotations relevant and clearly presented?",
      "Are findings organised around research questions, objectives, hypotheses, or themes?",
      "Have you distinguished reporting findings from interpreting them?",
      "Have you connected findings with relevant previous research?",
      "Have you avoided unsupported causal or generalised claims?",
      "Have you acknowledged important limitations and unexpected findings?",
      "Does the analysis provide a clear path from research questions to conclusions?",
    ],
  },
  {
    id: "academic-writing",
    number: "07",
    category: "Academic Communication",
    title: "Academic Writing & Referencing",
    shortTitle: "Academic Writing",
    description:
      "Learn how to write clearly, build academic arguments, integrate sources, paraphrase correctly, reference consistently, and maintain academic integrity.",
    introduction:
      "Academic writing is more than using formal vocabulary or complicated sentences. Strong academic writing presents a clear line of reasoning, supports claims with appropriate evidence, engages critically with existing knowledge, and makes the writer's own analysis visible. Referencing is part of this process because it shows where ideas and evidence come from and allows readers to trace the sources used.",

    sections: [
      {
        id: "purpose-of-academic-writing",
        title: "What Is Academic Writing?",
        content: [
          "Academic writing communicates ideas, arguments, evidence, analysis, and conclusions in a way that allows readers to evaluate the reasoning behind them.",
          "Unlike informal writing or an opinion piece, academic writing normally requires claims to be supported by appropriate evidence and reasoning. The writer should make clear what comes from existing scholarship and what represents their own analysis.",
          "Academic writing does not mean making every sentence complicated. Clear, precise language is generally more useful than unnecessary jargon or overly elaborate vocabulary.",
        ],
        comparison: [
          {
            term: "Opinion",
            meaning:
              "A personal view that may or may not be supported by evidence.",
            example:
              "Online learning is obviously better than classroom learning.",
          },
          {
            term: "Academic claim",
            meaning:
              "A position or statement supported and qualified through evidence and reasoning.",
            example:
              "For some students, online learning may provide greater flexibility, although its effectiveness can depend on access, learning environment, and course design.",
          },
          {
            term: "Description",
            meaning:
              "Explains what something is, what happened, or what was observed.",
            example: "The survey included 250 undergraduate students.",
          },
          {
            term: "Analysis",
            meaning:
              "Examines relationships, significance, patterns, causes, implications, or differences.",
            example:
              "The responses suggest that flexibility was valued, but technical difficulties limited some students' participation.",
          },
        ],
        checklist: [
          "Is the purpose of the writing clear?",
          "Does the writing contain evidence and reasoning rather than unsupported opinion?",
          "Is your own analysis visible?",
          "Is the language clear and appropriate for the academic context?",
          "Have you avoided unnecessary complexity?",
        ],
      },

      {
        id: "building-an-argument",
        title: "Build a Clear Academic Argument",
        content: [
          "An academic argument is a connected line of reasoning in which claims are supported by evidence and explained through analysis. A strong paper is therefore more than a collection of information from different sources.",
          "Before writing a section, identify the central point you want the reader to understand. Then determine what evidence supports that point and how you will explain its significance.",
          "Your argument should develop progressively. Each major section should contribute to the overall purpose of the paper, chapter, or research project.",
        ],
        points: [
          "Identify the central question or problem.",
          "Define the main claim or position you want to establish.",
          "Select evidence that is relevant to that claim.",
          "Explain how the evidence supports, challenges, or qualifies the claim.",
          "Consider important alternative explanations or perspectives.",
          "Use the next section or paragraph to move the argument forward.",
          "Ensure that the conclusion follows logically from the evidence presented.",
        ],
        example: {
          label: "Evidence-based argument",
          steps: [
            "Claim: Flexible learning arrangements may improve accessibility for some students.",
            "Evidence: Research reports that flexibility can help students manage study alongside employment or other responsibilities.",
            "Analysis: Flexibility may therefore reduce scheduling barriers for students with competing commitments.",
            "Qualification: However, flexibility does not remove other barriers such as technology access or limited interaction.",
            "Argument: The effect of flexible learning therefore depends on the conditions under which it is implemented.",
          ],
        },
        checklist: [
          "What is the main claim?",
          "What evidence supports it?",
          "Have you explained the connection between evidence and claim?",
          "Have you considered relevant limitations or alternative views?",
          "Does the argument progress logically?",
        ],
      },

      {
        id: "paragraph-structure",
        title: "Write Strong Academic Paragraphs",
        content: [
          "A paragraph should normally develop one main idea or analytical purpose rather than combining unrelated points. Its sentences should work together to move the reader through a piece of reasoning.",
          "A useful paragraph often begins with a clear topic or controlling sentence, develops the point with evidence and explanation, and ends by reinforcing the significance of the discussion or linking to what follows.",
          "The exact structure can vary by discipline and purpose. A paragraph describing a process may look different from a paragraph evaluating a theory, but both should have a clear purpose.",
        ],
        points: [
          "Topic sentence: establish the main point.",
          "Context or explanation: clarify the issue being discussed.",
          "Evidence: provide research, data, examples, quotations, or other support.",
          "Analysis: explain what the evidence demonstrates.",
          "Evaluation: consider strengths, weaknesses, limitations, or competing explanations where relevant.",
          "Link: connect the point to the research question or the next part of the argument.",
        ],
        example: {
          label: "Paragraph logic",
          steps: [
            "Point: Identify the claim the paragraph will establish.",
            "Evidence: Introduce relevant research or data.",
            "Analysis: Explain how the evidence supports the point.",
            "Evaluation: Identify a limitation or contrasting perspective if relevant.",
            "Link: Show how the paragraph contributes to the wider argument.",
          ],
        },
        checklist: [
          "Does the paragraph have one clear purpose?",
          "Is the topic sentence meaningful rather than merely descriptive?",
          "Is evidence followed by analysis?",
          "Does the paragraph contribute to the overall argument?",
          "Is the transition to the next point clear?",
        ],
      },

      {
        id: "critical-writing",
        title: "Move From Description to Critical Writing",
        content: [
          "Critical writing does not simply mean disagreeing with sources. It involves examining claims carefully, comparing evidence, considering strengths and weaknesses, identifying assumptions, evaluating methods, and explaining why the evidence matters.",
          "A literature review or discussion chapter becomes stronger when sources are compared and synthesised rather than discussed one at a time as isolated summaries.",
          "Critical writing should remain evidence-based. A researcher should not reject a source simply because they disagree with it.",
        ],
        comparison: [
          {
            term: "Descriptive",
            meaning: "Reports what a source says.",
            example:
              "Smith (2024) found that students experienced difficulties with online learning.",
          },
          {
            term: "Analytical",
            meaning: "Examines relationships, patterns, or implications.",
            example:
              "Smith's findings suggest that technical barriers may influence students' ability to participate consistently.",
          },
          {
            term: "Critical",
            meaning:
              "Evaluates the evidence, reasoning, methods, limitations, or competing perspectives.",
            example:
              "Although Smith identifies technical barriers as an important issue, the study's limited sample may restrict how widely the findings can be applied.",
          },
        ],
        points: [
          "Compare findings from different sources.",
          "Identify agreements and disagreements.",
          "Examine the quality and relevance of evidence.",
          "Consider methodological strengths and limitations.",
          "Question assumptions where appropriate.",
          "Identify whether conclusions are supported by the evidence.",
          "Explain the implications of differences between studies.",
        ],
        checklist: [
          "Are you doing more than summarising sources?",
          "Have you compared relevant perspectives?",
          "Have you evaluated evidence rather than simply accepting it?",
          "Have you considered methodological limitations?",
          "Is your own analytical voice visible?",
        ],
      },

      {
        id: "using-sources",
        title: "Integrate Sources Into Your Writing",
        content: [
          "Academic sources should support and contribute to your argument rather than replace your own voice. A strong paragraph normally makes clear why a source has been introduced and how it relates to the point being developed.",
          "Using several relevant sources can help establish whether a finding, concept, or argument is supported across the literature. Where important disagreement exists, acknowledging it can make the analysis more balanced and credible.",
          "Avoid creating paragraphs that consist almost entirely of quotations or summaries of other researchers.",
        ],
        points: [
          "Introduce the source in a way that explains its relevance.",
          "Use the source to support a specific point.",
          "Explain the significance of the evidence in your own words.",
          "Compare the source with other relevant research where useful.",
          "Make your own analysis more prominent than the source material.",
          "Use authoritative and relevant sources appropriate to the research question.",
        ],
        example: {
          label: "Source integration",
          steps: [
            "Weak: Smith (2023) says motivation is important. Jones (2024) says motivation is also important.",
            "Problem: The paragraph reports two sources but does not explain the relationship between them.",
            "Stronger: Both Smith (2023) and Jones (2024) identify motivation as an important factor, although their studies examine different student populations. Taken together, the findings suggest that motivation may be relevant across contexts, while the different samples indicate that its influence should not automatically be assumed to be identical.",
          ],
        },
        checklist: [
          "Does every source have a purpose?",
          "Have you explained the relevance of the source?",
          "Have you synthesised related sources?",
          "Is your own voice stronger than the source quotations?",
          "Are your sources relevant and credible?",
        ],
      },

      {
        id: "paraphrasing-summarising-quoting",
        title: "Paraphrasing, Summarising, and Quoting",
        content: [
          "Paraphrasing means expressing a source's idea in your own words while preserving its original meaning. It is not simply replacing a few words with synonyms.",
          "Summarising reduces a larger passage, argument, study, or body of work to its key message. Quoting reproduces the source's exact words and should be used when the precise wording is important or when there is a specific reason to reproduce it.",
          "All three techniques require appropriate attribution. A paraphrased idea still belongs to the original source and therefore requires citation.",
        ],
        comparison: [
          {
            term: "Direct quotation",
            meaning:
              "Uses the source's exact wording and requires appropriate quotation formatting and citation.",
            example:
              "Useful when the precise wording or formal definition is important.",
          },
          {
            term: "Paraphrase",
            meaning:
              "Restates a specific idea from a source in your own wording while retaining its meaning.",
            example:
              "Useful when the source's idea is important but its exact wording is not.",
          },
          {
            term: "Summary",
            meaning:
              "Condenses the main point or overall argument of a larger source or section.",
            example:
              "Useful when giving an overview of a study or theoretical position.",
          },
        ],
        example: {
          label: "Safe paraphrasing process",
          steps: [
            "Read the original passage carefully.",
            "Make sure you understand the author's meaning.",
            "Set the original aside.",
            "Write the idea in your own sentence structure and vocabulary.",
            "Compare your version with the original to check accuracy.",
            "Ensure any distinctive wording retained from the original is quoted appropriately.",
            "Add the correct citation.",
          ],
        },
        note: "Changing a few words or rearranging the original sentence is not a genuine paraphrase. University guidance specifically distinguishes genuine paraphrasing from superficial word substitution.",
      },

      {
        id: "referencing-systems",
        title: "Understand Referencing Systems",
        content: [
          "Referencing allows readers to identify the sources behind ideas, evidence, quotations, and other material used in academic work. It also helps demonstrate how your work builds on existing knowledge.",
          "Referencing systems differ in their rules. Common systems include APA, Harvard, MLA, Chicago, Vancouver, and discipline-specific styles. Your university, department, journal, or supervisor may specify which style you must use.",
          "Do not combine rules from different styles simply because they appear individually correct. Follow one required style consistently unless your institution provides specific exceptions.",
        ],
        comparison: [
          {
            term: "In-text citation",
            meaning:
              "The citation placed within the body of the academic work to identify the source.",
            example:
              "An author-date system may use a form such as (Smith, 2024).",
          },
          {
            term: "Reference list",
            meaning:
              "A detailed list of cited sources provided at the end of the work.",
            example:
              "The full publication details corresponding to the in-text citations.",
          },
          {
            term: "Bibliography",
            meaning:
              "A list of sources that may include material consulted beyond the sources directly cited, depending on the required style and institution.",
            example:
              "Some academic systems distinguish this from a reference list.",
          },
        ],
        points: [
          "Check which referencing style your institution or programme requires.",
          "Learn the rules for the source types you actually use.",
          "Keep complete source information while researching.",
          "Make sure in-text citations correspond to the required end references.",
          "Check author names, dates, titles, publication information, and links or identifiers where required.",
          "Apply the same style consistently throughout the document.",
        ],
        checklist: [
          "Do you know which referencing style is required?",
          "Does every cited source have the required reference information?",
          "Are references formatted consistently?",
          "Do in-text citations and the reference list correspond?",
          "Have you checked the official style guide rather than relying on memory?",
        ],
      },

      {
        id: "plagiarism-academic-integrity",
        title: "Avoid Plagiarism and Protect Academic Integrity",
        content: [
          "Plagiarism occurs when someone presents another person's ideas, words, data, or other work as their own without appropriate acknowledgement. It can happen intentionally or unintentionally.",
          "Good academic practice begins during research rather than at the final editing stage. Keep accurate records of sources and clearly distinguish direct quotations, paraphrased ideas, and your own thoughts in your notes.",
          "Academic integrity also includes accurate reporting of evidence. Researchers should not fabricate information, manipulate evidence dishonestly, or misrepresent what a source says.",
        ],
        points: [
          "Record source information while taking notes.",
          "Clearly mark direct quotations in your notes.",
          "Record page numbers or other location information when needed.",
          "Separate your own ideas from notes taken from sources.",
          "Cite paraphrased ideas as well as direct quotations.",
          "Do not fabricate references or evidence.",
          "Do not misrepresent another researcher's argument.",
          "Follow your institution's rules concerning collaboration and use of generative AI.",
          "Check whether reusing previously submitted work is permitted before doing so.",
        ],
        example: {
          label: "A common accidental plagiarism problem",
          steps: [
            "A student copies several sentences into research notes without quotation marks.",
            "Several weeks later, the student forgets that the wording came from the source.",
            "The wording is included in the dissertation with only a general citation.",
            "Because the original wording has been presented as the student's own, the citation alone may not make the use acceptable.",
            "A safer workflow is to clearly mark quotations during note-taking and paraphrase genuinely when using the idea.",
          ],
        },
        checklist: [
          "Can you distinguish your ideas from source material in your notes?",
          "Have all borrowed ideas been appropriately cited?",
          "Are direct quotations clearly identified?",
          "Have you avoided fabricated or misleading evidence?",
          "Have you followed your institution's academic-integrity and AI-use rules?",
        ],
      },

      {
        id: "cohesion-and-signposting",
        title: "Create Flow, Cohesion, and Signposting",
        content: [
          "A reader should be able to follow the relationship between ideas without having to reconstruct the argument themselves. Cohesion comes from logical ordering, consistent terminology, appropriate transitions, and clear connections between paragraphs and sections.",
          "Signposting helps readers understand where the argument is going and why a particular section is relevant. This is especially useful in dissertations and longer research reports.",
          "Transitions should describe the logical relationship between ideas rather than being added mechanically at the beginning of every paragraph.",
        ],
        points: [
          "Use headings that accurately describe the section's purpose.",
          "Begin sections with a clear indication of what will be discussed where appropriate.",
          "Use transition phrases to show relationships such as contrast, continuation, cause, consequence, or qualification.",
          "Repeat important terminology consistently.",
          "Use the end of a paragraph to connect its point to the wider argument when useful.",
          "Avoid abrupt changes between unrelated ideas.",
        ],
        example: {
          label: "Logical transition",
          steps: [
            "Previous point: Research identifies cost as a major barrier to higher education access.",
            "Next point: Access is not determined by cost alone.",
            "Transition: 'However, financial barriers do not fully explain differences in participation.'",
            "The transition tells the reader that the argument is being qualified rather than simply changing subjects.",
          ],
        },
        checklist: [
          "Can a reader understand how each section relates to the research question?",
          "Are transitions meaningful?",
          "Are key terms used consistently?",
          "Does each paragraph connect to the surrounding argument?",
          "Do headings accurately reflect the content?",
        ],
      },

      {
        id: "clarity-style",
        title: "Write Clearly and Precisely",
        content: [
          "Academic style should support understanding. Formality is useful, but unnecessarily complicated vocabulary, excessive passive constructions, long sentences, and vague claims can make research harder to understand.",
          "Choose words that communicate the intended meaning precisely. Where a technical term is necessary, define it clearly and use it consistently.",
          "Avoid absolute statements when the evidence is limited. Words such as 'always', 'never', 'proves', or 'all' can make claims unnecessarily strong.",
        ],
        comparison: [
          {
            term: "Vague",
            meaning:
              "Uses imprecise language that makes the claim difficult to evaluate.",
            example: "Many people believe this is a very important issue.",
          },
          {
            term: "More precise",
            meaning:
              "Identifies the population, evidence, or scope of the claim.",
            example:
              "Previous studies have identified financial constraints as an important barrier among low-income university students.",
          },
          {
            term: "Overly complicated",
            meaning: "Uses unnecessary words or complex constructions.",
            example:
              "It is of considerable importance to note that the results obtained appear to indicate...",
          },
          {
            term: "Clear",
            meaning: "States the point directly.",
            example: "The results indicate that...",
          },
        ],
        points: [
          "Prefer precise words over impressive-sounding vocabulary.",
          "Keep sentences manageable.",
          "Remove unnecessary repetition.",
          "Define important technical terms.",
          "Use cautious language when evidence is uncertain.",
          "Prefer active construction when it improves clarity, while recognising that passive constructions can be appropriate in some disciplines.",
          "Avoid conversational expressions unless appropriate to the discipline.",
        ],
        checklist: [
          "Can the reader understand the sentence on the first reading?",
          "Are claims appropriately qualified?",
          "Have unnecessary words been removed?",
          "Are technical terms defined?",
          "Is the tone appropriate for the discipline?",
        ],
      },

      {
        id: "editing-and-proofreading",
        title: "Edit and Proofread Before Submission",
        content: [
          "Editing and proofreading are separate stages. Editing improves the content, structure, reasoning, clarity, and flow. Proofreading focuses on remaining language, formatting, citation, and presentation errors.",
          "Proofreading should happen after substantive writing and editing are complete. Reading several times with different purposes can make errors easier to identify.",
          "Do not rely entirely on automated grammar or spelling tools. They can identify some surface-level problems but cannot reliably determine whether an argument is logically sound or whether a source has been represented accurately.",
        ],
        points: [
          "First check the overall argument and structure.",
          "Then check whether every section contributes to the research question.",
          "Check paragraph logic and transitions.",
          "Check evidence, citations, and references.",
          "Check grammar, spelling, punctuation, and sentence clarity.",
          "Check tables, figures, headings, numbering, and formatting.",
          "Check the final document against submission requirements.",
        ],
        example: {
          label: "Four-pass editing process",
          steps: [
            "Pass 1 — Argument: Is the reasoning clear and evidence-based?",
            "Pass 2 — Structure: Do sections and paragraphs appear in a logical order?",
            "Pass 3 — Sources: Are citations, quotations, paraphrases, and references accurate?",
            "Pass 4 — Language: Check grammar, spelling, punctuation, formatting, and consistency.",
          ],
        },
        checklist: [
          "Have you completed substantive editing before proofreading?",
          "Have you checked the argument and structure separately from grammar?",
          "Have you checked every citation and reference?",
          "Have you checked tables, figures, headings, and numbering?",
          "Have you compared the final document with the submission requirements?",
        ],
      },

      {
        id: "common-academic-writing-mistakes",
        title: "Common Academic Writing & Referencing Mistakes",
        content: [
          "Strong academic writing develops through revision. Many problems can be corrected by checking whether each paragraph has a clear purpose, whether evidence is analysed rather than merely reported, and whether sources are integrated accurately.",
        ],
        points: [
          "Writing long introductions without establishing a clear research problem.",
          "Using complicated vocabulary to make writing sound academic.",
          "Describing sources one by one without synthesis.",
          "Including quotations without explaining their relevance.",
          "Paraphrasing by changing only a few words from the original.",
          "Using citations without demonstrating how the evidence supports the argument.",
          "Relying heavily on one or two sources.",
          "Making unsupported claims or presenting opinion as established fact.",
          "Using an inconsistent referencing style.",
          "Including sources in the reference list that were not actually used when the required style expects only cited works.",
          "Citing a source that does not actually support the claim being made.",
          "Forgetting citations for paraphrased ideas.",
          "Treating proofreading as only a spelling check.",
          "Submitting writing without checking the institution's formatting and referencing requirements.",
          "Using generative AI or other tools in ways that conflict with institutional academic-integrity rules.",
        ],
        example: {
          label: "The source-heavy paragraph problem",
          steps: [
            "Problem: A paragraph contains five citations but almost no explanation from the researcher.",
            "Why it is weak: The reader can see what other researchers said but cannot clearly see the writer's synthesis or argument.",
            "Improvement: Group related sources, compare their findings, identify agreements or differences, and explain what those findings mean for the research question.",
          ],
        },
        checklist: [
          "Is your own analytical voice visible?",
          "Are sources synthesised rather than simply listed?",
          "Are paraphrases genuinely written in your own words?",
          "Are all borrowed ideas cited?",
          "Is the referencing style consistent?",
          "Have you checked academic-integrity requirements?",
          "Have you completed both editing and proofreading?",
        ],
      },
    ],

    keyPrinciple:
      "Strong academic writing combines your own reasoning with evidence from credible sources. Build a clear argument, give each paragraph a purpose, analyse and synthesise sources rather than simply summarising them, paraphrase and quote accurately, reference consistently according to the required style, and revise your work for clarity and academic integrity before submission.",

    checklist: [
      "Is the central argument or purpose clear?",
      "Does each paragraph have a clear analytical purpose?",
      "Are claims supported by appropriate evidence?",
      "Is your own analytical voice visible?",
      "Have you critically evaluated and synthesised sources?",
      "Are quotations, paraphrases, and summaries used appropriately?",
      "Are all borrowed ideas accurately cited?",
      "Does the reference list follow the required referencing style?",
      "Have you avoided plagiarism and other academic-integrity problems?",
      "Is the writing clear, precise, and appropriately formal?",
      "Have you checked cohesion, transitions, and overall structure?",
      "Have you edited and proofread the final document carefully?",
    ],
  },
];
