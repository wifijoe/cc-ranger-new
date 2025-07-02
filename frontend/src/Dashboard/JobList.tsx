
const header = ["Name", "Category", "Date", "Shelf", "Status"]

const dataList = [
    ['Dan Jones', 'Poster,Foam Core Mounting,Prints,Wedding', '5/06/2025', '84, F8, F7, P9', 'on Shelf'],
    ['Jacob Smith', 'Prints', '5/02/2025', 'back counter', 'incomplete'],
    ['Ryan Sinbad', 'Prints', '4/30/2025', '54', 'complete'],
    ['Emily Carter', 'Canvas,Wedding', '5/07/2025', 'F3', 'on Shelf'],
    ['Nathan Lee', 'Poster,Prints', '5/01/2025', 'P2, P3', 'incomplete'],
    ['Samantha Rae', 'Foam Core Mounting,Prints', '4/28/2025', 'back counter', 'on Shelf'],
    ['Miles Bryant', 'Prints', '5/03/2025', 'F5', 'complete'],
    ['Isabella Chen', 'Poster,Canvas', '5/04/2025', '81', 'on Shelf'],
    ['Trevor Wilson', 'Prints,Wedding', '4/29/2025', 'back counter', 'incomplete'],
    ['Liam Patel', 'Poster,Foam Core Mounting', '5/06/2025', 'F9', 'complete'],
    ['Hannah Kim', 'Canvas,Prints', '5/05/2025', 'P1, P4', 'on Shelf'],
    ['Noah Davis', 'Poster,Wedding', '4/27/2025', 'F7', 'complete'],
    ['Olivia Moore', 'Prints', '5/01/2025', 'back counter', 'incomplete'],
    ['Benjamin Reed', 'Foam Core Mounting', '4/26/2025', 'F6', 'on Shelf'],
    ['Sophia Nguyen', 'Poster,Canvas,Wedding', '5/08/2025', 'P8', 'incomplete']
  ];

const JobList: React.FC = () => {
    return (
        <div className="relative overflow-y-auto flex-grow">
            <table className="w-full text-sm text-left text-black">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {header.map((title) => 
                        <th scope="col" className="px-6 py-3">
                        {title}
                        </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {dataList.map((data) =>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                        {data.map((data) => 
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {data}
                        </th>
                        )}
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default JobList