

type TitleProps = {
    text: string;
    classTag?: string;
}

function Title(props: TitleProps) {
    const { text, classTag } = props;
    const titleClass = classTag ? classTag : "title-class";
    const titleText = text;


    return (<h2 className={titleClass}>{titleText}</h2>);
}

export default Title;