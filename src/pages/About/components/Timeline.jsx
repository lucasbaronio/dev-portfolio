import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TimelineItem from './TimelineItem';

const Timeline = () => {
  const { t, ready } = useTranslation();
  const [timelineItems, setTimelineItems] = useState([]);

  useEffect(() => {
    if (ready)
      setTimelineItems(
        t(`about.myExperience.timeline`, {
          returnObjects: true,
        }),
      );
    else setTimelineItems([]);
  }, [t, ready]);

  return (
    <ol className="relative border-l border-bg-700 dark:border-accent-100">
      {timelineItems.map(({ id, ...rest }) => (
        <li id={id} key={id} className="mb-10 ml-8">
          <TimelineItem {...rest} />
        </li>
      ))}
    </ol>
  );
};

Timeline.propTypes = {};

export default Timeline;
