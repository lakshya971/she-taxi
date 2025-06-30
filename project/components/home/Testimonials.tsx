"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, Shield, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const testimonials = [
	{
		id: 1,
		content: 'SheTaxi has completely changed how I travel. As a woman who often works late, knowing my driver will be female gives me peace of mind. The app is intuitive, and the drivers are professional and friendly.',
		author: 'Sarah Johnson',
		role: 'Marketing Executive',
		avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
		rating: 5,
		highlight: 'Safety & Comfort',
		rideCount: 47,
		icon: Shield,
	},
	{
		id: 2,
		content: 'I travel a lot for business, and SheTaxi has become my go-to service in every city. The consistency in safety standards and the quality of service is remarkable. Highly recommend to all women travelers!',
		author: 'Michelle Rodriguez',
		role: 'Business Consultant',
		avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
		rating: 5,
		highlight: 'Consistency',
		rideCount: 124,
		icon: Award,
	},
	{
		id: 3,
		content: 'As a college student, I often need rides late at night. SheTaxi gives both me and my parents peace of mind. The drivers are so kind, and I love supporting a service that empowers women.',
		author: 'Emily Zhang',
		role: 'University Student',
		avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150',
		rating: 5,
		highlight: 'Night Safety',
		rideCount: 32,
		icon: Heart,
	},
];

// Function to generate star rating display
const StarRating = ({ rating }: { rating: number }) => {
	return (
		<div className="flex">
			{[...Array(5)].map((_, i) => (
				<Star
					key={i}
					className={cn(
						'h-4 w-4',
						i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
					)}
				/>
			))}
		</div>
	);
};

