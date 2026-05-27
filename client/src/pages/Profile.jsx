import { PageWrapper } from "../components/layout/PageWrapper";

export function Profile() {
  return (
    <PageWrapper>
      <section className="glass max-w-2xl rounded-lg p-6 shadow-aura">
        <p className="text-sm font-bold uppercase tracking-wide text-[var(--aura-primary)]">Traveler profile</p>
        <h1 className="mt-2 text-4xl font-black">Preferences ready for auth.</h1>
        <p className="mt-4 leading-7 text-slate-600">
          This page is reserved for saved traveler style, passport-safe profile metadata, loyalty preferences, and notification controls.
        </p>
      </section>
    </PageWrapper>
  );
}
