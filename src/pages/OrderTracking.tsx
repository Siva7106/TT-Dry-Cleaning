import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Package, 
  Truck, 
  Clock, 
  CheckCircle, 
  MapPin, 
  Phone,
  Calendar,
  User,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const mockOrderData = {
  "ORD-001": {
    id: "ORD-001",
    customerName: "Raj Kumar",
    phone: "+91 98765 43210",
    service: "Dry Cleaning",
    items: [
      { name: "White Shirt", quantity: 2 },
      { name: "Blue Trousers", quantity: 1 },
      { name: "Suit Jacket", quantity: 1 }
    ],
    totalAmount: "₹24.99",
    pickupAddress: "123 Main St, Chennai",
    deliveryAddress: "123 Main St, Chennai",
    pickupDate: "2024-02-18",
    estimatedDelivery: "2024-02-20",
    currentStatus: "in-progress",
    statusHistory: [
      {
        status: "order-placed",
        label: "Order Placed",
        description: "Your order has been received",
        timestamp: "2024-02-18 09:30 AM",
        completed: true
      },
      {
        status: "picked-up",
        label: "Picked Up",
        description: "Your clothes have been collected",
        timestamp: "2024-02-18 02:00 PM",
        completed: true
      },
      {
        status: "cleaning",
        label: "Cleaning",
        description: "Your clothes are being professionally cleaned",
        timestamp: "2024-02-19 10:00 AM",
        completed: true
      },
      {
        status: "quality-check",
        label: "Quality Check",
        description: "Final quality inspection in progress",
        timestamp: "2024-02-19 04:00 PM",
        completed: false
      },
      {
        status: "ready-for-delivery",
        label: "Ready for Delivery",
        description: "Your clothes are clean and ready",
        timestamp: "Estimated: 2024-02-20 09:00 AM",
        completed: false
      },
      {
        status: "delivered",
        label: "Delivered",
        description: "Your clothes have been delivered",
        timestamp: "Estimated: 2024-02-20 02:00 PM",
        completed: false
      }
    ]
  }
};

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [orderData, setOrderData] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!orderId.trim()) {
      setError("Please enter an Order ID");
      return;
    }

    const order = mockOrderData[orderId.toUpperCase()];
    if (order) {
      setOrderData(order);
      setError("");
    } else {
      setError("Order not found. Please check your Order ID and try again.");
      setOrderData(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    const iconClass = completed ? "text-primary" : "text-muted-foreground";
    
    switch (status) {
      case "order-placed":
        return <Package className={`h-6 w-6 ${iconClass}`} />;
      case "picked-up":
        return <Truck className={`h-6 w-6 ${iconClass}`} />;
      case "cleaning":
        return <Clock className={`h-6 w-6 ${iconClass}`} />;
      case "quality-check":
        return <CheckCircle className={`h-6 w-6 ${iconClass}`} />;
      case "ready-for-delivery":
        return <Package className={`h-6 w-6 ${iconClass}`} />;
      case "delivered":
        return <CheckCircle className={`h-6 w-6 ${iconClass}`} />;
      default:
        return <Clock className={`h-6 w-6 ${iconClass}`} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <BackButton />
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Order <span className="gradient-text">Tracking</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your order status in real-time. Enter your Order ID to get started.
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Enter your Order ID (e.g., ORD-001)"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pl-12 py-6 text-lg"
                  />
                </div>
                <Button 
                  onClick={handleSearch}
                  size="lg"
                  className="px-8 py-6 text-lg"
                >
                  Track Order
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                >
                  {error}
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Order Details */}
        {orderData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Order Info */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Order ID</p>
                      <p className="font-semibold">{orderData.id}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Customer</p>
                      <div className="flex items-center gap-2 mt-1">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <p className="font-medium">{orderData.customerName}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm">{orderData.phone}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Service</p>
                      <Badge variant="secondary" className="mt-1">
                        {orderData.service}
                      </Badge>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Total Amount</p>
                      <p className="font-semibold text-lg">{orderData.totalAmount}</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Pickup Date</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <p className="font-medium">{orderData.pickupDate}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <p className="font-medium">{orderData.estimatedDelivery}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Pickup Address</p>
                      <div className="flex items-start gap-2 mt-1">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <p className="text-sm">{orderData.pickupAddress}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Items</p>
                      <div className="space-y-1">
                        {orderData.items.map((item: any, index: number) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>{item.name}</span>
                            <span className="text-muted-foreground">x{item.quantity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Status Tracker */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      {/* Progress Line */}
                      <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-border"></div>
                      
                      {/* Status Steps */}
                      <div className="space-y-8">
                        {orderData.statusHistory.map((step: any, index: number) => (
                          <div key={step.status} className="relative flex items-start gap-4">
                            {/* Status Icon */}
                            <div className="relative z-10">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                step.completed 
                                  ? 'bg-primary text-white' 
                                  : 'bg-muted text-muted-foreground'
                              }`}>
                                {getStatusIcon(step.status, step.completed)}
                              </div>
                              {!step.completed && index === orderData.statusHistory.findIndex((s: any) => !s.completed) && (
                                <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse"></div>
                              )}
                            </div>

                            {/* Status Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-lg">{step.label}</h3>
                                {step.completed && (
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                )}
                                {!step.completed && index === orderData.statusHistory.findIndex((s: any) => !s.completed) && (
                                  <Badge className="bg-primary text-white">Current</Badge>
                                )}
                              </div>
                              <p className="text-muted-foreground mb-2">{step.description}</p>
                              <p className="text-sm text-muted-foreground">
                                {step.timestamp}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        )}

        {/* Sample Order IDs */}
        {!orderData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto mt-12"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Sample Order IDs for Testing:</h3>
                <div className="space-y-2">
                  {Object.keys(mockOrderData).map((id) => (
                    <div key={id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="font-mono">{id}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          setOrderId(id);
                          handleSearch();
                        }}
                      >
                        Track This Order
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default OrderTracking;
