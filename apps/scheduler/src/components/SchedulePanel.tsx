const items = [
  { time: "09:30", title: "Daily standup" },
  { time: "11:00", title: "Sprint planning" },
  { time: "15:00", title: "Release check" },
];

export default function SchedulePanel() {
  return (
    <article className="schedule-panel">
      <div className="schedule-panel__header">
        <span className="schedule-panel__badge">scheduler/SchedulePanel</span>
        <strong>Today</strong>
      </div>
      <ul className="schedule-list">
        {items.map((item) => (
          <li className="schedule-list__item" key={item.time}>
            <span>{item.time}</span>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
