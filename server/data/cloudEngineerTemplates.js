/**
 * Cloud Engineer Resume Templates
 * Pre-filled content for different seniority levels
 */

const cloudEngineerTemplates = {
  junior: {
    title: "Junior Cloud Engineer",
    personalInfo: {
      name: "Taylor Wilson",
      email: "taylor.wilson@example.com",
      phone: "(555) 987-6543",
      address: "Chicago, IL",
      linkedin: "linkedin.com/in/taylorwilson",
      github: "github.com/taylorwilson",
      website: "taylorwilson.cloud"
    },
    summary: "Motivated Junior Cloud Engineer with foundational knowledge in AWS, Azure, and GCP cloud platforms. Experienced in deploying and managing cloud resources, basic infrastructure as code, and cloud security best practices. Eager to apply technical skills in a collaborative environment to build scalable and reliable cloud solutions.",
    experience: [
      {
        title: "Junior Cloud Engineer",
        company: "CloudTech Solutions",
        location: "Chicago, IL",
        startDate: "2023-05-01",
        endDate: "",
        current: true,
        description: "• Assist in deploying and managing AWS resources including EC2, S3, and RDS\n• Help implement infrastructure as code using AWS CloudFormation and Terraform\n• Configure and maintain cloud monitoring using CloudWatch and Grafana\n• Support migration of on-premises applications to AWS cloud environment\n• Collaborate with development teams to implement cloud-based CI/CD pipelines\n• Assist in troubleshooting cloud infrastructure issues and performance optimization"
      },
      {
        title: "IT Support Specialist",
        company: "TechSolutions Inc.",
        location: "Chicago, IL",
        startDate: "2022-01-01",
        endDate: "2023-04-30",
        current: false,
        description: "• Provided technical support for cloud-based applications and services\n• Assisted in managing user accounts and permissions in AWS IAM\n• Helped maintain documentation for cloud resources and procedures\n• Supported basic networking and security configurations\n• Participated in cloud cost optimization initiatives"
      }
    ],
    education: [
      {
        degree: "Bachelor of Science",
        fieldOfStudy: "Information Technology",
        school: "University of Illinois",
        location: "Chicago, IL",
        startDate: "2018-09-01",
        endDate: "2022-05-31",
        description: "Relevant coursework: Cloud Computing, Network Security, Database Management, Web Development"
      }
    ],
    skills: [
      "AWS (EC2, S3, RDS, IAM)",
      "Azure (Basics)",
      "Google Cloud Platform (Basics)",
      "Linux Administration",
      "Terraform (Basics)",
      "AWS CloudFormation",
      "Docker (Basics)",
      "Python",
      "Bash Scripting",
      "Git & GitHub",
      "Cloud Security Fundamentals",
      "Networking Basics",
      "Monitoring & Logging"
    ],
    certifications: [
      "AWS Certified Cloud Practitioner",
      "Microsoft Certified: Azure Fundamentals (AZ-900)"
    ],
    projects: [
      {
        title: "AWS Web Application Deployment",
        description: "Deployed a three-tier web application on AWS using EC2, RDS, and S3, implementing security best practices and monitoring.",
        technologies: "AWS EC2, RDS, S3, VPC, CloudWatch, Terraform"
      },
      {
        title: "Cloud Cost Optimization",
        description: "Participated in a project to identify and implement cost optimization strategies for AWS resources, resulting in 15% monthly savings.",
        technologies: "AWS Cost Explorer, CloudWatch, Trusted Advisor"
      }
    ]
  },
  
  mid: {
    title: "Cloud Engineer",
    personalInfo: {
      name: "Jordan Patel",
      email: "jordan.patel@example.com",
      phone: "(555) 876-5432",
      address: "Denver, CO",
      linkedin: "linkedin.com/in/jordanpatel",
      github: "github.com/jordanpatel",
      website: "jordanpatel.cloud"
    },
    summary: "Experienced Cloud Engineer with 3+ years specializing in multi-cloud architectures across AWS, Azure, and GCP. Skilled in infrastructure as code, serverless computing, and cloud security. Proven track record of designing and implementing scalable, cost-effective cloud solutions that improve operational efficiency and support business objectives.",
    experience: [
      {
        title: "Cloud Engineer",
        company: "CloudNative Solutions",
        location: "Denver, CO",
        startDate: "2022-02-01",
        endDate: "",
        current: true,
        description: "• Design and implement multi-cloud architectures across AWS, Azure, and GCP\n• Develop infrastructure as code using Terraform and CloudFormation, achieving 90% infrastructure automation\n• Implement serverless architectures using AWS Lambda, Azure Functions, and Google Cloud Functions\n• Manage container orchestration with EKS, AKS, and GKE\n• Design and implement cloud security controls and compliance measures\n• Optimize cloud costs, resulting in 25% reduction in monthly cloud spend\n• Implement CI/CD pipelines for infrastructure deployment using GitHub Actions and Azure DevOps"
      },
      {
        title: "Junior Cloud Engineer",
        company: "TechInnovate",
        location: "Boulder, CO",
        startDate: "2020-03-01",
        endDate: "2022-01-31",
        current: false,
        description: "• Deployed and managed AWS resources including EC2, S3, RDS, and Lambda\n• Implemented infrastructure as code using Terraform and AWS CDK\n• Configured monitoring and alerting using CloudWatch, Datadog, and PagerDuty\n• Assisted in migrating on-premises applications to AWS and Azure\n• Implemented backup and disaster recovery solutions for cloud workloads\n• Collaborated with development teams to implement cloud-based CI/CD pipelines"
      },
      {
        title: "Systems Administrator",
        company: "DataTech Inc.",
        location: "Boulder, CO",
        startDate: "2019-01-01",
        endDate: "2020-02-29",
        current: false,
        description: "• Managed Linux and Windows servers in a hybrid cloud environment\n• Implemented automation using Ansible and PowerShell\n• Assisted in cloud migration planning and execution\n• Maintained backup and recovery systems\n• Provided technical support for cloud-based applications"
      }
    ],
    education: [
      {
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Science",
        school: "Colorado State University",
        location: "Fort Collins, CO",
        startDate: "2015-09-01",
        endDate: "2019-05-31",
        description: "Specialization in Distributed Systems and Cloud Computing"
      }
    ],
    skills: [
      "AWS (Advanced)",
      "Azure (Intermediate)",
      "Google Cloud Platform (Intermediate)",
      "Terraform",
      "AWS CloudFormation & CDK",
      "Infrastructure as Code",
      "Kubernetes (EKS, AKS, GKE)",
      "Docker & Containerization",
      "Serverless Architecture",
      "CI/CD Pipelines",
      "Python & Go",
      "Bash & PowerShell",
      "Cloud Security & Compliance",
      "Networking (VPC, VNET)",
      "Database Management (SQL, NoSQL)",
      "Monitoring & Logging",
      "Cost Optimization",
      "Disaster Recovery"
    ],
    certifications: [
      "AWS Certified Solutions Architect - Associate",
      "Microsoft Certified: Azure Administrator Associate",
      "Google Cloud Associate Cloud Engineer",
      "HashiCorp Certified: Terraform Associate"
    ],
    projects: [
      {
        title: "Multi-Cloud Data Platform",
        description: "Designed and implemented a data processing platform spanning AWS and GCP, using each cloud's strengths for different workloads while maintaining unified management.",
        technologies: "AWS, GCP, Terraform, Kubernetes, Apache Airflow"
      },
      {
        title: "Serverless Microservices Architecture",
        description: "Developed a serverless architecture for a high-traffic web application using AWS Lambda, API Gateway, and DynamoDB, reducing operational costs by 40%.",
        technologies: "AWS Lambda, API Gateway, DynamoDB, CloudFront, Terraform"
      },
      {
        title: "Cloud Security Framework",
        description: "Implemented a comprehensive security framework for cloud resources, including IAM policies, network security, encryption, and compliance monitoring.",
        technologies: "AWS Security Hub, Azure Security Center, IAM, VPC, Security Groups"
      }
    ]
  },
  
  senior: {
    title: "Senior Cloud Engineer",
    personalInfo: {
      name: "Avery Martinez",
      email: "avery.martinez@example.com",
      phone: "(555) 765-4321",
      address: "Atlanta, GA",
      linkedin: "linkedin.com/in/averymartinez",
      github: "github.com/averymartinez",
      website: "averymartinez.cloud"
    },
    summary: "Senior Cloud Engineer with 6+ years of expertise in designing and implementing enterprise-scale cloud solutions across AWS, Azure, and GCP. Specialized in cloud architecture, migration strategies, and building resilient, secure, and cost-effective infrastructures. Proven track record of leading complex cloud transformation initiatives and mentoring junior engineers in cloud best practices.",
    experience: [
      {
        title: "Senior Cloud Engineer",
        company: "Enterprise Cloud Solutions",
        location: "Atlanta, GA",
        startDate: "2021-03-01",
        endDate: "",
        current: true,
        description: "• Architect and implement enterprise-scale cloud solutions across AWS, Azure, and GCP\n• Lead cloud migration strategies for Fortune 500 clients, successfully migrating 200+ applications\n• Design and implement hybrid and multi-cloud architectures to meet specific business requirements\n• Develop cloud governance frameworks and landing zone architectures\n• Implement advanced security controls and compliance measures for regulated industries\n• Optimize cloud spending across multiple accounts, achieving 35% cost reduction\n• Mentor junior engineers and establish cloud engineering best practices\n• Lead disaster recovery and business continuity planning for critical workloads"
      },
      {
        title: "Cloud Engineer",
        company: "CloudTech Innovations",
        location: "Raleigh, NC",
        startDate: "2018-06-01",
        endDate: "2021-02-28",
        current: false,
        description: "• Designed and implemented cloud infrastructure on AWS and Azure using infrastructure as code\n• Led the migration of legacy applications to cloud-native architectures\n• Implemented containerization and orchestration using Docker and Kubernetes\n• Developed CI/CD pipelines for infrastructure and application deployment\n• Designed and implemented monitoring, logging, and alerting solutions\n• Performed security assessments and implemented remediation measures\n• Optimized cloud resource utilization and implemented cost controls"
      },
      {
        title: "Systems Engineer",
        company: "Tech Solutions Inc.",
        location: "Raleigh, NC",
        startDate: "2016-02-01",
        endDate: "2018-05-31",
        current: false,
        description: "• Managed hybrid cloud infrastructure including AWS and on-premises systems\n• Implemented automation using Ansible, Chef, and PowerShell\n• Designed and maintained backup and disaster recovery solutions\n• Managed Windows and Linux server environments\n• Implemented monitoring and alerting systems\n• Provided technical support for critical business applications"
      }
    ],
    education: [
      {
        degree: "Master of Science",
        fieldOfStudy: "Cloud Computing",
        school: "Georgia Institute of Technology",
        location: "Atlanta, GA",
        startDate: "2019-09-01",
        endDate: "2021-12-31",
        description: "Focus on Cloud Architecture and Security"
      },
      {
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Engineering",
        school: "North Carolina State University",
        location: "Raleigh, NC",
        startDate: "2012-09-01",
        endDate: "2016-05-31",
        description: ""
      }
    ],
    skills: [
      "Enterprise Cloud Architecture",
      "AWS (Expert)",
      "Azure (Advanced)",
      "Google Cloud Platform (Advanced)",
      "Multi-Cloud Strategy",
      "Cloud Migration & Transformation",
      "Infrastructure as Code (Terraform, Pulumi, CloudFormation)",
      "Kubernetes & Container Orchestration",
      "Serverless Architectures",
      "Cloud Security & Compliance",
      "Identity & Access Management",
      "Network Design & Security",
      "Database Services (SQL, NoSQL)",
      "High Availability & Disaster Recovery",
      "Performance Optimization",
      "Cost Management & Optimization",
      "Python, Go, PowerShell",
      "CI/CD & DevOps Practices"
    ],
    certifications: [
      "AWS Certified Solutions Architect - Professional",
      "Microsoft Certified: Azure Solutions Architect Expert",
      "Google Cloud Professional Cloud Architect",
      "Certified Kubernetes Administrator (CKA)",
      "AWS Certified Security - Specialty",
      "HashiCorp Certified: Terraform Associate"
    ],
    projects: [
      {
        title: "Enterprise Cloud Migration Framework",
        description: "Developed a comprehensive framework for enterprise cloud migration, including assessment, planning, execution, and optimization phases, successfully used for 10+ large-scale migrations.",
        technologies: "AWS, Azure, Terraform, CloudEndure, AWS Application Migration Service"
      },
      {
        title: "Multi-Region Disaster Recovery Solution",
        description: "Designed and implemented a multi-region disaster recovery solution for a financial services client, achieving RPO of 15 minutes and RTO of 1 hour for critical workloads.",
        technologies: "AWS Route 53, Aurora Global Database, S3 Cross-Region Replication, Lambda"
      },
      {
        title: "Cloud Security Compliance Framework",
        description: "Developed a comprehensive cloud security framework for HIPAA and PCI-DSS compliance, including automated compliance checking and remediation.",
        technologies: "AWS Config, Security Hub, Azure Policy, Terraform, Python"
      }
    ]
  },
  
  lead: {
    title: "Cloud Engineering Lead",
    personalInfo: {
      name: "Riley Chen",
      email: "riley.chen@example.com",
      phone: "(555) 654-3210",
      address: "Seattle, WA",
      linkedin: "linkedin.com/in/rileychen",
      github: "github.com/rileychen",
      website: "rileychen.cloud"
    },
    summary: "Accomplished Cloud Engineering Lead with 8+ years of experience architecting and delivering enterprise cloud solutions across AWS, Azure, and GCP. Expert in cloud strategy, governance, and leading large-scale digital transformation initiatives. Proven track record of building and mentoring high-performing cloud engineering teams while driving innovation, cost optimization, and operational excellence.",
    experience: [
      {
        title: "Cloud Engineering Lead",
        company: "Global Technology Solutions",
        location: "Seattle, WA",
        startDate: "2020-07-01",
        endDate: "",
        current: true,
        description: "• Lead a team of 12 cloud engineers supporting enterprise-wide cloud initiatives across AWS, Azure, and GCP\n• Develop and implement cloud strategy, governance, and operating models for a Fortune 100 company\n• Architect complex multi-cloud and hybrid cloud solutions for mission-critical workloads\n• Establish cloud centers of excellence and cloud adoption frameworks\n• Drive cloud financial management, achieving 45% cost reduction while scaling operations\n• Lead large-scale cloud migration and modernization programs involving 500+ applications\n• Implement cloud security and compliance frameworks for regulated industries\n• Collaborate with executive leadership to align cloud initiatives with business objectives\n• Mentor and develop cloud engineering talent across the organization"
      },
      {
        title: "Senior Cloud Architect",
        company: "CloudScale Technologies",
        location: "San Francisco, CA",
        startDate: "2017-04-01",
        endDate: "2020-06-30",
        current: false,
        description: "• Designed and implemented enterprise cloud architectures for Fortune 500 clients\n• Led cloud transformation initiatives, including application modernization and migration\n• Developed landing zone architectures and account structures for AWS and Azure\n• Implemented infrastructure as code practices using Terraform and CloudFormation\n• Designed security controls and compliance frameworks for regulated industries\n• Established cloud governance models and cost management strategies\n• Mentored junior architects and engineers in cloud best practices"
      },
      {
        title: "Cloud Solutions Architect",
        company: "TechInnovate",
        location: "San Francisco, CA",
        startDate: "2015-01-01",
        endDate: "2017-03-31",
        current: false,
        description: "• Designed and implemented cloud solutions on AWS and Azure for enterprise clients\n• Developed migration strategies for moving on-premises workloads to the cloud\n• Implemented containerization and orchestration using Docker and Kubernetes\n• Designed high-availability and disaster recovery solutions\n• Developed CI/CD pipelines for infrastructure and application deployment\n• Performed cloud security assessments and implemented remediation measures"
      },
      {
        title: "Systems Engineer",
        company: "Enterprise Systems Inc.",
        location: "San Jose, CA",
        startDate: "2012-06-01",
        endDate: "2014-12-31",
        current: false,
        description: "• Managed enterprise infrastructure including servers, storage, and networking\n• Implemented virtualization solutions using VMware and Hyper-V\n• Designed and maintained backup and disaster recovery solutions\n• Automated system administration tasks using PowerShell and Python\n• Supported migration to hybrid cloud environments"
      }
    ],
    education: [
      {
        degree: "Master of Business Administration",
        fieldOfStudy: "Technology Management",
        school: "University of Washington",
        location: "Seattle, WA",
        startDate: "2018-09-01",
        endDate: "2020-06-30",
        description: ""
      },
      {
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Science",
        school: "Stanford University",
        location: "Stanford, CA",
        startDate: "2008-09-01",
        endDate: "2012-06-30",
        description: ""
      }
    ],
    skills: [
      "Cloud Strategy & Governance",
      "Enterprise Architecture",
      "Team Leadership & Mentoring",
      "AWS (Expert)",
      "Azure (Expert)",
      "Google Cloud Platform (Advanced)",
      "Multi-Cloud & Hybrid Cloud",
      "Cloud Migration & Modernization",
      "Cloud Financial Management",
      "Cloud Security & Compliance",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Kubernetes & Containerization",
      "Serverless Architectures",
      "CI/CD & DevOps",
      "Data & Analytics Platforms",
      "High Availability & Disaster Recovery",
      "Project & Program Management",
      "Executive Communication"
    ],
    certifications: [
      "AWS Certified Solutions Architect - Professional",
      "Microsoft Certified: Azure Solutions Architect Expert",
      "Google Cloud Professional Cloud Architect",
      "AWS Certified DevOps Engineer - Professional",
      "Certified Kubernetes Administrator (CKA)",
      "TOGAF Certified",
      "ITIL Foundation v4"
    ],
    projects: [
      {
        title: "Enterprise Cloud Transformation",
        description: "Led a 2-year enterprise cloud transformation program for a Fortune 100 company, migrating and modernizing 500+ applications to AWS and Azure, resulting in 40% cost reduction and 60% improvement in time-to-market.",
        technologies: "AWS, Azure, Terraform, Kubernetes, CI/CD, Cloud Native"
      },
      {
        title: "Multi-Cloud Operating Model",
        description: "Developed and implemented a multi-cloud operating model including governance, security, financial management, and operations for a global enterprise spanning AWS, Azure, and GCP.",
        technologies: "AWS Organizations, Azure Management Groups, GCP Resource Hierarchy, Terraform, ServiceNow"
      },
      {
        title: "Cloud Financial Management Framework",
        description: "Designed and implemented a comprehensive cloud financial management framework, including showback/chargeback, budgeting, forecasting, and optimization, reducing cloud spend by 45% while scaling operations.",
        technologies: "AWS Cost Explorer, Azure Cost Management, FinOps, Terraform, Tagging Strategies"
      }
    ]
  }
};

module.exports = cloudEngineerTemplates;
