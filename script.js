const modules = [
  {
    title: "Foundations of Systems Administration",
    summary: "Systems theory, operating systems, enterprise infrastructure, and AWS foundations.",
    topics: [
      "Systems Theory",
      "Operating Systems Fundamentals",
      "Client-Server Architecture",
      "Roles and Responsibilities of Systems Administrators",
      "AWS Global Infrastructure",
      "AWS Shared Responsibility Model"
    ],
    checks: [
      "Explain the principles, functions, and responsibilities of systems administration based on systems theory and operating system concepts.",
      "Differentiate traditional on-premises infrastructure from cloud-based infrastructure using AWS Global Infrastructure.",
      "Describe how AWS Regions and Availability Zones support distributed and resilient computing.",
      "Explain the AWS Shared Responsibility Model and its implications for cloud administration."
    ],
    quiz: {
      question: "What does the AWS Shared Responsibility Model define?",
      options: [
        "How security and operational responsibilities are divided between AWS and the customer",
        "How all security tasks are handled entirely by AWS",
        "How only on-premises infrastructure should be administered"
      ],
      answer: "How security and operational responsibilities are divided between AWS and the customer"
    }
  },
  {
    title: "Cloud Computing and Virtualization Fundamentals",
    summary: "Cloud models, distributed systems, virtualization, compute options, and AWS cost basics.",
    topics: [
      "Cloud Computing Models",
      "Distributed Systems",
      "Virtualization Theory",
      "Containers vs Virtual Machines",
      "AWS Compute Overview",
      "AWS Pricing and Billing"
    ],
    checks: [
      "Explain how distributed systems and virtualization enable cloud computing.",
      "Compare public, private, hybrid, and multi-cloud deployment models.",
      "Differentiate Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS) using AWS services.",
      "Analyze the organizational benefits, limitations, and trade-offs of cloud adoption.",
      "Interpret AWS pricing models and their implications for infrastructure planning."
    ],
    quiz: {
      question: "Which statement best distinguishes containers from virtual machines?",
      options: [
        "Containers share the host OS kernel, while virtual machines emulate full guest environments",
        "Virtual machines always cost less than containers",
        "Containers require their own hypervisor hardware"
      ],
      answer: "Containers share the host OS kernel, while virtual machines emulate full guest environments"
    }
  },
  {
    title: "Identity, Access Management, and Governance",
    summary: "Authentication, authorization, access control models, IAM, MFA, federation, and governance.",
    topics: [
      "Authentication",
      "Authorization",
      "Role-Based Access Control (RBAC)",
      "Principle of Least Privilege",
      "AWS IAM",
      "Multi-Factor Authentication"
    ],
    checks: [
      "Explain authentication and authorization mechanisms used in secure computing environments.",
      "Differentiate RBAC and ABAC access control models.",
      "Explain how AWS IAM implements secure identity and access management.",
      "Evaluate identity management policies using the principle of least privilege.",
      "Analyze governance practices that support secure cloud administration."
    ],
    quiz: {
      question: "Which statement best describes the principle of least privilege?",
      options: [
        "Grant only the permissions required to complete a task",
        "Grant administrator access to reduce configuration effort",
        "Use the same permissions for every identity"
      ],
      answer: "Grant only the permissions required to complete a task"
    }
  },
  {
    title: "Computer Networks and Cloud Networking",
    summary: "Networking models, routing, DNS, VPC design, gateways, and cloud network security controls.",
    topics: [
      "OSI Model",
      "TCP/IP",
      "Routing",
      "DNS",
      "Amazon VPC",
      "Subnets",
      "Route Tables",
      "Security Groups"
    ],
    checks: [
      "Explain networking concepts that underpin cloud infrastructure.",
      "Differentiate the functions of the OSI and TCP/IP networking models.",
      "Analyze the components of Amazon Virtual Private Cloud (VPC) in relation to traditional network architectures.",
      "Explain how routing, subnets, gateways, and DNS enable secure cloud communication.",
      "Evaluate cloud networking designs based on networking and security principles."
    ],
    quiz: {
      question: "What makes a subnet public in Amazon VPC?",
      options: [
        "Its route table sends internet-bound traffic to an internet gateway",
        "It has more IP addresses than a private subnet",
        "It automatically allows all inbound traffic"
      ],
      answer: "Its route table sends internet-bound traffic to an internet gateway"
    }
  },
  {
    title: "Compute Infrastructure Administration",
    summary: "EC2 provisioning, AMIs, instance sizing, launch templates, Elastic IP, and CloudFormation fundamentals.",
    topics: [
      "Amazon EC2",
      "Amazon Machine Images",
      "Instance Types",
      "Launch Templates",
      "Infrastructure Provisioning",
      "AWS CloudFormation Fundamentals"
    ],
    checks: [
      "Explain how virtualization supports modern cloud infrastructure.",
      "Differentiate virtual machines, containers, and elastic compute resources.",
      "Explain the role of Amazon EC2 in cloud infrastructure provisioning.",
      "Analyze factors affecting compute resource selection based on workload requirements.",
      "Explain the principles and benefits of Infrastructure as Code using AWS CloudFormation."
    ],
    quiz: {
      question: "What is a primary benefit of using a launch template with Amazon EC2?",
      options: [
        "It stores reusable instance launch parameters for consistent provisioning",
        "It replaces the need for an AMI entirely",
        "It automatically turns every instance into a container"
      ],
      answer: "It stores reusable instance launch parameters for consistent provisioning"
    }
  },
  {
    title: "Linux Systems Administration",
    summary: "Linux architecture, shell usage, file systems, identities, permissions, processes, packages, SSH, and Systems Manager.",
    topics: [
      "Linux Architecture",
      "Shell Environment",
      "File Systems",
      "Users and Groups",
      "Permissions",
      "Process Management",
      "SSH",
      "Systems Manager"
    ],
    checks: [
      "Explain the architecture and operational principles of the Linux operating system.",
      "Differentiate Linux file systems, processes, users, groups, and permission models.",
      "Analyze Linux system administration practices in cloud environments.",
      "Explain secure remote administration concepts using SSH and AWS Systems Manager.",
      "Evaluate Linux administration strategies for enterprise cloud systems."
    ],
    quiz: {
      question: "What is a primary advantage of AWS Systems Manager over direct SSH-only administration?",
      options: [
        "It can support managed administration workflows without relying only on direct inbound SSH access",
        "It replaces Linux permissions and user management entirely",
        "It prevents all package-management and process issues automatically"
      ],
      answer: "It can support managed administration workflows without relying only on direct inbound SSH access"
    }
  },
  {
    title: "Storage Administration",
    summary: "Storage hierarchy, enterprise storage models, RAID, performance, and AWS storage services.",
    topics: [
      "Storage Hierarchy",
      "Object Storage",
      "Block Storage",
      "File Storage",
      "Storage Performance",
      "Amazon S3",
      "Amazon EBS",
      "Amazon EFS"
    ],
    checks: [
      "Differentiate block, object, and file storage architectures.",
      "Explain storage technologies used in enterprise cloud infrastructure.",
      "Analyze organizational storage requirements and appropriate storage solutions.",
      "Explain AWS storage services in relation to storage architecture principles.",
      "Evaluate storage strategies based on performance, availability, and cost considerations."
    ],
    quiz: {
      question: "Which AWS service is most directly aligned with scalable object storage?",
      options: [
        "Amazon S3",
        "Amazon EBS",
        "Amazon EC2"
      ],
      answer: "Amazon S3"
    }
  },
  {
    title: "Database Administration",
    summary: "Relational and NoSQL databases, ACID, CAP theorem, AWS managed database services, and backup strategy.",
    topics: [
      "Relational Databases",
      "NoSQL Databases",
      "ACID",
      "CAP Theorem",
      "Amazon RDS",
      "DynamoDB",
      "Database Backup"
    ],
    checks: [
      "Explain relational and NoSQL database architectures.",
      "Differentiate database management models based on application requirements.",
      "Explain the principles of managed database administration in cloud environments.",
      "Analyze AWS database services based on scalability, consistency, and availability.",
      "Evaluate database solutions appropriate for different organizational needs."
    ],
    quiz: {
      question: "Which AWS service is designed as a managed key-value and document NoSQL database?",
      options: [
        "Amazon DynamoDB",
        "Amazon RDS for MySQL",
        "Amazon EFS"
      ],
      answer: "Amazon DynamoDB"
    }
  },
  {
    title: "Web and Application Services",
    summary: "Multi-tier architecture, web and application delivery, reverse proxy, load balancing, DNS, certificates, and deployment.",
    topics: [
      "Multi-tier Architecture",
      "Web Servers",
      "Reverse Proxy",
      "Elastic Load Balancer",
      "Route 53",
      "AWS Certificate Manager",
      "Application Deployment"
    ],
    checks: [
      "Explain the principles of multi-tier application architecture.",
      "Differentiate the functions of web servers, application servers, and load balancers.",
      "Explain how AWS services support secure and scalable web application deployment.",
      "Analyze application architectures based on availability, scalability, and security requirements."
    ],
    quiz: {
      question: "What is a primary role of an Elastic Load Balancer in a multi-tier application?",
      options: [
        "It distributes traffic across healthy targets to improve availability and scalability",
        "It replaces DNS and certificate management entirely",
        "It stores application data as durable object storage"
      ],
      answer: "It distributes traffic across healthy targets to improve availability and scalability"
    }
  },
  {
    title: "Monitoring, Logging, and Performance Management",
    summary: "Monitoring, observability, metrics, tuning, logging, and AWS operational visibility services.",
    topics: [
      "Systems Monitoring",
      "Observability",
      "Performance Metrics",
      "Capacity Planning",
      "Log Management",
      "Amazon CloudWatch",
      "CloudTrail",
      "AWS Config"
    ],
    checks: [
      "Explain the role of monitoring and observability in systems administration.",
      "Differentiate monitoring, logging, and auditing functions.",
      "Analyze performance metrics to evaluate system health.",
      "Explain how AWS monitoring services support operational decision-making.",
      "Recommend monitoring strategies based on infrastructure requirements."
    ],
    quiz: {
      question: "Which AWS service is most directly used to collect metrics, create alarms, and visualize operational dashboards?",
      options: [
        "Amazon CloudWatch",
        "Amazon Route 53",
        "AWS Certificate Manager"
      ],
      answer: "Amazon CloudWatch"
    }
  },
  {
    title: "Cloud Security Administration",
    summary: "Layered cloud security, cryptography, risk management, and AWS security protection services.",
    topics: [
      "Information Security Principles",
      "Defense in Depth",
      "Cryptography",
      "Risk Management",
      "AWS KMS",
      "Secrets Manager",
      "GuardDuty",
      "AWS WAF"
    ],
    checks: [
      "Explain the principles of cloud security and layered defense.",
      "Differentiate preventive, detective, and corrective security controls.",
      "Explain the functions of AWS security services in protecting cloud infrastructure.",
      "Analyze cloud security risks using established security principles.",
      "Evaluate organizational security practices in cloud environments."
    ],
    quiz: {
      question: "Which AWS service is primarily used to protect web applications from common web exploits?",
      options: [
        "AWS WAF",
        "Amazon SNS",
        "Amazon EFS"
      ],
      answer: "AWS WAF"
    }
  },
  {
    title: "High Availability, Scalability, and Reliability Engineering",
    summary: "Reliability engineering, scaling, fault tolerance, elasticity, health checks, and resilient AWS infrastructure design.",
    topics: [
      "Reliability Engineering",
      "Scalability",
      "Fault Tolerance",
      "Elasticity",
      "Auto Scaling",
      "Elastic Load Balancer",
      "Multi-AZ",
      "Health Checks"
    ],
    checks: [
      "Explain the principles of high availability, scalability, and fault tolerance.",
      "Differentiate vertical and horizontal scaling strategies.",
      "Explain how AWS services support reliable and resilient cloud infrastructures.",
      "Analyze cloud architectures with respect to availability and performance.",
      "Evaluate infrastructure designs using reliability engineering principles."
    ],
    quiz: {
      question: "What is a key difference between vertical and horizontal scaling?",
      options: [
        "Vertical scaling adds capacity to a single node, while horizontal scaling adds more nodes",
        "Vertical scaling always improves availability more than horizontal scaling",
        "Horizontal scaling removes the need for load balancing"
      ],
      answer: "Vertical scaling adds capacity to a single node, while horizontal scaling adds more nodes"
    }
  },
  {
    title: "Backup, Disaster Recovery, and Business Continuity",
    summary: "Business continuity, disaster recovery, RPO, RTO, backups, replication, versioning, and AWS data protection strategy.",
    topics: [
      "Business Continuity",
      "Disaster Recovery",
      "Recovery Point Objective (RPO)",
      "Recovery Time Objective (RTO)",
      "Backup Strategies",
      "AWS Backup",
      "Snapshots",
      "Cross-Region Replication"
    ],
    checks: [
      "Explain the principles of backup, disaster recovery, and business continuity.",
      "Differentiate backup strategies based on organizational requirements.",
      "Explain how AWS backup services support data protection and disaster recovery.",
      "Analyze disaster recovery plans using RPO and RTO metrics.",
      "Evaluate organizational continuity strategies for cloud environments."
    ],
    quiz: {
      question: "What does Recovery Time Objective (RTO) describe?",
      options: [
        "The target time to restore a service after disruption",
        "The amount of data that can be lost before backup is required",
        "The number of regions an application can run in"
      ],
      answer: "The target time to restore a service after disruption"
    }
  },
  {
    title: "Systems Maintenance, Automation, and IT Service Management",
    summary: "Maintenance strategy, service management, root cause analysis, operational runbooks, and AWS automation services.",
    topics: [
      "Preventive Maintenance",
      "Corrective Maintenance",
      "Patch Management",
      "Incident Management",
      "Problem Management",
      "Change Management",
      "Root Cause Analysis",
      "Operational Runbooks",
      "AWS Systems Manager",
      "Automation Documents"
    ],
    checks: [
      "Explain the principles of systems maintenance and IT service management.",
      "Differentiate maintenance strategies used throughout the systems lifecycle.",
      "Explain incident, problem, and change management processes.",
      "Analyze the role of automation in improving operational efficiency.",
      "Evaluate maintenance strategies based on organizational requirements."
    ],
    quiz: {
      question: "Which practice is most directly associated with identifying the underlying cause of recurring incidents?",
      options: [
        "Root Cause Analysis",
        "Elastic Load Balancing",
        "Versioning"
      ],
      answer: "Root Cause Analysis"
    }
  },
  {
    title: "Cloud Architecture, Infrastructure Optimization, and the AWS Well-Architected Framework",
    summary: "Architectural quality attributes, AWS Well-Architected pillars, optimization strategy, and cloud architecture evaluation.",
    topics: [
      "Software Architecture Principles",
      "Quality Attributes",
      "Operational Excellence",
      "Security",
      "Reliability",
      "Performance Efficiency",
      "Cost Optimization",
      "AWS Well-Architected Framework",
      "AWS Well-Architected Tool",
      "AWS Cost Explorer"
    ],
    checks: [
      "Explain architectural quality attributes for cloud systems.",
      "Describe the six pillars of the AWS Well-Architected Framework.",
      "Analyze cloud architectures using established architectural principles.",
      "Recommend improvements for security, reliability, performance, operational excellence, cost optimization, and sustainability.",
      "Evaluate cloud solutions using the AWS Well-Architected Framework."
    ],
    quiz: {
      question: "Which AWS Well-Architected pillar focuses on reducing unnecessary expenses while meeting system requirements?",
      options: [
        "Cost Optimization",
        "Reliability",
        "Operational Excellence"
      ],
      answer: "Cost Optimization"
    }
  }
];

