// import React from 'react'

// export default function FunFact() {
//   return (
//     <section className="fun-fact-area gray-pattern">
// 	<div className="container">
// 		<div className="row">
// 			<div className="col-md-3 col-sm-6 col-xs-12">
// 				<div className="single-fun-fact">

// 					<div className="inner">
// 						<div className="icon-box">
// 							<i className="kerian-icon-competition"></i>
// 						</div>
//                         {/* <!-- /.icon-box --> */}
// 						<h3 className="counter">642</h3>
// 						<p>Completed Projects</p>
// 					</div>
//                     {/* <!-- /.inner --> */}
// 				</div>
//                 {/* <!-- /.single-fun-fact --> */}
// 			</div>
//             {/* <!-- /.col-md-3 --> */}
// 			<div className="col-md-3 col-sm-6 col-xs-12">
// 				<div className="single-fun-fact">

// 					<div className="inner">
// 						<div className="icon-box">
// 							<i className="kerian-icon-brainstorming"></i>
// 						</div>
//                         {/* <!-- /.icon-box --> */}
// 						<h3 className="counter">246</h3>
// 						<p>Employerers</p>
// 					</div>
//                     {/* <!-- /.inner --> */}
// 				</div>
//                 {/* <!-- /.single-fun-fact --> */}
// 			</div>
//             {/* <!-- /.col-md-3 --> */}
// 			<div className="col-md-3 col-sm-6 col-xs-12">
// 				<div className="single-fun-fact">

// 					<div className="inner">
// 						<div className="icon-box">
// 							<i className="kerian-icon-piggy-bank"></i>
// 						</div>
//                         {/* <!-- /.icon-box --> */}
// 						<h3 className="counter">3456</h3>
// 						<p>Coffe Cups</p>
// 					</div>
//                     {/* <!-- /.inner --> */}
// 				</div>
//                 {/* <!-- /.single-fun-fact --> */}
// 			</div>
//             {/* <!-- /.col-md-3 --> */}
// 			<div className="col-md-3 col-sm-6 col-xs-12">
// 				<div className="single-fun-fact">
// 					<div className="inner">
// 						<div className="icon-box">
// 							<i className="kerian-icon-chat"></i>
// 						</div>
//                         {/* <!-- /.icon-box --> */}
// 						<h3 className="counter">431</h3>
// 						<p>Happy Clients</p>
// 					</div>
//                     {/* <!-- /.inner --> */}
// 				</div>
//                 {/* <!-- /.single-fun-fact --> */}
// 			</div>
//             {/* <!-- /.col-md-3 --> */}
// 		</div>
//         {/* <!-- /.row --> */}
// 	</div>
//     {/* <!-- /.container --> */}
// </section>
// // <!-- /.fun-fact-area -->
//   )
// }

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const funFacts = [
  { icon: "kerian-icon-competition", count: 642, label: "Completed Projects" },
  { icon: "kerian-icon-brainstorming", count: 246, label: "Employerers" },
  { icon: "kerian-icon-piggy-bank", count: 3456, label: "Coffe Cups" },
  { icon: "kerian-icon-chat", count: 431, label: "Happy Clients" },
];

const FunFact = () => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section className="fun-fact-area gray-pattern" ref={ref}>
      <div className="container">
        <div className="row">
          {funFacts.map((fact, index) => (
            <div className="col-md-3 col-sm-6 col-xs-12" key={index}>
              <div className="single-fun-fact">
                <div className="inner">
                  <div className="icon-box">
                    <i className={fact.icon}></i>
                  </div>
                  <h3 className="counter">
                    {inView ? <CountUp end={fact.count} duration={2} /> : 0}
                  </h3>
                  <p>{fact.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFact;