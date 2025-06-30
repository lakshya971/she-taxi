"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, BadgeCheck, Quote, ThumbsUp, Clock, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const reviewsData = [
	{
		id: 1,
		author: 'Jennifer K.',
		location: 'New York',
		content:
			'Amazing service! Driver arrived on time and was very professional. Felt completely safe throughout my journey.',
		rating: 5,
		date: 'May 12, 2025',
		avatar:
			'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
		isVerified: true,
		tripCount: 23,
		highlight: 'Safety',
	},
	{
		id: 2,
		author: 'Patricia M.',
		location: 'Chicago',
		content:
			'I use SheTaxi for my daily commute and it\'s been reliable every time. The drivers are always friendly.',
		rating: 5,
		date: 'May 10, 2025',
		avatar:
			'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
		isVerified: true,
		tripCount: 47,
		highlight: 'Reliability',
	},
	{
		id: 3,
		author: 'Sophia L.',
		location: 'Boston',
		content:
			'As a mother, I appreciate having a safe option for my teenage daughter. The peace of mind is worth every penny.',
		rating: 5,
		date: 'May 8, 2025',
		avatar:
			'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150',
		isVerified: true,
		tripCount: 12,
		highlight: 'Family-friendly',
	},
	{
		id: 4,
		author: 'Aisha R.',
		location: 'Atlanta',
		content:
			'The drivers are so friendly and the cars are always clean! I love the attention to detail.',
		rating: 5,
		date: 'May 5, 2025',
		avatar:
			'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
		isVerified: true,
		tripCount: 31,
		highlight: 'Cleanliness',
	},
	{
		id: 5,
		author: 'Maria G.',
		location: 'Miami',
		content:
			'I feel so much safer using SheTaxi than other ride services. The night ride safety features are exceptional.',
		rating: 5,
		date: 'May 3, 2025',
		avatar:
			'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
		isVerified: true,
		tripCount: 18,
		highlight: 'Night rides',
	},
	{
		id: 6,
		author: 'Priya S.',
		location: 'San Francisco',
		content:
			'The app is so easy to use and the tracking feature is excellent. Never had any technical issues.',
		rating: 4,
		date: 'April 30, 2025',
		avatar:
			'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
		isVerified: true,
		tripCount: 27,
		highlight: 'App quality',
	},
	{
		id: 7,
		author: 'Emma W.',
		location: 'Seattle',
		content:
			'I appreciate how the company verifies all drivers thoroughly. Makes me feel secure when traveling alone.',
		rating: 5,
		date: 'April 28, 2025',
		avatar:
			'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=150',
		isVerified: true,
		tripCount: 14,
		highlight: 'Verification',
	},
	{
		id: 8,
		author: 'Olivia T.',
		location: 'Portland',
		content:
			'Love the option to choose favorite drivers for regular trips! It builds trust and makes the experience personal.',
		rating: 5,
		date: 'April 25, 2025',
		avatar:
			'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=150',
		isVerified: true,
		tripCount: 36,
		highlight: 'Preferences',
	},
	{
		id: 9,
		author: 'Layla H.',
		location: 'Denver',
		content:
			'Had an issue once and customer service resolved it immediately. Very impressed with the support team.',
		rating: 4,
		date: 'April 22, 2025',
		avatar:
			'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=150',
		isVerified: true,
		tripCount: 9,
		highlight: 'Support',
	},
	{
		id: 10,
		author: 'Samantha B.',
		location: 'Austin',
		content:
			'My go-to service for airport pickups. Always reliable and punctual, even for early morning flights.',
		rating: 5,
		date: 'April 20, 2025',
		avatar:
			'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
		isVerified: true,
		tripCount: 22,
		highlight: 'Airport rides',
	},
	{
		id: 11,
		author: 'Zoe C.',
		location: 'Philadelphia',
		content:
			'The night ride option with extra security features is fantastic. The in-app emergency button gives me peace of mind.',
		rating: 5,
		date: 'April 18, 2025',
		avatar:
			'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150',
		isVerified: true,
		tripCount: 15,
		highlight: 'Security',
	},
	{
		id: 12,
		author: 'Rachel D.',
		location: 'Nashville',
		content:
			'So glad I found this service. Never using anything else again! The premium option with water and phone chargers is worth it.',
		rating: 5,
		date: 'April 15, 2025',
		avatar:
			'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=150',
		isVerified: true,
		tripCount: 19,
		highlight: 'Premium service',
	},
];

// Group reviews into rows for the marquee effect
const reviewRows = [
	reviewsData.slice(0, 6),
	reviewsData.slice(6, 12),
];

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

