import { PrismaClient } from '@prisma/client';

declare global {
  // allow global `var` across module reloads in development
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

export const prisma: PrismaClient = global.__prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') global.__prisma = prisma; 