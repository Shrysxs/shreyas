import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { SITE_INFO } from "@/config/site";
import { About } from "@/features/profile/components/about";
import { Experiences } from "@/features/profile/components/experiences";
import { Hackathons } from "@/features/profile/components/hackathons";
// Removed Blog and Awards sections per personalization
import { Overview } from "@/features/profile/components/overview";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import { Projects } from "@/features/profile/components/projects";
import { SocialLinks } from "@/features/profile/components/social-links";
import { TeckStack } from "@/features/profile/components/teck-stack";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto md:max-w-3xl">
        <ProfileHeader />
        <Separator />

        <Overview />
        <Separator />

        <SocialLinks />
        <Separator />

        <About />
        <Separator />

        <Experiences />
        <Separator />

        <Hackathons />
        <Separator />

        <TeckStack />
        <Separator />

        <Projects />
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    url: SITE_INFO.url,
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_INFO.url}/#person`,
      name: SITE_INFO.name,
      givenName: USER.firstName,
      familyName: USER.lastName,
      alternateName: [USER.username, USER.displayName],
      identifier: USER.username,
      url: SITE_INFO.url,
      image: `${SITE_INFO.url}${USER.avatar}`,
      description: SITE_INFO.description,
      jobTitle: "Full Stack Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Full stack development",
        "Web3",
        "Smart contracts",
        "Solana",
        "TypeScript",
        "React",
        "Next.js",
        "AI",
      ],
      // Links every profile to this site so Google treats them as one person.
      sameAs: SOCIAL_LINKS.map((link) => link.href),
    },
  };
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
