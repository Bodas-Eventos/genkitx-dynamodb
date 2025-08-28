export interface DynamoDBPluginOptions {
  tableName: string;
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
}

export type SessionState = Record<string, any>;
