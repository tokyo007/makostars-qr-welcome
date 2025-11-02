import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Calendar,
  Mic, 
  FileCheck, 
  PenTool, 
  ExternalLink,
  Sparkles,
  ArrowRight,
  Instagram,
  Facebook,
  Mail,
  MessageCircle
} from "lucide-react";

export default function AppsHub() {
  const scrollToTools = () => {
    document.getElementById('current-tools')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20 md:py-32 overflow-hidden">
        {/* Decorative floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Sparkles className="absolute top-20 left-10 w-6 h-6 opacity-30 animate-pulse" />
          <Sparkles className="absolute top-40 right-20 w-8 h-8 opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
          <Sparkles className="absolute bottom-32 left-1/4 w-5 h-5 opacity-25 animate-pulse" style={{ animationDelay: '2s' }} />
          <Sparkles className="absolute bottom-20 right-1/3 w-7 h-7 opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Explore MakoStars Apps
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Interactive tools to make learning English easier and more fun.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToTools}
              className="bg-accent hover:bg-accent/90 text-primary font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Try Our Tools
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Wave decoration at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Current Tools Section */}
      <section id="current-tools" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Available Now <Sparkles className="inline w-8 h-8 text-accent" />
            </h2>
            <p className="text-muted-foreground text-lg">
              Start using these tools today to enhance your learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* QR Bookmark Card */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">QR Bookmark Landing Page</CardTitle>
                <CardDescription>
                  Connect with special events and reading programs using QR codes from our printed bookmarks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <a href="/bookmark">
                    Visit Page
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Book Fair Card */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Book Fair 2025</CardTitle>
                <CardDescription>
                  Join our next in-person book fair featuring English books and learning materials.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <a href="/book-fair-2025">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Coming Soon 🚀
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Exciting new tools in development to support your English learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Speaking & Pronunciation */}
            <Card className="relative overflow-hidden border-2 border-dashed hover:border-primary/50 transition-all duration-300 hover:scale-105 opacity-90">
              <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </div>
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Speaking & Pronunciation</CardTitle>
                <CardDescription className="min-h-[60px]">
                  AI-powered pronunciation feedback for EIKEN and TOEFL practice
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Essay Grader */}
            <Card className="relative overflow-hidden border-2 border-dashed hover:border-primary/50 transition-all duration-300 hover:scale-105 opacity-90">
              <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </div>
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Essay Exam Grader & Feedback</CardTitle>
                <CardDescription className="min-h-[60px]">
                  Get instant writing scores and grammar suggestions
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Writing Practice */}
            <Card className="relative overflow-hidden border-2 border-dashed hover:border-primary/50 transition-all duration-300 hover:scale-105 opacity-90">
              <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </div>
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Writing Sentences & Paragraphs</CardTitle>
                <CardDescription className="min-h-[60px]">
                  Practice structured writing with guided exercises
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to enhance your English learning?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Discover more resources and quality English books
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default" className="shadow-lg hover:shadow-xl transition-all">
              <a href="https://makostars.com" target="_blank" rel="noopener noreferrer">
                Visit Main Site
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all">
              <a href="https://store.makostars.com" target="_blank" rel="noopener noreferrer">
                Shop Books
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2847] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About Us Column */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
              <p className="text-white font-semibold mb-2 text-sm">MakoStars LLC: Learn English for School | Work | Life</p>
              <p className="text-gray-300 text-sm mb-4">MakoStars – Empowering English learners worldwide.</p>
              <div className="flex gap-4 mt-4">
                <a href="https://facebook.com/makostars" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-6 h-6 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer" />
                </a>
                <a href="https://instagram.com/MakoStars" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-6 h-6 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer" />
                </a>
                <a href="mailto:info@makostars.com" aria-label="Email">
                  <Mail className="w-6 h-6 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer" />
                </a>
                <a href="https://line.me/ti/p/makostars" target="_blank" rel="noopener noreferrer" aria-label="LINE">
                  <MessageCircle className="w-6 h-6 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <a href="https://makostars.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Home
                </a>
                <a href="https://makostars.com/about/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  About Us
                </a>
                <a href="https://bumblebenglish.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  BumbleB English School
                </a>
                <a href="https://makostars.com/frequently-asked-questions/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  FAQs
                </a>
                <a href="https://makostars.com/contact/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Contact Us
                </a>
              </nav>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
              <nav className="flex flex-col gap-2">
                <a href="https://makostars.com/act-on-specified-commercial-transactions/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Act on Specified Commercial Transactions
                </a>
                <a href="https://makostars.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="https://makostars.com/refund_returns/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Return Policy
                </a>
                <a href="https://makostars.com/shipping-policy/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Shipping Policy
                </a>
                <a href="https://makostars.com/terms-conditions/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Terms and Conditions
                </a>
                <a href="https://makostars.com/disclaimer/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Disclaimer
                </a>
              </nav>
            </div>

            {/* Store Column */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Store</h3>
              <nav className="flex flex-col gap-2">
                <a href="https://store.makostars.com/collections/all" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Shop All
                </a>
                <a href="https://store.makostars.com/collections/brain-quest-workbooks" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Brain Quest Workbooks
                </a>
                <a href="https://store.makostars.com/collections/dr-seuss-books" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Dr. Seuss Books
                </a>
                <a href="https://store.makostars.com/collections/roald-dahl-books" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Roald Dahl Books
                </a>
                <a href="https://store.makostars.com/collections/scholastic-success-workbooks" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Scholastic Success Workbooks
                </a>
              </nav>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-700 gap-4">
            <p className="text-gray-400 text-sm">MakoStars LLC. Learn English for School | Work | Life</p>
            <p className="text-gray-400 text-sm">Copyright © 2025 All rights reserved. MakoStars LLC.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
