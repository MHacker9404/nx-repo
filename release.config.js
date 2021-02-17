module.exports = {
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
        {
            // preset: 'angular',
            releaseRules: [
                { tag: 'build', release: 'patch' },
                { tag: 'ci', release: 'patch' },
                { tag: 'chore', release: 'patch' },
                { tag: 'refactor', release: 'patch' },
                { tag: 'style', release: 'patch' },
                { tag: 'refactor', release: 'patch' },
                { tag: 'fix', release: 'minor' },
                { tag: 'perf', release: 'minor' },
                { tag: 'feature', release: 'minor' },
            ],
            parserOpts: {
                noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
            },
        },
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
