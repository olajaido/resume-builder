/**
 * Resume Template Data Service
 * Provides pre-populated resume content for different roles and seniority levels
 */

// Common skills across cloud providers
const commonCloudSkills = {
  junior: [
    'Linux/Unix', 'Bash Scripting', 'Git', 'CI/CD Basics', 'Networking Fundamentals', 
    'Containerization Basics', 'Infrastructure as Code Concepts', 'Monitoring Tools'
  ],
  mid: [
    'Linux/Unix Administration', 'Advanced Scripting', 'CI/CD Pipelines', 'Container Orchestration',
    'Infrastructure as Code', 'Monitoring & Observability', 'Security Best Practices', 'Cost Optimization'
  ],
  senior: [
    'Cloud Architecture Design', 'Multi-Cloud Strategy', 'Enterprise Security', 'FinOps',
    'Disaster Recovery Planning', 'High Availability Design', 'Cloud Governance', 'Mentorship'
  ]
};

// Common platform engineering skills
const commonPlatformSkills = {
  junior: [
    'Linux Basics', 'Version Control (Git)', 'CI/CD Concepts', 'Containerization Basics',
    'Infrastructure as Code Fundamentals', 'Scripting (Bash/Python)', 'Monitoring Basics'
  ],
  mid: [
    'Container Orchestration', 'Infrastructure as Code', 'CI/CD Pipeline Design',
    'Configuration Management', 'Service Mesh Concepts', 'Observability', 'Automation'
  ],
  senior: [
    'Platform Architecture Design', 'Developer Experience Optimization', 'Multi-Environment Strategy',
    'Security Automation', 'Scalable Infrastructure Design', 'Team Leadership', 'Cross-Team Collaboration'
  ]
};

// AWS-specific skills and tools
const awsSkills = {
  junior: [
    'EC2', 'S3', 'RDS', 'IAM Basics', 'CloudWatch', 'ELB', 'VPC Basics', 'AWS CLI'
  ],
  mid: [
    'ECS/EKS', 'Lambda', 'CloudFormation', 'DynamoDB', 'API Gateway', 'SNS/SQS',
    'Route 53', 'AWS Security Services', 'Elastic Beanstalk'
  ],
  senior: [
    'AWS Well-Architected Framework', 'Multi-Region Deployments', 'AWS Organizations',
    'Service Quotas Management', 'AWS Control Tower', 'Direct Connect', 'AWS Landing Zone'
  ]
};

// Azure-specific skills and tools
const azureSkills = {
  junior: [
    'Azure VMs', 'Azure Storage', 'Azure SQL', 'Azure AD Basics', 'Azure Monitor',
    'Azure Load Balancer', 'Virtual Networks', 'Azure CLI'
  ],
  mid: [
    'AKS', 'Azure Functions', 'ARM Templates', 'Cosmos DB', 'API Management',
    'Service Bus', 'Azure DNS', 'Azure Security Center', 'App Service'
  ],
  senior: [
    'Azure Well-Architected Framework', 'Azure Landing Zones', 'Azure Policy',
    'Azure Lighthouse', 'ExpressRoute', 'Azure Sentinel', 'Azure Arc'
  ]
};

// GCP-specific skills and tools
const gcpSkills = {
  junior: [
    'Compute Engine', 'Cloud Storage', 'Cloud SQL', 'IAM Basics', 'Cloud Monitoring',
    'Cloud Load Balancing', 'VPC Networks', 'gcloud CLI'
  ],
  mid: [
    'GKE', 'Cloud Functions', 'Deployment Manager', 'Firestore/Bigtable',
    'API Gateway', 'Pub/Sub', 'Cloud DNS', 'Security Command Center', 'App Engine'
  ],
  senior: [
    'GCP Architecture Framework', 'Multi-Region Strategy', 'Organization Policy',
    'Cloud Interconnect', 'Cloud Security Command Center', 'Anthos'
  ]
};

// DevOps tools by seniority
const devOpsTools = {
  junior: [
    'Jenkins Basics', 'GitHub Actions', 'Docker', 'Ansible Basics',
    'Terraform Basics', 'Prometheus/Grafana Basics', 'ELK Stack Basics'
  ],
  mid: [
    'Jenkins Pipeline', 'CircleCI/GitLab CI', 'Docker Compose', 'Kubernetes',
    'Terraform Modules', 'Prometheus Alerting', 'EFK Stack', 'Vault'
  ],
  senior: [
    'Custom CI/CD Pipelines', 'GitOps Workflows', 'Kubernetes Operators',
    'Terraform at Scale', 'Observability Platforms', 'Zero-Trust Security'
  ]
};

