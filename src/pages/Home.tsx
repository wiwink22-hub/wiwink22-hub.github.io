import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, MapPin, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import heroBurger from "@/assets/hero-burger.jpg";
import classicBurger from "@/assets/burger-classic.jpg";
import baconBurger from "@/assets/burger-bacon.jpg";
import spicyBurger from "@/assets/burger-spicy.jpg";

const Home = () => {
  const { addItem } = useCart();
  
  const featuredBurgers = [
    {
      id: "classic-burger",
      name: "Classic Burger",
      description: "Beef patty, cheddar, lettuce, tomato",
      price: 8.99,
      image: classicBurger,
    },
    {
      id: "bacon-deluxe",
      name: "Bacon Deluxe",
      description: "Double bacon, cheese, special sauce",
      price: 12.99,
      image: baconBurger,
    },
    {
      id: "spicy-chicken",
      name: "Spicy Chicken",
      description: "Crispy chicken, jalapeños, pepper jack",
      price: 10.99,
      image: spicyBurger,
    },
  ];

  const handleAddToCart = (burger: typeof featuredBurgers[0]) => {
    addItem({
      id: burger.id,
      name: burger.name,
      description: burger.description,
      price: burger.price,
      image: burger.image,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroBurger})`,
            filter: "brightness(0.4)"
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            The Best Burgers
            <span className="text-primary block">In Town</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
            Handcrafted with premium ingredients and served with passion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Button variant="hero" size="lg" asChild>
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground" asChild>
              <Link to="/contact">Find Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-[var(--shadow-warm)] transition-[var(--transition-smooth)]">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                100% fresh beef, locally sourced ingredients
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-[var(--shadow-warm)] transition-[var(--transition-smooth)]">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Service</h3>
              <p className="text-muted-foreground">
                Your order ready in 15 minutes or less
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-[var(--shadow-warm)] transition-[var(--transition-smooth)]">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Great Location</h3>
              <p className="text-muted-foreground">
                Conveniently located in the heart of the city
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Burgers */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Signature Burgers</h2>
          <p className="text-xl text-muted-foreground">Taste the difference quality makes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBurgers.map((burger, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-[var(--shadow-warm)] transition-[var(--transition-smooth)] group"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={burger.image} 
                  alt={burger.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-[var(--transition-smooth)]"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{burger.name}</h3>
                <p className="text-muted-foreground mb-4">{burger.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${burger.price.toFixed(2)}</span>
                  <Button variant="default" onClick={() => handleAddToCart(burger)}>
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/menu">See Full Menu</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
