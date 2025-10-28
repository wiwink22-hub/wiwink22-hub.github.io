import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface MenuItemDialogProps {
  item: {
    id: string;
    name: string;
    description: string;
    fullDescription?: string;
    price: number;
    image?: string;
    calories?: number;
    ingredients?: string[];
    allergens?: string[];
  };
}

const MenuItemDialog = ({ item }: MenuItemDialogProps) => {
  const { addItem } = useCart();

  const handleAddToOrder = () => {
    addItem({
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      image: item.image,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full">
          <Info className="mr-2" size={16} />
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{item.name}</DialogTitle>
          <DialogDescription className="text-lg text-primary font-bold">
            ${item.price.toFixed(2)}
          </DialogDescription>
        </DialogHeader>

        {item.image && (
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="space-y-4">
          <div>
            <h3 className="font-bold mb-2">Description</h3>
            <p className="text-muted-foreground">
              {item.fullDescription || item.description}
            </p>
          </div>

          {item.calories && (
            <div>
              <h3 className="font-bold mb-2">Nutritional Information</h3>
              <p className="text-muted-foreground">{item.calories} calories</p>
            </div>
          )}

          {item.ingredients && item.ingredients.length > 0 && (
            <div>
              <h3 className="font-bold mb-2">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ingredient, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.allergens && item.allergens.length > 0 && (
            <div>
              <h3 className="font-bold mb-2 text-destructive">Allergen Information</h3>
              <div className="flex flex-wrap gap-2">
                {item.allergens.map((allergen, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm font-medium"
                  >
                    {allergen}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3 pt-4">
          <Button 
            variant="hero" 
            size="lg" 
            className="flex-1"
            onClick={handleAddToOrder}
          >
            Add to Order
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuItemDialog;
