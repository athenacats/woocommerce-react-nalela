// Import the path module using import syntax
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // SASS options with includePaths
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
  },
};

export default nextConfig;
