/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'alfatires.com',
            pathname: '**',
          },
          {
            protocol: 'http',
            hostname: 'alfatires.local',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'svgur.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'staging.alfatires.eu',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'alfatires.eu',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'cdn.alfatires.eu',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'media.gq.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'uxwing.com',
            pathname: '**',
          },
        ],
    },
    // productionBrowserSourceMaps: false,
    // compiler: {
    //   removeConsole: true,
    // },
};

export default nextConfig;
