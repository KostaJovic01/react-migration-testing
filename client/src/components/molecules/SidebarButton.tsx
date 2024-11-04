type Props = {
    label?: string;
    icon?: React.ReactNode;
};
const SidebarButton = (props: Props) => {
    const { label, icon } = props;
    return (
        <div className='flex flex-row items-center py-2 px-6 space-x-4 text-[14px] hover:bg-gray-200 active:text-blue-400 group'>
            {icon? icon : 'no icon'}
            <div >
                {label? label : 'please insert a label'}
            </div>
        </div>
    );
};
export default SidebarButton;
