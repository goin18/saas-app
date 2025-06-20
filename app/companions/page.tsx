import { getAllCompanions } from "@/lib/actions/companion.actions";
import React from "react";
import CompaninoCard from "@/components/CompaninoCard";
import { getSubjectColor } from "@/lib/utils";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  // const { subject, topic } = filters;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";
  console.log(subject, topic);

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1 className="text-2xl font-bold">Companion Library</h1>
        <div className="flex gap-4">
          {/* <SearchInput />
          <SubjectFilter /> */}
        </div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompaninoCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibrary;
