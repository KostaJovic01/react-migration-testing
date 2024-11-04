type Props = {
    width?: number;
    height?: number;
    fill?: string;
};
const IconHome = (props: Props) => {
    const {width, height, fill} = props;
    return (
        <svg width={width? width : 20} height={height? height : 20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
             className={'group-active:fill-blue-400'}
        >
            <path d="M10 12.083v4.167c0 .23-.187.417-.417.417h-7.5a.417.417 0 0 1-.416-.417V7.708c0-.13.061-.254.166-.333l6.25-4.688a.417.417 0 0 1 .5 0l5.638 4.229a.417.417 0 0 1 .062.61l-.278.312a.417.417 0 0 1-.562.057l-5.11-3.832-5.416 4.062v7.292h3.75v-3.334c0-.23.186-.416.416-.416h2.5c.23 0 .417.186.417.416zM17.492 15.41v-3.327a.417.417 0 0 0-.417-.416h-3.327a.417.417 0 0 0-.417.416v.417c0 .23.187.417.417.417l1.61-.001-2.52 2.52a.417.417 0 0 0 0 .59l.295.294a.417.417 0 0 0 .59 0l2.519-2.52v1.61c0 .23.186.417.416.417h.417c.23 0 .417-.186.417-.416z"></path>
        </svg>
    );
};
export default IconHome;
