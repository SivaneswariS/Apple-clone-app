import React from "react";

function Product() {
  const productData = [
    {
      no: 1,
      title: "iOS 18",
      para: ["Personalise your iPhone with", "10 new Indian languages"],
      image:
        "https://tse4.mm.bing.net/th?id=OIP.b3dCioO1Sr95HVEywHtxzwHaHa&pid=Api&P=0&h=220",
    },
    {
      no: 2,
      title: "iPad Air",
      para: ["Now supercharged by the M3 chip"],
      image:
        "https://tse1.mm.bing.net/th?id=OIP.kdTyWTQaNTiR8rixXtE-vAHaHa&pid=Api&P=0&h=220",
    },
    {
      no: 3,
      title: "MacBook Pro",
      para: ["A work of smart"],
      image:
        "https://tse3.mm.bing.net/th?id=OIP.3Ydw75bvvzclzILTwAFhvwHaHa&pid=Api&P=0&h=220",
    },
    {
      no: 4,
      title: "iPhone",
      para: ["Meet the iPhone 16 family"],
      image:
        "https://www.apple.com/v/iphone/home/bo/images/meta/iphone__ky2k6x5u6vue_og.png",
    },
    {
      no: 5,
      title: "AirPods 4",
      para: ["Iconic. Now supersonic.", "With Active Noise Cancellation"],
      image:
        "https://assets.hardwarezone.com/img/2022/09/airpods-pro-2-lead.jpg",
    },
    {
      no: 6,
      title: "Trade In",
      para: ["Upgrade and save.", "Its that easy."],
      image:
        "https://tse3.mm.bing.net/th?id=OIP._sBdNHPAD3jvx6hsLPilhQHaEK&pid=Api&P=0&h=220",
    },
  ];

return (
  <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
    {productData.map(({ no, title, para, image }) => (
      <div
        key={no}
        className="relative rounded-xl shadow-lg overflow-hidden bg-cover bg-center flex items-start justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[550px]"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10 p-6 text-white text-center">
          <h1 className="text-xl md:text-2xl font-bold mb-2">{title}</h1>
          {para.map((line, i) => (
            <p key={i} className="text-sm md:text-base">
              {line}
            </p>
          ))}

          {/* Buttons */}
          <div className="mt-4 flex flex-col xs:flex-row gap-2 justify-center items-center">
            <button className="px-4 py-1 bg-blue-400 text-black rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Learn more
            </button>
            <button className="px-4 py-1 border border-blue-400 text-white rounded-full text-sm font-medium hover:bg-blue-400 hover:text-black transition">
              Buy
            </button>
          </div>
        </div>
      </div>
    ))}
  </section>
);

}
export default Product
