
import './SectionTepm.css'

const SectionTepm = ( { title , description , picture , logo } ) => {
    return(
        <div className='main-temp-div d-flex flex-column'>
        <h2>{title}</h2>
        <p>{description}</p>

        {picture ? (<div className='align-self-end static-img'><img src={picture} alt="" /></div> ) :('') }


        {logo ? (<div>
            <div className='d-flex justify-content-around align-items-center flex-wrap logo-container'>
                {logo.map(item => (
                    <div key={item.id} className='logo-div d-flex align-items-center flex-column'>
                        <img src={item.src} alt={item.caption} />
                        <h3>{item.caption}</h3>
                    </div>
                ))}
            </div>
        </div> ) :('') }
        
        </div>
    )
}

export default SectionTepm;