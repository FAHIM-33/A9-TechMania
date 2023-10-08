import pt from 'prop-types'

const Goal = ({data}) => {
    return (
        <div className='p-4 mt-8  rounded-md bg-gradient-to-r from-[#000] to-[#222]' data-aos="fade-right">
            <h1 className='text-center text-2xl '>{data.title}</h1>
            <p className='font-light text-center p-8'>{data.details}</p>
        </div>
    );
};
Goal.propTypes = {
    data: pt.object,
}
export default Goal;