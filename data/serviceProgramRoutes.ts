/**
 * Minimal route + nav metadata for service program pages.
 * Safe to import from Client Components (keeps `whatWeOffer.ts` server-oriented).
 */

export const SERVICE_PROGRAM_SLUGS = ['self-paced', 'in-person', 'innovation-community'] as const;

export type ServiceProgramSlug = (typeof SERVICE_PROGRAM_SLUGS)[number];

export function isServiceProgramSlug(value: string): value is ServiceProgramSlug {
  return (SERVICE_PROGRAM_SLUGS as readonly string[]).includes(value);
}

/** Labels must match `whatWeOfferPrograms[].title` */
export const serviceProgramNavItems: readonly { slug: ServiceProgramSlug; title: string }[] = [
  { slug: 'self-paced', title: 'Self-Paced Learning Programs' },
  { slug: 'in-person', title: 'In-Person Learning Programs' },
  { slug: 'innovation-community', title: 'Innovation & Community' },
];
