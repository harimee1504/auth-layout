/** @type {import('next').NextConfig} */
import { NextFederationPlugin } from "@module-federation/nextjs-mf";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com'
      },
    ],
  },

  transpilePackages: [
    "@radix-ui/react-collapsible",
    "@radix-ui/react-avatar",
    "@radix-ui/primitive",
    "@radix-ui/react-compose-refs",
    "@radix-ui/react-context",
    "@radix-ui/react-dialog",
    "@radix-ui/react-dismissable-layer",
    "@radix-ui/react-dropdown-menu",
    "@radix-ui/react-focus-guards",
    "@radix-ui/react-focus-scope",
    "@radix-ui/react-id",
    "@radix-ui/react-menu",
    "@radix-ui/react-collection",
    "@radix-ui/react-direction",
    "@radix-ui/react-popper",
    "@radix-ui/react-arrow",
    "@radix-ui/react-portal",
    "@radix-ui/react-presence",
    "@radix-ui/react-primitive",
    "@radix-ui/react-roving-focus",
    "@radix-ui/react-separator",
    "@radix-ui/react-slot",
    "@radix-ui/react-tooltip",
    "@radix-ui/react-use-callback-ref",
    "@radix-ui/react-use-controllable-state",
    "@radix-ui/react-use-escape-keydown",
    "@radix-ui/react-use-layout-effect",
    "@radix-ui/react-use-size",
    "@radix-ui/react-visually-hidden",
    "@floating-ui/react-dom",
    "@floating-ui/dom",
    "@floating-ui/core",
    "@floating-ui/utils",
    'class-variance-authority',
    'clsx',
    'tailwind-merge',
    '@clerk/clerk-react',
    '@clerk/shared',
    'swr'
  ],
  webpack: (config) => {
    // config.output.publicPath = "https://auth-layout.vercel.app/_next/";
    config.plugins.push(new MiniCssExtractPlugin({
      filename: 'static/chunks/[name].css',
      chunkFilename: 'static/css/[name].[contenthash].css',
    }));

    config.module.rules.push({
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
      ],
    });

    config.plugins.push(
      new NextFederationPlugin({
        name: "auth",
        remotes: {},
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./wrapper": "./components/wrapper-provider.tsx"
        },
        shared: {
          "react": {
            singleton: true,
            requiredVersion: false,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: false,
          },
          "@clerk/clerk-react": {
            singleton: true,
            requiredVersion: false,
          },
          "@clerk/shared": {
            singleton: true,
            requiredVersion: false,
          }
        },
        extraOptions: {
          enableImageLoaderFix: true,
          exposeHttpUrl: true,
          skipSharingNextInternals: true,
        }
      })
    );

    // Add caching configuration
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
    };

    return config;
  },
  // assetPrefix: '/auth',
  // async rewrites() {
  //   return {
  //     beforeFiles: [
  //       // This rewrite is necessary to support assetPrefix only in Next 14 and below.
  //       // It is not necessary in Next 15.
  //       {
  //         source: '/auth/_next/:path*',
  //         destination: '/_next/:path*',
  //       },
  //     ],
  //   }
  // },
};

export default nextConfig;