const flashcards = [
  {
    question: "What does the AWS Shared Responsibility Model define?",
    answer: "It divides security and operational responsibilities between AWS and the customer."
  },
  {
    question: "Why do Availability Zones matter?",
    answer: "They support resilience by distributing workloads across separate physical locations in a region."
  },
  {
    question: "How do virtualization and distributed systems support cloud computing?",
    answer: "They allow shared infrastructure, elastic scaling, and service delivery across many connected resources."
  },
  {
    question: "What is a key difference between containers and virtual machines?",
    answer: "Containers share the host OS kernel, while virtual machines run full guest operating systems."
  },
  {
    question: "How is RBAC different from ABAC?",
    answer: "RBAC grants access based on roles, while ABAC uses attributes such as user, resource, or environment details."
  },
  {
    question: "What is the main purpose of a NAT gateway?",
    answer: "It allows resources in private subnets to reach the internet outbound without accepting unsolicited inbound connections."
  },
  {
    question: "What does Infrastructure as Code improve in cloud administration?",
    answer: "It makes provisioning repeatable, reviewable, and easier to automate across environments."
  },
  {
    question: "Why is AWS Systems Manager useful in Linux administration?",
    answer: "It supports secure remote management, automation, and operational control without depending only on direct SSH access."
  },
  {
    question: "How is object storage different from block storage?",
    answer: "Object storage manages data as discrete objects with metadata, while block storage presents raw volumes for attached operating systems and applications."
  },
  {
    question: "What is a practical difference between relational and NoSQL databases?",
    answer: "Relational databases emphasize structured schemas and transactional consistency, while NoSQL systems often prioritize flexible models and horizontal scalability."
  },
  {
    question: "Why is a multi-tier architecture useful for production web applications?",
    answer: "It separates presentation, application, and data responsibilities to improve scalability, security, and maintainability."
  },
  {
    question: "How is logging different from monitoring?",
    answer: "Monitoring tracks system state and performance over time, while logging records detailed event data that helps explain what happened."
  },
  {
    question: "What does defense in depth mean in cloud security?",
    answer: "It means using multiple layers of security controls so that one control failure does not fully expose the system."
  },
  {
    question: "Why are Multi-AZ and health checks important in resilient architectures?",
    answer: "They help workloads continue operating during failures by spreading resources and detecting unhealthy components for recovery or rerouting."
  },
  {
    question: "What is the difference between RPO and RTO?",
    answer: "RPO defines acceptable data loss measured in time, while RTO defines acceptable service recovery time after an outage."
  },
  {
    question: "How does automation improve systems maintenance?",
    answer: "Automation reduces manual repetition, improves consistency, speeds response, and helps enforce operational procedures at scale."
  },
  {
    question: "What is the purpose of the AWS Well-Architected Framework?",
    answer: "It provides a structured way to evaluate cloud architectures and improve them across operational excellence, security, reliability, performance, cost, and sustainability."
  }
];

