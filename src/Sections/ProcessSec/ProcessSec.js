import SectionTepm from "../../Components/SectionTemp/SectionTepm";

const ProcessSec = () => {

        const Logos = [
        {id: 1 , src:'Images/Logo/test.svg' , caption:'Test'},
        {id: 2 , src:'Images/Logo/theme.svg' , caption:'theme'},
        {id: 3 , src:'Images/Logo/components.svg' , caption:'Components'},
        {id: 4 , src:'Images/Logo/Server.svg' , caption:'server'},
        {id: 5 , src:'Images/Logo/interfaces.svg' , caption:'interface'},
        {id: 6 , src:'Images/Logo/Integration.svg' , caption:'integration'},
    ]

    return (
        <>
        <SectionTepm 
        title={'پروسه'}
        description={`کار رو با تحلیل فایل‌های فیگما شروع می‌کنم؛ هدف تجربه کاربری رو می‌فهمم و یه پایه فنی قوی می‌سازم.
با تیم تو هماهنگ می‌مونم، سؤال‌های دقیق می‌پرسم و نتیجه‌ای تحویل می‌دم که نیاز به اصلاحات مداوم نداره.
وقتت با رفت‌و‌برگشت‌های بی‌مورد تلف نمی‌شه  فقط روند روون و حرفه‌ای.

`}
        logo={Logos}
        />
        </>
    )
}

export default ProcessSec;