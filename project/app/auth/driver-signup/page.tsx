"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Car, Eye, EyeOff, Loader2, Upload } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from '@/lib/utils';

const driverSignUpSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  drivingLicense: z.string().min(1, "Driving license number is required"),
  vehicleDetails: z.string().min(1, "Vehicle details are required"),
  terms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  })
});

const DriverSignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [licenseFile, setLicenseFile] = useState<File | null>(null);
  const [insuranceFile, setInsuranceFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof driverSignUpSchema>>({
    resolver: zodResolver(driverSignUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      drivingLicense: "",
      vehicleDetails: "",
      terms: false
    },
  });

  const onSubmit = async (values: z.infer<typeof driverSignUpSchema>) => {
    setIsLoading(true);
    console.log(values);
    console.log("License file:", licenseFile);
    console.log("Insurance file:", insuranceFile);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect would happen here
    }, 1500);
  };

  const handleLicenseFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLicenseFile(e.target.files[0]);
    }
  };

  const handleInsuranceFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setInsuranceFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-pink-50 dark:bg-gray-900">
      <div className="container sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Link href="/" className="flex items-center">
            <Car className="h-8 w-8 text-pink-500" />
            <span className="ml-2 text-2xl font-bold">SheTaxi</span>
          </Link>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-center text-3xl font-extrabold"
        >
          Become a Driver
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2 text-center text-sm text-muted-foreground"
        >
          Join our community of women drivers and earn on your schedule
        </motion.p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn(
            "bg-white dark:bg-gray-800 py-8 px-4 shadow rounded-3xl sm:px-10",
            "border border-gray-100 dark:border-gray-700"
          )}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="rounded-xl h-12"
                        placeholder="Jane Smith"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email address</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="rounded-xl h-12"
                          placeholder="jane.smith@example.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="rounded-xl h-12"
                          placeholder="(123) 456-7890"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          className="rounded-xl h-12"
                          placeholder="••••••••"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-2.5"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="drivingLicense"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Driving License Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="rounded-xl h-12"
                        placeholder="DL1234567890"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="space-y-4">
                <Label>Upload Driving License (Front & Back)</Label>
                <div className={cn(
                  "border-2 border-dashed rounded-xl p-4 text-center",
                  "border-gray-300 dark:border-gray-600"
                )}>
                  <input
                    type="file"
                    id="license-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleLicenseFileChange}
                  />
                  <Label
                    htmlFor="license-upload"
                    className="cursor-pointer flex flex-col items-center justify-center py-3"
                  >
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <span className="font-medium text-sm">
                      {licenseFile ? licenseFile.name : "Click to upload"}
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      JPG, PNG or PDF up to 5MB
                    </span>
                  </Label>
                </div>
              </div>
              
              <div className="space-y-4">
                <Label>Upload Vehicle Insurance</Label>
                <div className={cn(
                  "border-2 border-dashed rounded-xl p-4 text-center",
                  "border-gray-300 dark:border-gray-600"
                )}>
                  <input
                    type="file"
                    id="insurance-upload"
                    className="hidden"
                    accept="image/*,.pdf"
                    onChange={handleInsuranceFileChange}
                  />
                  <Label
                    htmlFor="insurance-upload"
                    className="cursor-pointer flex flex-col items-center justify-center py-3"
                  >
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <span className="font-medium text-sm">
                      {insuranceFile ? insuranceFile.name : "Click to upload"}
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      JPG, PNG or PDF up to 5MB
                    </span>
                  </Label>
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="vehicleDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vehicle Details (Make, Model, Year, Color)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="rounded-xl h-12"
                        placeholder="Toyota Camry, 2020, White"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal">
                        I agree to the{" "}
                        <Link 
                          href="/terms" 
                          className="text-pink-500 hover:text-pink-600"
                        >
                          terms and conditions
                        </Link>
                        {" "}and confirm that I am a woman
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              
              <Button
                type="submit"
                className={cn(
                  "w-full rounded-xl py-6 bg-gradient-to-r from-pink-500 to-purple-500",
                  "hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
                )}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing application...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </form>
          </Form>

          <div className="mt-6">
            <p className="text-center text-sm text-muted-foreground">
              Already a driver?{" "}
              <Link 
                href="/auth/login" 
                className="font-medium text-pink-500 hover:text-pink-600"
              >
                Login here
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DriverSignupPage;