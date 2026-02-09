import './AcceleratorsSection.css'
import { useState, useEffect, useRef, useId } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import salesIcon from '../assets/sales-what.png'
import docIcon from '../assets/doc-what.png'
import complianceIcon from '../assets/compliance-what.png'
import salesLine from '../assets/accelerator-sales-line.svg'
import docLine from '../assets/accelerator-doc-line.svg'
import complianceLine from '../assets/accelerator-compliance-line.svg'

import { TextGradientScroll } from './ui/text-gradient-scroll';
import { GlowingEffect } from './GlowingEffect';

const darkCards = [
  {
    title: 'Sales Enablement',
    body: 'Instant answers from product docs, policies, and FAQs, helping sales teams close faster.',
    icon: salesIcon,
    underline: salesLine,
  },
  {
    title: 'Document Intelligence',
    body: 'Keep legal and policy documents aligned as regulations change, with automated updates at scale.',
    icon: docIcon,
    underline: docLine,
  },
  {
    title: 'Compliance Checks',
    body: 'AI powered document review for regulatory checks. Audit-ready decisions in seconds.',
    icon: complianceIcon,
    underline: complianceLine,
  },
]

import caseStudyLeftTop from '../assets/homepage-case-study/case-study-left-top.jpg'
import caseStudyLeftBottom from '../assets/homepage-case-study/case-study-left-bottom.jpg'
import caseStudyRight from '../assets/homepage-case-study/case-study-right.jpeg'

