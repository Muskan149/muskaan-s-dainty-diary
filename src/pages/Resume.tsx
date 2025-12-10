import Layout from "@/components/layout/Layout";
import { FileText } from "lucide-react";

const Resume = () => {
  return (
    <Layout>
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide">
              Resume
            </h1>
            <div className="w-16 h-px bg-foreground/20 mt-4" />
          </div>
          
          {/* PDF Viewer Container */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-card border border-border rounded-sm overflow-hidden shadow-sm">
              {/* PDF Placeholder */}
              <div className="aspect-[8.5/11] bg-muted/50 flex flex-col items-center justify-center p-8">
                <FileText className="w-16 h-16 text-muted-foreground/40 mb-4" />
                <p className="text-muted-foreground font-sans text-sm text-center">
                  Resume PDF will be displayed here
                </p>
                <p className="text-muted-foreground/60 font-sans text-xs mt-2 text-center">
                  Upload your resume in the admin panel
                </p>
              </div>
            </div>
            
            {/* Download link placeholder */}
            <div className="mt-6 text-center">
              <button className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-4">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
