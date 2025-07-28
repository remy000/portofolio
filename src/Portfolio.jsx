import React, { useState, useEffect } from 'react';
import { Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Award, Calendar, GraduationCap, Code, Brain, User, Menu, X, Database, Settings, Cpu } from 'lucide-react';
import profilePhoto from './assets/photo.jpg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const jobTitles = ["Data Scientist", "Machine Learning Engineer", "Software Engineer"];

  // Download CV function
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Remy_CV_2.pdf'; // Correct path for files in public folder
    link.download = 'Remy_Dukundane_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        setIsAnimating(false);
      }, 500); // Half second for fade out, then change text
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [jobTitles.length]);

  // Personal Information
  const personalInfo = {
    name: "Remy Dukundane",
    email: "dukundaneremy2001@gmail.com",
    phone: "+250789615560",
    location: "Kigali, Rwanda",
    linkedin: "https://www.linkedin.com/in/dukundane-remy-083157240/",
    github: "https://github.com/remy000",
    profileImage: profilePhoto // Added profile image for sidebar
  };

  // Navigation items with icons
  const navigationItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'expertise', label: 'Expertise', icon: Code },
    { id: 'skills', label: 'Skills', icon: Brain },
    { id: 'certificates', label: 'Certificates', icon: Award }
  ];

  // Profile Section Data
  const profileData = {
    summary: "Passionate Data Scientist and Software Engineer specializing in AI technologies and data-driven solutions. Proficient in Python, SQL, Java, JavaScript and ML frameworks including TensorFlow and PyTorch. Focused on transforming complex data into actionable insights and building scalable software systems.",
    image: profilePhoto
  };

  // Education Data
  const educationData = [
    {
      degree: "Master of Science in Information Technology",
      institution: "Carnegie Mellon University-Africa",
      duration: "2024 - 2026",
      details: "Specialization in Applied Machine Learning and Data Science",
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Adventist University of Central Africa",
      duration: "2021 - 2024",
      details: "Major in Software Engineering"
    }
  ];

  // Areas of Expertise Data
  const expertiseData = [
    {
      id: 1,
      title: "Data Science",
      icon: Database,
      description: "Specialized in extracting meaningful insights from complex datasets through advanced statistical analysis and machine learning techniques. Proficient in the complete data science pipeline from data collection to actionable business recommendations.",
      technologies: ["Data Analysis", "Pandas", "NumPy", "Statistical Modeling", "Supervised Learning", "Unsupervised Learning", "Data Visualization", "Matplotlib", "Seaborn", "Plotly"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      side: "left"
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      icon: Cpu,
      description: "Expert in designing, implementing, and deploying sophisticated machine learning models at scale. Experienced in deep learning architectures, model optimization, and production deployment with focus on performance and reliability.",
      technologies: ["Deep Learning", "CNN", "RNN", "LSTM", "Transformers", "Model Optimization", "Model Deployment", "MLOps", "PyTorch", "TensorFlow"],
      imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      side: "right"
    },
    {
      id: 3,
      title: "Software Engineer",
      icon: Settings,
      description: "software engineer with expertise in building scalable, maintainable software solutions. Experienced in modern software architecture patterns, backend development, API design, and comprehensive testing methodologies.",
      technologies: ["Software Architecture", "Backend Development", "API Development", "Database Design", "Testing", "DevOps", "Microservices"],
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      side: "left"
    }
  ];

  // Skills Data
  const skillsData = {
    "Programming Languages": ["Python", "JavaScript", "Java", "SQL"],
    "Machine Learning & AI": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "Hugging Face", "MLflow", "Weights & Biases"],
    "Web Technologies": ["React", "Node.js", "FastAPI", "SpringBoot", "Express.js", "Next.js", "TypeScript"],
    "DevOps & Database": ["Google Cloud", "Docker", "Kubernetes","GitLab CI/CD", "PostgreSQL", "MongoDB"],
    "Data Engineering": ["Apache Spark", "Pandas", "NumPy", "Snowflake"]
  };

  // Certificates Data
  const certificatesData = [
    {
      title: "Optimizing Machine Learning Models in Python",
      issuer: "DataQuest",
      year: "2025",
      description: "Advanced certification in optimizing machine learning model performance and efficiency using Python",
      link: "https://app.dataquest.io/view_cert/OMWVFQNTSY6O6GC367S1"
    },
    {
      title: "Deep Learning for Computer Vision",
      issuer: "World Quant University",
      year: "2025",
      description: "Comprehensive training in deep learning techniques for computer vision applications",
      link: "https://www.credly.com/badges/83071f9f-ad00-4523-a030-2cc92cf63eb8/public_url"
    },
    {
      title: "Data Analysis and Visualization",
      issuer: "DataQuest",
      year: "2025",
      description: "Expertise in data analysis methodologies and advanced visualization techniques",
      link: "https://app.dataquest.io/view_cert/75N593CIUIRTQ2XMT556"
    },
    {
      title: "Advanced Data Cleaning",
      issuer: "DataQuest",
      year: "2025",
      description: "Specialized certification in advanced data preprocessing and cleaning techniques",
      link: "https://app.dataquest.io/view_cert/XR67M827R49H4LRPZFBA"
    },
    {
      title: "Deep Learning in TensorFlow",
      issuer: "DataQuest",
      year: "2024",
      description: "Comprehensive training in building and deploying deep learning models using TensorFlow",
      link: "https://app.dataquest.io/view_cert/F59GVXGPBOCHMKOJEXCU"
    },
    {
      title: "Applied Data Science",
      issuer: "World Quant University",
      year: "2023",
      description: "Practical application of data science methodologies in real-world scenarios",
      link: "https://www.credly.com/badges/3b452aa6-e1a8-4e54-8af6-3a1a3cb07a64/linked_in_profile"
    },
    {
      title: "Introduction to Data Science",
      issuer: "Cisco Academy",
      year: "2024",
      description: "Foundational knowledge in data science principles and techniques",
      link: "https://www.credly.com/badges/033ab955-deaa-428f-8b63-edd035f79dc6"
    }
  ];

  const renderProfile = () => (
    <div 
      className="min-h-screen flex items-center justify-center py-8 relative bg-white"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12 max-w-6xl mx-auto px-4">
        {/* Left Column - Profile Image - Hidden on mobile, visible on large screens */}
        <div className="flex-shrink-0 hidden lg:block">
          <img 
            src={personalInfo.profileImage} 
            alt="Profile" 
            className="w-88 h-88 lg:w-96 lg:h-96 rounded-[50%] object-contain border-8 shadow-2xl bg-white"
            style={{ borderColor: '#052A6F' }}
          />
        </div>
        
        {/* Right Column - Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4" style={{ color: '#052A6F' }}>{personalInfo.name}</h1>
          <div className="h-16 flex items-center justify-center lg:justify-start mb-6">
            <h2 className={`text-2xl lg:text-4xl font-semibold transition-all duration-500 ${
              isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              <span className="text-gray-700">{jobTitles[currentTitleIndex]}</span>
            </h2>
          </div>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">{profileData.summary}</p>
          <button 
            onClick={handleDownloadCV}
            className="text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto lg:mx-0"
            style={{ backgroundColor: '#052A6F' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#041e59'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#052A6F'}
          >
            <Download size={24} />
            Download CV
          </button>
        </div>
      </div>
    </div>
  );

  // Render Education Section
  const renderEducation = () => (
    <div className="space-y-16">
      <h2 className="text-4xl font-bold mb-8 mt-18 text-center lg:text-left" style={{ color: '#052A6F' }}>Education</h2>
      {educationData.map((edu, index) => (
        <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ borderLeft: '6px solid #052A6F' }}>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#052A6F' }}>{edu.degree}</h3>
              <p className="text-xl text-gray-700 mb-2">{edu.institution}</p>
            </div>
            <div className="text-right">
              <p className="text-lg text-gray-600 mb-1">{edu.duration}</p>

            </div>
          </div>
          <p className="text-gray-700 mb-4">{edu.details}</p>
          <div className="flex flex-wrap gap-2">
          
          </div>
        </div>
      ))}
    </div>
  );

  // Render Areas of Expertise Section
  const renderExpertise = () => (
    <div className="space-y-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 pt-12 md:pt-0 text-center lg:text-left" style={{ color: '#052A6F' }}>Areas of Expertise</h2>
      
      <div className="space-y-16">
        {expertiseData.map((expertise) => {
          const IconComponent = expertise.icon;
          const isLeft = expertise.side === "left";
          
          return (
            <div key={expertise.id} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${!isLeft ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Section - Hidden on mobile, visible on large screens */}
              <div className="flex-shrink-0 w-full lg:w-1/2 hidden lg:block">
                <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src={expertise.imageUrl} 
                    alt={expertise.title}
                    className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="flex-1 w-full lg:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl" style={{ backgroundColor: '#052A6F' }}>
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold" style={{ color: '#052A6F' }}>{expertise.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">{expertise.description}</p>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Core Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-3">
                      {expertise.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-4 py-2 rounded-lg text-sm font-medium border transition-colors duration-200"
                          style={{ 
                            backgroundColor: '#f0f4ff', 
                            color: '#052A6F', 
                            borderColor: '#b8d0ff' 
                          }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#e0ebff'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = '#f0f4ff'}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // Render Skills Section
  const renderSkills = () => (
    <div className="space-y-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 pt-12 md:pt-0 text-center lg:text-left" style={{ color: '#052A6F' }}>Skills & Technologies</h2>
      {Object.entries(skillsData).map(([category, skills], index) => (
        <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6" style={{ color: '#052A6F' }}>{category}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, skillIndex) => (
              <div 
                key={skillIndex} 
                className="bg-white px-4 py-3 rounded-lg text-center font-medium transition-all duration-300 cursor-pointer transform hover:scale-105"
                style={{ 
                  border: `2px solid #052A6F`, 
                  color: '#052A6F' 
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#052A6F';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#052A6F';
                }}
              >  {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  // Render Certificates Section
  const renderCertificates = () => (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold mb-8 text-center lg:text-left" style={{ color: '#052A6F' }}>Certificates & Credentials</h2>
      <div className="grid gap-6">
        {certificatesData.map((cert, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ borderLeft: '6px solid #052A6F' }}>
            <div className="flex items-start gap-6">
              <Award className="mt-1 flex-shrink-0" style={{ color: '#052A6F' }} size={32} />
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#052A6F' }}>{cert.title}</h3>
                    <p className="text-xl text-gray-700 mb-2">{cert.issuer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold" style={{ color: '#052A6F' }}>Year: {cert.year}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{cert.description}</p>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium hover:underline transition-colors"
                  style={{ color: '#052A6F' }}
                  onMouseEnter={(e) => e.target.style.color = '#041e59'}
                  onMouseLeave={(e) => e.target.style.color = '#052A6F'}
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Main section renderer
  const renderActiveSection = () => {
    switch(activeSection) {
      case 'profile': return renderProfile();
      case 'education': return renderEducation();
      case 'expertise': return renderExpertise();
      case 'skills': return renderSkills();
      case 'certificates': return renderCertificates();
      default: return renderProfile();
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-3 left-3 z-50 p-1.5 text-white rounded-md shadow-md md:hidden transition-colors"
        style={{ backgroundColor: '#052A6F' }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#041e59'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#052A6F'}
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 w-72 md:w-80 h-full text-white shadow-2xl z-40 flex flex-col transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`} style={{ backgroundColor: '#052A6F' }}>
        <div className="flex flex-col h-full p-5 md:p-7">
          {/* Profile Image */}
          <div className="text-center mb-4">
            <img 
              src={personalInfo.profileImage} 
              alt="Profile" 
              className="w-36 h-36 md:w-40 md:h-40 rounded-full object-contain shadow-lg mx-auto bg-white"
              style={{ border: '4px solid #7fb3ff' }}
            />
          </div>
          
          {/* Header */}
          <div className="text-center mb-4 pb-4" style={{ borderBottom: '1px solid #7fb3ff' }}>
            <h1 className="text-xl md:text-2xl font-bold mb-3">{personalInfo.name}</h1>

          </div>
          
          {/* Contact Information */}
          <div className="mb-4 flex-shrink-0">
            <div className="space-y-2">
              <div className="flex items-center gap-5">
                <Mail size={16} className="flex-shrink-0" style={{ color: '#7fb3ff' }} />
                <span className="text-sm break-all">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-5">
                <Phone size={16} className="flex-shrink-0" style={{ color: '#7fb3ff' }} />
                <span className="text-sm">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-5">
                <MapPin size={16} className="flex-shrink-0" style={{ color: '#7fb3ff' }} />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-5">
                <Linkedin size={16} className="flex-shrink-0" style={{ color: '#7fb3ff' }} />
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm cursor-pointer transition-colors"
                  style={{ color: 'white' }}
                  onMouseEnter={(e) => e.target.style.color = '#7fb3ff'}
                  onMouseLeave={(e) => e.target.style.color = 'white'}
                >
                  {personalInfo.name}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github size={16} className="flex-shrink-0" style={{ color: '#7fb3ff' }} />
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm cursor-pointer transition-colors"
                  style={{ color: 'white' }}
                  onMouseEnter={(e) => e.target.style.color = '#7fb3ff'}
                  onMouseLeave={(e) => e.target.style.color = 'white'}
                >
                  {personalInfo.name}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 flex flex-col justify-center">
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsSidebarOpen(false); // Close sidebar on mobile after selection
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 text-sm md:text-base ${
                      activeSection === item.id 
                        ? 'bg-white font-bold shadow-lg transform scale-105' 
                        : 'text-white hover:bg-white'
                    }`}
                    style={activeSection === item.id ? { color: '#052A6F' } : { ['--hover-color']: '#052A6F' }}
                    onMouseEnter={(e) => {
                      if (activeSection !== item.id) {
                        e.target.style.color = '#052A6F';
                        // Also change the icon color on hover
                        const icon = e.target.querySelector('svg');
                        if (icon) icon.style.color = '#052A6F';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeSection !== item.id) {
                        e.target.style.color = '';
                        // Reset icon color on hover out
                        const icon = e.target.querySelector('svg');
                        if (icon) icon.style.color = '';
                      }
                    }}
                  >
                    <IconComponent size={18} className={activeSection === item.id ? '' : 'text-white'} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:ml-72 lg:ml-80 min-h-screen">
        {activeSection === 'profile' ? (
          // Profile section - no padding, full background
          <div className="w-full min-h-screen">
            {renderActiveSection()}
          </div>
        ) : (
          // Other sections - with padding and white background
          <div className="p-4 md:p-6 lg:p-12">
            <div className="max-w-5xl mx-auto">
              {renderActiveSection()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;