import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BulkHiring } from "@/components/services/BulkHiring";
import { ExecutiveHiring } from "@/components/services/ExecutiveHiring";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { getHiringRole, hiringRoles } from "@/lib/content/hiring";

type Params = PageProps<"/services/hiring/[role]">["params"];

/** One page per hiring service, each with its own layout (and its own closing banner). */
export function generateStaticParams() {
  return hiringRoles.map((r) => ({ role: r.id }));
}

export async function generateMetadata({ params }: PageProps<"/services/hiring/[role]">): Promise<Metadata> {
  const r = getHiringRole((await params).role);
  if (!r) return {};
  return { title: r.title, description: `${r.headline} ${r.intro}` };
}

export default function HiringRolePage({ params }: PageProps<"/services/hiring/[role]">) {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div className="min-h-dvh" />}>
          <RoleDetail params={params} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

async function RoleDetail({ params }: { params: Params }) {
  switch (getHiringRole((await params).role)?.id) {
    case "executive-hiring":
      return <ExecutiveHiring />;
    case "bulk-hiring":
      return <BulkHiring />;
    default:
      notFound();
  }
}
