module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        "@babel/plugin-transform-runtime"
    ],
    env: {
        "test": {
            "plugins": ["@babel/plugin-transform-runtime"]
        }
    },
    transform: {
        '^.+\\.tsx?$': 'babel-jest'
    },
    "globals": {
        "ts-jest": {
            "useESM": true
        }
    },
    "extensionsToTreatAsEsm": [".ts"],
    "globals": {
        "ts-jest": {
            "useESM": true
        }
    },
    "preset": "ts-jest/presets/default-esm",
    "moduleFileExtensions": ["js", "json", "ts"],
    "rootDir": ".",
    "testEnvironment": "node",
    "testRegex": "spec.ts$",
    "modulePathIgnorePatterns": ["<rootDir>/dist/", "<rootDir>/node_modules/"],
    "moduleNameMapper": {
        "^src/(.*)": "<rootDir>/src/$1"
    },
    "collectCoverage": true,
    "coverageDirectory": "./coverage",
    "collectCoverageFrom": ["src/**/*.(t|j)s"],
    "coveragePathIgnorePatterns": [
        ".module.ts$",
        ".spec.ts$",
        "src/database/",
        "src/server.ts"
    ],
    "verbose": true
};