import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Heart, Users, Utensils } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every burger is crafted with passion and attention to detail",
    },
    {
      icon: Utensils,
      title: "Fresh Ingredients",
      description: "We source only the finest, locally-sourced ingredients",
    },
    {
      icon: Users,
      title: "Community First",
      description: "We're proud to serve and support our local community",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized as the best burger joint in the city",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Serving the community since 2020 with passion, quality, and dedication
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  BurgerHouse was born from a simple dream: to create the perfect burger. What started 
                  as a small food truck in 2020 has grown into the city's favorite burger destination.
                </p>
                <p>
                  Our founder, passionate about great food and community, set out to prove that fast 
                  food doesn't have to compromise on quality. Every recipe has been perfected over years 
                  of experimentation and customer feedback.
                </p>
                <p>
                  Today, we're proud to serve thousands of happy customers every week, always maintaining 
                  the same commitment to quality and taste that we started with.
                </p>
              </div>
            </div>
            <div>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                      <div className="text-muted-foreground">Happy Customers</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">50+</div>
                      <div className="text-muted-foreground">Menu Items</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">5</div>
                      <div className="text-muted-foreground">Years of Excellence</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">100%</div>
                      <div className="text-muted-foreground">Fresh Ingredients</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">What makes us different</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-[var(--shadow-warm)] transition-[var(--transition-smooth)]"
              >
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-primary/5 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            To bring people together through exceptional food, served with genuine hospitality 
            in a welcoming atmosphere. We believe great burgers have the power to create memorable 
            moments and lasting connections.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