// Platform engineering tools by seniority
const platformTools = {
  junior: [
    'Docker', 'Kubernetes Basics', 'Terraform Basics', 'Ansible/Puppet Basics',
    'Jenkins/GitHub Actions', 'Prometheus/Grafana Basics', 'Git Workflows'
  ],
  mid: [
    'Kubernetes Administration', 'Helm Charts', 'Terraform Modules',
    'Ansible/Puppet Advanced', 'ArgoCD', 'Istio Basics', 'EFK Stack'
  ],
  senior: [
    'Custom Kubernetes Operators', 'Internal Developer Platforms',
    'GitOps at Scale', 'Service Mesh Architecture', 'Platform as a Product',
    'Self-Service Infrastructure'
  ]
};

// Certifications by cloud provider and seniority
const certifications = {
  aws: {
    junior: [
      'AWS Certified Cloud Practitioner',
      'AWS Certified Solutions Architect - Associate',
      'AWS Certified Developer - Associate'
    ],
    mid: [
      'AWS Certified SysOps Administrator - Associate',
      'AWS Certified DevOps Engineer - Professional',
      'AWS Certified Security - Specialty'
    ],
    senior: [
      'AWS Certified Solutions Architect - Professional',
      'AWS Certified Advanced Networking - Specialty',
      'AWS Certified Data Analytics - Specialty'
    ]
  },
  azure: {
    junior: [
      'Microsoft Certified: Azure Fundamentals (AZ-900)',
      'Microsoft Certified: Azure Administrator Associate (AZ-104)',
      'Microsoft Certified: Azure Developer Associate (AZ-204)'
    ],
    mid: [
      'Microsoft Certified: Azure Security Engineer Associate (AZ-500)',
      'Microsoft Certified: Azure Network Engineer Associate (AZ-700)',
      'Microsoft Certified: DevOps Engineer Expert (AZ-400)'
    ],
    senior: [
      'Microsoft Certified: Azure Solutions Architect Expert (AZ-305)',
      'Microsoft Certified: Azure for SAP Workloads Specialty (AZ-120)',
      'Microsoft Certified: Azure Stack Hub Operator Associate (AZ-600)'
    ]
  },
  gcp: {
    junior: [
      'Google Cloud Digital Leader',
      'Google Cloud Certified Associate Cloud Engineer',
      'Google Cloud Certified Cloud Developer'
    ],
    mid: [
      'Google Cloud Certified Professional Cloud DevOps Engineer',
      'Google Cloud Certified Professional Cloud Security Engineer',
      'Google Cloud Certified Professional Cloud Network Engineer'
    ],
    senior: [
      'Google Cloud Certified Professional Cloud Architect',
      'Google Cloud Certified Professional Cloud Database Engineer',
      'Google Cloud Certified Fellow: Hybrid Multi-cloud'
    ]
  }
};

