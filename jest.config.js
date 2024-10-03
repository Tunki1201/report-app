module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],  
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
        // Handle module aliases (matching those in tsconfig.json)
        '^@/(.*)$': '<rootDir>/$1',
    },
    transform: {
        // Use babel-jest for JS/TS transformation
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};
