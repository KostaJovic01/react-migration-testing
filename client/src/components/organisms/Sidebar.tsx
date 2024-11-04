import SidebarHeader from "../molecules/SidebarHeader.tsx";
import SidebarButton from "../molecules/SidebarButton.tsx";
import IconUsers from "../atoms/IconUsers.tsx";

type Props = {
    children?: React.ReactNode;
};
const Sidebar = (props: Props) => {
    return (
        <div id='sidebar' className='flex flex-col w-1/4 space-y-2 justify-between pt-2 bg-gray-100 h-full'>
            <div className={'flex flex-col space-y-2 w-full'} >
                <SidebarHeader userName={'John Doe'} orgName={'Company Name'} logoUrl={'https://additive-account-staging.s3.eu-central-1.amazonaws.com/organizations/6907/default-512x512?ts=1729260408'}/>
                {props.children}
            </div>
            <div className={'flex flex-col'}>
                <SidebarButton label={'Users'} icon={<IconUsers/>} />
                <SidebarButton label={'Users'} icon={<IconUsers/>} />
                <SidebarButton label={'Users'} icon={<IconUsers/>} />
            </div>
        </div>
    );
};
export default Sidebar;