// Sample experience entries for cloud engineers by seniority
const cloudEngineerExperience = {
  junior: [
    {
      title: 'Junior Cloud Engineer',
      company: 'TechStart Solutions',
      location: 'Remote',
      startDate: '2023-06-01',
      endDate: '2025-05-01',
      current: true,
      description: 'Supporting cloud infrastructure on AWS, assisting with deployments, and monitoring system health. Collaborated with senior engineers on infrastructure automation projects.',
      achievements: [
        'Automated routine maintenance tasks using Python and AWS Lambda, saving 5 hours per week',
        'Assisted in migrating 15+ applications to containerized environments',
        'Implemented CloudWatch dashboards for improved visibility into system performance',
        'Contributed to CI/CD pipeline improvements using GitHub Actions'
      ]
    },
    {
      title: 'Cloud Support Intern',
      company: 'CloudTech Systems',
      location: 'San Francisco, CA',
      startDate: '2022-09-01',
      endDate: '2023-05-30',
      current: false,
      description: 'Provided tier 1 support for cloud infrastructure issues. Learned cloud architecture principles and assisted with documentation of cloud resources.',
      achievements: [
        'Resolved 200+ support tickets related to basic AWS services',
        'Created documentation for common cloud configuration procedures',
        'Assisted in setting up monitoring for 10+ new cloud environments',
        'Participated in weekly infrastructure reviews and learned best practices'
      ]
    }
  ],
  mid: [
    {
      title: 'Cloud Engineer',
      company: 'DataFlow Technologies',
      location: 'Chicago, IL',
      startDate: '2022-03-01',
      endDate: '2025-05-01',
      current: true,
      description: 'Designing and implementing cloud infrastructure on AWS. Responsible for CI/CD pipelines, infrastructure as code, and cloud security compliance.',
      achievements: [
        'Led migration of 25+ applications to containerized microservices architecture',
        'Implemented Infrastructure as Code using Terraform, reducing provisioning time by 70%',
        'Designed and deployed multi-region disaster recovery solution with 99.99% uptime',
        'Reduced cloud costs by 30% through rightsizing and implementing automated scaling policies'
      ]
    },
    {
      title: 'DevOps Engineer',
      company: 'Innovate Systems',
      location: 'Boston, MA',
      startDate: '2020-06-01',
      endDate: '2022-02-28',
      current: false,
      description: 'Managed CI/CD pipelines and cloud infrastructure on AWS and GCP. Implemented monitoring solutions and automated deployment processes.',
      achievements: [
        'Built CI/CD pipelines that reduced deployment time from days to minutes',
        'Implemented infrastructure monitoring that improved incident response time by 45%',
        'Automated security compliance checks, ensuring 100% compliance with company standards',
        'Mentored junior team members on cloud best practices and DevOps methodologies'
      ]
    }
  ],
  senior: [
    {
      title: 'Senior Cloud Engineer',
      company: 'Enterprise Cloud Solutions',
      location: 'Seattle, WA',
      startDate: '2021-04-01',
      endDate: '2025-05-01',
      current: true,
      description: 'Leading cloud architecture and strategy for enterprise clients. Designing scalable, secure, and cost-effective cloud solutions across multiple providers.',
      achievements: [
        'Architected multi-cloud strategy that saved $1.2M annually while improving resilience',
        'Led team of 8 engineers in implementing cloud-native solutions for critical workloads',
        'Designed and implemented cloud security framework adopted company-wide',
        'Reduced production incidents by 75% through improved architecture and observability'
      ]
    },
    {
      title: 'Cloud Architect',
      company: 'Financial Services Tech',
      location: 'New York, NY',
      startDate: '2018-07-01',
      endDate: '2021-03-31',
      current: false,
      description: 'Designed and implemented cloud solutions for financial services applications with strict security and compliance requirements.',
      achievements: [
        'Led cloud migration for core banking platform with zero downtime',
        'Implemented secure multi-account strategy compliant with financial regulations',
        'Reduced infrastructure costs by 40% while improving performance metrics',
        'Established cloud center of excellence and governance framework'
      ]
    },
    {
      title: 'DevOps Team Lead',
      company: 'Tech Innovations Inc',
      location: 'Austin, TX',
      startDate: '2016-03-01',
      endDate: '2018-06-30',
      current: false,
      description: 'Led DevOps team responsible for CI/CD pipelines, infrastructure automation, and cloud operations.',
      achievements: [
        'Built and led team of 6 DevOps engineers supporting 20+ development teams',
        'Implemented GitOps workflow that improved deployment frequency by 300%',
        'Designed hybrid cloud architecture reducing on-premise infrastructure by 60%',
        'Established SRE practices that improved system reliability from 99.9% to 99.99%'
      ]
    }
  ]
};

