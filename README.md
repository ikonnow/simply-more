# Simply More

A modern Ghost theme focused on readability and clean design. This is a fork of [Simply](https://github.com/godofredoninja/simply) by [@godofredoninja](https://github.com/godofredoninja).

<p align="center">
    <a href="https://github.com/TryGhost/Ghost">
        <img src="https://img.shields.io/badge/Ghost-5.x-brightgreen.svg" alt="Ghost version" />
    </a>
</p>

[![Simply More theme preview](https://user-images.githubusercontent.com/10253167/162076408-0356f347-6d0b-47ad-a640-e8ee7a2494af.jpg)](https://ikonnow.com)

## Features

- Multiple Homepage Layouts
  - [Default](docs/home.md#default)
  - [Featured](docs/home.md#featured)
  - [Medium](docs/home.md#medium)
  - [Grid](docs/home.md#grid)
  - [Personal Blog](docs/home.md#personal)
  - [Archive](docs/home.md#archive-page)
  - [Portfolio](docs/portfolio-page.md)
  - [Photography](docs/home.md#photographer)
  - [Podcast Support](docs/podcast-page.md)

- Post Formats
  - [Standard](docs/post-format.md#post-default)
  - [Full Width](docs/post-format.md#post-full)
  - [Sidebar](docs/post-format.md#post-sidebar)
  - [Featured Image Layouts](docs/post-format.md)
  - [Table of Contents](docs/post-format.md#post-toc)

- Theme Features
  - [Light/Dark Mode](docs/settings.md#color-scheme)
  - [Search Integration](docs/settings.md#search)
  - [Member Support](docs/members.md)
  - [Newsletter Integration](docs/settings.md#newsletter)
  - [Comments Support](docs/settings.md#comments)
  - [Responsive Design](docs/settings.md)
  - [Custom Color Schemes](docs/settings.md#color-scheme)

For complete documentation, see the [docs](docs/README.md) directory.

## Quick Start

1. [Download the latest release](https://github.com/ikonnow/simply-more/releases)
2. Log into Ghost Admin
3. Go to `Settings → Design`
4. Scroll to `Theme` and upload the zip file

## Development

Requirements: [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/), [Gulp](https://gulpjs.com)

```bash
# Install
yarn

# Development
yarn dev

# Build
yarn build

# Create zip
yarn production
```

## Deployment

Create a `.env` file with your Ghost credentials:

```bash
GHOST_API_URL=https://your-blog.com
GHOST_ADMIN_API_KEY=your_admin_api_key
```

Then deploy:

```bash
yarn deploy
```

## License

Released under [GPL-3.0-or-later](LICENSE). Original theme by [@godofredoninja](https://github.com/godofredoninja/simply).