const lightCards = [
  {
    id: 3,
    image: caseStudyRight,
    label: 'Sales Copilot',
    title: (<>Intelligent<br />Sales Copilot</>),
    company: 'PWM Japan Securities',
    content: 'Enabled advisors to deliver instant, citation-backed answers from complex policy documents, accelerating sales cycles significantly.',
    sections: [
      {
        type: 'overview',
        title: 'Client Overview',
        content: (
          <>
            <span className="text-white font-medium">Industry:</span> Financial Services (Private Wealth Management)<br />
            <span className="text-white font-medium">Region:</span> Japan<br />
            <span className="text-white font-medium">Function:</span> Sales Enablement & IFA Support<br />
            <span className="text-white font-medium">Timeline:</span> 10 weeks (5 agile sprints)<br /><br />
            PWM Japan Securities, a leading Japanese Private Wealth Management institution, supports a large network of Investment Fund Advisors (IFAs). As advisory products, compliance rules, and operational tools expanded, the sales division faced increasing pressure to respond accurately and quickly to IFA queries, without compromising regulatory correctness.
          </>
        )
      },
      {
        type: 'challenges',
        title: 'Business Challenges',
        subsections: [
          {
            heading: 'Manual Knowledge Bottleneck',
            content: 'Sales representatives acted as the single point of contact for IFA queries. Each request required manual lookup across multiple Japanese PDF manuals covering IFA-Tools, Account View, Order Management, and operational workflows. Responses often took hours, or longer during peak load.'
          },
          {
            heading: 'Delayed Decision-Making',
            content: 'Time spent searching documentation reduced time available for strategic sales engagement and advisor support. Slow turnaround impacted IFA satisfaction and internal productivity.'
          },
          {
            heading: 'Risk of Inconsistency',
            content: 'Manual interpretation of complex documentation introduced the risk of inconsistent or inaccurate responses, especially for compliance-sensitive questions.'
          },
          {
            heading: 'Fragmented Knowledge Base',
            content: 'Critical information was scattered across 12+ PDFs (ranging up to 12 MB each), written in Japanese, with no unified search or conversational interface.'
          },
          {
            heading: 'Language & Context Complexity',
            content: 'Accurate responses required not only Japanese fluency, but contextual understanding of PWM processes, IFA workflows, and regulatory alignment.'
          }
        ]
      },
      {
        type: 'solution',
        title: 'The Solution',
        subsections: [
          {
            heading: 'AI Powered Sales Copilot',
            content: 'Team Chartered Vectorial built an intelligent, chat-based assistant that gives sales teams instant, accurate answers to IFA operational and compliance questions, directly from approved documents.'
          },
          {
            heading: 'Hybrid Retrieval Intelligence',
            content: 'Combines keyword, semantic, and vector search to surface the most relevant information, even for complex or ambiguous queries.'
          },
          {
            heading: 'Explainable, Citation-Backed Answers',
            content: 'Every response includes source references, ensuring transparency, trust, and compliance alignment.'
          },
          {
            heading: 'Bilingual & Sales-Ready',
            content: 'Japanese-first with English support, optimized for real sales workflows and validated for linguistic accuracy.'
          },
          {
            heading: 'Enterprise-Grade Controls',
            content: 'Role-based access, chat history, feedback loops, and admin management built for secure enterprise use.'
          }
        ]
      },
      {
        type: 'outcomes',
        title: 'Projected Outcomes and Platform Capabilities',
        content: 'The IFA Sales Co-Pilot is designed to transform how sales teams respond to advisor queries. Where responses previously required hours of manual research across fragmented PDF documentation, the platform enables instant, citation-backed answers in seconds, representing a potential 95%+ reduction in query response time.\n\nBy eliminating manual document lookup, the solution is expected to significantly improve sales productivity, allowing representatives to redirect time from research toward strategic IFA engagement and relationship building. The AI powered retrieval system consolidates 12+ Japanese PDF manuals into a unified conversational interface, creating a single source of truth for operational and compliance knowledge.\n\nEarly testing demonstrates the platform\'s ability to deliver consistent, document-grounded responses with source citations, reducing the risk of inconsistent or inaccurate guidance that can arise from manual interpretation. These capabilities position the sales team to support IFAs with greater speed, accuracy, and confidence as advisory complexity continues to grow.'
      },
      {
        type: 'stack',
        title: 'Technology Stack',
        table: {
          headers: ['Layer', 'Technology'],
          rows: [
            { layer: 'Frontend', technology: 'Angular' },
            { layer: 'Backend', technology: 'Python FastAPI' },
            { layer: 'AI', technology: 'Azure OpenAI (GPT-4o)' },
            { layer: 'Search', technology: 'Azure AI Search' },
            { layer: 'Data', technology: 'Cosmos DB' },
            { layer: 'Storage', technology: 'Blob Storage' },
            { layer: 'Identity', technology: 'Entra ID' }
          ]
        }
      }
    ]
  },
  {
    id: 2,
    image: caseStudyLeftTop,
    label: 'Compliance',
    title: (<>Intelligent<br />Compliance</>),
    company: 'PWM Japan Securities',
    content: 'Reduced regulatory compliance reviews from days to minutes using production grade AI agents that understand complex financial regulations.',
    sections: [
      {
        type: 'overview',
        title: 'Client Overview',
        content: (
          <>
            <span className="text-white font-medium">Industry:</span> Financial Services (Private Wealth Management)<br />
            <span className="text-white font-medium">Region:</span> Japan<br />
            <span className="text-white font-medium">Challenge:</span> Regulatory Compliance Automation<br />
            <span className="text-white font-medium">Timeline:</span> &lt; 12 weeks to ship (5 iterative sprints)<br /><br />
            PWM Japan Securities, a major Japanese financial services institution, required a modern approach to regulatory compliance for their Private Wealth Management division. With document volumes growing rapidly and stringent FSA (Financial Services Agency) requirements, the manual compliance process had become unsustainable.
          </>
        )
      },
      {
        type: 'challenges',
        title: 'Business Challenges',
        subsections: [
          {
            heading: 'Processing Bottleneck',
            content: 'Each compliance document required 10–15 minutes of manual review- reading, verification, and cross-checking against Japanese FSA regulations. At 600+ documents monthly, this consumed 100–150 person-hours of compliance officer time.'
          },
          {
            heading: 'Scalability Crisis',
            content: 'Document volume fluctuated from 450 to 600+ monthly, with projected growth toward 1,000 documents. The manual approach couldn\'t scale without proportional resource increase.'
          },
          {
            heading: 'Consistency & Audit Risk',
            content: 'Human reviewers produced variable results. Audit trails were incomplete, creating regulatory exposure with Japan\'s Financial Services Agency (FSA).'
          },
          {
            heading: 'Language Complexity',
            content: 'Documents in Japanese required native-level comprehension of financial terminology (NISA, 投資信託, 乗換え) alongside regulatory nuance.'
          }
        ]
      },
      {
        type: 'solution',
        title: 'The Solution',
        subtitle: 'From 600+ Monthly Documents to Real-Time Compliance Decisions\n\nHow did the Chartered Vectorial team shift compliance review from multi-hour assessment to ≤30-second processing?',
        subsections: [
          {
            heading: 'AI-First Architecture',
            content: 'Purpose-built compliance platform leveraging Azure OpenAI (GPT-4o) for document analysis, with Azure Blob Storage and Cosmos DB for enterprise-grade data management.'
          },
          {
            heading: 'Zero-Shot Compliance Engine',
            content: 'Achieved 90% accuracy without fine-tuning or custom model training—reducing deployment timeline from months to weeks while maintaining production grade reliability.'
          },
          {
            heading: 'Rule-Based Intelligence',
            content: (
              <>
                Four foundational compliance rules specifically designed for Japanese financial documents:
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><span className="text-white">Client-Centric Swap Justification</span> – Ensures investment swaps benefit the client, not just generate fees</li>
                  <li><span className="text-white">Risk Disclosure Verification</span> – Verifies logical, relevant risk explanations are provided</li>
                  <li><span className="text-white">Cost Transparency Validation</span> – Ensures all costs are disclosed for client understanding</li>
                  <li><span className="text-white">Client Understanding Documentation</span> – Confirms informed consent through client's own words</li>
                </ul>
              </>
            )
          },
          {
            heading: 'Bilingual by Design',
            content: 'Full Japanese/English interface with culturally appropriate date formatting, FSA-aligned terminology, and WCAG 2.1 AA accessibility compliance.'
          },
          {
            heading: 'Regulator-Ready Audit Trail',
            content: 'Immutable 7-year retention, digital signatures, and compliance trails meeting ISO 27001 and Japanese FSA requirements.'
          }
        ]
      },
      {
        type: 'outcomes',
        title: 'Projected Outcomes and Platform Capabilities',
        content: 'The IFA Sales Co-Pilot is designed to transform how sales teams respond to advisor queries. Where responses previously required hours of manual research across fragmented PDF documentation, the platform enables instant, citation-backed answers in seconds, representing a potential 95%+ reduction in query response time.\n\nBy eliminating manual document lookup, the solution is expected to significantly improve sales productivity, allowing representatives to redirect time from research toward strategic IFA engagement and relationship building. The AI-powered retrieval system consolidates 12+ Japanese PDF manuals into a unified conversational interface, creating a single source of truth for operational and compliance knowledge.\n\nEarly testing demonstrates the platform\'s ability to deliver consistent, document-grounded responses with source citations, reducing the risk of inconsistent or inaccurate guidance that can arise from manual interpretation. These capabilities position the sales team to support IFAs with greater speed, accuracy, and confidence as advisory complexity continues to grow.'
      },
      {
        type: 'stack',
        title: 'Technology Stack',
        table: {
          headers: ['Layer', 'Technology'],
          rows: [
            { layer: 'Frontend', technology: 'React 18 + TypeScript, Tailwind CSS, Shadcn/UI' },
            { layer: 'Backend', technology: 'Python FastAPI, Azure App Service' },
            { layer: 'AI/ML', technology: 'Azure OpenAI (GPT-4o), GPT-4o Vision for document extraction' },
            { layer: 'Database', technology: 'Azure Cosmos DB, Azure SQL Database' },
            { layer: 'Storage', technology: 'Azure Blob Storage' },
            { layer: 'Identity', technology: 'Azure AD B2C, OAuth 2.0, RBAC' }
          ]
        }
      }
    ]
  },
  {
    id: 1,
    image: caseStudyLeftBottom,
    label: 'PatchBot',
    title: 'PatchBot: Intelligent Document Creation',
    company: 'Chartered Investment Germany',
    content: 'Automated legal document updates with semantic accuracy and full traceability, reducing manual review time by 90%.',
    sections: [
      {
        type: 'overview',
        title: 'Client Overview',
        content: (
          <>
            <span className="text-white font-medium">Industry:</span> Financial Services (Investment Products)<br />
            <span className="text-white font-medium">Headquarters:</span> Dusseldorf, Germany, with offices globally<br />
            <span className="text-white font-medium">Challenge:</span> Legal Document Update Automation<br />
            <span className="text-white font-medium">Engagement Type:</span> Solution Design & Delivery (PatchBot)<br /><br />
            As a manufacturer of investment products, Chartered Investment is required to create a subset of investment documentation for each newly issued product. That requires a dedicated strategy on how to deal with the creation of such documents thereby taking into consideration not only legal requirements, but also regulatory.
          </>
        )
      },
      {
        type: 'challenges',
        title: 'Business Challenges',
        subtitle: 'While Chartered Investments already uses template-based document automation extensively, the bespoke nature of their investment products demands greater agility. An analysis of client-specific customization- and regulatory requirements, highlighted four key opportunities that could successfully be addressed by applying GenAI.',
        subsections: [
          {
            heading: 'Manual Review Bottleneck',
            content: 'Legal teams depend on side-by-side document comparison to align target documents with reference standards. Each update cycle required significant manual effort, slowing turnaround and increasing operational strain.'
          },
          {
            heading: 'Semantic Complexity',
            content: 'Structured finance and legal documents contain interdependent clauses and logical dependencies. Traditional diff tools highlight textual changes but fail to capture semantic relationships, resulting in manual interpretative work to align clauses.'
          },
          {
            heading: 'Version Drift Risk',
            content: 'Manual comparison work increases exposure to missed clauses, inconsistent updates across document versions, and silent deviation from reference standards.'
          },
          {
            heading: 'Limited Process Visibility',
            content: 'Without automation, maintaining consistency and confidence across growing document volumes and complexity, becomes increasingly difficult.'
          }
        ]
      },
      {
        type: 'solution',
        title: 'The Solution',
        subtitle: 'AI-based Document Generation for Chartered Investment, Germany\n\nHow PatchBot reduces document update cycles from manual comparison to AI-assisted patch generation with >90% accuracy, while maintaining compliance and version integrity across financial instruments?',
        subsections: [
          {
            heading: 'AI-Driven Document Patching',
            content: 'Chartered Vectorial Team developed PatchBot, an AI-enabled document update engine that compares a target document against a reference standard using a Neo4j knowledge graph and OpenAI-powered semantic retrieval. The system automatically identifies clause gaps, mismatches, and missing dependencies, then generates patch recommendations for user review and approval.'
          },
          {
            heading: 'Graph-Powered Intelligence',
            content: 'Unlike traditional diff tools, PatchBot interprets semantic relationships between clauses and identifies cascading implications across documents.\nWith graph-powered RAG and GPT-4o, it delivers contextual, clause-level patches, without requiring custom model training.'
          },
          {
            heading: 'End-to-End Workflow',
            content: 'PatchBot manages the full lifecycle:\n\n• Document ingestion and parsing\n• Clause chunking and semantic mapping\n• Patch generation and review\n• Editable output with formatting preserved\n\nUsers review and apply changes through a web-based interface, enabling faster updates without disrupting existing workflows.'
          }
        ]
      },
      {
        type: 'impacts',
        title: 'Impacts/Results',
        table: {
          headers: ['Metric', 'Before PatchBot', 'After PatchBot', 'Impact'],
          rows: [
            { metric: 'Update Duration', before: 'Manual review', after: 'Automated application', impact: 'Significant acceleration' },
            { metric: 'Manual Review Effort', before: 'Full document scans', after: 'Targeted patch review', impact: '70–90% reduction' },
            { metric: 'Clause Retrieval Accuracy', before: 'Manual, variable', after: '~90%', impact: 'More consistent updates' },
            { metric: 'Document Consistency', before: 'Reviewer-dependent', after: 'Reference-aligned', impact: 'Reduced version drift' }
          ]
        }
      },
      {
        type: 'stack',
        title: 'Technology Stack',
        table: {
          headers: ['Layer', 'Image 1 Technology', 'Image 2 Technology'],
          rows: [
            { layer: 'Frontend', tech1: 'React 18 + TypeScript, Tailwind CSS, Shadcn/UI', tech2: 'React (Web-based review & editing)' },
            { layer: 'Backend', tech1: 'Python FastAPI, Azure App Service', tech2: 'Python FastAPI' },
            { layer: 'AI Layer', tech1: 'Azure OpenAI (GPT-4o), GPT-4o Vision for document extraction', tech2: 'Azure OpenAI (GPT-4o)' },
            { layer: 'Data/Search', tech1: 'Azure Cosmos DB, Azure SQL Database', tech2: 'Neo4j (Knowledge Graph), Semantic search + graph traversal' },
            { layer: 'Storage', tech1: 'Azure Blob Storage', tech2: 'Not Specified' },
            { layer: 'Identity', tech1: 'Azure AD B2C, OAuth 2.0, RBAC', tech2: 'Not Specified' },
            { layer: 'Doc Handling', tech1: 'Not Specified', tech2: 'python-docx, OnlyOffice' }
          ]
        }
      },
      {
        type: 'outcome',
        title: 'Outcome',
        content: 'PatchBot replaces high effort, manual document comparison with an AI-assisted, knowledge-driven patching workflow. The solution reduced update cycles from hours to minutes, improved consistency across documents, and provided a scalable foundation for managing complex legal documentation without the overhead of custom model training.'
      }
    ]
  },
]

