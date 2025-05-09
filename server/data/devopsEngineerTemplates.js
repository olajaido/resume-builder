/**
 * DevOps Engineer Resume Templates
 * Pre-filled content for different seniority levels
 */

const devopsEngineerTemplates = {
  junior: {
    title: "Junior DevOps Engineer",
    personalInfo: {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      phone: "(555) 123-4567",
      address: "San Francisco, CA",
      linkedin: "linkedin.com/in/alexjohnson",
      github: "github.com/alexjohnson",
      website: "alexjohnson.dev"
    },
    summary: "Motivated Junior DevOps Engineer with hands-on experience in CI/CD pipelines, containerization, and cloud infrastructure. Proficient in AWS, Docker, and Jenkins with a strong foundation in Linux systems administration. Passionate about automation and implementing DevOps best practices to improve development workflows.",
    experience: [
      {
        title: "Junior DevOps Engineer",
        company: "TechStart Solutions",
        location: "San Francisco, CA",
        startDate: "2023-06-01",
        endDate: "",
        current: true,
        description: "• Assisted in maintaining CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 25%\n• Collaborated with development teams to containerize applications using Docker\n• Helped implement infrastructure as code using Terraform for AWS resources\n• Monitored system performance and responded to alerts using Prometheus and Grafana\n• Participated in on-call rotations to address production issues"
      },
      {
        title: "IT Support Specialist",
        company: "InnovateTech",
        location: "San Francisco, CA",
        startDate: "2022-01-01",
        endDate: "2023-05-31",
        current: false,
        description: "• Provided technical support for Linux and Windows servers\n• Assisted in network configuration and troubleshooting\n• Automated routine tasks using Bash and PowerShell scripts\n• Managed user accounts and permissions across multiple systems\n• Documented IT processes and created knowledge base articles"
      }
    ],
    education: [
      {
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Science",
        school: "University of California",
        location: "Berkeley, CA",
        startDate: "2018-09-01",
        endDate: "2022-05-31",
        description: "Relevant coursework: Operating Systems, Computer Networks, Database Systems, Cloud Computing"
      }
    ],
    skills: [
      "Linux/Unix",
      "AWS (EC2, S3, RDS)",
      "Docker",
      "Jenkins",
      "Git",
      "GitHub Actions",
      "Terraform (basics)",
      "Bash Scripting",
      "Python",
      "Monitoring (Prometheus, Grafana)",
      "Networking Fundamentals",
      "CI/CD Pipelines"
    ],
    certifications: [
      "AWS Certified Cloud Practitioner",
      "Docker Certified Associate"
    ],
    projects: [
      {
        title: "Automated Deployment Pipeline",
        description: "Created a CI/CD pipeline using Jenkins and Docker to automate the testing and deployment of a web application, reducing deployment time from hours to minutes.",
        technologies: "Jenkins, Docker, AWS EC2, GitHub"
      },
      {
        title: "Infrastructure as Code Project",
        description: "Implemented infrastructure as code using Terraform to provision and manage AWS resources for a development environment.",
        technologies: "Terraform, AWS, Git"
      }
    ]
  },
  
  mid: {
    title: "DevOps Engineer",
    personalInfo: {
      name: "Jamie Smith",
      email: "jamie.smith@example.com",
      phone: "(555) 234-5678",
      address: "Austin, TX",
      linkedin: "linkedin.com/in/jamiesmith",
      github: "github.com/jamiesmith",
      website: "jamiesmith.tech"
    },
    summary: "Experienced DevOps Engineer with 3+ years of expertise in designing and implementing CI/CD pipelines, container orchestration, and cloud infrastructure. Proficient in AWS, GCP, Kubernetes, and Terraform with a strong focus on automation and infrastructure as code. Demonstrated success in improving system reliability and deployment efficiency.",
    experience: [
      {
        title: "DevOps Engineer",
        company: "CloudScale Technologies",
        location: "Austin, TX",
        startDate: "2022-03-01",
        endDate: "",
        current: true,
        description: "• Designed and maintained CI/CD pipelines using GitLab CI and Jenkins, improving deployment frequency by 40%\n• Implemented Kubernetes clusters for container orchestration across multiple environments\n• Managed cloud infrastructure on AWS and GCP using Terraform and CloudFormation\n• Developed monitoring and alerting solutions using Prometheus, Grafana, and ELK stack\n• Automated security scanning and compliance checks in the CI/CD pipeline\n• Reduced infrastructure costs by 20% through resource optimization and auto-scaling"
      },
      {
        title: "Systems Administrator",
        company: "DataTech Solutions",
        location: "Austin, TX",
        startDate: "2020-01-01",
        endDate: "2022-02-28",
        current: false,
        description: "• Administered Linux servers and implemented configuration management using Ansible\n• Designed backup and disaster recovery solutions for critical systems\n• Automated routine system maintenance tasks using Python and Bash\n• Managed database clusters (MySQL, PostgreSQL) including replication and backups\n• Implemented monitoring solutions using Nagios and Zabbix"
      }
    ],
    education: [
      {
        degree: "Bachelor of Science",
        fieldOfStudy: "Information Technology",
        school: "University of Texas",
        location: "Austin, TX",
        startDate: "2016-09-01",
        endDate: "2020-05-31",
        description: "Relevant coursework: Systems Administration, Network Security, Cloud Computing, Database Management"
      }
    ],
    skills: [
      "AWS (EC2, ECS, S3, RDS, Lambda)",
      "GCP (Compute Engine, GKE, Cloud Storage)",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Jenkins",
      "GitLab CI",
      "Ansible",
      "Python",
      "Bash",
      "ELK Stack",
      "Prometheus & Grafana",
      "MySQL & PostgreSQL",
      "Infrastructure as Code",
      "Microservices Architecture"
    ],
    certifications: [
      "AWS Certified Solutions Architect - Associate",
      "Certified Kubernetes Administrator (CKA)",
      "HashiCorp Certified: Terraform Associate"
    ],
    projects: [
      {
        title: "Multi-Cloud Kubernetes Deployment",
        description: "Designed and implemented a Kubernetes-based deployment strategy that works across AWS and GCP, ensuring high availability and disaster recovery capabilities.",
        technologies: "Kubernetes, Terraform, AWS, GCP, Helm"
      },
      {
        title: "Automated Security Scanning Pipeline",
        description: "Integrated security scanning tools into the CI/CD pipeline to automatically detect vulnerabilities in code and dependencies before deployment.",
        technologies: "Jenkins, SonarQube, OWASP ZAP, Docker"
      }
    ]
  },
  
  senior: {
    title: "Senior DevOps Engineer",
    personalInfo: {
      name: "Morgan Taylor",
      email: "morgan.taylor@example.com",
      phone: "(555) 345-6789",
      address: "Seattle, WA",
      linkedin: "linkedin.com/in/morgantaylor",
      github: "github.com/morgantaylor",
      website: "morgantaylor.dev"
    },
    summary: "Senior DevOps Engineer with 6+ years of experience architecting scalable, resilient cloud infrastructure and implementing DevOps best practices. Expert in multi-cloud environments (AWS, Azure, GCP), Kubernetes orchestration, and infrastructure automation. Proven track record of leading teams to improve deployment velocity, system reliability, and operational efficiency.",
    experience: [
      {
        title: "Senior DevOps Engineer",
        company: "Enterprise Cloud Solutions",
        location: "Seattle, WA",
        startDate: "2021-02-01",
        endDate: "",
        current: true,
        description: "• Led the design and implementation of a multi-cloud infrastructure strategy using AWS, Azure, and GCP\n• Architected and deployed production-grade Kubernetes clusters supporting 100+ microservices\n• Implemented GitOps workflows with ArgoCD and Flux, reducing deployment errors by 60%\n• Designed disaster recovery and high availability solutions achieving 99.99% uptime\n• Mentored junior engineers and established DevOps best practices across the organization\n• Reduced cloud infrastructure costs by 30% through optimization and implementing spot instances\n• Implemented comprehensive observability solutions using Prometheus, Grafana, and OpenTelemetry"
      },
      {
        title: "DevOps Engineer",
        company: "TechInnovate",
        location: "Portland, OR",
        startDate: "2018-05-01",
        endDate: "2021-01-31",
        current: false,
        description: "• Designed and maintained CI/CD pipelines using Jenkins, CircleCI, and GitHub Actions\n• Implemented infrastructure as code using Terraform and CloudFormation\n• Containerized legacy applications and migrated them to Kubernetes\n• Established monitoring and alerting systems using Datadog and PagerDuty\n• Automated security compliance checks and vulnerability scanning\n• Reduced deployment time from days to minutes through pipeline optimization"
      },
      {
        title: "Systems Engineer",
        company: "DataSystems Inc.",
        location: "Portland, OR",
        startDate: "2016-03-01",
        endDate: "2018-04-30",
        current: false,
        description: "• Managed Linux and Windows server infrastructure\n• Implemented configuration management using Puppet and Ansible\n• Designed and maintained backup and disaster recovery solutions\n• Automated routine maintenance tasks using Python and PowerShell\n• Supported database systems including MySQL, PostgreSQL, and MongoDB"
      }
    ],
    education: [
      {
        degree: "Master of Science",
        fieldOfStudy: "Computer Science",
        school: "University of Washington",
        location: "Seattle, WA",
        startDate: "2014-09-01",
        endDate: "2016-06-30",
        description: "Specialization in Distributed Systems and Cloud Computing"
      },
      {
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Engineering",
        school: "Oregon State University",
        location: "Corvallis, OR",
        startDate: "2010-09-01",
        endDate: "2014-06-30",
        description: ""
      }
    ],
    skills: [
      "AWS (Advanced)",
      "Azure",
      "GCP",
      "Kubernetes (EKS, AKS, GKE)",
      "Docker & Containerd",
      "Terraform & Pulumi",
      "GitOps (ArgoCD, Flux)",
      "CI/CD (Jenkins, GitHub Actions, CircleCI)",
      "Infrastructure as Code",
      "Ansible & Puppet",
      "Python & Go",
      "Bash & PowerShell",
      "Observability (Prometheus, Grafana, OpenTelemetry)",
      "Service Mesh (Istio, Linkerd)",
      "Database Administration",
      "Security Compliance & Automation",
      "Cost Optimization",
      "High Availability Architecture"
    ],
    certifications: [
      "AWS Certified DevOps Engineer - Professional",
      "Microsoft Certified: Azure DevOps Engineer Expert",
      "Certified Kubernetes Administrator (CKA)",
      "Certified Kubernetes Security Specialist (CKS)",
      "HashiCorp Certified: Terraform Associate"
    ],
    projects: [
      {
        title: "Multi-Region Kubernetes Platform",
        description: "Architected and implemented a multi-region, multi-cloud Kubernetes platform with automated failover capabilities, achieving 99.99% uptime for critical applications.",
        technologies: "Kubernetes, Terraform, AWS, GCP, Azure, Istio, ArgoCD"
      },
      {
        title: "Zero-Trust Security Implementation",
        description: "Designed and implemented a zero-trust security model for cloud infrastructure, including network policies, service mesh, and automated compliance checks.",
        technologies: "Istio, OPA/Gatekeeper, Vault, Kubernetes, AWS IAM"
      },
      {
        title: "Observability Platform",
        description: "Built a comprehensive observability platform integrating metrics, logs, and traces to provide end-to-end visibility into distributed systems.",
        technologies: "Prometheus, Grafana, Loki, Tempo, OpenTelemetry, Kubernetes"
      }
    ]
  },
  
  lead: {
    title: "DevOps Team Lead",
    personalInfo: {
      name: "Casey Rivera",
      email: "casey.rivera@example.com",
      phone: "(555) 456-7890",
      address: "Boston, MA",
      linkedin: "linkedin.com/in/caseyrivera",
      github: "github.com/caseyrivera",
      website: "caseyrivera.tech"
    },
    summary: "Accomplished DevOps Team Lead with 8+ years of experience leading high-performing teams and architecting enterprise-scale cloud infrastructure. Expert in multi-cloud strategies, Kubernetes at scale, and establishing DevOps centers of excellence. Proven track record of driving digital transformation, implementing site reliability engineering practices, and optimizing operational efficiency across global organizations.",
    experience: [
      {
        title: "DevOps Team Lead",
        company: "Global Financial Technologies",
        location: "Boston, MA",
        startDate: "2020-04-01",
        endDate: "",
        current: true,
        description: "• Lead a team of 8 DevOps engineers supporting 200+ developers across multiple product lines\n• Architected and implemented a global multi-cloud strategy across AWS, Azure, and GCP\n• Established a DevOps center of excellence and implemented SRE practices across the organization\n• Reduced mean time to recovery (MTTR) by 70% through improved observability and incident response\n• Implemented GitOps and Infrastructure as Code practices, increasing deployment frequency from monthly to daily\n• Designed and implemented a zero-trust security model for cloud infrastructure\n• Reduced cloud costs by 40% while improving performance through architecture optimization\n• Mentored and coached team members, leading to 3 promotions within the team"
      },
      {
        title: "Senior DevOps Engineer",
        company: "FinTech Innovations",
        location: "New York, NY",
        startDate: "2017-06-01",
        endDate: "2020-03-31",
        current: false,
        description: "• Led the migration from on-premises infrastructure to AWS and Azure cloud platforms\n• Designed and implemented Kubernetes clusters for production workloads\n• Established CI/CD pipelines using Jenkins, GitLab CI, and Azure DevOps\n• Implemented infrastructure as code using Terraform and Ansible\n• Designed monitoring and alerting systems using Datadog, Prometheus, and Grafana\n• Reduced deployment time from weeks to hours through automation and process improvements"
      },
      {
        title: "DevOps Engineer",
        company: "Tech Solutions Inc.",
        location: "New York, NY",
        startDate: "2015-02-01",
        endDate: "2017-05-31",
        current: false,
        description: "• Managed AWS infrastructure including EC2, RDS, S3, and VPC\n• Implemented Docker containerization for applications\n• Created CI/CD pipelines using Jenkins and GitHub\n• Automated infrastructure provisioning using CloudFormation and Terraform\n• Implemented monitoring solutions using Nagios, ELK stack, and CloudWatch"
      }
    ],
    education: [
      {
        degree: "Master of Science",
        fieldOfStudy: "Information Systems",
        school: "Northeastern University",
        location: "Boston, MA",
        startDate: "2013-09-01",
        endDate: "2015-05-31",
        description: "Focus on Cloud Computing and Distributed Systems"
      },
      {
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Science",
        school: "Rutgers University",
        location: "New Brunswick, NJ",
        startDate: "2009-09-01",
        endDate: "2013-05-31",
        description: ""
      }
    ],
    skills: [
      "Team Leadership & Mentoring",
      "Cloud Architecture (AWS, Azure, GCP)",
      "Kubernetes at Scale",
      "Site Reliability Engineering (SRE)",
      "GitOps & CI/CD Pipelines",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Configuration Management (Ansible, Chef)",
      "Container Orchestration",
      "Microservices Architecture",
      "Service Mesh (Istio, Consul)",
      "Observability & Monitoring",
      "Incident Response & Management",
      "Security & Compliance Automation",
      "Cost Optimization",
      "Python, Go, Bash",
      "Database Systems (SQL, NoSQL)",
      "Project Management",
      "Agile & DevOps Methodologies"
    ],
    certifications: [
      "AWS Certified Solutions Architect - Professional",
      "Google Cloud Professional DevOps Engineer",
      "Microsoft Certified: Azure Solutions Architect Expert",
      "Certified Kubernetes Administrator (CKA)",
      "Certified Kubernetes Security Specialist (CKS)",
      "HashiCorp Certified: Terraform Associate",
      "ITIL Foundation"
    ],
    projects: [
      {
        title: "Global Multi-Cloud Platform",
        description: "Led the design and implementation of a global multi-cloud platform supporting 100+ applications across AWS, Azure, and GCP with centralized governance and security controls.",
        technologies: "Kubernetes, Terraform, AWS, Azure, GCP, Istio, ArgoCD, Vault"
      },
      {
        title: "DevOps Transformation Initiative",
        description: "Led a company-wide DevOps transformation initiative, implementing CI/CD pipelines, infrastructure as code, and SRE practices across 20+ development teams.",
        technologies: "Jenkins, GitLab, Terraform, Kubernetes, Prometheus, Grafana"
      },
      {
        title: "Financial Services Compliance Platform",
        description: "Designed and implemented an automated compliance and security platform for financial services applications, ensuring adherence to regulatory requirements.",
        technologies: "OPA/Gatekeeper, Vault, AWS Config, Azure Policy, Terraform"
      }
    ]
  }
};

module.exports = devopsEngineerTemplates;
