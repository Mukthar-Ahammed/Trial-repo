import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './CaseStudiesSection.css';
import caseStudyLeftTop from '../assets/homepage-case-study/case-study-left-top.jpg';
import caseStudyLeftBottom from '../assets/homepage-case-study/case-study-left-bottom.jpg';
import caseStudyRight from '../assets/homepage-case-study/case-study-right.jpeg';

const leftColumnStudies = [
    {
        id: 3,
        image: caseStudyRight,
        description: 'Intelligent Sales Copilot',
        company: 'PWM Japan Securities',
        aspectRatio: '16/9',
        content: 'Enabled advisors to deliver instant, citation-backed answers from complex policy documents, accelerating sales cycles significantly.',
        sections: [
            {
                type: 'overview',
                title: 'Client Overview',
                content: 'Industry: Financial Services (Private Wealth Management)\nRegion: Japan\nFunction: Sales Enablement & IFA Support\nTimeline: 10 weeks (5 agile sprints)\n\nPWM Japan Securities, a leading Japanese Private Wealth Management institution, supports a large network of Investment Fund Advisors (IFAs). As advisory products, compliance rules, and operational tools expanded, the sales division faced increasing pressure to respond accurately and quickly to IFA queries, without compromising regulatory correctness.'
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
                content: 'The IFA Sales Co-Pilot is designed to transform how sales teams respond to advisor queries. Where responses previously required hours of manual research across fragmented PDF documentation, the platform enables instant, citation-backed answers in seconds, representing a potential 95%+ reduction in query response time.\n\nBy eliminating manual document lookup, the solution is expected to significantly improve sales productivity, allowing representatives to redirect time from research toward strategic IFA engagement and relationship building. The AI-powered retrieval system consolidates 12+ Japanese PDF manuals into a unified conversational interface, creating a single source of truth for operational and compliance knowledge.\n\nEarly testing demonstrates the platform\'s ability to deliver consistent, document-grounded responses with source citations, reducing the risk of inconsistent or inaccurate guidance that can arise from manual interpretation. These capabilities position the sales team to support IFAs with greater speed, accuracy, and confidence as advisory complexity continues to grow.'
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
        id: 1,
        image: caseStudyLeftBottom,
        description: 'PatchBot: Intelligent Document Creation',
        company: 'Chartered Investment Germany',
        aspectRatio: '4/5',
        content: 'Automated legal document updates with semantic accuracy and full traceability, reducing manual review time by 90%.',
        sections: [
            {
                type: 'overview',
                title: 'Client Overview',
                content: 'Industry: Financial Services (Investment Products)\nHeadquarters: Dusseldorf, Germany, with offices globally\nChallenge: Legal Document Update Automation\nEngagement Type: Solution Design & Delivery (PatchBot)\n\nAs a manufacturer of investment products, Chartered Investment is required to create a subset of investment documentation for each newly issued product. That requires a dedicated strategy on how to deal with the creation of such documents thereby taking into consideration not only legal requirements, but also regulatory.'
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
                        content: 'PatchBot manages the full lifecycle:<br />• Document ingestion and parsing<br />• Clause chunking and semantic mapping<br />• Patch generation and review<br />• Editable output with formatting preserved<br /><br />Users review and apply changes through a web-based interface, enabling faster updates without disrupting existing workflows.'
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
                type: 'outcomes',
                title: 'The Outcome',
                content: 'PatchBot replaces high effort, manual document comparison with an AI-assisted, knowledge-driven patching workflow. The solution reduced update cycles from hours to minutes, improved consistency across documents, and provided a scalable foundation for managing complex legal documentation without the overhead of custom model training.'
            }
        ]
    },
];

const rightColumnStudies = [
    {
        id: 2,
        image: caseStudyLeftTop,
        description: 'Intelligent Compliance',
        company: 'PWM Japan Securities',
        aspectRatio: '4/5',
        content: 'Reduced regulatory compliance reviews from days to minutes using production grade AI agents that understand complex financial regulations.',
        sections: [
            {
                type: 'overview',
                title: 'Client Overview',
                content: 'Industry: Financial Services (Private Wealth Management)\nRegion: Japan\nChallenge: Regulatory Compliance Automation\nTimeline: 12 weeks (5 iterative sprints)\n\nPWM Japan Securities, a major Japanese financial services institution, required a modern approach to regulatory compliance for their Private Wealth Management division. With document volumes growing rapidly and stringent FSA (Financial Services Agency) requirements, the manual compliance process had become unsustainable.'
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
                        content: 'Four foundational compliance rules specifically designed for Japanese financial documents:\n\n• Client-Centric Swap Justification - Ensures investment swaps benefit the client, not just generate fees\n• Risk Disclosure Verification - Verifies logical, relevant risk explanations are provided\n• Cost Transparency Validation - Ensures all costs are disclosed for client understanding\n• Client Understanding Documentation - Confirms informed consent through client\'s own words'
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
];

// Editorial Dissolve Transition Physics
const openSpring = { type: "spring", stiffness: 200, damping: 30 };
const closeSpring = { type: "spring", stiffness: 300, damping: 35 };

const editorialTransition = {
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1]
};

function ExpandableCaseStudyCard({ id, image, description, company, aspectRatio, isStaggered, content, sections, selectedId, setSelectedId }) {
    const isSelected = selectedId === id;
    const isAnySelected = selectedId !== null;
    const isOtherSelected = isAnySelected && !isSelected;
    const cardRef = useRef(null);
    const navigate = useNavigate();

    // Lock body scroll when active
    useEffect(() => {
        if (isSelected) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.body.style.overflow = 'hidden';
        } else {
            // Only unlock if NOTHING is selected (or when unmounting implies none)
            // But here we are one component. The parent manages state.
            // When we deselect, this runs for the component that WAS selected.
            // If we have multiple cards, we should be careful. 
            // Better to handle body scroll in the parent or ensure this cleans up correctly.
            // For now, this simple logic assumes one modal at a time.
        }

        // Cleanup function for when component unmounts or state changes
        return () => {
            // We can't aggressively reset here because other cards might be mounting/updating.
            // Actually, only the selected card triggers the effect. 
            if (isSelected) { // if I WAS selected and now am not (or unmounting)
                document.body.style.paddingRight = '';
                document.body.style.overflow = '';
            }
        };
    }, [isSelected]);



    return (
        <>
            {/* The Card in the Grid */}
            <motion.div
                ref={cardRef}
                className={`case-study-card ${isStaggered ? 'case-study-staggered' : ''} ${isOtherSelected ? 'blurred' : ''}`}
                onClick={() => {
                    if (!isAnySelected) {
                        navigate('/whatwedo#case-studies', { state: { caseStudyId: id } });
                    }
                }}
                animate={isOtherSelected ? { opacity: 0, filter: "blur(10px)" } : { opacity: 1, filter: "blur(0px)" }}
                transition={editorialTransition}
            >
                <div className="case-study-image-wrapper">
                    {/* Image anchor - uses layoutId for position, but we try to keep scale 1:1 or rely on object-fit */}
                    <motion.div
                        className={`case-study-image aspect-${aspectRatio.replace('/', '-')}`}
                        layoutId={`image-container-${id}`}
                    >
                        <div className="image-overlay"></div>
                        <motion.img
                            src={image}
                            alt={description}
                        />
                    </motion.div>
                </div>
                <div className="case-study-text">
                    <motion.p layoutId={`title-${id}`} className="case-study-description">{description}</motion.p>
                    <motion.p layoutId={`company-${id}`} className="case-study-company">{company}</motion.p>
                </div>
            </motion.div>

            {/* Expanded Modal */}
            <AnimatePresence>
                {isSelected && (
                    <motion.div
                        className="case-expanded-wrapper" // Fixed overlay container
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="case-overlay" onClick={() => setSelectedId(null)} />

                        <motion.div
                            className="case-expanded-card"
                            layoutId={`image-container-${id}`} // Matches grid card to expand from it
                            style={{ borderRadius: "16px" }}
                            transition={editorialTransition}
                        >
                            {/* Expanded Image Area */}
                            <motion.div
                                className="case-expanded-image-container"
                            // We don't want the image to zoom, so we just fade it in/out or keep it stable
                            // Since the container is expanding with layoutId, the image inside (width 100%) might grow.
                            // To "lock" it, we could use layout="position" on the image, but simpler is to accept the transform 
                            // and ensure the aspect ratio is consistent.
                            >
                                <img src={image} alt={description} className="case-expanded-image" />
                                <div className="case-expanded-gradient" />

                                <motion.button
                                    className="case-close-button"
                                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.2 } }}
                                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 6L6 18" />
                                        <path d="M6 6l12 12" />
                                    </svg>
                                </motion.button>
                            </motion.div>

                            {/* Staggered Content Implementation */}
                            <div className="case-expanded-content">
                                <motion.p
                                    className="case-expanded-label"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1, ease: editorialTransition.ease }}
                                >
                                    {company}
                                </motion.p>
                                <motion.h3
                                    layoutId={`title-${id}`} // Shared layout ID for smooth title transition
                                    className="case-expanded-title"
                                    transition={editorialTransition}
                                >
                                    {description}
                                </motion.h3>

                                <motion.div className="case-expanded-body">
                                    {sections && sections.length > 0 ? (
                                        // Render detailed sections
                                        sections.map((section, sectionIndex) => (
                                            <motion.div
                                                key={section.type}
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: 0.2 + (sectionIndex * 0.1), ease: editorialTransition.ease }}
                                            >
                                                <h4>{section.title}</h4>

                                                {section.subtitle && (
                                                    <p className="case-section-subtitle">{section.subtitle}</p>
                                                )}

                                                {section.content && (
                                                    <p style={{ whiteSpace: 'pre-line' }}>{section.content}</p>
                                                )}

                                                {section.subsections && section.subsections.map((subsection, subIndex) => (
                                                    <div key={subIndex} className="case-subsection">
                                                        <h5>{subsection.heading}</h5>
                                                        <p>{subsection.content}</p>
                                                    </div>
                                                ))}

                                                {section.table && (
                                                    <table className="case-tech-stack-table">
                                                        <thead>
                                                            <tr>
                                                                {section.table.headers.map((header, idx) => (
                                                                    <th key={idx}>{header}</th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {section.table.rows.map((row, rowIdx) => (
                                                                <tr key={rowIdx}>
                                                                    {section.table.headers.map((header, colIdx) => {
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

                                                                        return <td key={colIdx}>{cellValue}</td>;
                                                                    })}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                )}
                                            </motion.div>
                                        ))
                                    ) : (
                                        // Fallback to default content
                                        <>
                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: 0.2, ease: editorialTransition.ease }}
                                            >
                                                <p className="case-main-desc">{content}</p>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: 0.3, ease: editorialTransition.ease }}
                                            >
                                                <h4>The Challenge</h4>
                                                <p>Legacy processes relied on manual review of thousands of documents, leading to bottlenecks and potential compliance risks in a rapidly changing regulatory environment.</p>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: 0.4, ease: editorialTransition.ease }}
                                            >
                                                <h4>The Solution</h4>
                                                <p>We deployed a multi-agent system that autonomously ingests, classifies, and verifies documents against real-time regulatory frameworks, flagging anomalies for human expert review.</p>
                                            </motion.div>

                                            <motion.div
                                                className="case-stats-grid"
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: 0.5, ease: editorialTransition.ease }}
                                            >
                                                <div className="case-stat">
                                                    <span className="stat-value">90%</span>
                                                    <span className="stat-label">Faster Processing</span>
                                                </div>
                                                <div className="case-stat">
                                                    <span className="stat-value">100%</span>
                                                    <span className="stat-label">Audit Traceability</span>
                                                </div>
                                            </motion.div>
                                        </>
                                    )}
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function CaseStudiesSection() {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section className="case-studies-section">
            <div className="case-studies-container">
                <header className="case-studies-header">
                    <h1 className="case-studies-title">Case Studies</h1>
                </header>

                <div className="case-studies-grid">
                    <div className="case-studies-column case-studies-column-left">
                        {leftColumnStudies.map((study, index) => (
                            <ExpandableCaseStudyCard
                                key={study.id}
                                id={study.id}
                                image={study.image}
                                description={study.description}
                                company={study.company}
                                aspectRatio={study.aspectRatio}
                                isStaggered={index === 1}
                                content={study.content}
                                sections={study.sections}
                                selectedId={selectedId}
                                setSelectedId={setSelectedId}
                            />
                        ))}
                    </div>

                    <div className="case-studies-column case-studies-column-right">
                        {rightColumnStudies.map((study) => (
                            <ExpandableCaseStudyCard
                                key={study.id}
                                id={study.id}
                                image={study.image}
                                description={study.description}
                                company={study.company}
                                aspectRatio={study.aspectRatio}
                                content={study.content}
                                sections={study.sections}
                                selectedId={selectedId}
                                setSelectedId={setSelectedId}
                            />
                        ))}

                        <div className="case-studies-quote">
                            <h2 className="quote-text">"Value that extends beyond initial delivery."</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CaseStudiesSection;
