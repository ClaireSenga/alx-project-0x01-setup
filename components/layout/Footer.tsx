const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
      <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
