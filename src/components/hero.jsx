import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../style/hero.scss";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Dashboard_items from "../components/dashboard_items";
import Right_dashboard from "./right_dashboard";
import Stock_item_count from "../pages/stock_item_count";
import Add_item from  "../pages/add_item";
import Issue_item_form from  '../pages/issue_item_form';
import Issued_item_count  from "../pages/issued_item_count";
import Past_discontinued_item  from  "../pages/past_discontinued_item_history";
import Past_issued_history from  "../pages/past_issued_history";

// const hero = () => {
//   return (
//     <div className="hero-wrapper">
//       <div className="hero">
//         <div className="hero-left">
//           <Sidebar />
//         </div>
//         <div className="hero-right">
//           {/* <Right_dashboard /> */}
//           <BrowserRouter>
//         <Routes>
//           <Route path="/">
//             <Route index element={<Dashboard_items />} />

//             <Route path="stock_item_count" element={<Stock_item_count />} />

//             <Route path="add_item" element={<Add_item />} />

//             <Route path="issue_item_form" element={<Issue_item_form />} />

//             <Route path="issued_item_count" element={<Issued_item_count />} />

//             <Route path="past_discontinued_item" element={<Past_discontinued_item />} />

//             <Route path="past_issued_history" element={<Past_issued_history />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default hero;


const hero = () => {
  return (
    <>
    {/* <BrowserRouter> */}
    <div className="hero-wrapper">
      <div className="hero">
        <div className="hero-left">
          <Sidebar />
        </div>
        <div className="hero-right">
          <Right_dashboard />
        </div>
      </div>
    </div>
    {/* </BrowserRouter> */}
    </>
  );
};

export default hero;
