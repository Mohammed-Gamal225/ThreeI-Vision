export interface User {
    userName: string;
    failedAttempts: number;
    succeededAttempts: number;
    lastAttempt: Date;
  }