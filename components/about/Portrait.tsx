import Image from "next/image";
import { cn } from "@/components/ui";
import { initials, type Person } from "@/lib/content/about";

type Props = {
  person: Person;
  /** Rendered width hint for next/image. */
  sizes: string;
  className?: string;
  preload?: boolean;
};

/** 4:5 portrait card: the person's photo, or a gold monogram until one is added. */
export function Portrait({ person, sizes, className, preload }: Props) {
  return (
    <div
      className={cn(
        "relative isolate aspect-[4/5] overflow-hidden rounded-[22px] border border-white/12 bg-surface",
        className,
      )}
    >
      {person.photo ? (
        <Image
          src={person.photo}
          alt={`${person.name}, ${person.role}`}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={`${person.name}, ${person.role} (photo coming soon)`}
          className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(230,171,63,0.18),transparent_65%)]"
        >
          <span className="bg-linear-to-b from-gold-light to-gold bg-clip-text font-display text-[clamp(48px,9vw,120px)] font-medium tracking-[-0.04em] text-transparent">
            {initials(person.name)}
          </span>
        </div>
      )}
      {/* Bottom fade so overlaid captions stay legible */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink/80 to-transparent" />
    </div>
  );
}
