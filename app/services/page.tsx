import { redirect } from 'next/navigation';

/** Canonical program pages live at `/services/[slug]`; keep `/services` for existing links. */
export default function ServicesPage() {
  redirect('/services/self-paced');
}
