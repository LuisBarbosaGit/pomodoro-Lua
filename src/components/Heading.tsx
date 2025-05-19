import style from  './Header.module.css'

type HeadingProps = {
    children: React.ReactNode;
}
export function Heading(props: HeadingProps) {
    return(
        <h1 className={style.heading}>{props.children}</h1>
    )
    
}