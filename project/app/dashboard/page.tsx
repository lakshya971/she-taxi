"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  CreditCard, 
  Star, 
  Search,
  ChevronRight,
  MoreVertical,
  Sparkles,
  Car,
  Bell,
  UserCircle
} from 'lucide-react';
import { format } from 'date-fns';
import { Button, buttonVariants } from '@/components/ui/button'; // Added buttonVariants
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge, badgeVariants } from '@/components/ui/badge'; // Added badgeVariants
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'; // Added Popover imports
import { cn } from '@/lib/utils'; // Added cn import

const recentRides = [
  {
    id: 1,
    date: new Date(2025, 4, 15),
    pickup: "123 Main St",
    dropoff: "456 Oak Ave",
    driver: "Sarah Johnson",
    amount: 24.50,
    status: "completed",
    rating: 5
  },
  {
    id: 2,
    date: new Date(2025, 4, 12),
    pickup: "789 Pine Rd",
    dropoff: "222 Maple Dr",
    driver: "Maria Garcia",
    amount: 18.75,
    status: "completed",
    rating: 4
  },
  {
    id: 3,
    date: new Date(2025, 4, 8),
    pickup: "555 Cedar Ln",
    dropoff: "Airport Terminal B",
    driver: "Priya Patel",
    amount: 32.25,
    status: "completed",
    rating: 5
  }
];

const upcomingRides = [
  {
    id: 4,
    date: new Date(2025, 4, 22, 9, 0),
    pickup: "123 Main St",
    dropoff: "Downtown Conference Center",
    driver: "Pending",
    amount: 0,
    status: "scheduled"
  }
];

