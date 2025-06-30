"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter, Mail, Award, Users, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Enhanced team members with more details
const teamMembers = [
	{
		name: 'Jane Smith',
		role: 'Founder & CEO',
		bio: 'Former tech executive with 15+ years of experience, Jane founded SheTaxi with a mission to make transportation safer for women everywhere.',
		image:
			'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
		social: {
			twitter: '#',
			linkedin: '#',
			email: 'jane@shetaxi.com',
		},
		quote:
			'Our goal is to transform the transportation industry by putting women\'s safety first.',
		achievements: [
			'Forbes 30 Under 30',
			'Women in Tech Award',
			'20K+ LinkedIn followers',
		],
		expertise: [
			'Business Strategy',
			'Women\'s Safety',
			'Tech Innovation',
		],
	},
	{
		name: 'Sarah Johnson',
		role: 'Chief Operating Officer',
		bio: 'With a background in logistics and urban planning, Sarah oversees our daily operations and expansion strategies.',
		image:
			'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
		social: {
			twitter: '#',
			linkedin: '#',
			email: 'sarah@shetaxi.com',
		},
		quote:
			'Every operational decision we make is driven by our commitment to safety and reliability.',
		achievements: [
			'Operations Excellence Award',
			'Former Uber Executive',
			'MBA, Stanford',
		],
		expertise: [
			'Operational Leadership',
			'Growth Strategy',
			'Urban Mobility',
		],
	},
];

const Team = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	return (
		<section className="py-16 md:py-28 bg-gradient-to-b from-background to-pink-50 dark:from-background dark:to-gray-900/80 relative overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 dark:bg-pink-900/20 rounded-full blur-3xl opacity-30"></div>
			<div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20"></div>

			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-1/4 left-1/4 transform rotate-12">
					<Users className="h-24 w-24 text-pink-300 dark:text-pink-900" />
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
						<Users className="h-3.5 w-3.5 mr-1.5" /> Women-Led Organization
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 tracking-tight"
					>
						Meet Our Leadership
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="mt-4 text-lg text-muted-foreground font-light leading-relaxed"
					>
						The visionary women behind SheTaxi's mission to revolutionize
						transportation with safety and empowerment at its core
					</motion.p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
					{teamMembers.map((member, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							whileHover={{ y: -5 }}
							onMouseEnter={() => setActiveIndex(index)}
							onMouseLeave={() => setActiveIndex(null)}
							className={cn(
								'relative overflow-hidden',
								'bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 rounded-3xl',
								'border border-gray-100 dark:border-gray-700',
								'shadow-xl shadow-pink-200/10 dark:shadow-pink-900/5',
								'transition-all duration-300'
							)}
						>
							<div className="h-72 relative overflow-hidden">
								<Image
									src={member.image}
									alt={member.name}
									fill
									className="object-cover object-center transition-transform duration-700"
									style={{
										transform:
											activeIndex === index
												? 'scale(1.05)'
												: 'scale(1)',
									}}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

								<div className="absolute bottom-0 left-0 p-6 text-white">
									<h3 className="font-serif text-3xl font-bold tracking-tight drop-shadow-md mb-1">
										{member.name}
									</h3>
									<p className="text-white/90 font-medium text-lg tracking-wide">
										{member.role}
									</p>
								</div>
							</div>

							<div className="p-8">
								<div className="flex items-start mb-6">
									<Quote className="h-10 w-10 text-pink-200 dark:text-pink-800 mr-2 mt-1 flex-shrink-0" />
									<p className="text-lg font-medium italic text-gray-700 dark:text-gray-300">
										"{member.quote}"
									</p>
								</div>

								<p className="text-muted-foreground mb-6 leading-relaxed font-light text-base">
									{member.bio}
								</p>

								<div className="mb-6">
									<h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
										Expertise
									</h4>
									<div className="flex flex-wrap gap-2">
										{member.expertise.map((item, i) => (
											<Badge key={i} variant="secondary" className="font-medium">
												{item}
											</Badge>
										))}
									</div>
								</div>

								<div className="mb-6">
									<h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
										Achievements
									</h4>
									<ul className="space-y-1">
										{member.achievements.map((achievement, i) => (
											<li key={i} className="flex items-center text-sm">
												<Award className="h-4 w-4 mr-2 text-pink-500" />
												<span>{achievement}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="flex space-x-3 mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
									<a
										href={member.social.twitter}
										className="p-2.5 rounded-full bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 hover:bg-pink-500 hover:text-white dark:hover:bg-pink-700 transition-colors duration-300"
										aria-label={`${member.name}'s Twitter`}
									>
										<Twitter className="h-5 w-5" />
									</a>
									<a
										href={member.social.linkedin}
										className="p-2.5 rounded-full bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 hover:bg-pink-500 hover:text-white dark:hover:bg-pink-700 transition-colors duration-300"
										aria-label={`${member.name}'s LinkedIn`}
									>
										<Linkedin className="h-5 w-5" />
									</a>
									<a
										href={`mailto:${member.social.email}`}
										className="p-2.5 rounded-full bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 hover:bg-pink-500 hover:text-white dark:hover:bg-pink-700 transition-colors duration-300"
										aria-label={`Email ${member.name}`}
									>
										<Mail className="h-5 w-5" />
									</a>

									<div className="ml-auto">
										<Button variant="ghost" className="text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20">
											Full Bio →
										</Button>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Team values section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="mt-20 max-w-3xl mx-auto text-center"
				>
					<h3 className="text-2xl font-bold mb-6">Our Leadership Values</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								icon: Star,
								title: 'Excellence',
								description:
									'Setting the highest standards in service and safety',
							},
							{
								icon: Users,
								title: 'Empowerment',
								description:
									'Creating opportunities for women in transportation',
							},
							{
								icon: Award,
								title: 'Innovation',
								description:
									'Pioneering safer solutions for urban mobility',
							},
						].map((value, index) => (
							<div key={index} className="flex flex-col items-center">
								<div className="w-14 h-14 rounded-full flex items-center justify-center bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 mb-4">
									<value.icon className="h-7 w-7" />
								</div>
								<h4 className="text-lg font-semibold mb-2">
									{value.title}
								</h4>
								<p className="text-muted-foreground text-sm">
									{value.description}
								</p>
							</div>
						))}
					</div>
				</motion.div>

				{/* Join our team banner */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="mt-20 bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-pink-100 dark:border-pink-900/30 max-w-4xl mx-auto text-center"
				>
					<h3 className="text-2xl font-bold mb-3">
						Join Our Growing Team
					</h3>
					<p className="text-muted-foreground mb-6 max-w-lg mx-auto">
						We're always looking for talented women to join our mission of
						transforming urban transportation. Check out our open positions.
					</p>
					<Button size="lg" className="bg-pink-600 hover:bg-pink-700">
						View Career Opportunities
					</Button>
				</motion.div>
			</div>
		</section>
	);
};

export default Team;