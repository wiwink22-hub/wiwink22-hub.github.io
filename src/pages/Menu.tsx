import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuItemDialog from "@/components/MenuItemDialog";
import { useCart } from "@/contexts/CartContext";
import classicBurger from "@/assets/burger-classic.jpg";
import baconBurger from "@/assets/burger-bacon.jpg";
import spicyBurger from "@/assets/burger-spicy.jpg";
import fries from "@/assets/fries.jpg";

const Menu = () => {
  const { addItem } = useCart();

  const menuCategories = [
    {
      title: "Burgers",
      items: [
        { 
          id: "classic-burger",
          name: "Classic Burger", 
          description: "Beef patty, cheddar, lettuce, tomato", 
          fullDescription: "Our signature classic burger features a juicy 100% beef patty, melted cheddar cheese, crisp lettuce, fresh tomato slices, and our special house sauce on a toasted brioche bun.",
          price: 8.99, 
          image: classicBurger,
          calories: 650,
          ingredients: ["Beef Patty", "Cheddar Cheese", "Lettuce", "Tomato", "House Sauce", "Brioche Bun"],
          allergens: ["Gluten", "Dairy"]
        },
        { 
          id: "bacon-deluxe",
          name: "Bacon Deluxe", 
          description: "Double bacon, cheese, special sauce", 
          fullDescription: "Indulge in our Bacon Deluxe with two premium beef patties, crispy double bacon strips, melted American cheese, and our secret special sauce that keeps customers coming back.",
          price: 12.99, 
          image: baconBurger,
          calories: 890,
          ingredients: ["Double Beef Patty", "Bacon", "American Cheese", "Special Sauce", "Pickles", "Sesame Bun"],
          allergens: ["Gluten", "Dairy", "Eggs"]
        },
        { 
          id: "spicy-chicken",
          name: "Spicy Chicken", 
          description: "Crispy chicken, jalapeños, pepper jack", 
          fullDescription: "Heat lovers rejoice! Our spicy chicken burger features a crispy fried chicken breast, fresh jalapeños, pepper jack cheese, and chipotle mayo on a toasted potato bun.",
          price: 10.99, 
          image: spicyBurger,
          calories: 720,
          ingredients: ["Crispy Chicken", "Jalapeños", "Pepper Jack Cheese", "Chipotle Mayo", "Lettuce", "Potato Bun"],
          allergens: ["Gluten", "Dairy", "Eggs"]
        },
        { 
          id: "mushroom-swiss",
          name: "Mushroom Swiss", 
          description: "Sautéed mushrooms, swiss cheese, garlic aioli", 
          fullDescription: "A gourmet favorite featuring our premium beef patty topped with sautéed portobello mushrooms, melted Swiss cheese, and creamy garlic aioli.",
          price: 11.99, 
          image: classicBurger,
          calories: 740,
          ingredients: ["Beef Patty", "Portobello Mushrooms", "Swiss Cheese", "Garlic Aioli", "Caramelized Onions"],
          allergens: ["Gluten", "Dairy", "Eggs"]
        },
        { 
          id: "bbq-bacon",
          name: "BBQ Bacon", 
          description: "BBQ sauce, crispy bacon, onion rings", 
          fullDescription: "Southern style goodness with our beef patty, smoky BBQ sauce, crispy bacon, crunchy onion rings, and cheddar cheese on a toasted bun.",
          price: 13.99, 
          image: baconBurger,
          calories: 920,
          ingredients: ["Beef Patty", "BBQ Sauce", "Bacon", "Onion Rings", "Cheddar Cheese", "Brioche Bun"],
          allergens: ["Gluten", "Dairy"]
        },
        { 
          id: "veggie-burger",
          name: "Veggie Burger", 
          description: "Plant-based patty, avocado, sprouts", 
          fullDescription: "Our delicious plant-based burger with a Beyond Meat patty, fresh avocado, alfalfa sprouts, tomato, and vegan mayo on a whole wheat bun.",
          price: 9.99, 
          image: spicyBurger,
          calories: 580,
          ingredients: ["Plant-Based Patty", "Avocado", "Alfalfa Sprouts", "Tomato", "Vegan Mayo", "Whole Wheat Bun"],
          allergens: ["Gluten"]
        },
      ],
    },
    {
      title: "Sides",
      items: [
        { 
          id: "french-fries",
          name: "French Fries", 
          description: "Crispy golden fries", 
          fullDescription: "Our classic french fries are hand-cut daily and fried to golden perfection. Seasoned with our special blend of spices.",
          price: 3.99, 
          image: fries,
          calories: 365,
          ingredients: ["Potatoes", "Vegetable Oil", "Sea Salt", "Special Seasoning"],
          allergens: []
        },
        { 
          id: "onion-rings",
          name: "Onion Rings", 
          description: "Beer-battered onion rings", 
          fullDescription: "Thick-cut sweet onions dipped in our signature beer batter and fried until crispy. Served with ranch dipping sauce.",
          price: 4.99, 
          image: fries,
          calories: 410,
          ingredients: ["Sweet Onions", "Beer Batter", "Breadcrumbs", "Ranch Sauce"],
          allergens: ["Gluten", "Dairy"]
        },
        { 
          id: "sweet-potato-fries",
          name: "Sweet Potato Fries", 
          description: "With honey mustard dip", 
          fullDescription: "Sweet and savory sweet potato fries served with our house-made honey mustard dipping sauce.",
          price: 4.99, 
          image: fries,
          calories: 390,
          ingredients: ["Sweet Potatoes", "Brown Sugar", "Cinnamon", "Honey Mustard"],
          allergens: ["Eggs"]
        },
        { 
          id: "loaded-fries",
          name: "Loaded Fries", 
          description: "Cheese, bacon, sour cream", 
          fullDescription: "Our famous french fries loaded with melted cheddar cheese, crispy bacon bits, green onions, and a dollop of sour cream.",
          price: 6.99, 
          image: fries,
          calories: 580,
          ingredients: ["French Fries", "Cheddar Cheese", "Bacon", "Sour Cream", "Green Onions"],
          allergens: ["Dairy"]
        },
      ],
    },
    {
      title: "Drinks",
      items: [
        { 
          id: "soft-drinks",
          name: "Soft Drinks", 
          description: "Coke, Sprite, Fanta", 
          fullDescription: "Choice of Coca-Cola, Sprite, Fanta Orange, or Dr Pepper. Free refills!",
          price: 2.99,
          calories: 150,
          ingredients: ["Carbonated Water", "Sugar", "Flavoring"],
          allergens: []
        },
        { 
          id: "milkshakes",
          name: "Milkshakes", 
          description: "Vanilla, Chocolate, Strawberry", 
          fullDescription: "Thick and creamy hand-spun milkshakes made with premium ice cream. Available in Vanilla, Chocolate, or Strawberry. Topped with whipped cream and a cherry.",
          price: 5.99,
          calories: 520,
          ingredients: ["Ice Cream", "Milk", "Whipped Cream", "Cherry"],
          allergens: ["Dairy"]
        },
        { 
          id: "iced-tea",
          name: "Iced Tea", 
          description: "Sweetened or unsweetened", 
          fullDescription: "Freshly brewed iced tea, available sweetened or unsweetened. Made with real tea leaves and served over ice with a lemon wedge.",
          price: 2.99,
          calories: 90,
          ingredients: ["Tea Leaves", "Water", "Sugar (optional)", "Lemon"],
          allergens: []
        },
        { 
          id: "coffee",
          name: "Coffee", 
          description: "Fresh brewed", 
          fullDescription: "Hot or iced coffee brewed fresh daily from premium Arabica beans. Available with cream and sugar.",
          price: 2.49,
          calories: 5,
          ingredients: ["Coffee Beans", "Water", "Cream (optional)", "Sugar (optional)"],
          allergens: ["Dairy (optional)"]
        },
      ],
    },
  ];

  const handleQuickAdd = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      image: item.image,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-muted-foreground">Delicious food made with love</p>
        </div>

        {menuCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-primary">{category.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <Card 
                  key={itemIndex}
                  className="overflow-hidden hover:shadow-[var(--shadow-warm)] transition-[var(--transition-smooth)] group"
                >
                  {item.image && (
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-[var(--transition-smooth)]"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <span className="text-xl font-bold text-primary">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                    
                    <div className="space-y-2">
                      <Button 
                        variant="default" 
                        className="w-full"
                        onClick={() => handleQuickAdd(item)}
                      >
                        Add to Order
                      </Button>
                      <MenuItemDialog item={item} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        <div className="text-center mt-16 p-8 bg-primary/5 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-muted-foreground mb-6">Check your cart and complete your order</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
