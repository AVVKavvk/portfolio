import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Tag = ({ text, color = "default" }) => {
  const colors = {
    purple: "bg-[#EEEDFE] text-[#3C3489]",
    teal: "bg-[#E1F5EE] text-[#085041]",
    blue: "bg-[#E6F1FB] text-[#0C447C]",
    amber: "bg-[#FAEEDA] text-[#633806]",
    coral: "bg-[#FAECE7] text-[#712B13]",
    green: "bg-[#EAF3DE] text-[#27500A]",
    default: "bg-white/10 text-secondary border border-white/10",
  };
  return (
    <span
      className={`text-[11px] font-medium px-2 py-[2px] rounded-full mr-1 mb-1 inline-block ${colors[color]}`}
    >
      {text}
    </span>
  );
};

const StatChip = ({ num, label }) => (
  <div className="bg-tertiary rounded-lg px-3 py-2">
    <p className="text-white text-[15px] font-medium">{num}</p>
    <p className="text-secondary text-[11px]">{label}</p>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="mt-3 space-y-1 border-t border-white/10 pt-2">
    {items.map((item, i) => (
      <li
        key={i}
        className="text-secondary text-[13px] leading-relaxed flex gap-2"
      >
        <span className="text-white/30 mt-[6px] shrink-0">›</span>
        <span dangerouslySetInnerHTML={{ __html: item }} />
      </li>
    ))}
  </ul>
);

const PhaseLabel = ({ children }) => (
  <p className="text-[10px] text-yellow-200 font-medium  uppercase tracking-widest mt-3 mb-1">
    {children}
  </p>
);

const SectionDivider = ({ label, title }) => (
  <div className="mt-16">
    <p className="text-[11px] text-secondary uppercase tracking-widest mb-1">
      {label}
    </p>
    <h2 className="text-white text-3xl font-bold mb-6">{title}</h2>
  </div>
);

