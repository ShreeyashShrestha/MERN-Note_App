import { Redis } from '@upstash/redis'
import {Ratelimit} from "@upstash/ratelimit";
import dotenv from "dotenv";

dotenv.config();

const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "20 s"),
})

export default rateLimit;