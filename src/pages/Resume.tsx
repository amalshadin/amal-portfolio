import { FaDownload } from 'react-icons/fa';
import ResumePDF from '../assets/resume_placeholder.pdf'; // Make sure you have this file

const Resume = () => {
  return (
    <div className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary font-mono">My Resume</h1>
        <a 
          href={ResumePDF} 
          download="AmalShadin_Resume.pdf"
          className="flex items-center space-x-2 border border-accent text-accent px-4 py-2 rounded hover:bg-accent hover:bg-opacity-10 transition-all"
        >
          <FaDownload />
          <span>Download</span>
        </a>
      </div>
      
      {/* PDF Viewer */}
      <div className="border border-secondary rounded-lg overflow-hidden">
        <iframe 
          src={ResumePDF} 
          width="100%" 
          height="800px"
          title="Amal Shadin's Resume"
          className="w-full h-[75vh]"
        >
        </iframe>
      </div>
    </div>
  );
};

export default Resume;