function CaseCard({ image, label, title, content, sections, cardId, shouldAutoOpen }) {
  const [active, setActive] = useState(false)
  const cardRef = useRef(null)
  const id = useId()

  // Auto-open if this card matches the requested ID
  useEffect(() => {
    if (shouldAutoOpen) {
      setActive(true);
    }
  }, [shouldAutoOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActive(false)
      }
    }

    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setActive(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    }
  }, [active])

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md h-full w-full z-[9999]"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[10000]" style={{}}>
            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={cardRef}
              className="w-full max-w-[900px] max-h-[90vh] flex flex-col overflow-hidden rounded-2xl bg-[#020F14] relative border border-white/10 shadow-2xl m-4"
            >
              <motion.div layoutId={`image-${title}-${id}`} className="relative h-[400px] shrink-0 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020F14] via-transparent to-transparent opacity-80" />

                <motion.button
                  aria-label="Close card"
                  layoutId={`button-${title}-${id}`}
                  className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white border border-white/10 hover:bg-white hover:text-black transition-colors duration-300 z-10"
                  onClick={() => setActive(false)}
                >
                  <motion.div
                    animate={{ rotate: active ? 45 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </motion.div>
                </motion.button>
              </motion.div>

              <div className="flex-1 overflow-y-auto bg-[#020F14] relative">
                <div className="max-w-3xl mx-auto px-6 py-10 sm:px-10">
                  <motion.p
                    layoutId={`label-${label}-${id}`}
                    className="text-[#A6F63B] font-medium tracking-wide uppercase text-sm mb-4 font-['Stage_Grotesk']"
                  >
                    {label}
                  </motion.p>
                  <motion.h3
                    layoutId={`title-${title}-${id}`}
                    className="font-medium text-white text-3xl sm:text-5xl mb-8 leading-tight font-['Stage_Grotesk']"
                  >
                    {title}
                  </motion.h3>

                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="prose prose-invert prose-lg max-w-none text-gray-300/90 font-['Stage_Grotesk'] font-light leading-relaxed"
                  >
                    {sections && sections.length > 0 ? (
                      <>
                        {sections.map((section, idx) => (
                          <div key={idx}>
                            <h4 className="text-white text-2xl font-medium mt-10 mb-6 first:mt-0">{section.title}</h4>

                            {section.subtitle && (
                              <p className="text-gray-300 mb-6">{section.subtitle}</p>
                            )}

                            {section.content && (
                              <p className="mb-6 whitespace-pre-line">{section.content}</p>
                            )}

                            {section.subsections && section.subsections.map((sub, subIdx) => (
                              <div key={subIdx} className="mb-6">
                                <h5 className="text-gray-300 text-lg font-medium mb-2">{sub.heading}</h5>
                                <div className="text-gray-300 leading-relaxed">{sub.content}</div>
                              </div>
                            ))}

                            {section.table && (
                              <table className="w-full mt-6 mb-6 border-collapse">
                                <thead>
                                  <tr className="bg-gray-900/50 border-b border-white/10">
                                    {section.table.headers.map((header, hIdx) => (
                                      <th key={hIdx} className="text-[#A6F63B] text-left px-4 py-3 font-medium text-sm uppercase tracking-wide">
                                        {header}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {section.table.rows.map((row, rIdx) => (
                                    <tr key={rIdx} className="border-b border-white/5 hover:bg-gray-900/30">
                                      {section.table.headers.map((header, cIdx) => {
                                        const headerKey = header.toLowerCase().replace(/\s+/g, '');
                                        let cellValue = '';

                                        if (headerKey === 'layer') cellValue = row.layer;
                                        else if (headerKey === 'metric') cellValue = row.metric;
                                        else if (headerKey.includes('technology')) {
                                          if (headerKey.includes('1')) cellValue = row.tech1 || row.technology;
                                          else if (headerKey.includes('2')) cellValue = row.tech2;
                                          else cellValue = row.technology; // Plain 'Technology' header
                                        }
                                        else if (headerKey === 'beforepatchbot') cellValue = row.before;
                                        else if (headerKey === 'afterpatchbot') cellValue = row.after;
                                        else if (headerKey === 'impact') cellValue = row.impact;

                                        return (
                                          <td key={cIdx} className="px-4 py-3 text-sm text-gray-300">
                                            {cellValue}
                                          </td>
                                        );
                                      })}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            )}
                          </div>
                        ))}
                      </>
                    ) : (
                      <p className="text-xl leading-relaxed mb-8">{content}</p>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className="case-card"
        ref={cardRef}
      >
        <GlowingEffect
          blur={0}
          spread={15}
          proximity={60}
          movementDuration={1.2}
          borderWidth={1}
          inactiveZone={0.2}
          disabled={false}
          variant="white"
          className="glowing-effect-overlay"
        />
        <motion.div layoutId={`image-${title}-${id}`}>
          <div className="case-image-placeholder">
            <motion.img
              src={image}
              alt={title}
            />
          </div>
        </motion.div>
        <div className="case-card-content">
          <motion.div layoutId={`label-${label}-${id}`} className="case-meta">
            {label}
          </motion.div>
          <motion.div layoutId={`title-${title}-${id}`} className="case-title">
            {title}
          </motion.div>
          <motion.button
            aria-label="Open card"
            layoutId={`button-${title}-${id}`}
            className="case-icon"
          >
            <motion.div
              animate={{ rotate: active ? 45 : 0 }}
              transition={{ duration: 0.4 }}
            >
              +
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </>
  )
}

function AcceleratorsSection() {
  const location = useLocation();
  const [autoOpenId, setAutoOpenId] = useState(null);

  // Check if we should auto-open a specific case study
  useEffect(() => {
    if (location.state?.caseStudyId && location.hash === '#case-studies') {
      setAutoOpenId(location.state.caseStudyId);

      // Scroll to case studies section
      setTimeout(() => {
        const element = document.getElementById('case-studies');
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.state, location.hash]);

  return (
    <section className="accelerators-section">
      <div className="acc-section-glow acc-glow-left" />
      <div className="acc-section-glow acc-glow-right" />
      <div className="accelerators-text-section">
        <TextGradientScroll
          text="Consulting insight. Product delivery."
          type="letter"
          textOpacity="soft"
          className="accelerators-reveal-text justify-center"
        />
        <TextGradientScroll
          text="Production in 4 weeks."
          type="letter"
          textOpacity="soft"
          className="accelerators-reveal-text justify-center"
        />
        <TextGradientScroll
          text="AI generates. Humans steer."
          type="letter"
          textOpacity="soft"
          className="accelerators-reveal-text green-text justify-center"
        />
        <TextGradientScroll
          text="Products ship."
          type="letter"
          textOpacity="soft"
          className="accelerators-reveal-text green-text justify-center"
        />
      </div>

      <div className="case-hero" id="case-studies">
        <h2>Case Studies</h2>
        <p>
          What happens <span className="highlight">when <br className="case-br-tablet" /> AI actually ships.</span>
        </p>
      </div>

      <div className="case-grid">
        {lightCards.map((card) => (
          <CaseCard
            key={card.id}
            cardId={card.id}
            image={card.image}
            label={card.label}
            title={card.title}
            content={card.content}
            sections={card.sections}
            shouldAutoOpen={autoOpenId === card.id}
          />
        ))}
      </div>
      <div className="case-glow" />
    </section>
  )
}

export default AcceleratorsSection