import { faChartSimple, faCirclePlus, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const bodyItems = [
{ title: "Dashboard", icon: faChartSimple },
{ title: "Add Job", icon: faCirclePlus },
{ title: "View All Jobs", icon: faCircleCheck }
];

interface SideBarProps {
  onSelectPage: (page: string) => void;
  selectedPage: string
}

const SideBar: React.FC<SideBarProps> = ({onSelectPage, selectedPage}) => {
return (
  <div className="flex bg-primary">
    <div className="w-30 flex-none text-base">
      {bodyItems.map(({ title, icon }) => (
        <div className={`text-center hover:bg-primaryHover ease-out duration-300 
        ${title === selectedPage ? 'bg-primarySelected' : ''}`} onClick={() => onSelectPage(title)} key={title}>
          <FontAwesomeIcon icon={icon} className="text-3xl pt-6"/>
          <h3 className="text-lg pt-1">{title}</h3>
        </div>
      ))}
    </div>
  </div>
);
};

export default SideBar;