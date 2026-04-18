import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { textVariant, fadeIn } from "../utils/motion";

const skillCategories = [
  {
    label: "Frontend",
    color: "#534AB7",
    style: "purple",
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Three.js",
      "React Native",
      "Expo",
      "Redux",
      "HTML / CSS",
    ],
  },
  {
    label: "Backend",
    color: "#0F6E56",
    style: "teal",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Golang (Echo)",
      "FastAPI",
      "Django / DRF",
      "C# / .NET / ASP",
      "Rust (Axum)",
      "GraphQL",
      "gRPC",
      "REST",
    ],
  },
  {
    label: "AI / ML & LLM",
    color: "#185FA5",
    style: "blue",
    skills: [
      "LangChain",
      "LangGraph",
      "OpenAI Realtime",
      "Gemini Realtime",
      "ElevenLabs",
      "Ultravox",
      "Mem0",
      "RAG (Vector + Graph + Full-Text)",
      "Multimodal (OCR)",
    ],
  },
  {
    label: "Databases & storage",
    color: "#993C1D",
    style: "coral",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Neo4j",
      "ChromaDB",
      "Redis",
      "ClickHouse",
      "OpenSearch",
      "Redshift",
    ],
  },
  {
    label: "Cloud & DevOps",
    color: "#3B6D11",
    style: "green",
    skills: [
      "AWS (EKS, EC2, S3, ECR, Route53)",
      "GCP (GKE, Cloud Run, Compute)",
      "Azure (VMs)",
      "Docker",
      "Kubernetes",
      "Helm",
      "Concourse CI/CD",
      "GitHub Actions",
      "OpenBao",
      "Prometheus",
      "Grafana",
      "OpenSearch",
    ],
  },
  {
    label: "Messaging & infra",
    color: "#BA7517",
    style: "amber",
    skills: [
      "Kafka",
      "RabbitMQ (DLX)",
      "Twilio",
      "Exotel",
      "Vobiz",
      "Baileys (WhatsApp)",
      "Meta WhatsApp API",
      "WebSocket",
      "SIP / RTP",
    ],
  },
  {
    label: "CAD & construction tech",
    color: "#5F5E5A",
    style: "gray",
    skills: [
      "AutoCAD",
      "Autodesk APS",
      "BOQ automation",
      "Location intelligence",
    ],
  },
  {
    label: "Workflow & practices",
    color: "#534AB7",
    style: "purple",
    skills: [
      "Git",
      "JWT",
      "Semantic versioning",
      "Unit & integration testing",
      "Golang mockery",
      "System design",
      "Microservices",
      "Agile",
    ],
  },
];

const pillColors = {
  purple: "bg-[#EEEDFE] text-[#3C3489]",
  teal: "bg-[#E1F5EE] text-[#085041]",
  blue: "bg-[#E6F1FB] text-[#0C447C]",
  amber: "bg-[#FAEEDA] text-[#633806]",
  coral: "bg-[#FAECE7] text-[#712B13]",
  green: "bg-[#EAF3DE] text-[#27500A]",
  gray: "bg-[#F1EFE8] text-[#444441]",
};

const SkillCategory = ({ label, color, style, skills, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.08, 0.5)}
    className="mb-6"
  >
    <div className="flex items-center gap-2 mb-3">
      <div
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ background: color }}
      />
      <p className="text-[11px] font-medium uppercase tracking-widest text-secondary">
        {label}
      </p>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className={`text-[12px] font-medium px-3 py-1 rounded-full ${pillColors[style]}`}
        >
          {skill}
        </span>
      ))}
    </div>
    <div className="mt-5 border-t border-white/10" />
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I work with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
      </motion.div>

      <div className="mt-12">
        {skillCategories.map((cat, i) => (
          <SkillCategory key={cat.label} {...cat} index={i} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
