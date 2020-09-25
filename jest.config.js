module.exports = {
    clearMocks: true,
    rootDir: './src',
    // testMatch: ['*/_tests_//.[jt]s?(x)', '*/?(.)+(spec|test).[tj]s?(x)'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    preset: 'ts-jest',
};
