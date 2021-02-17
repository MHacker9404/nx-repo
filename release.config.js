module.exports = {
    preset: 'angular',
    branches: [
        'trunk',
        {
            name: 'dev',
            prerelease: 'dev',
        },
        {
            name: 'feature/\\w*',
            prerelease: 'alpha',
        },
        {
            name: 'hotfix/\\w*',
            prerelease: 'alpha',
        },
    ],
    prepare: ['@semantic-release/changelog'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/git',
    ],
};