// Improved marquee hook with better scrolling behavior
const useMarquee = (speed: number = 20, direction: 'ltr' | 'rtl' = 'ltr') => {
	const marqueeRef = useRef<HTMLDivElement>(null);
	const [playMarquee, setPlayMarquee] = useState(true);
	const requestRef = useRef<number | null>(null);
	const previousTimeRef = useRef<number>(0);
	const progressRef = useRef<number>(0);

	useEffect(() => {
		const animate = (time: number) => {
			if (previousTimeRef.current === 0) {
				previousTimeRef.current = time;
			}

			const deltaTime = time - previousTimeRef.current;
			previousTimeRef.current = time;

			if (playMarquee && marqueeRef.current) {
				const scrollAmount = (deltaTime * speed) / 1000;

				if (direction === 'rtl') {
					progressRef.current -= scrollAmount;
					if (progressRef.current <= 0) {
						progressRef.current = marqueeRef.current.scrollWidth / 2;
					}
				} else {
					progressRef.current += scrollAmount;
					if (progressRef.current >= marqueeRef.current.scrollWidth / 2) {
						progressRef.current = 0;
					}
				}

				marqueeRef.current.scrollLeft = progressRef.current;
			}

			requestRef.current = requestAnimationFrame(animate);
		};

		requestRef.current = requestAnimationFrame(animate);

		return () => {
			if (requestRef.current) {
				cancelAnimationFrame(requestRef.current);
			}
		};
	}, [playMarquee, speed, direction]);

	return {
		marqueeRef,
		playMarquee,
		setPlayMarquee,
	};
};

