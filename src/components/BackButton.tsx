import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  to: string;
  label?: string;
}

const BackButton = ({ to, label = "Back" }: BackButtonProps) => {
  return (
    <div className="container mx-auto px-4 py-4 mt-20">
      <Link to={to}>
        <Button variant="outline" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          {label}
        </Button>
      </Link>
    </div>
  );
};

export default BackButton;
