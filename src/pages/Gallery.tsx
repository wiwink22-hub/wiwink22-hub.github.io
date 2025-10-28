import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBurger from "@/assets/hero-burger.jpg";
import classicBurger from "@/assets/burger-classic.jpg";
import baconBurger from "@/assets/burger-bacon.jpg";
import spicyBurger from "@/assets/burger-spicy.jpg";
import fries from "@/assets/fries.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: heroBurger, alt: "Signature Burger", category: "Burgers" },
    { src: classicBurger, alt: "Classic Cheeseburger", category: "Burgers" },
    { src: baconBurger, alt: "Bacon Deluxe", category: "Burgers" },
    { src: spicyBurger, alt: "Spicy Chicken Burger", category: "Burgers" },
    { src: fries, alt: "Golden French Fries", category: "Sides" },
    { src: classicBurger, alt: "Gourmet Creation", category: "Specials" },
    { src: baconBurger, alt: "Double Bacon", category: "Burgers" },
    { src: spicyBurger, alt: "Hot & Spicy", category: "Burgers" },
    { src: heroBurger, alt: "Premium Burger", category: "Specials" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-muted-foreground">
            A visual feast of our delicious creations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer hover:shadow-[var(--shadow-warm)] transition-[var(--transition-smooth)]"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-[var(--transition-smooth)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-[var(--transition-smooth)]">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-16 p-8 bg-primary/5 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Follow Us on Instagram</h2>
          <p className="text-muted-foreground mb-6">
            Tag us @burgerhouse for a chance to be featured!
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-105 transition-[var(--transition-bounce)] shadow-[var(--shadow-warm)]"
            >
              @burgerhouse
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
