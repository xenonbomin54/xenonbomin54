import {GitHubCalendar} from 'react-github-calendar';

function Grass() {
  return (
    <div style={{ backgroundColor: '#000', padding: '20px' }}>
      <GitHubCalendar 
        username="xenonbomin54" 
        colorScheme="dark"
        showTotalCount={false}
        showColorLegend={false} 
        showMonthLabels={false}
        labels={{
          weekdays: ['', '', '', '', '', '', '']
        }}
      />
    </div>
  );
}

export default Grass;