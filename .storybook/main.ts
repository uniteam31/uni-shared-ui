import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    viteFinal: async (config) => {
        config.resolve = {
            alias: {
                // TODO нужно ли?
                '@': path.resolve(__dirname, '../src'), // Алиас для JS/TS
                src: path.resolve(__dirname, '../src'), // Алиас для SCSS
            },
        };
        return config;
    },
};
export default config;
