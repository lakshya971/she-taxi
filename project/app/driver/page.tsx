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
  UserCircle,
  BarChart,
  User,
  DollarSign
} from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
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
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const recentRides = [
  {
    id: 1,
    date: new Date(2025, 4, 15),
    pickup: "123 Main St",
    dropoff: "456 Oak Ave",
    rider: "Emma Wilson",
    amount: 24.50,
    status: "completed",
    rating: 5
  },
  {
    id: 2,
    date: new Date(2025, 4, 12),
    pickup: "789 Pine Rd",
    dropoff: "222 Maple Dr",
    rider: "Olivia Taylor",
    amount: 18.75,
    status: "completed",
    rating: 5
  },
  {
    id: 3,
    date: new Date(2025, 4, 8),
    pickup: "555 Cedar Ln",
    dropoff: "Airport Terminal B",
    rider: "Sophia Lee",
    amount: 32.25,
    status: "completed",
    rating: 4
  }
];

const pendingRides = [
  {
    id: 4,
    date: new Date(),
    estimatedPickupTime: new Date(Date.now() + 5 * 60000), // 5 minutes from now
    pickup: "123 Main St",
    dropoff: "Downtown Conference Center",
    rider: "Mia Johnson",
    estimatedAmount: 22.75,
    distance: 5.3,
    duration: 15
  }
];

