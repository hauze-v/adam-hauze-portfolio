const TimelineSection = () => {
  const timelineEvents = [
    {
      date: "2017-04",
      displayDate: "April 2017",
      title: "First-Generation College Graduate",
      description: "Made family history as the first to earn a college degree, graduating from Penn State University with dual degrees in Application Development and Cyber Security."
    },
    {
      date: "2019-02",
      displayDate: "February 2019",
      title: "Software Engineer at IBM",
      description: "Accelerated IBM and USPS blockchain adoption by engineering more than 50 reusable React components enabling rapid demonstrations to client stakeholders."
    },
    {
      date: "2021-06",
      displayDate: "June 2021",
      title: "Founder & CEO of Team Tatsu",
      description: "Founded and scaled a Shopify development agency to $90,000 in revenue within the first 10 months. Grew revenue to $10,000 monthly by engineering a data-driven sales funnel with 25% conversion"
    },
    {
      date: "2022-04",
      displayDate: "April 2022",
      title: "Senior Software Engineer at EnergyCAP",
      description: "Generated $87,000 in resource optimization value by delivering 25% of six-person team output, operating 37% above velocity baseline which is equivalent to 1.5 full-time frontend engineers."
    }
  ];

  return (
    <div className="bg-teal-500 dark:bg-teal-800 w-full mb-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timelineEvents.map((event) => (
            <div key={event.date}>
              <time
                dateTime={event.date}
                className="flex items-center text-sm/6 font-semibold text-gray-900 dark:text-white"
              >
                <svg viewBox="0 0 4 4" className="mr-4 size-1 flex-none" aria-hidden="true">
                  <circle cx="2" cy="2" r="2" fill="currentColor" />
                </svg>
                {event.displayDate}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/20 dark:bg-white/20 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900 dark:text-white">
                {event.title}
              </p>
              <p className="mt-1 text-base/7 text-gray-800 dark:text-gray-200">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;