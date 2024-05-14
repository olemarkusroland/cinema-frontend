import './Screening.css'
import poster from '../assets/pusur-filmen.webp'
import { PlaceTime } from './placeTime/PlaceTime'

export const Screening = () => {
    return (
        <div className="screening">
            <img
                className="poster"
                src={poster}
            />
            <p className='title'>Pusur Filmen</p>
            <div className='time-place-container'>
                <PlaceTime/>
            </div>
        </div>
    )
}