const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [autoplay, setAutoplay] = useState(true);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const testimonialRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!autoplay) return;

		const interval = setInterval(() => {
			nextTestimonial();
		}, 7000);

		return () => clearInterval(interval);
	}, [autoplay, currentIndex]);

	const nextTestimonial = () => {
		if (isTransitioning) return;

		setIsTransitioning(true);
		setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);

		setTimeout(() => {
			setIsTransitioning(false);
		}, 500);
	};

	const prevTestimonial = () => {
		if (isTransitioning) return;

		setIsTransitioning(true);
		setAutoplay(false);
		setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);

		setTimeout(() => {
			setIsTransitioning(false);
		}, 500);
	};

	const goToTestimonial = (index: number) => {
		if (isTransitioning || currentIndex === index) return;

		setIsTransitioning(true);
		setAutoplay(false);
		setCurrentIndex(index);

		setTimeout(() => {
			setIsTransitioning(false);
		}, 500);
	};

	return (
		<section className="py-16 md:py-24 bg-gradient-to-b from-background to-pink-50/30 dark:to-pink-950/10 relative overflow-hidden">
			{/* Enhanced background elements */}
			<div className="absolute top-0 left-0 opacity-30 dark:opacity-10">
				<div
					className="w-64 h-64 rounded-full bg-pink-200 dark:bg-pink-900 blur-3xl animate-pulse"
					style={{ animationDuration: '8s' }}
				></div>
			</div>
			<div className="absolute bottom-0 right-0 opacity-30 dark:opacity-10">
				<div
					className="w-64 h-64 rounded-full bg-purple-200 dark:bg-purple-900 blur-3xl animate-pulse"
					style={{ animationDuration: '10s', animationDelay: '1s' }}
				></div>
			</div>
			<div className="absolute top-1/2 right-1/4 opacity-20 dark:opacity-5">
				<div
					className="w-40 h-40 rounded-full bg-blue-200 dark:bg-blue-900 blur-3xl animate-pulse"
					style={{ animationDuration: '12s', animationDelay: '2s' }}
				></div>
			</div>

			{/* Decorative elements */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-20 left-[10%] transform rotate-12">
					<Quote className="h-20 w-20 text-pink-300 dark:text-pink-900" />
				</div>
				<div className="absolute bottom-40 right-[15%] transform -rotate-12">
					<Quote className="h-16 w-16 text-purple-300 dark:text-purple-900" />
				</div>
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="inline-flex items-center bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 rounded-full px-3 py-1 text-sm font-medium mb-4"
					>
						<Star className="h-3.5 w-3.5 mr-1" /> 10,000+ Reviews
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400"
					>
						What Our Riders Say
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="mt-4 text-lg text-muted-foreground"
					>
						Hear from women who trust SheTaxi for their daily commutes and travels
					</motion.p>
				</div>

				<div className="relative max-w-4xl mx-auto">
					{/* Navigation buttons */}
					<div className="absolute -left-4 sm:-left-8 top-1/2 transform -translate-y-1/2 z-20">
						<Button
							variant="outline"
							size="icon"
							className="rounded-full h-10 w-10 sm:h-12 sm:w-12 bg-background/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:bg-pink-100 dark:hover:bg-pink-900/20"
							onClick={prevTestimonial}
							disabled={isTransitioning}
						>
							<ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
							<span className="sr-only">Previous testimonial</span>
						</Button>
					</div>

					<div className="absolute -right-4 sm:-right-8 top-1/2 transform -translate-y-1/2 z-20">
						<Button
							variant="outline"
							size="icon"
							className="rounded-full h-10 w-10 sm:h-12 sm:w-12 bg-background/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:bg-pink-100 dark:hover:bg-pink-900/20"
							onClick={nextTestimonial}
							disabled={isTransitioning}
						>
							<ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
							<span className="sr-only">Next testimonial</span>
						</Button>
					</div>

					{/* Testimonial slider */}
					<div ref={testimonialRef} className="overflow-hidden rounded-3xl">
						<div
							className="flex transition-transform duration-700 ease-out"
							style={{ transform: `translateX(-${currentIndex * 100}%)` }}
						>
							{testimonials.map((testimonial) => (
								<div key={testimonial.id} className="min-w-full px-4">
									<motion.div
										initial={{ opacity: 0.8, scale: 0.95 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5 }}
										className={cn(
											'bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 rounded-3xl p-8 md:p-12',
											'border border-gray-100 dark:border-gray-700',
											'shadow-lg shadow-pink-100/20 dark:shadow-pink-900/10'
										)}
									>
										{/* Badge with icon */}
										<div className="flex items-center justify-between mb-6">
											<Badge className="px-3 py-1.5 text-xs font-semibold bg-pink-50 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 border-pink-100 dark:border-pink-800">
												<testimonial.icon className="h-3.5 w-3.5 mr-1" />
												{testimonial.highlight}
											</Badge>
											<div className="flex items-center text-xs text-muted-foreground">
												<span className="font-semibold text-foreground">{testimonial.rideCount}</span>
												<span className="mx-1">rides with SheTaxi</span>
											</div>
										</div>

										{/* Quote icon */}
										<div className="relative mb-6">
											<Quote className="h-10 w-10 text-pink-200 dark:text-pink-800 absolute -top-3 -left-2" />
											<div className="pt-6">
												<StarRating rating={testimonial.rating} />
											</div>
										</div>

										{/* Testimonial content */}
										<p className="text-lg md:text-xl mb-8 relative z-10 font-medium">
											"{testimonial.content}"
										</p>

										{/* Author information with enhanced styling */}
										<div className="flex items-center">
											<div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-pink-100 dark:border-pink-800 shadow-md">
												<Image
													src={testimonial.avatar}
													alt={testimonial.author}
													fill
													className="object-cover"
												/>
											</div>
											<div>
												<h4 className="text-lg font-semibold">{testimonial.author}</h4>
												<p className="text-sm text-muted-foreground">{testimonial.role}</p>
											</div>
										</div>
									</motion.div>
								</div>
							))}
						</div>
					</div>

					{/* Enhanced pagination indicators */}
					<div className="flex justify-center mt-8">
						{testimonials.map((_, index) => (
							<button
								key={index}
								className={cn(
									'w-2.5 h-2.5 mx-1.5 rounded-full transition-all duration-500 relative',
									'after:content-[""] after:absolute after:inset-0 after:rounded-full after:scale-0 after:opacity-0',
									'after:bg-pink-200 dark:after:bg-pink-500/50 after:blur-sm',
									'after:transition-all after:duration-1000',
									index === currentIndex
										? 'bg-pink-500 w-10 after:scale-150 after:opacity-100'
										: 'bg-gray-300 dark:bg-gray-700 hover:bg-pink-300 dark:hover:bg-pink-700/50'
								)}
								onClick={() => goToTestimonial(index)}
								disabled={isTransitioning}
								aria-label={`Go to testimonial ${index + 1}`}
							/>
						))}
					</div>
				</div>

				{/* Social proof section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="max-w-xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
				>
					<div className="flex flex-wrap justify-center gap-6 text-center text-sm text-muted-foreground">
						<div className="flex flex-col items-center">
							<span className="text-2xl font-bold text-foreground">4.9/5</span>
							<span>Average Rating</span>
						</div>
						<div className="hidden sm:block w-px h-12 bg-gray-200 dark:bg-gray-800"></div>
						<div className="flex flex-col items-center">
							<span className="text-2xl font-bold text-foreground">98%</span>
							<span>Recommend to Friends</span>
						</div>
						<div className="hidden sm:block h-12 w-px bg-gray-200 dark:bg-gray-800"></div>
						<div className="flex flex-col items-center">
							<span className="text-2xl font-bold text-foreground">1M+</span>
							<span>Completed Rides</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Testimonials;