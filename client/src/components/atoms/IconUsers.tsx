type Props = {
    width?: number;
    height?: number;
};
const IconUsers = (props: Props) => {
    const { width, height} = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width? width : 20} height={height? height : 20}  viewBox="0 0 24 24"
             className={'group-active:fill-blue-400'}
        >
            <path d="M16 10c2.782 0 4.113 1.839 3.993 5.516a.5.5 0 0 1-.5.484h-3.598c.104.757.13 1.599.08 2.527a.5.5 0 0 1-.5.473H4.526a.5.5 0 0 1-.5-.473C3.751 13.51 5.742 11 10 11c1.095 0 2.04.166 2.834.497C13.496 10.5 14.551 10 16 10zm-6 2.5c-3.071 0-4.48 1.472-4.501 5h9.003c-.022-3.528-1.43-5-4.502-5zm6-1c-.856 0-1.479.233-1.889.781.644.557 1.123 1.296 1.438 2.218l2.941.001c-.1-2.181-.885-3-2.49-3zM10 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm6 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-6 .5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
        </svg>    );
};
export default IconUsers;
