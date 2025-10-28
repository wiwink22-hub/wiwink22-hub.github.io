import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-primary mb-4">🍔 BurgerHouse</div>
            <p className="text-muted-foreground text-sm">
              Serving the best burgers in town since 2020. Made with love and premium ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-[var(--transition-smooth)]">
                Home
              </Link>
              <Link to="/menu" className="text-sm text-muted-foreground hover:text-primary transition-[var(--transition-smooth)]">
                Menu
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-[var(--transition-smooth)]">
                About
              </Link>
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-[var(--transition-smooth)]">
                Gallery
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>123 Burger Street</p>
              <p>Food City, FC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@burgerhouse.com</p>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">Opening Hours</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
              <p>Mon - Thu: 11am - 10pm</p>
              <p>Fri - Sat: 11am - 11pm</p>
              <p>Sunday: 12pm - 9pm</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-[var(--transition-smooth)]">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-[var(--transition-smooth)]">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-[var(--transition-smooth)]">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 BurgerHouse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
