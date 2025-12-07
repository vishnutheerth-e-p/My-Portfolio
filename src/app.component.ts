import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Profile } from './models/portfolio.model';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent
  ]
})
export class AppComponent {
  currentYear = new Date().getFullYear();

  profile = signal<Profile>({
    name: 'Vishnutheerth E P',
    title: 'Developer Associate @ SAP Labs India | Data Science | AI | Software Development',
    location: 'Kannur, Kerala, India',
    email: 'vishnutheerthep2001@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vishnutheerth-e-p-797407133/',
    summary: 'As a Developer Associate at SAP Labs India, I have hands-on experience in developing Agentic AI solutions leveraging LangChain, LangGraph, MCP Server, and SAP AI Core SDK LLMs. Skilled in building scalable ML/NLP applications, enabling smooth product version migrations, and supporting operational excellence through deployment and monitoring responsibilities. Previously, as an Intern at SAP Labs India, I have applied my skills in Machine Learning and Generative AI to solve real-world problems along with internal POC application development using Python-Flask as well as Java-Spring Boot. I have a strong postgraduate educational background in Data Science and graduate educational background in Electronics and Communication Engineering from Amrita Vishwa Vidyapeetham. I am passionate about leveraging data to drive business decisions and improve customer experiences. I am always eager to learn new technologies and techniques to enhance my working capabilities.',
    experience: [
      {
        role: 'Developer Associate',
        company: 'SAP',
        period: 'June 2024 - Present',
        description: 'Driving Agentic AI use case development utilizing LangChain, LangGraph, MCP Server, and SAP AI Core SDK LLMs to build intelligent and autonomous workflows. Working on enabling V1 to V2 migration for key use cases to ensure customers can seamlessly transition to the latest software version without disruptions. Occasionally taken up caretaker role by actively monitoring pods, managing JIRAs and SNOWs, and performing pre-prod and prod deployments to maintain operational stability and smooth delivery for the team.'
      },
      {
        role: 'Intern',
        company: 'SAP',
        period: 'August 2023 - June 2024',
        description: 'Developed a Java Spring Boot PoC application enabling hybrid search with MongoDB. Additionally, developed and deployed a RESTful API using Python and Flask on SAP BTP to support seamless training data uploads for machine learning use cases. Performed prompt engineering and evaluated LLMs for NLP tasks through SAP Generative AI Hub. Led the migration of applications from Centaur to Flask in an Agile environment, utilizing Docker, Postman, and SAP AI Core for scalable ML operations. Contributed to a group hackathon delivering a Treasury Position Report with LSTM-based time series forecasts, RAG-driven unstructured data insights, and a React dashboard.'
      }
    ],
    education: [
      {
        degree: 'Master of Technology - MTech, Data Science',
        institution: 'Amrita Vishwa Vidyapeetham',
        period: 'July 2023 - April 2025'
      },
      {
        degree: 'Bachelor of Technology - BTech, Electronics and Communication Engineering',
        institution: 'Amrita Vishwa Vidyapeetham',
        period: 'July 2019 - June 2023'
      }
    ],
    projects: [
      {
        name: 'Treasury Position Report with future forecasts',
        description: 'Worked on this use case as a part of Invent for Customers Hackathon conducted by SAP Labs India. Developed LSTM-based time series forecasting models to predict future treasury positions, integrated RAG techniques for extracting insights from unstructured data, and created an interactive dashboard using React for effective visualization of the results.',
        period: 'February 2025 - February 2025'
      },
      {
        name: 'Text and Image Similarity using Contrastive Learning',
        description: 'Developed a contrastive learning model for measuring text and image similarity, enhancing multimodal data analysis capabilities.',
        period: 'January 2024 - May 2024'
      },
      {
        name: 'Gender Classification using Transfer Learning',
        description: 'Developed models based on Transfer Learning using InceptionV3 and Xception network to classify the gender for the images present in CelebFaces dataset.',
        period: 'February 2024 - April 2024'
      },
      {
        name: 'Face Mask Recognition using CNN',
        description: 'Developed a model by training CNN architecture to detect whether a person is wearing a face mask or not.',
        period: 'September 2023 - December 2023'
      },
      {
        name: 'Predicting ICU return after Liver Transplant using Optimal Variational Bayesian Logistic Regression',
        description: 'Developed a predictive model for ICU readmission post-liver transplant surgery, utilizing Bayesian methods, statistical analysis, and machine learning to manage uncertainty and optimize model parameters.',
        period: 'July 2023 - December 2023'
      },
      {
        name: 'Travelling Salesman Problem using Iterative Local Search',
        description: 'Implemented and fine-tuned the Iterated Local Search (ILS) algorithm for efficiently solving the Traveling Salesman Problem (TSP), enhancing optimization and computational efficiency.',
        period: 'July 2023 - December 2023'
      }
    ],  
    skills: [
      { name: 'Machine Learning', category: 'AI / ML' },
      { name: 'Deep Learning', category: 'AI / ML' },
      { name: 'Natural Language Processing (NLP)', category: 'AI / ML' },
      { name: 'LangChain', category: 'AI / ML' },
      { name: 'LangGraph', category: 'AI / ML' },
      { name: 'Python', category: 'Languages' },
      { name: 'Java', category: 'Languages' },
      { name: 'Flask', category: 'Frameworks & Libraries' },
      { name: 'Spring Boot', category: 'Frameworks & Libraries' },
      { name: 'MongoDB', category: 'Databases' },
      { name: 'Docker', category: 'Tools & Platforms' },
      { name: 'SAP AI Core', category: 'Tools & Platforms' },
      { name: 'SAP BTP', category: 'Tools & Platforms' },
      { name: 'Git', category: 'Tools & Platforms' },
    ]
  });
}