// Sample experience entries for platform engineers by seniority
const platformEngineerExperience = {
  junior: [
    {
      title: 'Junior Platform Engineer',
      company: 'DevPlatform Solutions',
      location: 'Remote',
      startDate: '2023-07-01',
      endDate: '2025-05-01',
      current: true,
      description: 'Supporting internal developer platforms and infrastructure automation. Assisting with Kubernetes cluster management and CI/CD pipeline maintenance.',
      achievements: [
        'Automated routine platform maintenance tasks using Python and Bash scripts',
        'Contributed to Helm charts for standardized application deployments',
        'Implemented monitoring dashboards for platform health visibility',
        'Assisted in documenting platform usage guidelines for development teams'
      ]
    },
    {
      title: 'DevOps Intern',
      company: 'TechStart Inc',
      location: 'Portland, OR',
      startDate: '2022-09-01',
      endDate: '2023-06-30',
      current: false,
      description: 'Assisted DevOps team with infrastructure automation, CI/CD pipelines, and monitoring solutions.',
      achievements: [
        'Contributed to Terraform modules for standardized infrastructure provisioning',
        'Helped maintain CI/CD pipelines for 15+ development teams',
        'Created documentation for common platform operations',
        'Participated in on-call rotation for platform support'
      ]
    }
  ],
  mid: [
    {
      title: 'Platform Engineer',
      company: 'InfraCloud Technologies',
      location: 'Denver, CO',
      startDate: '2022-02-01',
      endDate: '2025-05-01',
      current: true,
      description: 'Designing and implementing internal developer platforms to streamline application deployment and infrastructure management.',
      achievements: [
        'Implemented self-service platform reducing deployment time from days to minutes',
        'Designed and deployed Kubernetes-based platform serving 100+ developers',
        'Created standardized CI/CD templates adopted by 20+ development teams',
        'Reduced infrastructure costs by 35% through improved resource utilization'
      ]
    },
    {
      title: 'DevOps Engineer',
      company: 'Software Innovations',
      location: 'Atlanta, GA',
      startDate: '2020-05-01',
      endDate: '2022-01-31',
      current: false,
      description: 'Managed CI/CD pipelines and infrastructure automation. Implemented Kubernetes-based container platform and monitoring solutions.',
      achievements: [
        'Migrated legacy applications to containerized microservices architecture',
        'Implemented GitOps workflow with ArgoCD for 30+ services',
        'Designed and deployed observability stack with Prometheus, Grafana, and ELK',
        'Automated security scanning in CI/CD pipelines, improving vulnerability detection'
      ]
    }
  ],
  senior: [
    {
      title: 'Senior Platform Engineer',
      company: 'Enterprise Platform Services',
      location: 'Chicago, IL',
      startDate: '2021-06-01',
      endDate: '2025-05-01',
      current: true,
      description: 'Leading platform engineering team responsible for designing and implementing internal developer platforms at enterprise scale.',
      achievements: [
        'Architected internal developer platform that increased deployment frequency by 400%',
        'Led team of 6 platform engineers supporting 200+ developers across 30 teams',
        'Implemented platform as a product approach with SLAs and customer feedback loops',
        'Reduced time to onboard new services from weeks to hours through platform automation'
      ]
    },
    {
      title: 'Lead DevOps Engineer',
      company: 'FinTech Solutions',
      location: 'New York, NY',
      startDate: '2019-03-01',
      endDate: '2021-05-31',
      current: false,
      description: 'Led DevOps team responsible for CI/CD pipelines, infrastructure automation, and platform services for financial applications.',
      achievements: [
        'Designed and implemented secure multi-tenant Kubernetes platform',
        'Created infrastructure as code framework adopted by entire engineering organization',
        'Implemented zero-downtime deployment strategies for critical financial services',
        'Established platform reliability engineering practices improving uptime to 99.99%'
      ]
    },
    {
      title: 'DevOps Architect',
      company: 'Tech Innovations',
      location: 'San Francisco, CA',
      startDate: '2017-04-01',
      endDate: '2019-02-28',
      current: false,
      description: 'Designed and implemented DevOps strategies and platforms for rapidly growing technology company.',
      achievements: [
        'Architected CI/CD platform that scaled from supporting 10 to 100+ microservices',
        'Implemented multi-cloud strategy reducing vendor lock-in and improving resilience',
        'Designed self-service infrastructure platform reducing operational overhead by 60%',
        'Established DevOps center of excellence and engineering standards'
      ]
    }
  ]
};

// Sample education entries
const educationEntries = [
  {
    school: 'University of Technology',
    degree: 'Bachelor of Science in Computer Science',
    location: 'San Francisco, CA',
    startDate: '2018-09-01',
    endDate: '2022-05-30',
    current: false,
    description: 'Focused on distributed systems, cloud computing, and software engineering. Graduated with honors.'
  },
  {
    school: 'Tech Institute',
    degree: 'Associate Degree in Information Technology',
    location: 'Chicago, IL',
    startDate: '2016-09-01',
    endDate: '2018-05-30',
    current: false,
    description: 'Foundation courses in networking, systems administration, and programming.'
  }
];

