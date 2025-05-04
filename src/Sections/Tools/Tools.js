import SectionTepm from "../../Components/SectionTemp/SectionTepm";

const Tools = () => {

    const ToolsLogo = [
        {id:1 , src:'Images/Logo/React.svg' , caption: 'React'},
        {id:2 , src:'Images/Logo/Tailwind.svg' , caption: 'Tailwind'},
        {id:3 , src:'Images/Logo/Boostrap.svg' , caption: 'Boostrap'},
        {id:4 , src:'Images/Logo/Sass.svg' , caption: 'Sass'},
        {id:5 , src:'Images/Logo/js.svg' , caption: 'JavaScript'},
        {id:6 , src:'Images/Logo/GitHub.svg' , caption: 'GitHub'},
    ]

    return(
        <SectionTepm
        title={'Tools'}
        description={`React, Tailwind, Sass, Bootstrap, Git, Material UI. I chose React because it feels like Lego modular, fast, and flexible. But it’s not about the tools it’s about using them in clever ways to solve your problems and speed up delivery.Need someone who builds fast and thinks smart? That’s me.`}
        logo={ToolsLogo}
        />
    )
}

export default Tools;