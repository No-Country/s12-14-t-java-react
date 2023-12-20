import PanelMaintenance from "../components/LatestMaintenance/PanelMaintenance";
import SideMenu from "../components/MaintenanceMenu/MaintenanceMenu";
import Revision from "../components/RevisionDiaria/Revision";

const RevisionDiaria = () => {
  return (
    <div className='container-gerente'>
    <SideMenu />
    {/* <div className='w-[60%] flex flex-col justify-between h-[100vh] items-center'> */}
    <div className='min-h-screen w-full md:w-[60%] py-3 px-5 flex column flex-col'>
      <Revision />
    </div>
    <PanelMaintenance />
  </div>
);
};

export default RevisionDiaria;