const favoriteLocations = [
  {
    id: 1,
    name: "Home",
    address: "123 Main St, Apt 4B",
    icon: "🏠"
  },
  {
    id: 2,
    name: "Work",
    address: "555 Business Ave, Suite 200",
    icon: "🏢"
  },
  {
    id: 3,
    name: "Gym",
    address: "789 Fitness Blvd",
    icon: "💪"
  }
];

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const greeting = () => {
    if (!currentTime) return "Welcome";
    const hour = currentTime.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  if (!currentTime) {
    return null; // Or a loading state
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold"
            >
              {greeting()}, Emma
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground mt-1"
            >
              {format(currentTime, "EEEE, MMMM d, yyyy")}
            </motion.p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Popover>
              <PopoverTrigger asChild>
                <Button className={cn(buttonVariants({ variant: "outline", size: "icon" }), "rounded-full relative")}>
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    3
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0">
                <div className="p-4 border-b">
                  <h3 className="font-medium">Notifications</h3>
                </div>
                <div className="max-h-80 overflow-auto">
                  <div className="p-4 border-b hover:bg-muted/50 cursor-pointer">
                    <p className="font-medium text-sm">Special discount for your next ride!</p>
                    <p className="text-xs text-muted-foreground mt-1">Use code SPRING25 for 25% off</p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                  </div>
                  <div className="p-4 border-b hover:bg-muted/50 cursor-pointer">
                    <p className="font-medium text-sm">Your ride with Sarah was completed</p>
                    <p className="text-xs text-muted-foreground mt-1">Don't forget to leave a review</p>
                    <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                  </div>
                  <div className="p-4 hover:bg-muted/50 cursor-pointer">
                    <p className="font-medium text-sm">Welcome to SheTaxi!</p>
                    <p className="text-xs text-muted-foreground mt-1">We're happy to have you join us</p>
                    <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            
            <div className="flex items-center space-x-2">
              <Avatar className="h-10 w-10 border-2 border-pink-500">
                <AvatarImage src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150" />
                <AvatarFallback>EM</AvatarFallback>
              </Avatar>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full")}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <UserCircle className="mr-2 h-4 w-4" />
                    My Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Star className="mr-2 h-4 w-4" />
                    Saved Locations
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Methods
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="rounded-3xl overflow-hidden border-gray-100 dark:border-gray-700 shadow-md">
              <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6">
                <CardTitle className="text-xl">Book a Ride</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Pickup location"
                      className="pl-10 h-12 rounded-xl border-muted"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                    />
                  </div>
                  
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Drop-off location"
                      className="pl-10 h-12 rounded-xl border-muted"
                      value={dropLocation}
                      onChange={(e) => setDropLocation(e.target.value)}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="date"
                        defaultValue={format(currentTime, "yyyy-MM-dd")}
                        className="pl-10 h-12 rounded-xl border-muted"
                      />
                    </div>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="time"
                        defaultValue={format(currentTime, "HH:mm")}
                        className="pl-10 h-12 rounded-xl border-muted"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full rounded-xl h-12 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
                    disabled={!pickupLocation || !dropLocation}
                  >
                    Find Drivers
                  </Button>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-medium mb-3">Favorite Locations</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {favoriteLocations.map((location) => (
                      <div
                        key={location.id}
                        className="bg-muted/50 rounded-xl p-3 text-center cursor-pointer hover:bg-muted transition-colors"
                        onClick={() => setPickupLocation(location.address)}
                      >
                        <div className="text-2xl mb-1">{location.icon}</div>
                        <div className="font-medium text-sm">{location.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <Tabs defaultValue="recent">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Your Rides</h2>
                  <TabsList className="rounded-full">
                    <TabsTrigger value="recent" className="rounded-full">Recent</TabsTrigger>
                    <TabsTrigger value="upcoming" className="rounded-full">Upcoming</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="recent" className="mt-0">
                  <div className="space-y-4">
                    {recentRides.map((ride) => (
                      <Card key={ride.id} className="rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                        <CardContent className="p-0">
                          <div className="p-4 flex items-center justify-between">
                            <div className="flex items-start space-x-4">
                              <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full text-pink-500">
                                <Car className="h-6 w-6" />
                              </div>
                              <div>
                                <div className="flex items-center">
                                  <Badge className={cn(badgeVariants({ variant: "outline" }), "rounded-full text-xs font-normal mr-2")}>
                                    {format(ride.date, "MMM d")}
                                  </Badge>
                                  <Badge
                                    className={cn(badgeVariants({ variant: "secondary" }), "rounded-full text-xs font-normal bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300")}
                                  >
                                    Completed
                                  </Badge>
                                </div>
                                <h3 className="font-medium mt-1">
                                  {ride.pickup} to {ride.dropoff}
                                </h3>
                                <div className="text-sm text-muted-foreground mt-1">
                                  Driver: {ride.driver}
                                </div>
                                <div className="flex items-center mt-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={cn(
                                        "h-4 w-4",
                                        i < ride.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"
                                      )}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold">${ride.amount.toFixed(2)}</div>
                              <Button className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "h-8 px-2 text-pink-500")}>
                                View Details
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="upcoming" className="mt-0">
                  <div className="space-y-4">
                    {upcomingRides.length > 0 ? (
                      upcomingRides.map((ride) => (
                        <Card key={ride.id} className="rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                          <CardContent className="p-0">
                            <div className="p-4 flex items-center justify-between">
                              <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-500">
                                  <Calendar className="h-6 w-6" />
                                </div>
                                <div>
                                  <Badge className={cn(badgeVariants({ variant: "outline" }), "rounded-full text-xs font-normal mr-2")}>
                                    {format(ride.date, "MMM d, h:mm a")}
                                  </Badge>
                                  <Badge
                                     className={cn(badgeVariants({ variant: "secondary" }), "rounded-full text-xs font-normal bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300")}
                                  >
                                    Scheduled
                                  </Badge>
                                  <h3 className="font-medium mt-1">
                                    {ride.pickup} to {ride.dropoff}
                                  </h3>
                                  <div className="text-sm text-muted-foreground mt-1">
                                    Driver: {ride.driver}
                                  </div>
                                </div>
                              </div>
                              <Button className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-8 w-8")}>
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        <Sparkles className="h-12 w-12 mx-auto mb-4 text-pink-400" />
                        <p className="font-medium">No upcoming rides scheduled.</p>
                        <p className="text-sm">Ready for your next adventure?</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1 space-y-8"
          >
            <Card className="rounded-3xl border-gray-100 dark:border-gray-700 shadow-md">
              <CardHeader className="p-6 border-b border-gray-100 dark:border-gray-700">
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <Button className={cn(buttonVariants({ variant: "outline" }), "w-full rounded-xl justify-start p-4 h-auto")}>
                  <Search className="mr-3 h-5 w-5 text-pink-500" />
                  Search Past Rides
                </Button>
                <Button className={cn(buttonVariants({ variant: "outline" }), "w-full rounded-xl justify-start p-4 h-auto")}>
                  <Star className="mr-3 h-5 w-5 text-pink-500" />
                  Manage Saved Locations
                </Button>
                <Button className={cn(buttonVariants({ variant: "outline" }), "w-full rounded-xl justify-start p-4 h-auto")}>
                  <CreditCard className="mr-3 h-5 w-5 text-pink-500" />
                  Update Payment Methods
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-gray-100 dark:border-gray-700 shadow-md">
              <CardHeader className="p-6 border-b border-gray-100 dark:border-gray-700">
                <CardTitle className="text-xl">Safety Toolkit</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <Button className={cn(buttonVariants({ variant: "secondary" }), "w-full rounded-xl justify-start p-4 h-auto")}>
                  <UserCircle className="mr-3 h-5 w-5 text-purple-500" />
                  Share Trip Status
                </Button>
                <Button className={cn(buttonVariants({ variant: "secondary" }), "w-full rounded-xl justify-start p-4 h-auto")}>
                  <Bell className="mr-3 h-5 w-5 text-purple-500" />
                  Emergency Assistance
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;