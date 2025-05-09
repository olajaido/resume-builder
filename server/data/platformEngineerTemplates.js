/**
 * Platform Engineer Resume Templates
 * Pre-filled content for different seniority levels
 */

const platformEngineerTemplates = {
  junior: {
    title: "Junior Platform Engineer",
    personalInfo: {
      name: "Sam Rodriguez",
      email: "sam.rodriguez@example.com",
      phone: "(555) 234-5678",
      address: "Portland, OR",
      linkedin: "linkedin.com/in/samrodriguez",
      github: "github.com/samrodriguez",
      website: "samrodriguez.dev"
    },
    summary: "Motivated Junior Platform Engineer with foundational knowledge in cloud infrastructure, containerization, and CI/CD pipelines. Experienced with Kubernetes, Docker, and infrastructure as code tools. Eager to contribute to building and maintaining scalable, reliable platform solutions while expanding technical expertise.",
    experience: [
      {
        title: "Junior Platform Engineer",
        company: "TechPlatforms Inc.",
        location: "Portland, OR",
        startDate: "2023-06-01",
        endDate: "",
        current: true,
        description: "• Assist in maintaining Kubernetes clusters on AWS EKS and GCP GKE\n• Help implement infrastructure as code using Terraform for cloud resources\n• Contribute to CI/CD pipeline development using GitHub Actions and Jenkins\n• Support containerization of applications using Docker and container best practices\n• Assist in monitoring platform health using Prometheus and Grafana\n• Collaborate with development teams to improve deployment processes\n• Participate in on-call rotations and incident response"
      },
      {
        title: "IT Support Specialist",
        company: "Tech Solutions",
        location: "Portland, OR",
        startDate: "2022-01-01",
        endDate: "2023-05-31",
        current: false,
        description: "• Provided technical support for Linux and Windows environments\n• Assisted in basic cloud infrastructure management on AWS\n• Helped maintain documentation for systems and procedures\n• Automated routine tasks using Bash and Python scripts\n• Collaborated with development teams to resolve environment issues"
      }
    ],
    education: [
      {
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Science",
        school: "Oregon State University",
        location: "Corvallis, OR",
        startDate: "2018-09-01",
        endDate: "2022-05-31",
        description: "Relevant coursework: Cloud Computing, Operating Systems, Distributed Systems, Network Security"
      }
    ],
    skills: [
      "Kubernetes (Basics)",
      "Docker",
      "AWS (EC2, S3, EKS)",
      "Google Cloud Platform (Basics)",
      "Terraform (Basics)",
      "Linux Administration",
      "Git & GitHub",
      "CI/CD Pipelines",
      "Python",
      "Bash Scripting",
      "Monitoring Tools (Prometheus, Grafana)",
      "Networking Fundamentals",
      "Containerization"
    ],
    certifications: [
      "AWS Certified Cloud Practitioner",
      "Certified Kubernetes Application Developer (CKAD)"
    ],
    projects: [
      {
        title: "Kubernetes Deployment Pipeline",
        description: "Helped develop a CI/CD pipeline for deploying containerized applications to Kubernetes, improving deployment reliability and reducing deployment time.",
        technologies: "Kubernetes, Docker, GitHub Actions, Helm"
      },
      {
        title: "Infrastructure as Code Implementation",
        description: "Assisted in migrating manual cloud resource provisioning to infrastructure as code using Terraform, improving consistency and reducing configuration errors.",
        technologies: "Terraform, AWS, Git"
      }
    ]
  },
  
  mid: {
    title: "Platform Engineer",
    personalInfo: {
      name: "Alex Kim",
      email: "alex.kim@example.com",
      phone: "(555) 345-6789",
      address: "Austin, TX",
      linkedin: "linkedin.com/in/alexkim",
      github: "github.com/alexkim",
      website: "alexkim.dev"
    },
    summary: "Experienced Platform Engineer with 3+ years specializing in designing and maintaining scalable, reliable platform infrastructure. Proficient in Kubernetes orchestration, infrastructure as code, and CI/CD automation across multiple cloud providers. Passionate about creating developer-friendly platforms that improve productivity and application reliability.",
    experience: [
      {
        title: "Platform Engineer",
        company: "PlatformTech Solutions",
        location: "Austin, TX",
        startDate: "2022-03-01",
        endDate: "",
        current: true,
        description: "• Design and maintain Kubernetes platforms on AWS EKS, GCP GKE, and Azure AKS\n• Implement infrastructure as code using Terraform and Pulumi across multiple environments\n• Develop and maintain CI/CD pipelines using GitLab CI, GitHub Actions, and ArgoCD\n• Create and maintain internal developer platforms to improve developer experience\n• Implement service mesh solutions using Istio for microservices communication\n• Design and implement monitoring, logging, and alerting solutions using Prometheus, Grafana, and ELK stack\n• Automate security scanning and compliance checks in the deployment pipeline\n• Participate in on-call rotations and lead incident response efforts"
      },
      {
        title: "DevOps Engineer",
        company: "CloudSystems Inc.",
        location: "Dallas, TX",
        startDate: "2020-05-01",
        endDate: "2022-02-28",
        current: false,
        description: "• Managed cloud infrastructure on AWS and GCP using Terraform\n• Implemented containerization of applications using Docker\n• Maintained CI/CD pipelines using Jenkins and GitLab CI\n• Configured monitoring and alerting using Prometheus, Grafana, and PagerDuty\n• Automated infrastructure provisioning and application deployment processes\n• Collaborated with development teams to improve deployment workflows\n• Implemented backup and disaster recovery solutions"
      },
      {
        title: "Systems Administrator",
        company: "Tech Innovations",
        location: "Dallas, TX",
        startDate: "2019-01-01",
        endDate: "2020-04-30",
        current: false,
        description: "• Administered Linux servers and implemented configuration management using Ansible\n• Managed cloud resources on AWS including EC2, S3, and RDS\n• Implemented monitoring solutions using Nagios and Zabbix\n• Automated routine system maintenance tasks using Python and Bash\n• Provided technical support for development and production environments"
      }
    ],
    education: [
      {
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Engineering",
        school: "University of Texas",
        location: "Austin, TX",
        startDate: "2015-09-01",
        endDate: "2019-05-31",
        description: "Focus on Distributed Systems and Cloud Computing"
      }
    ],
    skills: [
      "Kubernetes (EKS, GKE, AKS)",
      "Docker & Containerd",
      "Infrastructure as Code (Terraform, Pulumi)",
      "AWS (Advanced)",
      "Google Cloud Platform",
      "Azure",
      "CI/CD (GitLab CI, GitHub Actions, ArgoCD)",
      "Service Mesh (Istio)",
      "Monitoring & Observability (Prometheus, Grafana, ELK)",
      "Python & Go",
      "Bash Scripting",
      "Linux Administration",
      "Networking & Security",
      "GitOps",
      "Database Management",
      "Internal Developer Platforms"
    ],
    certifications: [
      "Certified Kubernetes Administrator (CKA)",
      "AWS Certified Solutions Architect - Associate",
      "HashiCorp Certified: Terraform Associate",
      "Linux Foundation Certified System Administrator (LFCS)"
    ],
    projects: [
      {
        title: "Internal Developer Platform",
        description: "Designed and implemented an internal developer platform using Backstage, providing self-service capabilities for application deployment, monitoring, and documentation.",
        technologies: "Kubernetes, Backstage, ArgoCD, Terraform, React"
      },
      {
        title: "Multi-Cloud Kubernetes Platform",
        description: "Implemented a consistent Kubernetes platform across AWS, GCP, and Azure, with centralized management, monitoring, and security controls.",
        technologies: "Kubernetes, Terraform, Istio, Prometheus, Grafana, GitOps"
      },
      {
        title: "Automated Compliance Framework",
        description: "Developed an automated compliance framework for Kubernetes workloads, ensuring all deployments meet security and regulatory requirements.",
        technologies: "OPA/Gatekeeper, Kyverno, Trivy, Terraform"
      }
    ]
  },
  
  senior: {
    title: "Senior Platform Engineer",
    personalInfo: {
      name: "Jordan Lee",
      email: "jordan.lee@example.com",
      phone: "(555) 456-7890",
      address: "Seattle, WA",
      linkedin: "linkedin.com/in/jordanlee",
      github: "github.com/jordanlee",
      website: "jordanlee.dev"
    },
    summary: "Senior Platform Engineer with 6+ years of experience designing, building, and scaling enterprise platform solutions. Expert in Kubernetes, multi-cloud architectures, and developer experience optimization. Proven track record of implementing platform engineering best practices that improve developer productivity, system reliability, and operational efficiency across large-scale organizations.",
    experience: [
      {
        title: "Senior Platform Engineer",
        company: "Enterprise Platform Solutions",
        location: "Seattle, WA",
        startDate: "2021-02-01",
        endDate: "",
        current: true,
        description: "• Architect and implement enterprise-grade platform solutions supporting 200+ microservices\n• Design and maintain multi-cluster Kubernetes environments across AWS, GCP, and Azure\n• Lead the development of internal developer platforms using Backstage, improving developer productivity by 40%\n• Implement GitOps workflows with ArgoCD and Flux for application and infrastructure deployments\n• Design and implement service mesh architecture using Istio for microservices communication\n• Develop platform automation using Terraform, Pulumi, and custom operators\n• Establish observability strategies using Prometheus, Grafana, Jaeger, and OpenTelemetry\n• Mentor junior engineers and establish platform engineering best practices\n• Lead incident response for critical platform issues and implement reliability improvements"
      },
      {
        title: "Platform Engineer",
        company: "Cloud Innovations",
        location: "San Francisco, CA",
        startDate: "2018-07-01",
        endDate: "2021-01-31",
        current: false,
        description: "• Designed and maintained Kubernetes platforms on AWS EKS and GCP GKE\n• Implemented infrastructure as code using Terraform for all cloud resources\n• Developed CI/CD pipelines using Jenkins, GitLab CI, and Spinnaker\n• Created self-service tools for developers to deploy and manage applications\n• Implemented monitoring and observability solutions using Prometheus, Grafana, and ELK stack\n• Automated security scanning and compliance in the deployment pipeline\n• Designed and implemented disaster recovery strategies for platform components"
      },
      {
        title: "DevOps Engineer",
        company: "TechSolutions Inc.",
        location: "San Francisco, CA",
        startDate: "2016-03-01",
        endDate: "2018-06-30",
        current: false,
        description: "• Managed cloud infrastructure on AWS using CloudFormation and Terraform\n• Implemented containerization strategies using Docker and Docker Compose\n• Maintained CI/CD pipelines using Jenkins and CircleCI\n• Automated infrastructure provisioning and application deployment\n• Implemented monitoring solutions using Datadog and New Relic\n• Collaborated with development teams to improve deployment workflows"
      }
    ],
    education: [
      {
        degree: "Master of Science",
        fieldOfStudy: "Computer Science",
        school: "University of Washington",
        location: "Seattle, WA",
        startDate: "2019-09-01",
        endDate: "2021-06-30",
        description: "Specialization in Distributed Systems"
      },
      {
        degree: "Bachelor of Science",
        fieldOfStudy: "Software Engineering",
        school: "University of California",
        location: "Berkeley, CA",
        startDate: "2012-09-01",
        endDate: "2016-05-31",
        description: ""
      }
    ],
    skills: [
      "Kubernetes Architecture",
      "Platform Engineering",
      "Internal Developer Platforms",
      "Multi-Cloud Strategy",
      "GitOps (ArgoCD, Flux)",
      "Service Mesh (Istio, Linkerd)",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Custom Kubernetes Operators",
      "AWS (Expert)",
      "GCP (Advanced)",
      "Azure (Advanced)",
      "CI/CD Orchestration",
      "Observability (Prometheus, Grafana, OpenTelemetry)",
      "Go & Python",
      "Security & Compliance Automation",
      "High Availability Architecture",
      "Cost Optimization",
      "Mentoring & Technical Leadership"
    ],
    certifications: [
      "Certified Kubernetes Administrator (CKA)",
      "Certified Kubernetes Application Developer (CKAD)",
      "AWS Certified DevOps Engineer - Professional",
      "Google Cloud Professional DevOps Engineer",
      "HashiCorp Certified: Terraform Associate",
      "Istio Certified Administrator"
    ],
    projects: [
      {
        title: "Enterprise Developer Platform",
        description: "Architected and implemented an enterprise developer platform using Backstage, custom Kubernetes operators, and GitOps workflows, serving 300+ developers and reducing time-to-production by 70%.",
        technologies: "Kubernetes, Backstage, ArgoCD, Terraform, Go, React"
      },
      {
        title: "Multi-Cluster Kubernetes Federation",
        description: "Designed and implemented a multi-cluster, multi-region Kubernetes federation with centralized management, observability, and security controls.",
        technologies: "Kubernetes, KubeFed, Istio, Prometheus, Thanos, Terraform"
      },
      {
        title: "Platform Reliability Engineering",
        description: "Led a platform reliability initiative implementing SLOs, error budgets, and automated remediation, improving platform availability from 99.9% to 99.99%.",
        technologies: "Prometheus, Grafana, AlertManager, Keptn, Chaos Engineering"
      }
    ]
  },
  
  lead: {
    title: "Platform Engineering Lead",
    personalInfo: {
      name: "Morgan Zhang",
      email: "morgan.zhang@example.com",
      phone: "(555) 567-8901",
      address: "New York, NY",
      linkedin: "linkedin.com/in/morganzhang",
      github: "github.com/morganzhang",
      website: "morganzhang.dev"
    },
    summary: "Accomplished Platform Engineering Lead with 8+ years of experience building and leading high-performing platform teams. Expert in designing enterprise-scale platform solutions that accelerate software delivery and improve operational efficiency. Proven track record of driving platform engineering transformations, implementing internal developer platforms, and establishing platform as a product mindset across global organizations.",
    experience: [
      {
        title: "Platform Engineering Lead",
        company: "Global Technology Solutions",
        location: "New York, NY",
        startDate: "2020-06-01",
        endDate: "",
        current: true,
        description: "• Lead a team of 15 platform engineers supporting 500+ developers across multiple product lines\n• Architect and implement enterprise platform strategy focusing on developer experience and operational excellence\n• Establish platform as a product mindset with clear roadmaps, SLAs, and feedback mechanisms\n• Design and implement internal developer platforms that reduce time-to-production by 80%\n• Lead multi-cloud platform initiatives across AWS, GCP, and Azure with unified management and governance\n• Implement platform reliability engineering practices achieving 99.99% platform availability\n• Establish platform engineering centers of excellence and communities of practice\n• Drive cost optimization initiatives reducing platform operational costs by 35%\n• Collaborate with executive leadership to align platform initiatives with business objectives\n• Mentor and develop platform engineering talent across the organization"
      },
      {
        title: "Senior Platform Engineer",
        company: "FinTech Innovations",
        location: "Chicago, IL",
        startDate: "2017-08-01",
        endDate: "2020-05-31",
        current: false,
        description: "• Led the design and implementation of Kubernetes-based platforms for financial services applications\n• Developed internal developer platforms and self-service capabilities for application teams\n• Implemented GitOps workflows and CI/CD automation for application and infrastructure deployments\n• Designed and implemented service mesh architecture for microservices communication\n• Led platform observability initiatives using Prometheus, Grafana, and distributed tracing\n• Established platform security and compliance controls for regulated environments\n• Mentored junior engineers and established platform engineering best practices"
      },
      {
        title: "DevOps Team Lead",
        company: "Tech Enterprises",
        location: "Chicago, IL",
        startDate: "2015-03-01",
        endDate: "2017-07-31",
        current: false,
        description: "• Led a team of DevOps engineers supporting cloud infrastructure and CI/CD pipelines\n• Managed migration from on-premises infrastructure to AWS and GCP\n• Implemented containerization strategies and Kubernetes for application deployment\n• Designed and maintained CI/CD pipelines using Jenkins and GitLab CI\n• Established monitoring and alerting systems using Datadog and PagerDuty\n• Implemented infrastructure as code using Terraform and CloudFormation"
      },
      {
        title: "Systems Engineer",
        company: "Enterprise Systems Inc.",
        location: "Chicago, IL",
        startDate: "2012-06-01",
        endDate: "2015-02-28",
        current: false,
        description: "• Managed Linux and Windows server infrastructure\n• Implemented virtualization solutions using VMware and OpenStack\n• Designed and maintained network infrastructure and security controls\n• Automated system administration tasks using Python and PowerShell\n• Provided technical support for critical business applications"
      }
    ],
    education: [
      {
        degree: "Master of Business Administration",
        fieldOfStudy: "Technology Management",
        school: "New York University",
        location: "New York, NY",
        startDate: "2018-09-01",
        endDate: "2020-05-31",
        description: ""
      },
      {
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Science",
        school: "University of Illinois",
        location: "Urbana-Champaign, IL",
        startDate: "2008-09-01",
        endDate: "2012-05-31",
        description: ""
      }
    ],
    skills: [
      "Platform Engineering Leadership",
      "Team Building & Mentoring",
      "Platform as a Product",
      "Internal Developer Platforms",
      "Kubernetes at Enterprise Scale",
      "Multi-Cloud Architecture",
      "GitOps & Platform Automation",
      "Service Mesh & API Gateways",
      "Platform Reliability Engineering",
      "Developer Experience Optimization",
      "Platform Security & Compliance",
      "Cost Optimization",
      "Infrastructure as Code",
      "Observability & Monitoring",
      "CI/CD Orchestration",
      "Go, Python, Rust",
      "Executive Communication",
      "Strategic Planning"
    ],
    certifications: [
      "Certified Kubernetes Administrator (CKA)",
      "Certified Kubernetes Security Specialist (CKS)",
      "AWS Certified DevOps Engineer - Professional",
      "Google Cloud Professional Cloud Architect",
      "Microsoft Certified: Azure Solutions Architect Expert",
      "TOGAF Certified",
      "Project Management Professional (PMP)"
    ],
    projects: [
      {
        title: "Enterprise Platform Transformation",
        description: "Led a company-wide platform transformation initiative, implementing internal developer platforms, platform as a product approach, and self-service capabilities that reduced time-to-market by 70% and improved developer satisfaction by 85%.",
        technologies: "Kubernetes, Backstage, ArgoCD, Crossplane, Terraform, Go, React"
      },
      {
        title: "Multi-Cloud Platform Strategy",
        description: "Developed and implemented a multi-cloud platform strategy with unified management, governance, and developer experience across AWS, GCP, and Azure for a global enterprise.",
        technologies: "Kubernetes, Anthos, Azure Arc, Terraform, Crossplane, Service Mesh"
      },
      {
        title: "Platform Reliability Framework",
        description: "Established a comprehensive platform reliability framework including SLOs, error budgets, chaos engineering, and automated remediation, achieving 99.99% platform availability.",
        technologies: "Prometheus, Grafana, Chaos Mesh, Keptn, OpenTelemetry, SLO tooling"
      }
    ]
  }
};

module.exports = platformEngineerTemplates;
