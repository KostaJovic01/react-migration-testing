import IconHome from "../atoms/IconHome.tsx";

type Props = {
    logoUrl?: string;
    orgName?: string;
    userName?: string;
};
const SidebarHeader = (props: Props) => {
    const { logoUrl, orgName, userName } = props;
    return (
        <div className='flex flex-row p-6 space-x-4 items-center' >
            <img className={`w-10 h-10`} src={logoUrl} alt={'logo'} />
            <div className='flex flex-col text-[14px] grow'>
                <div className={'h-5 w-full'}>{orgName}</div>
                <div className={'h-5 w-full text-gray-500'}>{userName}</div>
            </div>
            <IconHome />
        </div>
    );
};
export default SidebarHeader;
