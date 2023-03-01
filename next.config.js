/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['images.ctfassets.net', 'ik.imagekit.io'],
		dangerouslyAllowSVG: true,
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
