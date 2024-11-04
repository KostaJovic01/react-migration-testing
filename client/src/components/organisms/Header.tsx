type Props = {
    children?: React.ReactNode;
};
const Header = (props: Props) => {
    return (
        <header className='flex flex-row w-screen h-max bg-amber-300 space-x-2 pl-2'>
            {props.children}
        </header>    );
};
export default Header;
