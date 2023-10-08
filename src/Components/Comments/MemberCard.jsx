import pt from 'prop-types'
const MemberCard = ({ data }) => {

    let arr = data.features
    return (
        <div className='flex flex-col p-4 rounded-md bg-[#111]'>
            <h1 className='text-4xl text-cyan-500'>{data.title}</h1>
            <p className='mt-4 text-lg'>Features:</p>
            <ul className='pl-1 ml-4 border-l-2 border-cyan-400 my-4 text-gray-400 text-sm'>
                {
                    arr.map((str, i) => <li className='' key={i}>{str}</li>)
                }
            </ul>
            <div className=' flex-grow'></div>
            <div className='flex justify-between items-center'>
                <p className='text-4xl text-end text-amber-400'>{data.price}</p>
                <button className='btn text-lg rounded-md bg-cyan-400 text-black font-medium'>Purchase</button>
            </div>
        </div>
    );
};
MemberCard.propTypes = {
    data: pt.object,
}
export default MemberCard;