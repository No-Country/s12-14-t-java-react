import PanelMaintenance from "../components/LatestMaintenance/PanelMaintenance";
import SideMenu from "../components/MaintenanceMenu/MaintenanceMenu";
import Revision from "../components/RevisionDiaria/Revision";

const RevisionDiaria = () => {
  return (
    <div className='container-gerente'>
      <SideMenu />
      <Revision />
      <PanelMaintenance />
    </div>
  );
};

export default RevisionDiaria;
