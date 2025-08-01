import { PostHog } from "posthog-node";

export default async function PostHogClient() {
  const posthogClient = new PostHog(
    process.env.POSTHOG_KEY as string,
    {
      host: process.env.POSTHOG_HOST,
      flushAt: 1,
      flushInterval: 0,
    }
  );

  await posthogClient.shutdown();

  return posthogClient;
}
