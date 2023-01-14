import icon1 from "../assets/lightbulb-o.png";
import icon2 from "../assets/bank.png";
import icon3 from "../assets/balance-scale.png";
import { AiFillCaretRight } from "react-icons/ai";

export default function Values() {
  return (
    <div className="px-5 lg:px-36 py-10 mx-auto">
      <h1 className="text-center font-bold text-xl">OUR VALUES</h1>
      <div className="flex flex-col lg:flex-row justify-center gap-4 my-6">
        <div className="p-5 mx-auto text-center relative bg-red-500 text-white">
          <img className="mx-auto" src={icon1} height={20} width={20} />
          <p className="py-5 font-bold">INNOVATIVE</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio odit quod esse error omnis obcaecati magnam eum tempore recusandae, saepe laboriosam nesciunt quaerat minima iusto eos harum totam cum adipisci.</p>
          <div className="hidden lg:block absolute -right-5 top-[45%]">
            <AiFillCaretRight size={30} color="rgb(239 68 50)" />
          </div>
        </div>

        <div className="p-5 mx-auto text-center relative bg-teal-600 text-white">
          <img className="mx-auto" src={icon2} height={30} width={30} />
          <p className="py-5 font-bold">LOYALTY</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio odit quod esse error omnis obcaecati magnam eum tempore recusandae, saepe laboriosam nesciunt quaerat minima iusto eos harum totam cum adipisci.</p>
          <div className="hidden lg:block absolute -right-5 top-[45%]">
            <AiFillCaretRight size={30} color="rgb(13 148 136" />
          </div>
        </div>
        <div className="p-5 mx-auto text-center relative bg-sky-600 text-white">
          <img className="mx-auto" src={icon3} height={30} width={30} />
          <p className="py-5 font-bold">RESPECT</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio odit quod esse error omnis obcaecati magnam eum tempore recusandae, saepe laboriosam nesciunt quaerat minima iusto eos harum totam cum adipisci.</p>
        </div>
      </div>
    </div>
  );
}
