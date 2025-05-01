import { Github, X } from "simple-icons-astro";

export interface SocialLink {
	name: string;
	url: string;
	icon: any;
}

export default {
	title: 'SR',
	favicon: 'favicon.ico',
	owner: 'Antoine Monsavoir',
	profileImage: 'profile.webp',
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/monsavoir',
			icon: Github,
		} as SocialLink,
		{
			name: 'X',
			url: 'https://www.x.com/toniobandito',
			icon: X,
		} as SocialLink,
	],
};
