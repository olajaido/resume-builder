/**
 * Infrastructure Engineer Resume Templates
 * Pre-filled content for different seniority levels
 */

const infrastructureEngineerTemplates = {
  junior: {
    title: "Junior Infrastructure Engineer",
    personalInfo: {
      name: "Jamie Wilson",
      email: "jamie.wilson@example.com",
      phone: "(555) 123-4567",
      address: "Minneapolis, MN",
      linkedin: "linkedin.com/in/jamiewilson",
      github: "github.com/jamiewilson",
      website: "jamiewilson.tech"
    },
    summary: "Motivated Junior Infrastructure Engineer with foundational knowledge in cloud infrastructure, networking, and system administration. Experienced with AWS services, Linux systems, and basic automation tools. Eager to develop skills in infrastructure design, automation, and cloud architecture while contributing to reliable and scalable infrastructure solutions.",
    experience: [
      {
        title: "Junior Infrastructure Engineer",
        company: "TechInfra Solutions",
        location: "Minneapolis, MN",
        startDate: "2023-05-01",
        endDate: "",
        current: true,
        description: "• Assist in managing AWS infrastructure including EC2, VPC, S3, and RDS\n• Help implement infrastructure as code using Terraform for cloud resources\n• Support Linux server administration and basic troubleshooting\n• Contribute to network configuration and security implementation\n• Assist in monitoring system health using CloudWatch and Prometheus\n• Participate in on-call rotations for infrastructure support\n• Document infrastructure components and procedures"
      },
      {
        title: "IT Support Specialist",
        company: "DataTech Inc.",
        location: "Minneapolis, MN",
        startDate: "2022-01-01",
        endDate: "2023-04-30",
        current: false,
        description: "• Provided technical support for Windows and Linux systems\n• Assisted in network troubleshooting and basic configuration\n• Managed user accounts and access controls\n• Performed routine system maintenance and updates\n• Created documentation for common IT procedures"
      }
    ],
    education: [
      {
        degree: "Bachelor of Science",
        fieldOfStudy: "Information Technology",
        school: "University of Minnesota",
        location: "Minneapolis, MN",
        startDate: "2018-09-01",
        endDate: "2022-05-31",
        description: "Relevant coursework: Cloud Computing, Network Administration, Systems Administration, Database Management"
      }
    ],
    skills: [
      "AWS (EC2, S3, VPC, RDS)",
      "Linux Administration",
      "Windows Server",
      "Networking Fundamentals",
      "Terraform (Basics)",
      "Bash Scripting",
      "Python (Basics)",
      "Git & GitHub",
      "Monitoring Tools",
      "Virtualization",
      "Security Fundamentals",
      "Documentation"
    ],
    certifications: [
      "AWS Certified Cloud Practitioner",
      "CompTIA Network+"
    ],
    projects: [
      {
        title: "AWS Infrastructure Deployment",
        description: "Assisted in deploying a three-tier web application infrastructure on AWS using EC2, RDS, and S3, implementing security best practices and monitoring.",
        technologies: "AWS EC2, RDS, S3, VPC, Security Groups, CloudWatch, Terraform"
      },
      {
        title: "Network Monitoring Implementation",
        description: "Helped implement a network monitoring solution using open-source tools to track performance and detect issues across the infrastructure.",
        technologies: "Prometheus, Grafana, Node Exporter, AWS CloudWatch"
      }
    ]
  },
  
  mid: {
    title: "Infrastructure Engineer",
    personalInfo: {
      name: "Taylor Morgan",
      email: "taylor.morgan@example.com",
      phone: "(555) 234-5678",
      address: "Denver, CO",
      linkedin: "linkedin.com/in/taylormorgan",
      github: "github.com/taylormorgan",
      website: "taylormorgan.tech"
    },
    summary: "Experienced Infrastructure Engineer with 3+ years specializing in designing and maintaining scalable cloud infrastructure across AWS, Azure, and on-premises environments. Skilled in infrastructure automation, networking, and system reliability. Proven track record of implementing infrastructure as code, optimizing system performance, and enhancing security posture.",
    experience: [
      {
        title: "Infrastructure Engineer",
        company: "CloudInfra Technologies",
        location: "Denver, CO",
        startDate: "2022-03-01",
        endDate: "",
        current: true,
        description: "• Design and maintain hybrid cloud infrastructure across AWS, Azure, and on-premises environments\n• Implement infrastructure as code using Terraform and CloudFormation, achieving 90% infrastructure automation\n• Manage network architecture including VPCs, subnets, security groups, and VPN connections\n• Design and implement high-availability solutions for critical systems\n• Maintain Linux and Windows server environments using configuration management tools\n• Implement monitoring and alerting solutions using Prometheus, Grafana, and ELK stack\n• Optimize infrastructure costs, resulting in 25% reduction in monthly cloud spend\n• Automate routine infrastructure tasks using Python and Bash scripts"
      },
      {
        title: "Systems Administrator",
        company: "TechSolutions Inc.",
        location: "Boulder, CO",
        startDate: "2020-01-01",
        endDate: "2022-02-28",
        current: false,
        description: "• Managed Linux and Windows server infrastructure in a hybrid environment\n• Implemented automation using Ansible and PowerShell\n• Maintained network infrastructure including firewalls, switches, and routers\n• Managed backup and disaster recovery solutions\n• Implemented monitoring solutions using Nagios and Zabbix\n• Provided technical support for critical business applications\n• Assisted in cloud migration planning and execution"
      },
      {
        title: "IT Support Specialist",
        company: "DataTech Solutions",
        location: "Boulder, CO",
        startDate: "2018-06-01",
        endDate: "2019-12-31",
        current: false,
        description: "• Provided technical support for end-users and systems\n• Assisted in server and network maintenance\n• Performed system updates and security patches\n• Managed user accounts and permissions\n• Created documentation for IT processes and procedures"
      }
    ],
    education: [
      {
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Science",
        school: "Colorado State University",
        location: "Fort Collins, CO",
        startDate: "2014-09-01",
        endDate: "2018-05-31",
        description: "Focus on Systems and Networks"
      }
    ],
    skills: [
      "AWS (Advanced)",
      "Azure (Intermediate)",
      "Terraform & CloudFormation",
      "Infrastructure as Code",
      "Linux & Windows Server Administration",
      "Ansible & Puppet",
      "Network Architecture & Security",
      "Load Balancing & High Availability",
      "Virtualization (VMware, Hyper-V)",
      "Containerization (Docker)",
      "Monitoring & Logging (Prometheus, ELK)",
      "Backup & Disaster Recovery",
      "Python & Bash Scripting",
      "Security Hardening",
      "Cost Optimization",
      "Performance Tuning"
    ],
    certifications: [
      "AWS Certified Solutions Architect - Associate",
      "Microsoft Certified: Azure Administrator Associate",
      "Red Hat Certified System Administrator (RHCSA)",
      "CompTIA Security+"
    ],
    projects: [
      {
        title: "Hybrid Cloud Infrastructure",
        description: "Designed and implemented a hybrid cloud architecture connecting on-premises data center with AWS and Azure, including secure connectivity, consistent management, and disaster recovery capabilities.",
        technologies: "AWS Direct Connect, Azure ExpressRoute, VPN, Terraform, Transit Gateway"
      },
      {
        title: "Infrastructure Automation Framework",
        description: "Developed a comprehensive infrastructure automation framework using Terraform, Ansible, and Python, reducing new environment provisioning time from weeks to hours.",
        technologies: "Terraform, Ansible, Python, Git, CI/CD"
      },
      {
        title: "High-Availability Database Cluster",
        description: "Implemented a highly available database cluster with automated failover, backup, and monitoring capabilities, achieving 99.99% uptime.",
        technologies: "AWS RDS, Aurora, Multi-AZ, Read Replicas, CloudWatch"
      }
    ]
  },
  
  senior: {
    title: "Senior Infrastructure Engineer",
    personalInfo: {
      name: "Jordan Casey",
      email: "jordan.casey@example.com",
      phone: "(555) 345-6789",
      address: "Boston, MA",
      linkedin: "linkedin.com/in/jordancasey",
      github: "github.com/jordancasey",
      website: "jordancasey.tech"
    },
    summary: "Senior Infrastructure Engineer with 6+ years of expertise in architecting enterprise-scale infrastructure solutions across multi-cloud and on-premises environments. Specialized in infrastructure automation, high-availability architectures, and security-focused designs. Proven track record of leading complex infrastructure transformations and mentoring junior engineers in infrastructure best practices.",
    experience: [
      {
        title: "Senior Infrastructure Engineer",
        company: "Enterprise Infrastructure Solutions",
        location: "Boston, MA",
        startDate: "2021-04-01",
        endDate: "",
        current: true,
        description: "• Architect and implement enterprise-scale infrastructure solutions across AWS, Azure, GCP, and on-premises environments\n• Design network architectures for global organizations, including SD-WAN, transit gateways, and hybrid connectivity\n• Lead infrastructure automation initiatives using Terraform, Ansible, and custom tooling\n• Implement advanced security controls and compliance measures for regulated industries\n• Design and implement disaster recovery and business continuity solutions\n• Optimize infrastructure costs across multiple environments, achieving 30% reduction\n• Mentor junior engineers and establish infrastructure engineering best practices\n• Lead incident response for critical infrastructure issues and implement reliability improvements"
      },
      {
        title: "Infrastructure Engineer",
        company: "TechInnovate",
        location: "New York, NY",
        startDate: "2018-06-01",
        endDate: "2021-03-31",
        current: false,
        description: "• Designed and maintained cloud infrastructure on AWS and Azure using infrastructure as code\n• Implemented network security controls including firewalls, VPNs, and security groups\n• Managed Linux and Windows server environments using configuration management\n• Designed and implemented high-availability solutions for critical applications\n• Developed monitoring and alerting systems using Prometheus, Grafana, and ELK stack\n• Automated infrastructure operations using Python and PowerShell\n• Implemented backup and disaster recovery solutions"
      },
      {
        title: "Systems Administrator",
        company: "Financial Systems Inc.",
        location: "New York, NY",
        startDate: "2016-02-01",
        endDate: "2018-05-31",
        current: false,
        description: "• Managed Windows and Linux server infrastructure in a financial services environment\n• Implemented virtualization solutions using VMware and Hyper-V\n• Maintained network infrastructure including Cisco switches, routers, and firewalls\n• Implemented security controls and compliance measures\n• Managed backup and disaster recovery systems\n• Automated routine administration tasks using PowerShell and Bash"
      }
    ],
    education: [
      {
        degree: "Master of Science",
        fieldOfStudy: "Network Engineering",
        school: "Boston University",
        location: "Boston, MA",
        startDate: "2019-09-01",
        endDate: "2021-05-31",
        description: "Focus on Advanced Networking and Security"
      },
      {
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Engineering",
        school: "Northeastern University",
        location: "Boston, MA",
        startDate: "2012-09-01",
        endDate: "2016-05-31",
        description: ""
      }
    ],
    skills: [
      "Enterprise Infrastructure Architecture",
      "Multi-Cloud Strategy (AWS, Azure, GCP)",
      "Network Design & Security",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Configuration Management (Ansible, Chef)",
      "High Availability & Disaster Recovery",
      "Security Architecture & Compliance",
      "Performance Optimization",
      "Cost Management",
      "Linux & Windows Server (Advanced)",
      "Virtualization & Containerization",
      "Load Balancing & Traffic Management",
      "Database Infrastructure",
      "Monitoring & Observability",
      "Python, PowerShell, Bash",
      "Mentoring & Technical Leadership"
    ],
    certifications: [
      "AWS Certified Solutions Architect - Professional",
      "Microsoft Certified: Azure Solutions Architect Expert",
      "Cisco Certified Network Professional (CCNP)",
      "Red Hat Certified Engineer (RHCE)",
      "Certified Information Systems Security Professional (CISSP)"
    ],
    projects: [
      {
        title: "Global Network Infrastructure Redesign",
        description: "Led the redesign of a global network infrastructure spanning 20+ locations, implementing SD-WAN, transit gateways, and optimized routing that improved performance by 40% and reduced costs by 25%.",
        technologies: "AWS Transit Gateway, Azure Virtual WAN, Cisco SD-WAN, BGP, Terraform"
      },
      {
        title: "Multi-Region Disaster Recovery Solution",
        description: "Designed and implemented a comprehensive disaster recovery solution across multiple regions and cloud providers, achieving RPO of 15 minutes and RTO of 1 hour for critical systems.",
        technologies: "AWS, Azure, VMware Site Recovery, Database Replication, Automated Failover"
      },
      {
        title: "Infrastructure Security Framework",
        description: "Developed a comprehensive infrastructure security framework including network segmentation, encryption, access controls, and automated compliance checking for a regulated financial institution.",
        technologies: "AWS Security Hub, Azure Security Center, Terraform, Compliance as Code"
      }
    ]
  },
  
  lead: {
    title: "Infrastructure Team Lead",
    personalInfo: {
      name: "Alex Rivera",
      email: "alex.rivera@example.com",
      phone: "(555) 456-7890",
      address: "Chicago, IL",
      linkedin: "linkedin.com/in/alexrivera",
      github: "github.com/alexrivera",
      website: "alexrivera.tech"
    },
    summary: "Accomplished Infrastructure Team Lead with 8+ years of experience architecting and managing enterprise infrastructure and leading high-performing teams. Expert in multi-cloud strategies, global network architecture, and infrastructure transformation. Proven track record of driving infrastructure modernization, implementing automation at scale, and optimizing operational efficiency across global organizations.",
    experience: [
      {
        title: "Infrastructure Team Lead",
        company: "Global Technology Solutions",
        location: "Chicago, IL",
        startDate: "2020-05-01",
        endDate: "",
        current: true,
        description: "• Lead a team of 12 infrastructure engineers supporting global operations across 30+ locations\n• Develop and implement infrastructure strategy, governance, and operating models\n• Architect complex multi-cloud and hybrid infrastructure solutions for enterprise workloads\n• Establish infrastructure centers of excellence and automation frameworks\n• Drive infrastructure cost optimization, achieving 40% reduction while scaling operations\n• Lead large-scale infrastructure transformation programs including cloud migration\n• Implement infrastructure security and compliance frameworks for regulated industries\n• Collaborate with executive leadership to align infrastructure initiatives with business objectives\n• Mentor and develop infrastructure engineering talent across the organization"
      },
      {
        title: "Senior Infrastructure Architect",
        company: "Enterprise Systems Inc.",
        location: "Chicago, IL",
        startDate: "2017-03-01",
        endDate: "2020-04-30",
        current: false,
        description: "• Designed enterprise infrastructure architectures for Fortune 500 clients\n• Led infrastructure transformation initiatives including cloud adoption and modernization\n• Developed reference architectures for AWS, Azure, and on-premises environments\n• Implemented infrastructure as code practices using Terraform and Ansible\n• Designed security controls and compliance frameworks for regulated industries\n• Established infrastructure governance models and cost management strategies\n• Mentored junior architects and engineers in infrastructure best practices"
      },
      {
        title: "Infrastructure Engineer",
        company: "Financial Technologies",
        location: "New York, NY",
        startDate: "2015-01-01",
        endDate: "2017-02-28",
        current: false,
        description: "• Managed cloud and on-premises infrastructure for a financial services company\n• Implemented network security controls and compliance measures\n• Designed and maintained high-availability solutions for critical applications\n• Automated infrastructure operations using PowerShell and Python\n• Managed virtualization platforms including VMware and Hyper-V\n• Implemented monitoring and alerting systems\n• Provided technical leadership for infrastructure projects"
      },
      {
        title: "Systems Administrator",
        company: "Tech Solutions Inc.",
        location: "New York, NY",
        startDate: "2012-06-01",
        endDate: "2014-12-31",
        current: false,
        description: "• Managed Windows and Linux server environments\n• Maintained network infrastructure including switches, routers, and firewalls\n• Implemented backup and disaster recovery solutions\n• Provided technical support for business applications\n• Automated routine administration tasks\n• Performed system upgrades and migrations"
      }
    ],
    education: [
      {
        degree: "Master of Business Administration",
        fieldOfStudy: "Technology Management",
        school: "Northwestern University",
        location: "Evanston, IL",
        startDate: "2018-09-01",
        endDate: "2020-06-30",
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
      "Infrastructure Strategy & Governance",
      "Team Leadership & Mentoring",
      "Enterprise Architecture",
      "Multi-Cloud Architecture (AWS, Azure, GCP)",
      "Global Network Design",
      "Infrastructure Automation at Scale",
      "Security Architecture & Compliance",
      "Disaster Recovery & Business Continuity",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Configuration Management (Ansible, Chef)",
      "Virtualization & Containerization",
      "High-Performance Computing",
      "Cost Optimization & Management",
      "Project & Program Management",
      "Vendor Management",
      "Executive Communication",
      "Budget Planning & Management"
    ],
    certifications: [
      "AWS Certified Solutions Architect - Professional",
      "Microsoft Certified: Azure Solutions Architect Expert",
      "Google Cloud Professional Cloud Architect",
      "Cisco Certified Network Professional (CCNP)",
      "VMware Certified Professional - Data Center Virtualization",
      "ITIL Foundation v4",
      "Project Management Professional (PMP)"
    ],
    projects: [
      {
        title: "Global Infrastructure Transformation",
        description: "Led a 3-year global infrastructure transformation program for a Fortune 100 company, modernizing infrastructure across 30+ locations, migrating 70% of workloads to cloud, and implementing automation at scale.",
        technologies: "AWS, Azure, Terraform, Ansible, SD-WAN, VMware Cloud on AWS"
      },
      {
        title: "Enterprise Infrastructure Operating Model",
        description: "Developed and implemented an enterprise infrastructure operating model including governance, security, financial management, and operations for a global organization spanning multiple cloud providers and on-premises environments.",
        technologies: "Cloud Management Platforms, ITSM Integration, Infrastructure as Code, CMDB"
      },
      {
        title: "Infrastructure Cost Optimization Program",
        description: "Led an enterprise-wide infrastructure cost optimization program, implementing rightsizing, reserved instances, spot instances, and automated shutdown policies, reducing infrastructure costs by 40% while improving performance.",
        technologies: "AWS Cost Explorer, Azure Cost Management, Terraform, Tagging Strategies, Automated Policies"
      }
    ]
  }
};

module.exports = infrastructureEngineerTemplates;