const Replaice = () => (
  <motion.div variants={fadeIn("up", "spring", 0, 0.6)}>
    <div className="bg-tertiary rounded-2xl p-5 border-l-4 border-[#534AB7]">
      <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
        <div>
          <p className="text-[11px] text-purple-600  uppercase tracking-widest mb-1">
            Replaice.ai
          </p>
          <h3 className="text-white text-[15px] font-medium">
            Founding Engineer
          </h3>
        </div>
        <div className="text-right">
          <p className="text-secondary text-[12px]">Mar 2025 – Present</p>
          <span className="text-[11px] bg-[#EEEDFE] text-[#3C3489] px-2 py-[1px] rounded-full font-medium">
            Active
          </span>
        </div>
      </div>
      <p className="text-secondary text-[13px] leading-relaxed mb-3">
        First engineer at a small, fast-moving team — owned everything
        end-to-end: product, backend, frontend, DevOps, infra, and system design
        across multiple domains in one year.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {[
          { num: "50K+", label: "calls/day" },
          { num: "~300ms", label: "voice latency" },
          { num: "70K+", label: "messages/day" },
          { num: "95%+", label: "msg delivery" },
          { num: "60%", label: "RAG accuracy gain" },
        ].map((s) => (
          <StatChip key={s.label} {...s} />
        ))}
      </div>

      <PhaseLabel> WhatsApp real-time chat</PhaseLabel>
      <BulletList
        items={[
          "Integrated Meta WhatsApp Business API to build a <strong class='text-white'>centralized real-time chat UI</strong> — support staff and clients on a single dashboard.",
          "Multi-agent routing so multiple support agents could handle conversations concurrently.",
        ]}
      />
      <div className="flex flex-wrap mt-2">
        {[
          ["Meta WhatsApp API", "blue"],
          ["React", "purple"],
          ["Node.js", "teal"],
          ["Express", "teal"],
        ].map(([t, c]) => (
          <Tag key={t} text={t} color={c} />
        ))}
      </div>

      <PhaseLabel>AI voice agent platform (Healthcare)</PhaseLabel>
      <BulletList
        items={[
          "Built a multi-provider <strong class='text-white'>AI voice agent platform</strong> for healthcare — 50K+ calls/day at ~300ms latency; integrated ElevenLabs, Ultravox, OpenAI Realtime, and Gemini Realtime.",
          "Tackled a hard infra challenge: Indian telephony didn't support WebSocket. Did deep R&D on SIP and RTP protocols, studied open-source phone implementations, ran local experiments with Twilio — ultimately solved it when Exotel released a WebSocket applet.",
          "<strong class='text-white'>Centralized client dashboard</strong> — select voice model, LLM, provider, telephony; configure call analysis; auto-push results to Zoho CRM and Slack.",
          "Integrated <strong class='text-white'>Mem0</strong> for persistent conversation history; built agentic RAG with LangChain & LangGraph (multimodal: text, OCR) for large policy documents.",
          "Built and shipped a React Native / Expo mobile app for the platform (later handed off to another team).",
          "Set up full infra from scratch: <strong class='text-white'>AWS EKS, ECR, Route53</strong> with ELB, Helm, Kubernetes, Prometheus, Grafana, OpenSearch, and OpenBao for secrets.",
        ]}
      />
      <div className="flex flex-wrap mt-2">
        {[
          ["Golang (Echo)", "purple"],
          ["FastAPI", "purple"],
          ["EKS/K8s", "teal"],
          ["Helm", "teal"],
          ["OpenAI Realtime", "blue"],
          ["Gemini Realtime", "blue"],
          ["ElevenLabs", "amber"],
          ["Ultravox", "amber"],
          ["Twilio", "coral"],
          ["Exotel", "coral"],
          ["LangChain", "green"],
          ["LangGraph", "green"],
          ["Mem0", "green"],
          ["Kafka", "teal"],
          ["RabbitMQ", "teal"],
          ["Redis", "teal"],
        ].map(([t, c]) => (
          <Tag key={t} text={t} color={c} />
        ))}
      </div>

      <PhaseLabel>WhatsApp infra via Baileys</PhaseLabel>
      <BulletList
        items={[
          "Client reported Meta wasn't delivering 100% of messages. Researched alternatives and implemented <strong class='text-white'>Baileys (WhiskeySockets)</strong> — an open-source WhatsApp Web API library.",
          "Built full suite: campaign creator, real-time chat history, template management, bulk messaging, and sales analytics synced to CRM.",
          "RabbitMQ with DLX (max 3 retries) + Redis + Kubernetes: 95%+ delivery at 70K+ messages/day.",
        ]}
      />
      <div className="flex flex-wrap mt-2">
        {[
          ["Baileys", "blue"],
          ["Express", "teal"],
          ["RabbitMQ DLX", "teal"],
          ["Redis", "teal"],
          ["Kubernetes", "teal"],
        ].map(([t, c]) => (
          <Tag key={t} text={t} color={c} />
        ))}
      </div>

      <PhaseLabel>Hybrid Vector + Graph + Full-Text RAG</PhaseLabel>
      <BulletList
        items={[
          "Designed a <strong class='text-white'>hybrid RAG architecture</strong> combining ChromaDB (vector), Neo4j (graph), and full-text search — 60% accuracy gain over baseline.",
          "PDF content chunked category-wise; at query time, graph traversal fetches all related child nodes for richer context. Integrated across all company services.",
        ]}
      />
      <div className="flex flex-wrap mt-2">
        {[
          ["Neo4j", "purple"],
          ["ChromaDB", "purple"],
          ["LangChain", "green"],
          ["LangGraph", "green"],
          ["FastAPI", "blue"],
          ["Gemini", "amber"],
        ].map(([t, c]) => (
          <Tag key={t} text={t} color={c} />
        ))}
      </div>

      <PhaseLabel>Construction AI (Australia market)</PhaseLabel>
      <BulletList
        items={[
          "Building an <strong class='text-white'>AI feasibility engine</strong> that scores a location across 100+ parameters so builders can evaluate project viability before committing.",
          "Working with C#, AutoCAD, and Autodesk APS to automate Bill of Quantities (BOQ) generation — targeting 60–70% reduction in manual estimation time. In active development.",
        ]}
      />
      <div className="flex flex-wrap mt-2">
        {[
          ["C# / .NET", "blue"],
          ["AutoCAD", "blue"],
          ["Autodesk APS", "blue"],
        ].map(([t, c]) => (
          <Tag key={t} text={t} color={c} />
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-white/10">
        <a
          href="https://replaice.ai/"
          target="_blank"
          rel="noreferrer"
          className="text-[12px] text-blue-400 hover:underline"
        >
          replaice.ai ↗
        </a>
      </div>
    </div>
  </motion.div>
);

const EagleEye = () => (
  <motion.div variants={fadeIn("up", "spring", 0.15, 0.6)}>
    <div className="bg-tertiary rounded-2xl p-5">
      <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
        <div>
          <p className="text-[11px] text-purple-600 uppercase tracking-widest mb-1">
            Eagle Eye Networks
          </p>
          <h3 className="text-white text-[15px] font-medium">
            Software Developer Intern
          </h3>
        </div>
        <p className="text-secondary text-[12px]">Jul 2024 – Mar 2025</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {[
          { num: "14+", label: "microservices" },
          { num: "40%+", label: "test coverage boost" },
          { num: "60%", label: "less debug time" },
          { num: "100%", label: "release consistency" },
        ].map((s) => (
          <StatChip key={s.label} {...s} />
        ))}
      </div>

      <BulletList
        items={[
          "Contributed to 14+ microservices in Golang and Python (Django, DRF); full-stack feature dev with Docker, Kubernetes, Helm, and Concourse CI/CD.",
          "Boosted unit and integration test coverage by 40%+ per service — mastered Go mocking patterns (mockery) and Django test frameworks.",
          "Standardized structured JSON logging with unique request IDs across all microservices, indexed in OpenSearch — reduced troubleshooting time by 60%.",
          "Deployed Prometheus exporters on 5+ services; built Grafana dashboards for real-time performance monitoring.",
          "Automated semantic versioning via Concourse pipelines — ensured 100% release consistency.",
          "<strong class='text-white'>Applied all DevOps learnings from here to single-handedly set up Replaice.ai's entire infrastructure</strong> from scratch — EKS, Helm, monitoring, CI/CD, secrets management.",
        ]}
      />

      <div className="flex flex-wrap mt-3">
        {[
          ["Golang", "blue"],
          ["Python / Django", "blue"],
          ["Kubernetes", "teal"],
          ["Docker", "teal"],
          ["Helm", "teal"],
          ["Concourse CI/CD", "amber"],
          ["Prometheus", "purple"],
          ["Grafana", "purple"],
          ["OpenSearch", "coral"],
        ].map(([t, c]) => (
          <Tag key={t} text={t} color={c} />
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-white/10">
        <a
          href="https://www.een.com/"
          target="_blank"
          rel="noreferrer"
          className="text-[12px] text-blue-400 hover:underline"
        >
          een.com ↗
        </a>
      </div>
    </div>
  </motion.div>
);

const learnings = [
  {
    title: "Telephony & real-time protocols (SIP, RTP, WebSocket)",
    body: "Hit a wall at Replaice when Indian telephony didn't support WebSocket. Dove into SIP and RTP protocol internals, studied open-source phone implementations, and ran local experiments with Twilio. Eventually unblocked by Exotel's WebSocket applet — but the protocol knowledge shaped every infra decision since.",
    tags: ["SIP", "RTP", "WebSocket", "Twilio", "Exotel"],
  },
  {
    title: "RAG — from naive to hybrid agentic",
    body: "Started with basic RAG for large policy docs. Evolved to agentic RAG with tools, then to a hybrid Vector + Graph + Full-Text architecture. Key insight: category-aware chunking + graph traversal for child node retrieval is what drove the 60% accuracy gain. Added multimodal (text, OCR) support next.",
    tags: ["LangChain", "LangGraph", "ChromaDB", "Neo4j", "Mem0", "OCR"],
  },
  {
    title: "DevOps & infra — from intern to sole owner",
    body: "Learned Kubernetes, Helm, Docker, Concourse, Prometheus, Grafana at Eagle Eye in a structured environment. Then applied it all solo at Replaice — EKS clusters, ECR, Route53 + ELB, OpenSearch, OpenBao, full monitoring. The jump from 'I know how this works' to 'I own this if it breaks' is the real education.",
    tags: ["AWS EKS", "Helm", "Route53", "OpenBao", "OpenSearch", "Prometheus"],
  },
  {
    title: "Testing culture — unit, integration & mocking",
    body: "Eagle Eye had rigorous testing standards. Learned Go mocking with mockery and Django's test framework; raised coverage 40%+ per service. Brought this discipline to Replaice where no standards existed — had to define them from scratch.",
    tags: ["Golang mockery", "Django tests", "Integration tests"],
  },
  {
    title: "Message queues & reliability patterns",
    body: "Built prod systems on both Kafka and RabbitMQ. Learned in practice: Kafka for high-throughput event streaming, RabbitMQ with DLX for job queues where retry and dead-letter handling matter. At-most-3-retries DLX pattern kept WhatsApp delivery above 95%.",
    tags: ["Kafka", "RabbitMQ", "DLX / DLQ", "Redis"],
  },
  {
    title: "New domains: construction tech + C# / AutoCAD",
    body: "Stepping into Australia's construction market meant learning a new domain — BOQ, feasibility studies, location scoring — while simultaneously picking up C#, .NET, and the Autodesk APS/AutoCAD APIs. Learning a new language while understanding a new industry is the steepest curve yet.",
    tags: ["C# / .NET", "AutoCAD", "Autodesk APS", "Domain research"],
  },
];

const Learnings = () => (
  <motion.div variants={fadeIn("up", "spring", 0.1, 0.6)}>
    <div className="space-y-4">
      {learnings.map((l, i) => (
        <div key={i} className="bg-tertiary rounded-xl p-4">
          <p className="text-white text-[13px] font-medium mb-2">{l.title}</p>
          <p className="text-secondary text-[13px] leading-relaxed">{l.body}</p>
          <div className="flex flex-wrap gap-1 mt-3">
            {l.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] text-secondary bg-white/5 border border-white/10 rounded-full px-2 py-[1px]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const VipinNotes = () => (
  <motion.div variants={fadeIn("up", "spring", 0.1, 0.6)}>
    <div className="bg-tertiary rounded-2xl p-5">
      <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
        <div>
          <p className="text-[11px] text-secondary uppercase tracking-widest mb-1">
            Self-founded · IIIT Pune
          </p>
          <h3 className="text-white text-[15px] font-medium">
            Academic & career growth platform
          </h3>
        </div>
        <p className="text-secondary text-[12px]">2023 – Present</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {[
          { num: "1,450+", label: "students" },
          { num: "80+", label: "course notes" },
          { num: "40+", label: "lab manuals" },
          { num: "#1", label: "hub at IIIT Pune" },
        ].map((s) => (
          <StatChip key={s.label} {...s} />
        ))}
      </div>

      <BulletList
        items={[
          "Architected and launched an integrated academic platform that became the <strong class='text-white'>primary hub for IIIT Pune's student body</strong> within 1.6 years.",
          "Built 80+ course notes, 40+ lab manuals, and an automated resume builder with PDF generation.",
          "Full-stack: React.js, Node.js, MongoDB; Three.js for interactive 3D elements; JWT for secure authentication.",
          "Developed a companion React Native mobile app, published via GitHub Releases.",
          "Scaled organically through word-of-mouth — no marketing budget, just genuinely useful tooling.",
        ]}
      />

      <div className="flex flex-wrap mt-3">
        {[
          ["React.js", "blue"],
          ["Node.js", "teal"],
          ["MongoDB", "teal"],
          ["Three.js", "purple"],
          ["JWT", "amber"],
          ["React Native", "coral"],
        ].map(([t, c]) => (
          <Tag key={t} text={t} color={c} />
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-white/10">
        <a
          href="https://vipinnotes.onrender.com/"
          target="_blank"
          rel="noreferrer"
          className="text-[12px] text-blue-400 hover:underline"
        >
          vipinnotes.onrender.com ↗
        </a>
      </div>
    </div>
  </motion.div>
);

const Freelance = () => (
  <motion.div variants={fadeIn("up", "spring", 0.1, 0.6)}>
    <div className="bg-tertiary rounded-2xl p-5">
      <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
        <div>
          <p className="text-[11px] text-secondary uppercase tracking-widest mb-1">
            SKF Goa River Marathon
          </p>
          <h3 className="text-white text-[15px] font-medium">
            Freelance Software Developer
          </h3>
        </div>
        <p className="text-secondary text-[12px]">Sep 2025 – Present</p>
      </div>

      <BulletList
        items={[
          "Developed and launched the official website for <strong class='text-white'>SKF Goa River Marathon 2025</strong> — responsive, high-performance, and optimized for peak traffic during registrations and promotions.",
          "Continuing development for the 2026 edition — updated branding, new features, and event content.",
          "Built scalable frontend architecture optimized for mobile responsiveness and smooth navigation.",
          "Worked directly with the client: requirements gathering, iterative feedback, and production delivery.",
        ]}
      />

      <div className="mt-4 pt-3 border-t border-white/10">
        <a
          href="https://www.skfgoarivermarathon.com/#/"
          target="_blank"
          rel="noreferrer"
          className="text-[12px] text-blue-400 hover:underline"
        >
          skfgoarivermarathon.com ↗
        </a>
      </div>
    </div>
  </motion.div>
);

const Work = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="text-secondary text-[11px] uppercase tracking-widest">
        Career
      </p>
      <h2 className="text-white text-4xl font-bold mt-1">Work experience</h2>
    </motion.div>

    <div className="mt-10 space-y-6">
      <Replaice />
      <EagleEye />
    </div>

    <SectionDivider label="Learnings" title="What I learned along the way" />
    <Learnings />

    <SectionDivider label="Founder" title="Vipin Notes" />
    <VipinNotes />

    <SectionDivider label="Freelance" title="Clients" />
    <Freelance />
  </>
);

export default SectionWrapper(Work, "work");