// Sample projects for cloud engineers
const cloudProjects = [
  {
    name: 'Multi-Region Disaster Recovery Solution',
    technologies: 'AWS, Terraform, Python, CloudFormation',
    description: 'Designed and implemented a multi-region disaster recovery solution for critical applications with automated failover and data replication.',
    link: 'https://github.com/username/disaster-recovery'
  },
  {
    name: 'Cloud Cost Optimization Platform',
    technologies: 'AWS, Python, React, Grafana',
    description: 'Developed a platform for monitoring and optimizing cloud costs across multiple accounts, providing recommendations and automated remediation.',
    link: 'https://github.com/username/cost-optimizer'
  },
  {
    name: 'Serverless ETL Pipeline',
    technologies: 'AWS Lambda, S3, DynamoDB, Step Functions',
    description: 'Built a serverless ETL pipeline for processing large datasets, with automatic scaling and error handling capabilities.',
    link: 'https://github.com/username/serverless-etl'
  }
];

// Sample projects for platform engineers
const platformProjects = [
  {
    name: 'Internal Developer Platform',
    technologies: 'Kubernetes, Backstage, ArgoCD, Terraform',
    description: 'Built an internal developer platform providing self-service infrastructure, standardized CI/CD, and service catalog for development teams.',
    link: 'https://github.com/username/dev-platform'
  },
  {
    name: 'GitOps Deployment Framework',
    technologies: 'Kubernetes, ArgoCD, Helm, GitHub Actions',
    description: 'Developed a GitOps-based deployment framework allowing teams to deploy applications through git workflows with automated validation and rollbacks.',
    link: 'https://github.com/username/gitops-framework'
  },
  {
    name: 'Observability Platform',
    technologies: 'Prometheus, Grafana, Loki, OpenTelemetry',
    description: 'Created a comprehensive observability platform with metrics, logs, and traces for all services with automated alerting and dashboards.',
    link: 'https://github.com/username/observability-platform'
  }
];

// Languages with proficiency levels
const languages = [
  { language: 'English', proficiency: 'Native' },
  { language: 'Spanish', proficiency: 'Intermediate' },
  { language: 'French', proficiency: 'Basic' }
];

/**
 * Generate a complete resume for a specific role and seniority level
 * @param {string} role - The role type (cloudEngineer, platformEngineer)
 * @param {string} seniority - The seniority level (junior, mid, senior)
 * @param {string} cloudProvider - The preferred cloud provider (aws, azure, gcp, multi)
 * @returns {object} A complete resume object with all sections populated
 */
