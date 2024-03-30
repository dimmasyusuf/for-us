import EventList from '../components/EventList';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="container d-flex vh-100">
      <EventList />
      <Sidebar />
    </div>
  );
}
