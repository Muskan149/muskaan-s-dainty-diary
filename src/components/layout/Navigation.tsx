import { NavLink } from "@/components/NavLink";

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-6">
        <NavLink 
          to="/" 
          className="font-serif text-xl tracking-wide text-foreground hover:opacity-70 transition-opacity"
        >
          muskan
        </NavLink>
        
        <div className="flex items-center gap-8">
          <NavLink 
            to="/" 
            className="nav-link"
            activeClassName="nav-link-active"
            end
          >
            about
          </NavLink>
          <NavLink 
            to="/resume" 
            className="nav-link"
            activeClassName="nav-link-active"
          >
            resume
          </NavLink>
          <NavLink 
            to="/gallery" 
            className="nav-link"
            activeClassName="nav-link-active"
          >
            corner
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
