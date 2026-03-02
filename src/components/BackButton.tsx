import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface BackButtonProps {
  className?: string;
  variant?: "default" | "outline" | "ghost" | "secondary";
}

const BackButton = ({ className = "", variant = "outline" }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`mb-6 ${className}`}
    >
      <Button
        onClick={handleBack}
        variant={variant}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Button>
    </motion.div>
  );
};

export default BackButton;
