import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const stats = [
  { value: "50K+", label: "calls/day on voice platform" },
  { value: "70K+", label: "messages/day on WhatsApp infra" },
  { value: "~300ms", label: "voice agent latency" },
  { value: "1,450+", label: "students on VipinNotes" },
];

const tags = [
  "React",
  "TypeScript",
  "React Native",
  "Node.js",
  "Golang",
  "Python",
  "Rust",
  "C#",
  "MongoDB",
  "PostgreSQL",
  "Neo4j",
  "Redis",
  "ChromaDB",
  "AWS",
  "GCP",
  "Kubernetes",
  "Docker",
  "Kafka",
  "RabbitMQ",
  "LangChain",
  "LangGraph",
  "OpenAI",
  "Twilio",
  "GraphQL",
];

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
      >
        I'm a Full-Stack & Systems Engineer with a strong bias for building at
        scale — from AI voice platforms handling{" "}
        <span className="text-white font-medium">50,000+ calls/day</span> to
        WhatsApp infrastructure delivering{" "}
        <span className="text-white font-medium">70,000+ messages/day</span>. As
        a Founding Engineer at{" "}
        <span className="text-white font-medium">Replaice.ai</span>, I architect
        systems end-to-end — voice agents, hybrid vector-graph RAG pipelines,
        and real-time telephony. I also founded{" "}
        <span className="text-white font-medium">VipinNotes</span>, an academic
        platform serving 1,450+ students. I care deeply about clean
        architecture, performance, and shipping things that actually work. Let's
        build something impactful together.
      </motion.p>

      {/* Stats */}
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {stats.map((s) => (
          <div key={s.value} className="bg-tertiary rounded-xl p-4">
            <p className="text-white text-2xl font-medium">{s.value}</p>
            <p className="text-secondary text-[13px] mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Tech tags */}
      <motion.div variants={fadeIn("", "", 0.3, 1)} className="mt-8">
        <p className="text-secondary text-[12px] uppercase tracking-widest mb-3">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-secondary text-[13px] px-3 py-1 rounded-full border border-white/10 bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
