import { Link } from "react-router-dom";
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
   
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
       <Link to='/users' style={{textDecoration:'none' , color:'inherit'}}>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIfkDIV1KJ22YDU058LFpPZbszO1l5lX9v8Q&s"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2025</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Hussain Ahmed</span>
          </td>
          <td className="widgetLgDate">10 July 2025</td>
          <td className="widgetLgAmount">$1262.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyawVbjORfalGKAFdWZyJbg8cH12xX-MlLw&s"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Hateay Carry</span>
          </td>
          <td className="widgetLgDate">21 July 2025</td>
          <td className="widgetLgAmount">$192.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3-b6hE_5K-l4bv_gBuFtF5zWoPEhSkLsuw&s"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Julia Jessi</span>
          </td>
          <td className="widgetLgDate">19 Aug  2025</td>
          <td className="widgetLgAmount">$110.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
      </Link>
    </div>
   
  );
}
