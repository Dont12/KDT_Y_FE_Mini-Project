import Link from 'next/link';

interface CircleLabelProps {
  label: string;
  image?: string;
  location: string;
}

// const Circle = ({ label, image, location }: CircleLabelProps) => {
//   const queryParams = new URLSearchParams();

//   if (location) {
//     queryParams.append('location', location);
//   }

//   const href = `/products?${queryParams.toString()}`;

//   return (
//     <Link href={href} >
//       <div className='flex flex-col items-center' style={{ cursor: 'pointer' }}>
//         {image && (
//           <Image src={image} alt={label || ''} width={46} height={46} />
//         )}
//         <span className='mt-2 text-xs'>{label}</span>
//       </div>
//     </Link>
//   );
// };

const CircleLabel = ({ label, image, location }: CircleLabelProps) => {
  const queryParams = new URLSearchParams();

  if (location) {
    queryParams.append('location', location);
  }

  const href = `/products?${queryParams.toString()}`;

  return (
    <option>
      <Link href={href}>
        <div
          className='relative mb-4 h-[7.5rem] w-[7.5rem] rounded-full bg-black p-4 text-white'
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
            backgroundSize: 'cover',
          }}
        >
          <p className='flex h-full items-center justify-center text-center text-xl font-semibold'>
            {label}
          </p>
        </div>
      </Link>
    </option>
  );
};

export default CircleLabel;
