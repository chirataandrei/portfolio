import { skillGroups } from "@/data/skills";
import { TagList } from "./ui/Tag";
import { Section } from "./ui/Section";

export function SkillsSection() {
  return (
    <Section id="skills" title="Technical skills">
      <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <dt className="mb-3 text-sm font-medium text-fg">{group.title}</dt>
            <dd>
              <TagList items={group.items} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
