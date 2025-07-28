"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import ContactForm from "@/components/contact-form"

export default function Portfolio() {
  const [typewriterText, setTypewriterText] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const roles = ["Data Scientist", "Product Manager", "AI Engineer", "ML Specialist"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typewriterText.length < currentRole.length) {
            setTypewriterText(currentRole.slice(0, typewriterText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (typewriterText.length > 0) {
            setTypewriterText(typewriterText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [typewriterText, currentRoleIndex, isDeleting, roles])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Sliding Banner */}
        <div className="bg-gray-900 dark:bg-gray-800 text-white py-2 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-sm font-medium mx-4">
              🚀 Actively looking for open positions in Data Science & Product Management • Available for full-time
              opportunities • Open to relocation
            </span>
            <span className="text-sm font-medium mx-4">
              🚀 Actively looking for open positions in Data Science & Product Management • Available for full-time
              opportunities • Open to relocation
            </span>
          </div>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-gray-200 dark:border-gray-700">
          <div className="container flex h-16 items-center justify-between">
            <div className="font-bold text-xl text-gray-900 dark:text-white">Preethu Nath Manjunath</div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link
                href="#about"
                className="transition-colors hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-300"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="transition-colors hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-300"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="transition-colors hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-300"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="transition-colors hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-300"
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="transition-colors hover:text-gray-900 dark:hover:text-white text-gray-600 dark:text-gray-300"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
              >
                <Link
                  href="https://drive.google.com/file/d/1zMiP8QvMO-YRmM7ALgioftRQ4Fwr-AEn/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </Link>
              </Button>
            </div>
          </div>
        </header>

        <main className="container py-10">
          {/* Hero Section */}
          <section className="py-20 md:py-32 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-gray-900 dark:text-white">
              Hi, I'm <span className="text-gray-700 dark:text-gray-300">Preethu Nath Manjunath</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-[750px] mb-4 h-8">
              <span className="inline-block">{typewriterText}</span>
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[600px] mb-4">
              Specializing in AI/ML solutions, financial analytics, and scalable data pipelines
            </p>
            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Boulder, CO</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Masters in Data Science</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button
                asChild
                className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
              >
                <Link href="#experience">View My Work</Link>
              </Button>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 scroll-mt-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-lg transform rotate-3"></div>
                <img
                  src="/images/preethu-photo.png"
                  alt="Preethu Nath Manjunath"
                  className="relative rounded-lg w-full max-w-md mx-auto shadow-lg"
                />
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I set out to be an electrical engineer, imagining a future of designing wind turbines. But somewhere
                  between circuits and code, I stumbled into data science, and it stuck. It flipped the switch, and I
                  realized I enjoyed optimizing algorithms more than troubleshooting circuits.
                </p>
                <p>
                  Since then, I've traded voltage equations for machine learning models, and I haven't looked back. From
                  building NER models at Hexaware to developing AI solutions at Deloitte, each role has deepened my
                  expertise in turning data into actionable insights.
                </p>
                <p>
                  Now leading AI/ML and BI teams at KOBEYO while pursuing my Masters at CU Boulder, I'm passionate about
                  using data to solve real-world problems. I'm currently co-founding{" "}
                  <strong className="text-gray-900 dark:text-white">Privnt</strong>, building SOC2-equivalent frameworks
                  for agentic AI systems.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
                  >
                    <Link href="https://github.com/preethu-manjunath" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
                  >
                    <Link
                      href="https://linkedin.com/in/preethu-nath-manjunath"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
                  >
                    <Link href="mailto:preethunath@gmail.com">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-16 scroll-mt-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Professional Experience</h2>
            <div className="space-y-8">
              {/* Current Role */}
              <Card className="p-6 bg-white dark:bg-gray-800 shadow-md border-l-4 border-l-gray-900 dark:border-l-white border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Data Consultant (Product Manager)
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">KOBEYO</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Basalt, CO</p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">Dec. 2024 – Present</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>
                    • Led cross-functional data engineering teams developing financial dashboards, improving recruiter
                    budget accuracy by 30%
                  </li>
                  <li>
                    • Built automated pipelines using Python, SQL, and Supabase, reducing manual reporting overhead by
                    50%
                  </li>
                  <li>• Designed semantic matching models using LLMs (GPT agents + PEFT) for contextual reporting</li>
                  <li>• Developed RAG-based event-triggered systems for real-time recruiter activity tracking</li>
                </ul>
              </Card>

              {/* Honda Capstone */}
              <Card className="p-6 bg-white dark:bg-gray-800 shadow-md border-l-4 border-l-gray-600 dark:border-l-gray-400 border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Student Intern – Capstone Project (Recall Recon)
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Honda | 99P Labs</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Boulder, CO</p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">Jan. 2025 – May 2025</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>
                    • Led team of five to architect scalable data pipeline for vehicle recall forecasting with 87%
                    precision
                  </li>
                  <li>• Designed GPT-3.5-powered Natural Language Query system with 90% accuracy</li>
                  <li>• Deployed XGBoost and Random Forest models with batch and real-time data flows</li>
                </ul>
              </Card>

              {/* Deloitte */}
              <Card className="p-6 bg-white dark:bg-gray-800 shadow-md border-l-4 border-l-gray-700 dark:border-l-gray-300 border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Data Scientist (Consultant)</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Deloitte Consulting USI</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Bengaluru, India</p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">Jan. 2022 – Jul. 2023</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Automated real-time risk data processing using NLP pipelines, improving accuracy to 90%</li>
                  <li>• Designed enterprise-scale event-tracking pipeline using AWS Glue and SageMaker</li>
                  <li>• Led AI alignment with SOX/SEC compliance dashboards, improving audit readiness by 25%</li>
                  <li>• Built cloud-optimized RAG systems for financial document automation</li>
                </ul>
              </Card>

              {/* Hexaware */}
              <Card className="p-6 bg-white dark:bg-gray-800 shadow-md border-l-4 border-l-gray-500 dark:border-l-gray-500 border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Data Scientist (Associate Software Engineer)
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Hexaware Technologies</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Chennai, India</p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">Oct. 2020 – Dec. 2022</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>
                    • Developed loan default prediction model (XGBoost, 93% recall) for credit pipeline integration
                  </li>
                  <li>• Built custom Named Entity Recognition (NER) system for financial insights extraction</li>
                  <li>• Streamlined reporting and enhanced data-driven decision-making for retail operations</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16 scroll-mt-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "ADHD Assistance App",
                  description:
                    "A comprehensive mobile application designed to help individuals with ADHD manage their daily tasks, medication reminders, and focus sessions through personalized AI-driven recommendations.",
                  technologies: ["React Native", "Python", "Machine Learning", "Firebase"],
                  githubUrl: "https://github.com/preethu-manjunath/ADHD-Assistance-App",
                  image: "/images/projects/adhd-app.png",
                  liveUrl: null,
                },
                {
                  name: "Predictive Climate Analytics",
                  description:
                    "Advanced climate prediction system using machine learning models to forecast weather patterns and climate changes, providing actionable insights for environmental planning.",
                  technologies: ["Python", "TensorFlow", "Time Series Analysis", "Data Visualization"],
                  githubUrl: "https://github.com/preethu-manjunath/Predictive-Climate-Analytics",
                  image: "/images/projects/climate-analytics.webp",
                  liveUrl: null,
                },
                {
                  name: "AI-Powered Perpetrator Identification",
                  description:
                    "Intelligent system leveraging computer vision and deep learning algorithms to assist law enforcement in identifying suspects from surveillance footage and witness descriptions.",
                  technologies: ["Python", "OpenCV", "Deep Learning", "Computer Vision"],
                  githubUrl: "https://github.com/preethu-manjunath/AI-Powered-Perpetrator-Identification",
                  image: "/images/projects/perpetrator-id.webp",
                  liveUrl: null,
                },
                {
                  name: "Phone Tracker",
                  description:
                    "Real-time location tracking application with advanced security features, geofencing capabilities, and emergency alert systems for personal safety and device management.",
                  technologies: ["Python", "GPS API", "Real-time Processing", "Mobile Development"],
                  githubUrl: "https://github.com/preethu-manjunath/Phone-Tracker",
                  image: "/images/projects/crime-analysis.webp",
                  liveUrl: null,
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow border-gray-200 dark:border-gray-700"
                >
                  <div className="aspect-video relative bg-gray-100 dark:bg-gray-700 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 bg-transparent"
                      >
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          asChild
                          className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                        >
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button
                variant="outline"
                asChild
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 bg-transparent"
              >
                <Link
                  href="https://github.com/preethu-manjunath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  View All Projects on GitHub
                </Link>
              </Button>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-16 scroll-mt-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Skills & Technologies</h2>
            <div className="grid gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Programming Languages</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {[
                    { name: "Python", logo: "/placeholder.svg?height=40&width=40" },
                    { name: "R", logo: "/placeholder.svg?height=40&width=40" },
                    { name: "JavaScript", logo: "/images/logos/html-css-js.png" },
                    { name: "Java", logo: "/placeholder.svg?height=40&width=40" },
                    { name: "C++", logo: "/placeholder.svg?height=40&width=40" },
                    { name: "SQL", logo: "/placeholder.svg?height=40&width=40" },
                  ].map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow text-center"
                    >
                      <img
                        src={skill.logo || "/placeholder.svg"}
                        alt={skill.name}
                        className="w-10 h-10 mx-auto mb-2 object-contain"
                      />
                      <div className="font-medium text-sm text-gray-700 dark:text-gray-300">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Machine Learning & AI</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {[
                    { name: "TensorFlow", logo: "/placeholder.svg?height=40&width=40" },
                    { name: "PyTorch", logo: "/placeholder.svg?height=40&width=40" },
                    { name: "Scikit-learn", logo: "/placeholder.svg?height=40&width=40" },
                    { name: "XGBoost", logo: "/placeholder.svg?height=40&width=40" },
                    { name: "Dataiku", logo: "/images/logos/dataiku.png" },
                    { name: "DataRobot", logo: "/images/logos/datarobot.png" },
                  ].map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow text-center"
                    >
                      <img
                        src={skill.logo || "/placeholder.svg"}
                        alt={skill.name}
                        className="w-10 h-10 mx-auto mb-2 object-contain"
                      />
                      <div className="font-medium text-sm text-gray-700 dark:text-gray-300">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Cloud & DevOps</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {[
                    { name: "AWS", logo: "/images/logos/aws.png" },
                    { name: "Azure", logo: "/images/logos/azure.png" },
                    { name: "Google Cloud", logo: "/images/logos/gcp.png" },
                    { name: "Docker", logo: "/placeholder.svg?height=40&width=40" },
                    { name: "GitHub", logo: "/images/logos/github.png" },
                    { name: "Airflow", logo: "/images/logos/airflow.png" },
                  ].map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow text-center"
                    >
                      <img
                        src={skill.logo || "/placeholder.svg"}
                        alt={skill.name}
                        className="w-10 h-10 mx-auto mb-2 object-contain"
                      />
                      <div className="font-medium text-sm text-gray-700 dark:text-gray-300">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Web Development & APIs</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {[
                    { name: "Flask", logo: "/images/logos/flask.png" },
                    { name: "FastAPI", logo: "/images/logos/fastapi.png" },
                    { name: "HTML/CSS/JS", logo: "/images/logos/html-css-js.png" },
                    { name: "PostgreSQL", logo: "/placeholder.svg?height=40&width=40" },
                    { name: "Snowflake", logo: "/placeholder.svg?height=40&width=40" },
                    { name: "Tableau", logo: "/placeholder.svg?height=40&width=40" },
                  ].map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow text-center"
                    >
                      <img
                        src={skill.logo || "/placeholder.svg"}
                        alt={skill.name}
                        className="w-10 h-10 mx-auto mb-2 object-contain"
                      />
                      <div className="font-medium text-sm text-gray-700 dark:text-gray-300">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Education</h2>
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-md border-l-4 border-l-gray-900 dark:border-l-white border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Masters in Data Science</h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">University of Colorado, Boulder</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">GPA: 3.74</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">Aug. 2023 – May 2025</div>
              </div>
            </Card>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 scroll-mt-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  I'm actively seeking new opportunities in data science and product management. Let's discuss how I can
                  contribute to your team!
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    <Link
                      href="mailto:preethunath@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:underline"
                    >
                      preethunath@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">+1 (303) 472-5880</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    <span className="text-gray-600 dark:text-gray-300">Boulder, CO</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    <Link
                      href="https://linkedin.com/in/preethu-nath-manjunath"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-gray-600 dark:text-gray-300"
                    >
                      linkedin.com/in/preethu-nath-manjunath
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    <Link
                      href="https://github.com/preethu-manjunath"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-gray-600 dark:text-gray-300"
                    >
                      github.com/preethu-manjunath
                    </Link>
                  </div>
                </div>
              </div>

              <ContactForm method="formspree" formspreeId="YOUR_FORM_ID_HERE" />
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-700 py-6 bg-white dark:bg-gray-800">
          <div className="container flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Preethu Nath Manjunath. All rights reserved.
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button variant="ghost" size="icon" asChild className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link href="https://github.com/preethu-manjunath" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link href="https://linkedin.com/in/preethu-nath-manjunath" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link href="mailto:preethunath@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </footer>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </div>
    </div>
  )
}
