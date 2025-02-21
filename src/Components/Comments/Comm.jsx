import pt from 'prop-types'
import './comm.css'
const Comm = ({data}) => {

    return (
        <div id='comm' data-aos="fade-right" className='flex gap-3 items-center justify-center md:p-4 p-2 rounded-md md:px-8 px-4 bg-[#111]'>
            <figure className=''>
                <img src={data.img} alt="" className='w-36 '/>
            </figure>
            <p className='lg:text-base text-sm'>{data.comment}</p>
        </div>
    );
};
Comm.propTypes = {
    data: pt.object,
}
export default Comm;