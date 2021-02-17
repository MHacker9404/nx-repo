module.exports = {
    preset: 'angular',
    branches: [
        'trunk',
        {
            name: 'release/[0-9]*',
            prerelease: 'test',
        },
        {
            name: 'dev',
            prerelease: 'dev',
        },
        {
            name: 'feature/\\w*',
            prerelease: 'alpha',
        },
        {
            name: 'fix/\\w*',
            prerelease: 'alpha',
        },
    ],
    prepare: ['@semantic-release/changelog'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/github',
        '@semantic-release/git',
    ],
};
