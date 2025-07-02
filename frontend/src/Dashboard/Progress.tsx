import { Chart } from 'react-google-charts'

const bodyItems = [
  { title: 'Jobs In Progress', value: 10, bg_color: 'bg-inProgress', hover_color: "hover:bg-inProgressHover" },
  { title: 'Jobs On Shelf', value: 15, bg_color: 'bg-onShelf', hover_color: "hover:bg-onShelfHover" },
  { title: 'Jobs Completed', value: 20, bg_color: 'bg-completed', hover_color: "hover:bg-completedHover" },
]

const data = [
  ["JobType", "amount"],
  ["In Progress", 10],
  ["On shelf", 15],
  ["completed", 20],
]

const options = {
  colors: ['#FF6384', '#FFCE56', '#36A2EB'],
  legend: {position: 'none'},
  backgroundColor: '#1A1B3E',
  chartArea: {left:10,top:10,right:10,bottom:10,width:'100%',height:'100%'},
  pieSliceText: 'value',
  pieSliceTextStyle: {fontSize:20, color:'black'},
  tooltip: {textStyle: {fontSize: 12}},
}
  
  // Define a functional component named Main
const Progress: React.FC = () => {

  // Return a JSX element that renders the main content of the website
  return (
    <div className='flex flex-col bg-primary'>
      <Chart
      className='size-50'
      chartType='PieChart'
      options={options}
      data={data}/>
      {bodyItems.map(({ title, bg_color, hover_color }) => (
        <div className='text-center pt-15 content-center' key={title}>
          <button className={`content-center rounded-md ${bg_color} ${hover_color} p-2 ease-out duration-300`}>
            {title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Progress;