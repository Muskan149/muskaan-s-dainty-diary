const About = () => {
  return (
    <div className="page-container min-h-[calc(100vh-5rem)]">
      <div className="max-w-6xl mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-12rem)]">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="space-y-8">
              {/* Main greeting */}
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide leading-tight">
                Namaste! I am Muskan.
              </h1>
              
              {/* Professional pointers */}
              <div className="space-y-3 pt-4">
                <p className="font-sans text-base md:text-lg text-foreground/90 tracking-wide">
                  CS @ Georgia Tech
                </p>
                <p className="font-sans text-base md:text-lg text-foreground/90 tracking-wide">
                  Incoming SWE Intern @ LinkedIn
                </p>
                <p className="font-sans text-base md:text-lg text-foreground/90 tracking-wide">
                  President @ Women in College of Computing
                </p>

              </div>
              
              {/* Quirky pointers with subtle accent backgrounds */}
              <div className="space-y-3 pt-6">
                <p className="font-sans text-base md:text-lg text-foreground/80 tracking-wide italic">
                  eldest daughter
                </p>
                <p className="font-sans text-base md:text-lg text-foreground/80 tracking-wide italic">
                  type a life-romanticizer
                </p>
                <p className="font-sans text-base md:text-lg text-foreground/80 tracking-wide italic">
                  saffron adeni chai enjoyer
                </p>
                
              </div>
            </div>
          </div>
          
          {/* Right side - Portrait image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              {/* Subtle accent decoration */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-accent-green/30 rounded-sm -z-10" />
              
              {/* Image placeholder - vertical orientation */}
              <div className="w-64 md:w-72 lg:w-80 aspect-[3/4] bg-muted rounded-sm overflow-hidden">
                <img src="/G64YqJubkAAbQ8I.jpeg" alt="Muskan Portrait" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