const DriverDashboard = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [isOnline, setIsOnline] = useState(true);
  const [earnings, setEarnings] = useState({
    today: 56.75,
    thisWeek: 324.50,
    thisMonth: 1248.25
  });

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
              {greeting()}, Sarah
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
            <div className="flex items-center space-x-2">
              <span className={isOnline ? "text-green-500" : "text-muted-foreground"}>
                {isOnline ? "Online" : "Offline"}
              </span>
              <Switch
                checked={isOnline}
                onCheckedChange={setIsOnline}
              />
            </div>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    2
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0">
                <div className="p-4 border-b">
                  <h3 className="font-medium">Notifications</h3>
                </div>
                <div className="max-h-80 overflow-auto">
                  <div className="p-4 border-b hover:bg-muted/50 cursor-pointer">
                    <p className="font-medium text-sm">New ride request nearby!</p>
                    <p className="text-xs text-muted-foreground mt-1">Check your pending rides</p>
                    <p className="text-xs text-muted-foreground mt-1">2 mins ago</p>
                  </div>
                  <div className="p-4 hover:bg-muted/50 cursor-pointer">
                    <p className="font-medium text-sm">Weekly earnings summary available</p>
                    <p className="text-xs text-muted-foreground mt-1">View your weekly performance</p>
                    <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            
            <div className="flex items-center space-x-2">
              <Avatar className="h-10 w-10 border-2 border-pink-500">
                <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <UserCircle className="mr-2 h-4 w-4" />
                    My Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BarChart className="mr-2 h-4 w-4" />
                    Earnings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Car className="mr-2 h-4 w-4" />
                    Vehicle Info
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
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">Ride Requests</CardTitle>
                  <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                    {pendingRides.length} Available
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {pendingRides.length > 0 ? (
                  <div className="space-y-4">
                    {pendingRides.map((ride) => (
                      <div 
                        key={ride.id} 
                        className="bg-muted/30 rounded-2xl p-5 border border-muted hover:border-pink-200 dark:hover:border-pink-900 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <Badge variant="outline" className="rounded-full text-xs font-normal">
                              {format(ride.estimatedPickupTime, "h:mm a")} Pickup
                            </Badge>
                            <h3 className="font-medium text-lg mt-2">
                              {ride.pickup} to {ride.dropoff}
                            </h3>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold">${ride.estimatedAmount.toFixed(2)}</div>
                            <div className="text-sm text-muted-foreground">Est. fare</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="bg-muted/50 rounded-xl p-3 text-center">
                            <div className="text-sm text-muted-foreground mb-1">Distance</div>
                            <div className="font-medium">{ride.distance} mi</div>
                          </div>
                          <div className="bg-muted/50 rounded-xl p-3 text-center">
                            <div className="text-sm text-muted-foreground mb-1">Duration</div>
                            <div className="font-medium">{ride.duration} min</div>
                          </div>
                          <div className="bg-muted/50 rounded-xl p-3 text-center">
                            <div className="text-sm text-muted-foreground mb-1">Rider</div>
                            <div className="font-medium flex items-center justify-center">
                              <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 mr-1" />
                              4.9
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150" />
                            <AvatarFallback>MJ</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{ride.rider}</div>
                            <div className="text-sm text-muted-foreground">Requesting now</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <Button 
                            variant="outline" 
                            className="rounded-xl h-12"
                          >
                            Decline
                          </Button>
                          <Button 
                            className="rounded-xl h-12 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
                          >
                            Accept Ride
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <Car className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                    <h3 className="text-lg font-medium">No rides available</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      When new ride requests are available in your area, they will appear here.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <Card className="rounded-3xl overflow-hidden border-gray-100 dark:border-gray-700 shadow-md">
                <CardHeader className="p-6">
                  <CardTitle className="text-xl">Recent Rides</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {recentRides.map((ride) => (
                      <div 
                        key={ride.id} 
                        className="p-6 hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full text-pink-500">
                              <Car className="h-6 w-6" />
                            </div>
                            <div>
                              <div className="flex items-center">
                                <Badge variant="outline" className="rounded-full text-xs font-normal mr-2">
                                  {format(ride.date, "MMM d")}
                                </Badge>
                                <Badge 
                                  variant="secondary" 
                                  className="rounded-full text-xs font-normal bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                >
                                  Completed
                                </Badge>
                              </div>
                              <h3 className="font-medium mt-1">
                                {ride.pickup} to {ride.dropoff}
                              </h3>
                              <div className="text-sm text-muted-foreground mt-1">
                                Rider: {ride.rider}
                              </div>
                              <div className="flex items-center mt-1">
                                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                                <span>{ride.rating}.0</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">${ride.amount.toFixed(2)}</div>
                            <Button variant="ghost" size="sm" className="h-8 px-2 text-pink-500">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="rounded-3xl overflow-hidden border-gray-100 dark:border-gray-700 shadow-md mb-8">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
                <CardTitle className="text-xl">Earnings Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-muted/50 rounded-xl p-3 text-center">
                    <div className="text-sm text-muted-foreground mb-1">Today</div>
                    <div className="text-xl font-bold">${earnings.today.toFixed(2)}</div>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-3 text-center">
                    <div className="text-sm text-muted-foreground mb-1">This Week</div>
                    <div className="text-xl font-bold">${earnings.thisWeek.toFixed(2)}</div>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-3 text-center">
                    <div className="text-sm text-muted-foreground mb-1">This Month</div>
                    <div className="text-xl font-bold">${earnings.thisMonth.toFixed(2)}</div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full rounded-xl mb-6"
                >
                  View Detailed Earnings
                </Button>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Quick Stats</h3>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-xl">
                    <div className="flex items-center">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mr-3">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Online Hours</div>
                        <div className="font-medium">18.5 hrs this week</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-xl">
                    <div className="flex items-center">
                      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg mr-3">
                        <DollarSign className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Avg. Per Ride</div>
                        <div className="font-medium">$21.75</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-xl">
                    <div className="flex items-center">
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg mr-3">
                        <Star className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Rating</div>
                        <div className="font-medium">4.92 (84 ratings)</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-xl">
                    <div className="flex items-center">
                      <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded-lg mr-3">
                        <User className="h-5 w-5 text-pink-600" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Total Riders</div>
                        <div className="font-medium">126 served</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-3xl overflow-hidden border-gray-100 dark:border-gray-700 shadow-md">
              <CardHeader className="p-6">
                <CardTitle className="text-xl">Vehicle Status</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="bg-muted/30 rounded-xl p-4 mb-4 flex items-center">
                  <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full text-pink-500 mr-4">
                    <Car className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Toyota Camry</h3>
                    <p className="text-sm text-muted-foreground">2021 • White • ABC-1234</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last Maintenance</span>
                    <span className="font-medium">Apr 15, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Next Maintenance Due</span>
                    <span className="font-medium">Jul 15, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Insurance Expires</span>
                    <span className="font-medium">Dec 31, 2025</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full rounded-xl">
                  Update Vehicle Info
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;