const moduleList = document.querySelector("#module-list");
const moduleTemplate = document.querySelector("#module-template");
const moduleTabs = document.querySelector("#module-tabs");
const searchInput = document.querySelector("#module-search");
const moduleCount = document.querySelector("#module-count");
const topicCount = document.querySelector("#topic-count");
const flashcard = document.querySelector("#flashcard");
const flashcardQuestion = flashcard ? flashcard.querySelector(".flashcard-question") : null;
const flashcardAnswer = flashcard ? flashcard.querySelector(".flashcard-answer") : null;
const flipCardButton = document.querySelector("#flip-card");
const nextCardButton = document.querySelector("#next-card");

let currentFlashcard = 0;

const cloStatements = {
  1: "Explain the fundamental concepts of systems administration, cloud computing, and AWS cloud infrastructure, including core cloud services and security principles.",
  2: "Deploy and configure cloud computing resources, including networking, compute, storage, identity management, and database services using AWS, leveraging AI-assisted tools where appropriate while validating configurations against established best practices.",
  3: "Administer and maintain Linux-based cloud systems by managing users, services, storage, web applications, and databases using standard systems administration practices, utilizing AI to support automation, scripting, and technical documentation.",
  4: "Monitor, secure, troubleshoot, and optimize cloud-based systems by applying appropriate maintenance practices and AWS architectural best practices, and AI-assisted analysis while exercising professional judgment to verify recommendations and implement appropriate solutions."
};

