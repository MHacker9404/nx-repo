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
    prepare: [
        '@semantic-release/changelog',
        {
            path: '@semantic-release/git',
            assets: ['package.json', 'yarn.lock', 'CHANGELOG.md'],
            message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        },
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        [
            '@semantic-release/npm',
            {
                npmPublish: false,
            },
        ],
        '@semantic-release/github',
        '@semantic-release/git',
    ],
};
