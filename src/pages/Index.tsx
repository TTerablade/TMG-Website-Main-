import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#221F26]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-[#1A1F2C]/90 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary space-glow">TERABLADE</h1>
            </div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-primary transition-colors">About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 space-gradient">
                      <div className="grid gap-3">
                        <NavigationMenuLink href="/about" className="hover:text-primary transition-colors">Our Story</NavigationMenuLink>
                        <NavigationMenuLink href="/team" className="hover:text-primary transition-colors">Our Team</NavigationMenuLink>
                        <NavigationMenuLink href="/careers" className="hover:text-primary transition-colors">Careers</NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-primary transition-colors">Channels</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 space-gradient">
                      <div className="grid gap-3">
                        <NavigationMenuLink href="/terablade-tech" className="hover:text-primary transition-colors">Terablade Tech</NavigationMenuLink>
                        <NavigationMenuLink href="/tech-circuit" className="hover:text-primary transition-colors">Tech Circuit</NavigationMenuLink>
                        <NavigationMenuLink href="/tech-linked" className="hover:text-primary transition-colors">Tech Linked</NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-primary transition-colors">Contact</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 space-gradient">
                      <div className="grid gap-3">
                        <NavigationMenuLink href="/contact" className="hover:text-primary transition-colors">Get in Touch</NavigationMenuLink>
                        <NavigationMenuLink href="/support" className="hover:text-primary transition-colors">Support</NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
              alt="Tech Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95" />
          </div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight space-glow">
              IGNITING PASSION<br />FOR TECHNOLOGY
            </h1>
          </div>
        </section>

        {/* Channels Section */}
        <section className="py-20 px-4 space-gradient">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary space-glow">CHANNELS</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
            {[
              {
                title: "TERABLADE TECH",
                description: "Your premier destination for in-depth tech reviews, unboxings, and industry analysis.",
                image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              },
              {
                title: "TECH CIRCUIT",
                description: "Exploring the cutting edge of technology with hands-on demonstrations and expert insights.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
              },
              {
                title: "TECH LINKED",
                description: "Daily tech news and updates keeping you informed about the latest industry developments.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
              },
              {
                title: "POWER CIRCUIT",
                description: "Deep dives into PC hardware, benchmarking, and performance optimization guides.",
                image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086"
              }
            ].map((channel, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden card-hover">
                <div className="aspect-video relative">
                  <img 
                    src={channel.image} 
                    alt={channel.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary space-glow">{channel.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{channel.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" className="bg-secondary hover:bg-secondary/80 transition-colors">
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Learn More Section */}
        <section className="bg-primary/10 py-20 relative">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-primary mb-8 space-glow">LEARN MORE ABOUT OUR OTHER TEAMS</h2>
            <Button variant="secondary" size="lg" className="bg-secondary hover:bg-secondary/80 transition-colors">
              Explore More
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)"
          }} />
        </section>

        {/* Sponsor Testimonials */}
        <section className="py-20 px-4 space-gradient">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary space-glow">SPONSOR TESTIMONIALS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "CORSAIR",
                  quote: "Working with Terablade has consistently delivered exceptional results for our brand awareness and product launches.",
                  logo: "https://images.unsplash.com/photo-1618477388954-7852f32655ec"
                },
                {
                  name: "NVIDIA",
                  quote: "The technical accuracy and production quality of Terablade's content aligns perfectly with our brand values.",
                  logo: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
                },
                {
                  name: "ASUS",
                  quote: "Terablade's authentic approach to tech content creation resonates strongly with our target audience.",
                  logo: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8"
                }
              ].map((sponsor, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 card-hover">
                  <CardHeader>
                    <div className="h-12 w-32 bg-muted rounded mb-4" />
                    <CardDescription className="text-muted-foreground italic">"{sponsor.quote}"</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold text-primary">— {sponsor.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;