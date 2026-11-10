/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: "export",
    basePath: isProd ? "/portafolio" : undefined,
    env: {
        NEXT_PUBLIC_BASE_PATH: isProd ? "/portafolio" : "",
    }
};

export default nextConfig;