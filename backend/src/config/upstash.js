import pkg from '@upstash/ratelimit'; // CommonJS fallback
import { Redis } from '@upstash/redis'; // This one supports ESM

import "dotenv/config";

const { Ratelimit } = pkg;

const ratelimiter = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(4, "60 s"),
});

export default ratelimiter;
