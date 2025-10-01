import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-background py-6">
            <div className="container mx-auto px-4 md:px-8 text-center text-secondary">
                <div className="flex justify-center space-x-6 text-2xl mb-4">
                    <a href="https://github.com/amalshadin" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/amal-shadin" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaLinkedin /></a>
                    <a href="https://x.com/AmalShadin" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaTwitter /></a>
                    <a href="https://www.instagram.com/___shadin__" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaInstagram /></a>
                </div>
                <p className="text-sm">Designed & Built by Amal Shadin A</p>
                <p className="text-xs font-mono mt-1">amalshadin10@gmail.com | +91 9567325591</p>
            </div>
        </footer>
    );
};

export default Footer;