import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ExperienceData, TimelineItemData } from "@/data/experiences";

type ExperienceCardProps = ExperienceData;

const TimelineItem = ({ item }: { item: TimelineItemData }) => {
  const { t } = useTranslation();

  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <h3 className="text-lg font-semibold">
        {t(item.titleKey)}{" "}
        <Link href={item.link}>
          <span className="text-blue-500 hover:underline">{item.linkText}</span>
          <br />
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-600">
            {t(item.dateKey)}
          </time>
        </Link>
      </h3>
      <div className="mb-4 text-base font-normal">
        {item.descriptionKeys.map((key, index) => (
          <p key={index}>{t(key)}</p>
        ))}
      </div>
    </li>
  );
};

const ExperienceCard = ({
  roleKey,
  company,
  companyLink,
  dateKey,
  locationKey,
  descriptionKey,
  timeline,
  skills,
}: ExperienceCardProps) => {
  const { t } = useTranslation();

  const renderCompany = () => {
    if (!company) return null;
    if (companyLink) {
      return (
        <Link href={companyLink} className="text-blue-700 hover:underline">
          {company}
        </Link>
      );
    }
    return <span className="text-blue-700">{company}</span>;
  };

  const renderDescription = () => {
    if (timeline) {
      return (
        <div className="text-base/7">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {timeline.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </ol>
        </div>
      );
    }
    if (descriptionKey) {
      return <div className="text-base/7">{t(descriptionKey)}</div>;
    }
    return null;
  };

  return (
    <div className="bg-white p-4 rounded-md mb-8">
      <div className="flex gap-4 items-center">
        {roleKey && <h3 className="text-xl font-semibold">{t(roleKey)}</h3>}
        <span className="text-lg text-gray-700">{renderCompany()}</span>
      </div>
      {(dateKey || locationKey) && (
        <div className="text-gray-600 text-sm mt-2">
          {dateKey && t(dateKey)}
          {dateKey && locationKey && " | "}
          {locationKey && t(locationKey)}
        </div>
      )}
      <div className="">{renderDescription()}</div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-300 px-2 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