export const generateResumeData = (role, seniority, cloudProvider = 'aws') => {
  // Default personal info
  const personalInfo = {
    name: 'Alex Johnson',
    title: role === 'cloudEngineer' 
      ? `${seniority === 'junior' ? 'Junior' : seniority === 'mid' ? 'Mid-Level' : 'Senior'} Cloud Engineer`
      : `${seniority === 'junior' ? 'Junior' : seniority === 'mid' ? 'Mid-Level' : 'Senior'} Platform Engineer`,
    email: 'alex.johnson@example.com',
    phone: '(555) 123-4567',
    address: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/alexjohnson',
    github: 'github.com/alexjohnson',
    website: 'alexjohnson.dev'
  };

  // Select appropriate experience based on role and seniority
  const experience = role === 'cloudEngineer'
    ? cloudEngineerExperience[seniority]
    : platformEngineerExperience[seniority];

  // Combine skills based on role, seniority, and cloud provider
  let skills = [];
  if (role === 'cloudEngineer') {
    skills = [
      ...commonCloudSkills[seniority],
      ...(cloudProvider === 'aws' ? awsSkills[seniority] : []),
      ...(cloudProvider === 'azure' ? azureSkills[seniority] : []),
      ...(cloudProvider === 'gcp' ? gcpSkills[seniority] : []),
      ...(cloudProvider === 'multi' ? [...awsSkills[seniority].slice(0, 3), ...azureSkills[seniority].slice(0, 3), ...gcpSkills[seniority].slice(0, 3)] : []),
      ...devOpsTools[seniority]
    ];
  } else {
    skills = [
      ...commonPlatformSkills[seniority],
      ...platformTools[seniority],
      ...(cloudProvider === 'aws' ? awsSkills[seniority].slice(0, 4) : []),
      ...(cloudProvider === 'azure' ? azureSkills[seniority].slice(0, 4) : []),
      ...(cloudProvider === 'gcp' ? gcpSkills[seniority].slice(0, 4) : []),
      ...(cloudProvider === 'multi' ? [...awsSkills[seniority].slice(0, 2), ...azureSkills[seniority].slice(0, 2), ...gcpSkills[seniority].slice(0, 2)] : [])
    ];
  }

  // Remove duplicates from skills
  skills = [...new Set(skills)];

  // Select appropriate certifications
  let certs = [];
  if (cloudProvider === 'multi') {
    certs = [
      ...certifications.aws[seniority].slice(0, 1),
      ...certifications.azure[seniority].slice(0, 1),
      ...certifications.gcp[seniority].slice(0, 1)
    ];
  } else {
    certs = certifications[cloudProvider][seniority];
  }

  // Select appropriate projects
  const projects = role === 'cloudEngineer' ? cloudProjects : platformProjects;

  // Generate summary based on role and seniority
  let summary = '';
  if (role === 'cloudEngineer') {
    if (seniority === 'junior') {
      summary = `Junior Cloud Engineer with ${experience[0].current ? 'over 1 year' : '2 years'} of experience in cloud infrastructure and DevOps practices. Proficient in ${cloudProvider.toUpperCase()} services with a focus on automation, monitoring, and infrastructure as code. Eager to learn and grow in cloud technologies while contributing to efficient and scalable solutions.`;
    } else if (seniority === 'mid') {
      summary = `Results-driven Cloud Engineer with ${experience[0].current ? '3+' : '5+'} years of experience designing and implementing scalable, secure, and cost-effective cloud solutions on ${cloudProvider.toUpperCase()}. Strong expertise in infrastructure as code, CI/CD pipelines, and container orchestration. Passionate about automation and improving development workflows.`;
    } else {
      summary = `Senior Cloud Engineer with ${experience[0].current ? '7+' : '10+'} years of experience architecting and implementing enterprise-grade cloud solutions. Expert in ${cloudProvider === 'multi' ? 'multi-cloud environments' : `${cloudProvider.toUpperCase()} services`} with a focus on security, scalability, and cost optimization. Proven track record of leading teams and delivering complex cloud migration and modernization projects.`;
    }
  } else {
    if (seniority === 'junior') {
      summary = `Junior Platform Engineer with ${experience[0].current ? 'over 1 year' : '2 years'} of experience supporting internal developer platforms and infrastructure automation. Knowledgeable in Kubernetes, CI/CD pipelines, and infrastructure as code. Committed to improving developer experience and operational efficiency.`;
    } else if (seniority === 'mid') {
      summary = `Experienced Platform Engineer with ${experience[0].current ? '3+' : '5+'} years of designing and implementing internal developer platforms and infrastructure automation solutions. Strong expertise in Kubernetes, GitOps, and observability. Focused on creating scalable, self-service platforms that accelerate software delivery.`;
    } else {
      summary = `Senior Platform Engineer with ${experience[0].current ? '7+' : '10+'} years of experience leading platform engineering initiatives and building developer-centric infrastructure solutions. Expert in designing and implementing scalable, secure, and efficient platforms that enable development teams to deliver software faster and more reliably.`;
    }
  }

  // Additional skills based on role
  const additionalSkills = role === 'cloudEngineer'
    ? ['Python', 'Bash', 'YAML/JSON', 'Networking', 'Security', 'Monitoring', 'Troubleshooting', 'Documentation']
    : ['Go', 'Python', 'YAML/JSON', 'API Design', 'Automation', 'System Design', 'Documentation', 'Mentoring'];

  // Return complete resume data
  return {
    personalInfo,
    summary,
    experience,
    education: educationEntries,
    skills,
    additionalSkills,
    certifications: certs,
    projects,
    languages,
    template: role === 'cloudEngineer'
      ? `cloud-engineer-${seniority}`
      : `platform-engineer-${seniority}`
  };
};

export default {
  generateResumeData
};
