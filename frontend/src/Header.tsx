import BabyCougar from "./assets/BabyCougar.png"
  
interface HeaderProps {
  SelectedPage: string;
}

const Header: React.FC<HeaderProps> = ({SelectedPage}) => {
  let dateTime = new Date()
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  // Return a JSX element that renders the header of the website
  return (
    <div className="flex flex-row justify-between bg-primary">
      <img className="pl-3 pb-1 pt-1 h-22" src={BabyCougar} alt="baby cougar" />
      <div className="text-base content-center text-2xl"><h1>{SelectedPage}</h1></div>
      <div className="text-base content-center text-2xl pr-3"><h1>{dateTime.toLocaleDateString(undefined, options)}</h1></div>
    </div>
  );
};
  
export default Header;