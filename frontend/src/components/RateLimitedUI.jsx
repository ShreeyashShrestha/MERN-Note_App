import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="overflow-hidden rounded-2xl border border-primary/30 bg-primary/10 shadow-sm">
        <div className="flex flex-col items-start gap-4 p-6 md:flex-row md:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
            <ZapIcon className="h-7 w-7" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-base-content">
              Rate limit reached
            </h3>
            <p className="text-base text-base-content/80">
              You’ve made too many requests in a short time. Please wait a
              moment before trying again.
            </p>
            <p className="text-sm text-base-content/70">
              Trying again in a few seconds will give you the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
