export default function CardService({ title, subtitle, children }) {
  return (
    <div className="lg:w-[376.67px] md:w-full sm-full bg-secondary hover:bg-primary lg:mb-0 mb-[50px] group transition duration-300 cursor-pointer rounded-lg pt-8 px-8 pb-11">
      {children}
      <h5 className="text-[20px] font-semibold text-dark group-hover:text-white mb-[10px]">
        {title}
      </h5>
      <p className="text-sm lg:text-base text-gray-300 group-hover:text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque hic nobis
        animi tempora perspiciatis vel commodi nostrum officiis aliquam esse
        impedit ipsum placeat quis, eos dignissimos cum possimus debitis. Iure!
      </p>
    </div>
  );
}
