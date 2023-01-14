import fb from "../assets/facebook-official.png";
import tw from "../assets/twitter.png";

export default function Footer() {
  return (
    <div className="w-full bg-gray-800 py-5">
      <div>
        <p className="text-center text-white font-bold">Copyright &copy; 2016. PT Company</p>
        <div className="flex justify-center gap-2 mt-3">
          <img src={fb} width={20} height={20} />
          <img src={tw} height={20} width={20} />
        </div>
      </div>
    </div>
  );
}
