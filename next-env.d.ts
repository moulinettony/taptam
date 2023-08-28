/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
      // Add other environment variables here if needed
    }
  }

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
