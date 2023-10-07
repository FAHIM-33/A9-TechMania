import pt from 'prop-types'

const Comm = ({data}) => {

    return (
        <div data-aos="fade-right" className='flex gap-3 items-center justify-center p-4 rounded-md px-8 bg-[#111]'>
            <figure className=''>
                <img src={data.img} alt="" className='w-36 '/>
            </figure>
            <p>{data.comment}</p>
        </div>
    );
};
Comm.propTypes = {
    data: pt.object,
}
export default Comm;