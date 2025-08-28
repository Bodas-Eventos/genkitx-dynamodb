# genkitx-dynamodb

A Genkit plugin for SessionStore using AWS DynamoDB as backend storage.

## Features

- Implements Genkit SessionStore with DynamoDB
- Easily configurable table, region, credentials
- Fully TypeScript

## Getting Started

### Installation

```sh
npm install genkitx-dynamodb
```

### Usage

Add the plugin to your `genkit.config.ts`:

```typescript
import { defineConfig } from 'genkit';
import { dynamoDBPlugin } from './src/index';

export default defineConfig({
  plugins: [
    dynamoDBPlugin({
      tableName: 'your-dynamodb-table-name',
      region: 'your-aws-region',
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    }),
  ],
});
```

## Development

- Clone the repo
- Run `npm install`
- Build with `npm run build`
- Test with `npm test`

## License

MIT