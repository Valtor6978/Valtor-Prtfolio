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
        title={'ابزار'}
        description={`React، Tailwind، Sass، Bootstrap، Git، Material UI  ابزارهاییه که باهاشون کار می‌کنم.
ری‌اکت رو چون ماژولاره، سریع و انعطاف‌پذیره انتخاب کردم. اما اصل قضیه ابزار نیست، نحوه استفاده‌یه هوشمندانه از اون‌هاست برای ساخت سریع‌تر و بهتر.
اگه دنبال کسی هستی که هم سریع کار کنه، هم دقیق فکر کنه  من اینجام.

`}
        logo={ToolsLogo}
        />
    )
}

export default Tools;