/**
 * Single source of truth for “What We Offer” across the site (home cards, services, etc.).
 */

import { isServiceProgramSlug, type ServiceProgramSlug } from '@/data/serviceProgramRoutes';

export const WHAT_WE_OFFER_SECTION_TITLE = 'What We Offer' as const;

export const WHAT_WE_OFFER_SECTION_INTRO =
  'At Edunautics, we design experiences that go beyond courses: connecting curiosity with capability and research with real-world application.';

export type WhatWeOfferHighlight = {
  heading: string;
  body: string;
};

export type WhatWeOfferProgram = {
  /** Stable id for routes / keys */
  id: ServiceProgramSlug;
  order: 1 | 2 | 3;
  title: string;
  /** Opening paragraph for the program */
  summary: string;
  /** Home carousel: short line under the title */
  cardDescription: string;
  /** Home carousel image (same paths as existing assets) */
  cardImage: string;
  /** Services page hero (`public/assets/Service_hero_imgs/`) */
  heroImage: string;
  highlights: WhatWeOfferHighlight[];
};

export const whatWeOfferPrograms: WhatWeOfferProgram[] = [
  {
    id: 'self-paced',
    order: 1,
    title: 'Self-Paced Learning Programs',
    summary:
      'Designed to fit your pace, our programs combine flexibility, mentorship, and real-world learning to help you build practical, future-ready skills.',
    cardDescription:
      'Learn from anywhere with flexible scheduling',
    cardImage: '/assets/WhatWeOffer/Self-Paced_Learning_Programs.webp',
    heroImage: '/assets/Service_hero_imgs/selfpaced1.png',
    highlights: [
      {
        heading: 'Learn anywhere. Grow everywhere',
        body: 'Flexible, mentor-supported programs designed for learners who want to master emerging technologies while staying connected to real industry practice.',
      },
      {
        heading: 'Cohort Bootcamps',
        body: 'Intensive, team-based learning guided by industry mentors. Collaborate on live case studies, tackle real-world challenges, and receive direct feedback from professionals who work in the field.',
      },
      {
        heading: 'Self-Paced Tracks',
        body: 'Progress at your own speed through structured modules, interactive labs, and periodic mentor sessions. Each track integrates industry-based assignments, ensuring your independent learning translates into practical, job-ready skills.',
      },
      {
        heading: 'Focused Capsules  ',
        body: 'Short, specialized courses designed with input from industry experts to sharpen targeted skills: helping you stay current with evolving tools, trends, and technologies that organizations are actively using today.',
      },
    ],
  },
  {
    id: 'in-person',
    order: 2,
    title: 'In-Person Learning Programs',
    summary:
      'Immersive, on-campus experiences designed to bridge theory with real-world industry practice through collaboration, mentorship, and hands-on learning.',
    cardDescription:
      'Face to face collaboration and hands-on experience',
    cardImage: '/assets/WhatWeOffer/In-Person_Learning_Programs.webp',
    heroImage: '/assets/Service_hero_imgs/selfpaced2.webp',
    highlights: [
      {
        heading: 'Hands-on experiences that connect theory with reality',
        body: 'On-campus, collaborative programs where learners don’t just learn: they experience how the industry operates.',
      },
      {
        heading: 'Community-Based Learning',
        body: 'Join local hubs that mirror professional workspaces. Collaborate with peers on community and industry-linked initiatives, exchange ideas, and co-create innovative solutions.',
      },
      {
        heading: 'Partner Learning',
        body: 'Programs co-created with universities, research institutes, and industry leaders. Gain direct exposure to corporate projects, internships, and tools used by top companies: preparing you for seamless industry entry.',
      },
      {
        heading: 'STEM & AI Workshops',
        body: 'Practical, mentor-led workshops built around real datasets, tools, and challenges sourced from industry. Participants apply theoretical concepts to solve current problems faced by organizations.',
      },
    ],
  },
  {
    id: 'innovation-community',
    order: 3,
    title: 'Innovation & Community',
    summary:
      'Collaborative ecosystems where learners, mentors, and industry experts come together to transform ideas into impactful, real-world solutions.',
    cardDescription:
      'Collaborative projects and networking opportunities',
    cardImage: '/assets/WhatWeOffer/Innovation_Community_Spaces.webp',
    heroImage: '/assets/Service_hero_imgs/selfpaced3.webp',
    highlights: [
      {
        heading: 'Where ideas turn into impact.',
        body: 'Edunautics goes beyond courses: building ecosystems that connect learners, innovators, and industries to create measurable change.',
      },
      {
        heading: 'Capstone Projects & Innovation Labs',
        body: 'Partner with industry teams to build prototypes, test ideas, and transform research into deployable solutions. These labs act as bridges between academia and professional innovation spaces.',
      },
      {
        heading: 'Open Learning Circles',
        body: 'Peer-driven, industry-informed sessions that encourage research sharing, trend exploration, and collaborative problem-solving: inspired by real-world demands.',
      },
      {
        heading: 'Networking & Innovation Circles',
        body: 'Connect with mentors, founders, and industry professionals. From startup collaborations to job placements, these circles ensure your learning directly feeds into career and innovation pathways.',
      },
    ],
  },
];

/** Lookup by id for detail pages */
export const whatWeOfferById: Record<WhatWeOfferProgram['id'], WhatWeOfferProgram> = Object.fromEntries(
  whatWeOfferPrograms.map((p) => [p.id, p]),
) as Record<WhatWeOfferProgram['id'], WhatWeOfferProgram>;

/** Program id; routes are `/services/[slug]` (see `app/services/page.tsx` redirect). */
export type WhatWeOfferSlug = ServiceProgramSlug;

export function isWhatWeOfferSlug(value: string): value is WhatWeOfferSlug {
  return isServiceProgramSlug(value);
}

export function getWhatWeOfferProgramBySlug(slug: string): WhatWeOfferProgram | undefined {
  if (!isWhatWeOfferSlug(slug)) return undefined;
  return whatWeOfferById[slug];
}

/** For `generateStaticParams`: order matches `whatWeOfferPrograms` */
export const whatWeOfferSlugs: WhatWeOfferSlug[] = whatWeOfferPrograms.map((p) => p.id);
