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
            // assets: ['package.json', 'yarn.lock', 'CHANGELOG.md'],
            assets: ['CHANGELOG.md'],
            message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        },
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        {
            // preset: 'angular',
            releaseRules: [
                { type: 'feat', scope: '*', release: 'minor' },
                //     { type: 'perf', release: 'minor' },
                { type: 'build', scope: '*', release: 'patch' },
                //     { type: 'ci', release: 'patch' },
                //     { type: 'chore', release: 'patch' },
                //     { type: 'refactor', release: 'patch' },
                //     { type: 'style', release: 'patch' },
                //     { type: 'refactor', release: 'patch' },
                { type: 'WIP', scope: '*', release: 'patch' },
            ],
            parserOpts: {
                noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
            },
        },
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/github',
        '@semantic-release/git',
    ],
};
