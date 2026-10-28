export type PracticeDetail = {headline:string;introduction:string;overview:string;families:{title:string;description:string;services:string[]}[];solutions:string[];ai:string[];technologies:string[];delivery:string[];support:string;cta:string};
export const practiceDetails:Record<string,PracticeDetail> = {
  "software-engineering": {
    "headline": "The systems that run your enterprise.",
    "introduction": "From enterprise applications to custom business platforms, RBC helps organisations implement, connect and modernise the systems that support their operations.",
    "overview": "Disconnected applications, manual handoffs and ageing platforms make business change harder. This practice connects operational processes with the systems and information they depend on.",
    "families": [
      {
        "title": "Core business platforms",
        "description": "Connect finance, customer relationships, people and supply chains through applications configured around business processes.",
        "services": [
          "ERP and financial management systems",
          "CRM and customer experience platforms",
          "HRMS and human capital management",
          "Procurement and supply chain systems"
        ]
      },
      {
        "title": "Digital business applications",
        "description": "Build and modernise customer-facing channels and internal applications, with migration planned around business continuity.",
        "services": [
          "E-commerce and digital business platforms",
          "Enterprise applications and custom software",
          "Application modernisation and migration"
        ]
      },
      {
        "title": "Integration and information",
        "description": "Connect applications and documents through defined interfaces, ownership and access controls.",
        "services": [
          "API integration and middleware",
          "Enterprise content and document management"
        ]
      }
    ],
    "solutions": [
      "ERP implementation and migration",
      "CRM and HRMS platforms",
      "E-commerce and business applications",
      "Application integration and document management"
    ],
    "ai": [
      "Intelligent ERP workflows can route exceptions for review.",
      "Enterprise copilots can help users retrieve authorised business information.",
      "Document intelligence can extract information for AI-assisted business processes."
    ],
    "technologies": [
      "SAP",
      "Oracle",
      "Microsoft Dynamics 365",
      "Odoo",
      "Zoho"
    ],
    "delivery": [
      "Map business processes and application dependencies.",
      "Define application architecture, migration and integration boundaries.",
      "Configure or build applications and validate business workflows.",
      "Connect APIs, migrate data and test end-to-end processes.",
      "Plan application support, monitoring and ongoing optimisation."
    ],
    "support": "Application support and ongoing optimisation; workflow automation, RPA, document processing and systems orchestration.",
    "cta": "Discuss your enterprise systems"
  },
  "data-ai-automation": {
    "headline": "Intelligence engineered into every decision.",
    "introduction": "RBC connects enterprise data, analytics and AI to help organisations turn information into actionable intelligence and build smarter applications and workflows.",
    "overview": "Fragmented data and manual reporting limit the usefulness of analytics and AI. This practice addresses data quality, access, evaluation and the connection between insight and action.",
    "families": [
      {
        "title": "Data foundations",
        "description": "Organise information from enterprise sources into governed platforms that support reliable analysis.",
        "services": [
          "Data engineering, pipelines and integration",
          "Enterprise data platforms and lakehouses",
          "Data governance and responsible AI"
        ]
      },
      {
        "title": "Analytics and enterprise intelligence",
        "description": "Connect reporting and predictive models to the decisions and applications they are intended to support.",
        "services": [
          "Business intelligence and analytics",
          "Machine learning and predictive analytics",
          "AI engineering and enterprise AI applications"
        ]
      },
      {
        "title": "Intelligent applications and operations",
        "description": "Design assistants and document workflows with evaluation, monitoring and human review appropriate to their use.",
        "services": [
          "AI agents and intelligent assistants",
          "Intelligent document processing",
          "MLOps, model evaluation and monitoring"
        ]
      }
    ],
    "solutions": [
      "Enterprise data platforms and lakehouses",
      "Business intelligence dashboards",
      "Enterprise AI assistants",
      "Document intelligence workflows"
    ],
    "ai": [
      "AI agents can assist with defined tasks using authorised enterprise data.",
      "Predictive analytics can inform planning, subject to model evaluation.",
      "Intelligence capabilities support applications, infrastructure operations, security analysis and advisory decisions across the other four practices."
    ],
    "technologies": [
      "Microsoft Fabric",
      "Power BI",
      "Databricks",
      "Python",
      "OpenAI",
      "NVIDIA"
    ],
    "delivery": [
      "Identify decisions, data sources and acceptable use.",
      "Design data architecture, governance and evaluation criteria.",
      "Build pipelines, analytics and AI applications.",
      "Integrate intelligence into business systems and workflows.",
      "Plan data operations, model monitoring and ongoing evaluation."
    ],
    "support": "Monitoring and ongoing optimisation; AI agents, intelligent document processing and workflow automation.",
    "cta": "Discuss your data and AI priorities"
  },
  "cloud-infrastructure": {
    "headline": "The infrastructure behind everything.",
    "introduction": "RBC helps organisations design, deploy and modernise the physical and digital infrastructure that supports enterprise applications, connected workplaces and intelligent workloads.",
    "overview": "Capacity constraints, disconnected environments and manual operations can hinder enterprise systems. This practice addresses workload placement, connectivity, deployment and recovery requirements.",
    "families": [
      {
        "title": "Enterprise infrastructure and workplace",
        "description": "Plan physical capacity, connectivity and endpoints around workloads and the people using them.",
        "services": [
          "Enterprise servers, storage and compute",
          "Networking, LAN/WAN, wireless and connectivity",
          "Data-centre infrastructure and modernisation",
          "Digital workplace and endpoint solutions",
          "Hardware procurement and deployment"
        ]
      },
      {
        "title": "Cloud and platform engineering",
        "description": "Design workload environments and delivery pipelines for migration and repeatable deployment.",
        "services": [
          "Cloud architecture and migration",
          "Hybrid and multi-cloud environments",
          "Virtualisation and container platforms",
          "DevOps, CI/CD and platform engineering"
        ]
      },
      {
        "title": "Operations and recovery",
        "description": "Define operational visibility and recovery requirements alongside infrastructure design.",
        "services": [
          "Infrastructure monitoring and optimisation",
          "Backup and infrastructure recovery"
        ]
      }
    ],
    "solutions": [
      "Server, storage and networking deployments",
      "Cloud migration and hybrid environments",
      "Digital workplace solutions",
      "Container platforms and delivery pipelines"
    ],
    "ai": [
      "AI-ready infrastructure can provide capacity for intelligent workloads.",
      "AI workload deployment requires appropriate compute, data access and operational controls.",
      "Intelligent monitoring and automated infrastructure operations can support maintenance and exception handling."
    ],
    "technologies": [
      "Microsoft Azure",
      "AWS",
      "Google Cloud",
      "Cisco",
      "Docker",
      "Kubernetes",
      "NVIDIA"
    ],
    "delivery": [
      "Assess workloads, infrastructure capacity and operating requirements.",
      "Architect connectivity, environments and recovery arrangements.",
      "Deploy infrastructure and configure platforms.",
      "Migrate workloads and integrate identity, networking and monitoring.",
      "Plan cloud operations, infrastructure support and optimisation."
    ],
    "support": "Cloud operations, infrastructure support, monitoring and ongoing optimisation; automated provisioning and systems orchestration.",
    "cta": "Discuss your infrastructure priorities"
  },
  "cybersecurity-resilience": {
    "headline": "Security engineered into every layer.",
    "introduction": "RBC helps organisations strengthen the security and resilience of their technology environments through integrated protection, governance and continuity-focused solutions.",
    "overview": "Security gaps across identities, endpoints and infrastructure can expose business operations. This practice brings protection, risk assessment and recovery planning into the same technology architecture.",
    "families": [
      {
        "title": "Security architecture and assurance",
        "description": "Identify risks and control gaps to guide security design, assessment scope and governance priorities.",
        "services": [
          "Cybersecurity architecture and assessments",
          "Vulnerability assessment and security testing",
          "Governance, risk and compliance"
        ]
      },
      {
        "title": "Protection across the enterprise",
        "description": "Align access and protection controls across users, networks, applications and information.",
        "services": [
          "Network and perimeter security",
          "Identity and access management",
          "Cloud and application security",
          "Endpoint and email protection",
          "Data protection and security controls"
        ]
      },
      {
        "title": "Monitoring and continuity",
        "description": "Define monitoring and response solutions alongside backup and recovery plans; operating coverage is agreed for each engagement.",
        "services": [
          "Security monitoring and incident response solutions",
          "Backup, disaster recovery and business continuity"
        ]
      }
    ],
    "solutions": [
      "Identity and access management solutions",
      "Network, cloud and endpoint protection",
      "Security monitoring and response workflows",
      "Backup and disaster recovery planning"
    ],
    "ai": [
      "AI-assisted threat analysis can help prioritise signals for human investigation.",
      "Security workflow automation can coordinate defined response steps.",
      "Intelligent monitoring can support analysis across systems and infrastructure."
    ],
    "technologies": [
      "Microsoft Security",
      "Fortinet",
      "Cisco",
      "Cloud-native security platforms"
    ],
    "delivery": [
      "Assess assets, risks, current controls and continuity requirements.",
      "Design security architecture and governance priorities.",
      "Implement and validate agreed protection controls.",
      "Integrate identity, monitoring and response workflows.",
      "Define support, control review and recovery testing arrangements."
    ],
    "support": "Monitoring, infrastructure support and ongoing optimisation; security workflow automation and systems orchestration within agreed controls.",
    "cta": "Discuss your security and resilience priorities"
  },
  "technology-advisory": {
    "headline": "Technology strategy built for execution.",
    "introduction": "RBC helps organisations make informed technology decisions, develop practical transformation strategies and design enterprise architectures grounded in implementation realities.",
    "overview": "Competing priorities and technology choices can leave organisations without a practical path forward. This practice connects business requirements, architecture and investment decisions with implementation planning.",
    "families": [
      {
        "title": "Strategy and transformation",
        "description": "Translate business priorities and the current technology landscape into an actionable roadmap.",
        "services": [
          "IT and enterprise technology strategy",
          "Enterprise architecture",
          "Digital transformation planning",
          "Technology assessments and roadmaps"
        ]
      },
      {
        "title": "Technology selection and investment",
        "description": "Compare options against requirements, integration needs, operating costs and delivery constraints.",
        "services": [
          "ERP and enterprise software selection",
          "Cloud and infrastructure strategy",
          "Technology procurement and vendor evaluation",
          "Technology investment and licensing optimisation"
        ]
      },
      {
        "title": "Governance and intelligent enterprise readiness",
        "description": "Define decision frameworks and delivery priorities for data, AI, security and technology change.",
        "services": [
          "AI readiness and transformation strategy",
          "Data strategy and governance",
          "Cybersecurity maturity and resilience planning",
          "IT governance and project delivery advisory"
        ]
      }
    ],
    "solutions": [
      "Enterprise technology assessments and roadmaps",
      "ERP and enterprise software selection briefs",
      "Cloud and infrastructure strategies",
      "AI readiness and governance plans"
    ],
    "ai": [
      "AI adoption roadmaps can sequence use cases against readiness and business priorities.",
      "Operating-model transformation considers people, controls and accountability alongside technology.",
      "AI governance and enterprise architecture can define the foundations for intelligent operations."
    ],
    "technologies": [
      "Microsoft",
      "AWS",
      "Google Cloud",
      "SAP",
      "Oracle",
      "Odoo",
      "Zoho"
    ],
    "delivery": [
      "Assess business priorities, technology maturity and constraints.",
      "Develop target architecture and decision criteria.",
      "Translate strategy into implementation plans and procurement requirements.",
      "Align delivery workstreams and integration dependencies.",
      "Define governance, support responsibilities and roadmap reviews."
    ],
    "support": "Support and operating-model planning across practices; automation assessments covering RPA, AI agents and workflow orchestration.",
    "cta": "Discuss your technology strategy"
  }
};
