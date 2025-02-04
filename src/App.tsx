import { MetricChip } from './components/MetricChip';
import { BacklogItems } from './components/BacklogItems';

export const App = () => {
  return (
    <>
      <h1>Flight Deck</h1>
      <MetricChip value={100} direction="descending" upperLimit={70} lowerLimit={20} symbol="%" />
      <br />
      <br />

      <BacklogItems />
    </>
  );
};
