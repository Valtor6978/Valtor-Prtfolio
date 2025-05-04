import SectionTepm from "../../Components/SectionTemp/SectionTepm";

const ProcessSec = () => {

        const Logos = [
        {id: 1 , src:'Images/Logo/test.svg' , caption:'Test'},
        {id: 2 , src:'Images/Logo/theme.svg' , caption:'theme'},
        {id: 3 , src:'Images/Logo/components.svg' , caption:'Components'},
        {id: 4 , src:'Images/Logo/server.svg' , caption:'server'},
        {id: 5 , src:'Images/Logo/interfaces.svg' , caption:'interface'},
        {id: 6 , src:'Images/Logo/integration.svg' , caption:'integration'},
    ]

    return (
        <>
        <SectionTepm 
        title={'Process'}
        description={`It starts with understanding. I begin by analyzing the Figma files, aligning with the UX intentions, and building a solid foundation. I stay in sync with your team, ask the right questions, and deliver on time with fewer revisions and zero drama. You want progress, not back-and-forth. Let’s keep it smooth.`}
        logo={Logos}
        />
        </>
    )
}

export default ProcessSec;