const Reviews = () => {
	const {
			marqueeRef: marqueeRef1,
			playMarquee: playMarquee1,
			setPlayMarquee: setPlayMarquee1,
		} = useMarquee(15, 'ltr'),
		{
			marqueeRef: marqueeRef2,
			playMarquee: playMarquee2,
			setPlayMarquee: setPlayMarquee2,
		} = useMarquee(10, 'rtl'),
		[activeReview, setActiveReview] = useState<number | null>(null);

	// Stats for the counter at the top
	const stats = {
		totalUsers: '120K+',
		averageRating: '4.9',
		citiesServed: '50+',
		driverVerification: '100%',
	};

	return (
		<section className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
				{/* Stats counter */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
					{[
						{ label: 'Happy Riders', value: stats.totalUsers, icon: User },
						{ label: 'Average Rating', value: stats.averageRating, icon: Star },
						{ label: 'Cities Served', value: stats.citiesServed, icon: BadgeCheck },
						{ label: 'Verified Drivers', value: stats.driverVerification, icon: ThumbsUp },
					].map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="text-center"
						>
							<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 mb-3">
								<stat.icon className="h-6 w-6" />
							</div>
							<h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
							<p className="text-sm text-muted-foreground">{stat.label}</p>
						</motion.div>
					))}
				</div>

				<div className="text-center max-w-3xl mx-auto mb-8">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<Badge className="mb-4" variant="outline">
							Trusted by women worldwide
						</Badge>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400"
					>
						What Our Community Says
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="mt-4 text-lg text-muted-foreground"
					>
						Real experiences from women who trust SheTaxi for their transportation
						needs
					</motion.p>
				</div>
			</div>

			{/* Marquee rows */}
			<div className="space-y-8 mb-16 overflow-hidden w-screen max-w-full relative left-1/2 right-1/2 -mx-[50vw]">
				{/* First row */}
				<div
					className="relative max-w-full"
					onMouseEnter={() => setPlayMarquee1(false)}
					onMouseLeave={() => setPlayMarquee1(true)}
				>
					<div
						ref={marqueeRef1}
						className="flex overflow-x-hidden max-w-full"
					>
						<div className="flex space-x-6 px-4 py-2">
							{reviewRows[0]
								.concat(reviewRows[0])
								.map((review, index) => (
									<motion.div
										key={`row1-${index}`}
										whileHover={{
											scale: 1.03,
											boxShadow: '0 10px 30px rgba(249, 168, 212, 0.2)',
										}}
										onClick={() => setActiveReview(review.id)}
										className={cn(
											'bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 rounded-3xl p-6',
											'border border-gray-100 dark:border-gray-700',
											'transition-all duration-300',
											'w-[280px] min-w-[280px] max-w-[280px]', // Fixed width to prevent overflow
											'cursor-pointer select-none',
											activeReview === review.id
												? 'ring-2 ring-pink-400 dark:ring-pink-500 shadow-xl shadow-pink-100 dark:shadow-pink-900/20'
												: 'hover:bg-pink-50/50 dark:hover:bg-gray-800'
										)}
									>
										<div className="relative mb-1">
											<Quote className="absolute -top-1 -left-1 h-6 w-6 text-pink-200 dark:text-pink-800 opacity-40" />
										</div>

										<p className="mt-2 text-sm line-clamp-3 h-[60px] overflow-hidden">
											"{review.content}"
										</p>

										<div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
											<div className="flex items-center flex-shrink-0">
												<div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-pink-100 dark:border-pink-900 flex-shrink-0">
													<Image
														src={review.avatar}
														alt={review.author}
														fill
														className="object-cover"
													/>
												</div>
												<div>
													<div className="flex items-center">
														<h4 className="font-medium truncate max-w-[100px]">{review.author}</h4>
														{review.isVerified && (
															<BadgeCheck className="h-4 w-4 text-blue-500 ml-1 flex-shrink-0" />
														)}
													</div>
													<div className="flex items-center text-xs text-muted-foreground">
														<Clock className="h-3 w-3 mr-1 flex-shrink-0" />
														<span className="truncate max-w-[100px]">{review.date}</span>
													</div>
												</div>
											</div>
											<div className="text-right flex-shrink-0">
												<StarRating rating={review.rating} />
												<div className="mt-1">
													<Badge
														variant="outline"
														className="text-xs bg-pink-50 dark:bg-pink-900/20"
													>
														{review.highlight}
													</Badge>
												</div>
											</div>
										</div>
									</motion.div>
								))}
						</div>
					</div>
					
					{/* Gradient masks */}
					<div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-pink-50 to-transparent dark:from-gray-900 dark:to-transparent z-10"></div>
					<div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-pink-50 to-transparent dark:from-gray-900 dark:to-transparent z-10"></div>
				</div>

				{/* Second row */}
				<div
					className="relative max-w-full"
					onMouseEnter={() => setPlayMarquee2(false)}
					onMouseLeave={() => setPlayMarquee2(true)}
				>
					<div
						ref={marqueeRef2}
						className="flex overflow-x-hidden max-w-full"
					>
						<div className="flex space-x-6 px-4 py-2">
							{reviewRows[1]
								.concat(reviewRows[1])
								.map((review, index) => (
									<motion.div
										key={`row2-${index}`}
										whileHover={{
											scale: 1.03,
											boxShadow: '0 10px 30px rgba(249, 168, 212, 0.2)',
										}}
										onClick={() => setActiveReview(review.id)}
										className={cn(
											'bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 rounded-3xl p-6',
											'border border-gray-100 dark:border-gray-700',
											'transition-all duration-300',
											'w-[280px] min-w-[280px] max-w-[280px]', // Fixed width to prevent overflow
											'cursor-pointer select-none',
											activeReview === review.id
												? 'ring-2 ring-pink-400 dark:ring-pink-500 shadow-xl shadow-pink-100 dark:shadow-pink-900/20'
												: 'hover:bg-pink-50/50 dark:hover:bg-gray-800'
										)}
									>
										<div className="relative mb-1">
											<Quote className="absolute -top-1 -left-1 h-6 w-6 text-pink-200 dark:text-pink-800 opacity-40" />
										</div>

										<p className="mt-2 text-sm line-clamp-3 h-[60px] overflow-hidden">
											"{review.content}"
										</p>

										<div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
											<div className="flex items-center flex-shrink-0">
												<div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-pink-100 dark:border-pink-900 flex-shrink-0">
													<Image
														src={review.avatar}
														alt={review.author}
														fill
														className="object-cover"
													/>
												</div>
												<div>
													<div className="flex items-center">
														<h4 className="font-medium truncate max-w-[100px]">{review.author}</h4>
														{review.isVerified && (
															<BadgeCheck className="h-4 w-4 text-blue-500 ml-1 flex-shrink-0" />
														)}
													</div>
													<div className="flex items-center text-xs text-muted-foreground">
														<Clock className="h-3 w-3 mr-1 flex-shrink-0" />
														<span className="truncate max-w-[100px]">{review.date}</span>
													</div>
												</div>
											</div>
											<div className="text-right flex-shrink-0">
												<StarRating rating={review.rating} />
												<div className="mt-1">
													<Badge
														variant="outline"
														className="text-xs bg-pink-50 dark:bg-pink-900/20"
													>
														{review.highlight}
													</Badge>
												</div>
											</div>
										</div>
									</motion.div>
								))}
						</div>
					</div>
					
					{/* Gradient masks */}
					<div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-pink-50 to-transparent dark:from-gray-900 dark:to-transparent z-10"></div>
					<div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-pink-50 to-transparent dark:from-gray-900 dark:to-transparent z-10"></div>
				</div>
			</div>
			
			{/* Call to action */}
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center max-w-md mx-auto"
				>
					<p className="text-muted-foreground mb-4">
						Join thousands of women who choose SheTaxi every day for a safer, more
						comfortable ride experience.
					</p>
					<div className="inline-flex items-center text-sm font-medium text-pink-600 dark:text-pink-400">
						<span className="mr-2">Read more reviews</span>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.66669 4L10.6667 8L6.66669 12"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Reviews;