function getLectureCLOs(moduleIndex) {
  const cloMap = {
    0: [1],
    1: [1],
    2: [1, 2],
    3: [2],
    4: [2],
    5: [3],
    6: [2, 3],
    7: [2, 3],
    8: [2, 3],
    9: [4],
    10: [1, 4],
    11: [4],
    12: [4],
    13: [3, 4],
    14: [4]
  };

  return (cloMap[moduleIndex] || []).map((number) => `CLO ${number}: ${cloStatements[number]}`);
}

function getTeachingActivities(module) {
  return [
    `Topic briefing: Introduce the core lecture concepts and define the scope of ${module.title.toLowerCase()}.`,
    `Guided discussion: Clarify key terms, AWS services, and administration decisions through short instructor-led questioning.`,
    `Concept walkthrough: Use diagrams, console views, or short examples to explain how the topic works in practice.`,
    `Short consolidation activity: Ask students to complete a brief check, comparison, or reflection before the lecture closes.`
  ];
}

function getReadingMaterials(moduleIndex) {
  const readingMap = {
    0: [
      { title: "The NIST Definition of Cloud Computing", url: "https://www.nist.gov/publications/nist-definition-cloud-computing" },
      { title: "AWS Global Infrastructure", url: "https://aws.amazon.com/about-aws/global-infrastructure/" },
      { title: "AWS Shared Responsibility Model", url: "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/shared-responsibility.html" }
    ],
    1: [
      { title: "Above the Clouds: A Berkeley View of Cloud Computing", url: "https://www.usenix.org/conference/lisa-09/above-clouds-berkeley-view-cloud-computing" },
      { title: "AWS Cloud Essentials", url: "https://aws.amazon.com/getting-started/cloud-essentials/" },
      { title: "Amazon EC2 Pricing", url: "https://aws.amazon.com/ec2/pricing/" }
    ],
    2: [
      { title: "AWS IAM User Guide", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html" },
      { title: "AWS IAM Best Practices", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html" },
      { title: "NIST Digital Identity Guidelines", url: "https://www.nist.gov/itl/tig/projects/special-publication-800-63" }
    ],
    3: [
      { title: "Amazon VPC User Guide", url: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html" },
      { title: "AWS VPC Connectivity Options", url: "https://docs.aws.amazon.com/vpc/latest/userguide/how-it-works.html" },
      { title: "How DNS Works", url: "https://aws.amazon.com/route53/what-is-dns/" }
    ],
    4: [
      { title: "Amazon EC2 User Guide", url: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html" },
      { title: "AWS CloudFormation Getting Started", url: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/GettingStarted.html" },
      { title: "AWS Launch Templates", url: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html" }
    ],
    5: [
      { title: "How Linux Works, 3rd Edition", url: "https://nostarch.com/howlinuxworks3" },
      { title: "UNIX and Linux System Administration Handbook", url: "https://www.oreilly.com/library/view/unix-and-linux/9780134278308/" },
      { title: "AWS Systems Manager User Guide", url: "https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html" }
    ],
    6: [
      { title: "Amazon S3 User Guide", url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html" },
      { title: "Amazon EBS documentation", url: "https://docs.aws.amazon.com/ebs/" },
      { title: "Amazon EFS documentation", url: "https://docs.aws.amazon.com/efs/" }
    ],
    7: [
      { title: "Amazon RDS documentation", url: "https://docs.aws.amazon.com/rds/" },
      { title: "Amazon DynamoDB documentation", url: "https://docs.aws.amazon.com/dynamodb/" },
      { title: "Dynamo: Amazon’s Highly Available Key-value Store", url: "https://www.amazon.science/publications/dynamo-amazons-highly-available-key-value-store" }
    ],
    8: [
      { title: "Elastic Load Balancing User Guide", url: "https://docs.aws.amazon.com/elasticloadbalancing/" },
      { title: "Amazon Route 53 Developer Guide", url: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html" },
      { title: "AWS Certificate Manager documentation", url: "https://docs.aws.amazon.com/acm/" }
    ],
    9: [
      { title: "Amazon CloudWatch documentation", url: "https://docs.aws.amazon.com/cloudwatch/" },
      { title: "AWS CloudTrail documentation", url: "https://docs.aws.amazon.com/cloudtrail/" },
      { title: "AWS Config documentation", url: "https://docs.aws.amazon.com/config/" }
    ],
    10: [
      { title: "AWS Key Management Service documentation", url: "https://docs.aws.amazon.com/kms/" },
      { title: "AWS Secrets Manager documentation", url: "https://docs.aws.amazon.com/secretsmanager/" },
      { title: "AWS Well-Architected Security Pillar", url: "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html" }
    ],
    11: [
      { title: "AWS Well-Architected Reliability Pillar", url: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html" },
      { title: "Amazon EC2 Auto Scaling documentation", url: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html" },
      { title: "Elastic Load Balancing User Guide", url: "https://docs.aws.amazon.com/elasticloadbalancing/" }
    ],
    12: [
      { title: "AWS Backup documentation", url: "https://docs.aws.amazon.com/aws-backup/" },
      { title: "Disaster Recovery of Workloads on AWS", url: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html" },
      { title: "Amazon S3 Versioning", url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html" }
    ],
    13: [
      { title: "AWS Systems Manager documentation", url: "https://docs.aws.amazon.com/systems-manager/" },
      { title: "AWS Patch Manager", url: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html" },
      { title: "Google SRE Resources", url: "https://sre.google/resources/" }
    ],
    14: [
      { title: "AWS Well-Architected Framework", url: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html" },
      { title: "AWS Cost Explorer", url: "https://aws.amazon.com/aws-cost-management/aws-cost-explorer/" },
      { title: "AWS Trusted Advisor", url: "https://aws.amazon.com/premiumsupport/technology/trusted-advisor/" }
    ]
  };

  return readingMap[moduleIndex] || [];
}

function getVideoLecture(moduleIndex) {
  const videoMap = {
    0: {
      title: "New introduction to AWS instructional videos and labs",
      url: "https://aws.amazon.com/about-aws/whats-new/2014/01/14/new-introduction-to-aws-instructional-videos-and-labs/"
    },
    1: {
      title: "Compute innovations and AWS compute concepts",
      url: "https://aws.amazon.com/video/watch/7357156143b/"
    },
    2: {
      title: "IAM best practices for least privilege and account security",
      url: "https://aws.amazon.com/video/watch/4836d72eb08/"
    },
    3: {
      title: "Whiteboard with an SA: Amazon Virtual Private Cloud",
      url: "https://aws.amazon.com/blogs/publicsector/whiteboard-with-an-sa-amazon-virtual-private-cloud/"
    },
    4: {
      title: "Amazon EC2 and compute service overview",
      url: "https://aws.amazon.com/video/watch/7357156143b/"
    },
    5: {
      title: "Linux Essentials training video on users, groups, and administration concepts",
      url: "https://www.learnlinux.tv/linux-essentials-managing-groups/"
    },
    6: {
      title: "Amazon S3 videos and storage learning resources",
      url: "https://aws.amazon.com/s3/videos/"
    },
    7: {
      title: "DynamoDB core concepts: tables, items, and attributes",
      url: "https://aws.amazon.com/video/watch/744140a5363/"
    },
    8: {
      title: "Elastic Load Balancing overview and application delivery concepts",
      url: "https://aws.amazon.com/elasticloadbalancing/"
    },
    9: {
      title: "CloudWatch implementation and operations overview",
      url: "https://aws.amazon.com/video/watch/c145d75ed20/"
    },
    10: {
      title: "AWS security learning resources and guided videos",
      url: "https://aws.amazon.com/security/security-learning/"
    },
    11: {
      title: "Amazon EC2 Auto Scaling overview",
      url: "https://aws.amazon.com/ec2/autoscaling/"
    },
    12: {
      title: "AWS Backup and disaster recovery video resource",
      url: "https://aws.amazon.com/video/watch/c28a7fb11e8/"
    },
    13: {
      title: "Manage and automate operations with AWS Systems Manager",
      url: "https://aws.amazon.com/video/watch/f600ef28976/"
    },
    14: {
      title: "AWS Well-Architected Framework video overview",
      url: "https://aws.amazon.com/tr/video/watch/883325fcd08/"
    }
  };

  return videoMap[moduleIndex] || null;
}

function getAssessmentItems(module) {
  return [
    "Short quiz: A brief post-lecture knowledge check focused on the main concept of the topic.",
    "Short activity: A quick guided comparison, classification, or explanation task completed within the lecture period.",
    "Expectation: Assessment remains light because the lecture block is only 2 hours long."
  ];
}

function countTotals() {
  return {
    modules: modules.length,
    topics: modules.reduce((total, module) => total + module.topics.length, 0)
  };
}

function renderStats() {
  const totals = countTotals();
  moduleCount.textContent = String(totals.modules);
  topicCount.textContent = String(totals.topics);
}

function createQuiz(module) {
  const wrapper = document.createElement("div");
  wrapper.className = "quiz-options";
  const feedback = document.createElement("p");
  feedback.className = "quiz-feedback";

  module.quiz.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => {
      wrapper.querySelectorAll(".quiz-option").forEach((item) => {
        item.disabled = true;
        item.classList.remove("correct", "wrong");
      });

      if (option === module.quiz.answer) {
        button.classList.add("correct");
        feedback.textContent = "Correct. That matches the key operational principle for this module.";
      } else {
        button.classList.add("wrong");
        feedback.textContent = `Not quite. Correct answer: ${module.quiz.answer}.`;
      }
    });
    wrapper.append(button);
  });

  return { wrapper, feedback };
}

function renderModules() {
  moduleList.textContent = "";
  if (moduleTabs) {
    moduleTabs.textContent = "";
  }

  modules.forEach((module, moduleIndex) => {
    if (moduleTabs) {
      const tabButton = document.createElement("button");
      tabButton.type = "button";
      tabButton.className = "tab-button";
      tabButton.setAttribute("role", "tab");
      tabButton.setAttribute("aria-selected", "false");
      tabButton.setAttribute("aria-controls", `topic-${moduleIndex + 1}`);
      tabButton.dataset.tabTarget = `topic-${moduleIndex + 1}`;
      tabButton.textContent = `Topic ${moduleIndex + 1}`;
      tabButton.dataset.search = [module.title, module.summary, ...module.topics, ...module.checks].join(" ").toLowerCase();
      moduleTabs.append(tabButton);
    }

    const fragment = moduleTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".module-card");
    const toggle = fragment.querySelector(".module-toggle");
    const body = fragment.querySelector(".module-body");
    const title = fragment.querySelector(".module-title");
    const summary = fragment.querySelector(".module-summary");
    const order = fragment.querySelector(".module-order");
    const progressLabel = fragment.querySelector(".module-progress");
    const moduleFocus = fragment.querySelector(".module-focus");
    const moduleHours = fragment.querySelector(".module-hours");
    const moduleClo = fragment.querySelector(".module-clo");
    const objectiveList = fragment.querySelector(".objective-list");
    const topicList = fragment.querySelector(".topic-list");
    const teachingList = fragment.querySelector(".teaching-list");
    const assessmentList = fragment.querySelector(".assessment-list");
    const readingList = fragment.querySelector(".reading-list");
    const videoFrame = fragment.querySelector(".video-lecture-frame");
    const videoNote = fragment.querySelector(".video-lecture-note");
    const videoLink = fragment.querySelector(".video-lecture-link");
    const question = fragment.querySelector(".quiz-question");
    const options = fragment.querySelector(".quiz-options");
    const feedbackSlot = fragment.querySelector(".quiz-feedback");

    title.textContent = module.title;
    summary.textContent = module.summary;
    moduleFocus.textContent = module.title;
    moduleHours.textContent = "2 hours / week";
    order.textContent = `M${String(moduleIndex + 1).padStart(2, "0")}`;
    progressLabel.textContent = "2-hour lecture";
    question.textContent = module.quiz.question;

    getLectureCLOs(moduleIndex).forEach((clo) => {
      const item = document.createElement("li");
      item.textContent = clo;
      moduleClo.append(item);
    });

    module.checks.forEach((objective) => {
      const item = document.createElement("li");
      item.textContent = objective;
      objectiveList.append(item);
    });

    module.topics.forEach((topic) => {
      const item = document.createElement("li");
      item.textContent = topic;
      topicList.append(item);
    });

    getTeachingActivities(module).forEach((activity) => {
      const item = document.createElement("li");
      item.textContent = activity;
      teachingList.append(item);
    });

    getAssessmentItems(module).forEach((itemText) => {
      const item = document.createElement("li");
      item.textContent = itemText;
      assessmentList.append(item);
    });

    getReadingMaterials(moduleIndex).forEach((reading) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = reading.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = reading.title;
      item.append(link);
      readingList.append(item);
    });

    const videoLecture = getVideoLecture(moduleIndex);
    if (videoLecture) {
      videoFrame.src = videoLecture.url;
      videoFrame.title = `${module.title} video lecture`;
      videoLink.href = videoLecture.url;
      videoLink.textContent = videoLecture.title;
      videoNote.textContent = "If the embedded player does not load because of external site restrictions, use the direct link below.";
    }

    const quiz = createQuiz(module);
    options.replaceWith(quiz.wrapper);
    feedbackSlot.replaceWith(quiz.feedback);

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      body.hidden = expanded;
    });

    card.dataset.search = [
      module.title,
      module.summary,
      ...module.topics,
      ...module.checks
    ].join(" ").toLowerCase();

    const panel = document.createElement("section");
    panel.className = "tab-panel";
    panel.id = `topic-${moduleIndex + 1}`;
    panel.setAttribute("role", "tabpanel");
    panel.dataset.search = card.dataset.search;
    panel.append(fragment);
    moduleList.append(panel);
  });

  renderStats();
  initTabs();
  syncHashTarget();
}

function filterModules() {
  const query = searchInput.value.trim().toLowerCase();

  document.querySelectorAll("#module-list .tab-panel").forEach((panel) => {
    const matches = !query || panel.dataset.search.includes(query);
    panel.hidden = !matches;
  });

  if (moduleTabs) {
    moduleTabs.querySelectorAll(".tab-button").forEach((button) => {
      const matches = !query || button.dataset.search.includes(query);
      button.hidden = !matches;
    });

    const activeButton = moduleTabs.querySelector(".tab-button.is-active:not([hidden])");
    if (!activeButton) {
      const firstVisible = moduleTabs.querySelector(".tab-button:not([hidden])");
      if (firstVisible) {
        activateTab(firstVisible.closest(".tab-container"), firstVisible.dataset.tabTarget, false);
      }
    }
  }
}

function syncHashTarget() {
  const hash = window.location.hash;
  if (!hash) {
    return;
  }

  const targetPanel = document.querySelector(hash);
  if (!targetPanel) {
    return;
  }

  const container = targetPanel.closest(".tab-container");
  if (container) {
    activateTab(container, hash.slice(1), false);
  }

  requestAnimationFrame(() => {
    targetPanel.scrollIntoView({ block: "start", behavior: "smooth" });
  });
}

function activateTab(container, targetId, updateHash = true) {
  if (!container) {
    return;
  }

  const buttons = container.querySelectorAll(".tab-button");
  const panels = container.querySelectorAll(".tab-panel");

  buttons.forEach((button) => {
    const isActive = button.dataset.tabTarget === targetId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  panels.forEach((panel) => {
    const isActive = panel.id === targetId;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });

  if (updateHash) {
    history.replaceState(null, "", `#${targetId}`);
  }
}

function initTabs() {
  document.querySelectorAll(".tab-container").forEach((container) => {
    const buttons = container.querySelectorAll(".tab-button");
    if (!buttons.length) {
      return;
    }

    buttons.forEach((button) => {
      if (button.dataset.tabBound === "true") {
        return;
      }

      button.dataset.tabBound = "true";
      button.addEventListener("click", () => {
        activateTab(container, button.dataset.tabTarget);
      });
    });

    const currentHash = window.location.hash.replace("#", "");
    const hashButton = currentHash
      ? container.querySelector(`.tab-button[data-tab-target="${currentHash}"]`)
      : null;
    const activeButton = hashButton || container.querySelector(".tab-button.is-active") || buttons[0];
    activateTab(container, activeButton.dataset.tabTarget, false);
  });
}

function renderFlashcard(index) {
  const card = flashcards[index];
  flashcard.classList.remove("is-flipped");
  flashcardQuestion.textContent = card.question;
  flashcardAnswer.textContent = card.answer;
  flashcard.setAttribute("aria-pressed", "false");
}

function flipFlashcard() {
  const flipped = flashcard.classList.toggle("is-flipped");
  flashcard.setAttribute("aria-pressed", String(flipped));
}

if (searchInput) {
  searchInput.addEventListener("input", filterModules);
}

window.addEventListener("hashchange", syncHashTarget);

if (flipCardButton) {
  flipCardButton.addEventListener("click", flipFlashcard);
}

if (nextCardButton) {
  nextCardButton.addEventListener("click", () => {
    currentFlashcard = (currentFlashcard + 1) % flashcards.length;
    renderFlashcard(currentFlashcard);
  });
}

if (flashcard) {
  flashcard.addEventListener("click", flipFlashcard);
  flashcard.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      flipFlashcard();
    }
  });
}

if (moduleList && moduleTemplate) {
  renderModules();
}

if (!moduleList) {
  initTabs();
  syncHashTarget();
}

if (flashcard) {
  renderFlashcard(currentFlashcard);
}
