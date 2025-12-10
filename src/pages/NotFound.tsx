import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page-container flex items-center justify-center min-h-[calc(100vh-5rem)]">
      <div className="text-center animate-fade-in">
        <h1 className="font-serif text-6xl md:text-8xl font-light text-foreground/20 mb-4">
          404
        </h1>
        <p className="font-sans text-lg text-muted-foreground mb-8">
          This page doesn't exist
        </p>
        <Link 
          to="/" 
          className="font-sans text-sm text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
        >
          Return home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
