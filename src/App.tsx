import { BacklogItemFlags } from './components/BacklogItemFlags';
import { CycleTime } from './components/CycleTime';
import { MetricChip } from './components/MetricChip';

export const App = () => {
  return (
    <>
      <h1>Flight Deck</h1>
      <MetricChip value={100} direction="descending" upperLimit={70} lowerLimit={20} symbol="%" />
      <br />
      <br />
      <BacklogItemFlags showIncident={true} showBlocked={true} showNonEstimated showComments />
      <br />
      <br />
      <CycleTime development={3} review={2} test={5} />
    </>
  );
};
