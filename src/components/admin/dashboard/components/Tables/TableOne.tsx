import Image from "next/image";
import { BRAND } from "../../types/brand";
import { FaFacebook } from "react-icons/fa";
const brandData: BRAND[] = [
  {
    logo: "/mygoogle.avif",
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/twitter.png",
    name: "Twitter",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/github.png",
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/vimeo.png",
    name: "Vimeo",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/facebook.png",
    name: "Facebook",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2 shadow-default  sm:px-6 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black">Top Channels</h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Source
            </h5>
          </div>
          <div className="p-2 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Visitors
            </h5>
          </div>
          <div className="p-2 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Revenues
            </h5>
          </div>
          <div className="hidden p-2 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Donations
            </h5>
          </div>
          <div className="hidden p-2 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1 ? "" : "border-b border-stroke "
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2 xl:p-5">
              <div className="flex-shrink-0">
                <Image
                  src={brand.logo}
                  alt="Brand"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
              <p className="hidden text-black  sm:block">{brand.name}</p>
            </div>

            <div className="flex items-center justify-center p-2 xl:p-5">
              <p className="text-black ">{brand.visitors}K</p>
            </div>

            <div className="flex items-center justify-center p-2 xl:p-5">
              <p className="text-meta-3">${brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2 sm:flex xl:p-5">
              <p className="text-black ">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
