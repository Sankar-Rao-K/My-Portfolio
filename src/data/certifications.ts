export type Certification = {
  id: string;
  title: string;
  org: string;
  date: string;
  note: string;
  /** Path under /public — e.g. "/certificates/qr-library-appreciation.jpg". Drop the file in
   *  public/certificates/ using this exact name and it'll show up automatically. */
  image?: string;
  /** Optional link to a verifiable credential (e.g. a Credly / issuer URL). */
  credentialUrl?: string;
};

// Sourced from LinkedIn + uploaded certificates — update dates/notes here and
// both the homepage "Journey" section and the /certifications page stay in sync.
export const CERTIFICATIONS: Certification[] = [
  {
    id: "mongodb-overview",
    title: "MongoDB Overview: Core Concepts and Architecture",
    org: "MongoDB, Inc.",
    date: "Jun 2026",
    note: "Proof of completion for the MongoDB Skill badge — core concepts and architecture.",
    image: "/certificates/mongodb-overview.jpg",
    credentialUrl: "https://www.credly.com/badges/76bcec7d-942e-45d9-be53-858fc4e9aeed",
  },
  {
    id: "qr-library-appreciation",
    title: "Certificate of Appreciation",
    org: "Government Polytechnic, Anakapalli",
    date: "2026",
    note: "For developing the real-time QR-based Library Management System now in active use.",
    // TODO: upload this certificate image to public/certificates/qr-library-appreciation.jpg
    image: "/certificates/qr-library-appreciation.jpg",
  },
  {
    id: "iot-addon-course",
    title: "Add-on Skill Course in IoT",
    org: "Government Polytechnic, Anakapalli",
    date: "2025",
    note: "IoT systems, sensors, and smart automation.",
    // TODO: upload this certificate image to public/certificates/iot-addon-course.jpg
    image: "/certificates/iot-addon-course.jpg",
  },
  {
    id: "customer-care-skill-certificate",
    title: "Certificate for Skill Competency — Customer Care Executive (Domestic Non-Voice)",
    org: "IT-ITeS Sector Skill Council, recognised by NCVET",
    date: "Aug 2024",
    note: "450 hrs / 15 credits at NSQF Level 3, completed at Government Polytechnic, Anakapalli — Grade B.",
    image: "/certificates/customer-care-skill-certificate.jpg",
  },
  {
    id: "customer-care-ojt",
    title: "On-the-Job Training Certificate — Customer Care Executive (Domestic Non-Voice)",
    org: "Zoom IT Technologies, Narsipatnam",
    date: "Jun 2024",
    note: "Completed on-the-job training facilitated with Government Polytechnic, Anakapalli (03–20 Jun 2024).",
    image: "/certificates/customer-care-ojt-certificate.jpg",
  },
];
