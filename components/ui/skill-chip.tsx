import { cn } from "@/lib/utils";

type SkillChipProps = {
  color?: string;
  label: string;
  icon: string;
  className?: string;
};

export function SkillChip({ label, icon, className }: SkillChipProps) {
  const slug = icon.toLowerCase();
  const deviconSlugMap: Record<string, string> = {
    tailwind: "tailwindcss",
  };
  const normalizedSlug = deviconSlugMap[slug] ?? slug;
  const forceWhite = new Set([
    "java",
    "symfony",
    "nextdotjs",
    "pandas",
    "github",
    "apachekafka",
  ]);

  const src =
    normalizedSlug == "django" ||
    normalizedSlug == "nextdotjs" ||
    normalizedSlug == "symfony" ||
    normalizedSlug == "apachekafka"
      ? forceWhite.has(normalizedSlug)
        ? `https://cdn.simpleicons.org/${normalizedSlug}/ffffff?viewbox=auto`
        : `https://cdn.simpleicons.org/${normalizedSlug}`
      : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${normalizedSlug}/${normalizedSlug}-original.svg`;

  return (
    <div
      className={cn(
        "bg-muted/20 text-foreground border border-border inline-flex max-w-full min-w-0 items-center gap-2 rounded-lg px-3 py-1.5 transition-colors hover:bg-muted/30",
        className,
      )}
    >
      {/* Using external CDN keeps bundle small and provides consistent brand icons */}
      <img
        src={src}
        alt={`${label} icon`}
        width={18}
        height={18}
        className="shrink-0"
        style={{ display: "inline-block" }}
      />
      <span className="min-w-0 truncate text-sm">{label}</span>
    </div>
  );
}
