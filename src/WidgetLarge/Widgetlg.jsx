import React from 'react';
import './widgetlg.css';

const Widgetlg = () => {
  const Button = ({type}) =>{
    return <button className={'widgetlgButton ' + type}>{type}</button>
  };
  return (
    <div className="widgetlg">
      <h3 className="widgetlgTitle">Latest transactions</h3>
      <table className="widgetlgTable">
        <tr className="widgetlgTr">
          <th className="widgetlgTh">Customer</th>
          <th className="widgetlgTh">Date</th>
          <th className="widgetlgTh">Amount</th>
          <th className="widgetlgTh">Status</th>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src="image/img5.jpg" alt="" className="widgetlgImg" />
            <span className="widgetlgName">Adigun Lekan</span>
          </td>
          <td className="widgetlgDate">2 June 2022</td>
          <td className="widgetlgAmount">$5,421</td>
          <td className="widgetlgStatus"><Button type="Approved"/>
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src="image/img2.jpg" alt="" className="widgetlgImg" />
            <span className="widgetlgName">Yusuf Mumuni</span>
          </td>
          <td className="widgetlgDate">19 June 2022</td>
          <td className="widgetlgAmount">$1,921</td>
          <td className="widgetlgStatus"><Button type="Declined"/>
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src="image/img5.jpg" alt="" className="widgetlgImg" />
            <span className="widgetlgName">Adigun Lekan</span>
          </td>
          <td className="widgetlgDate">25 June 2022</td>
          <td className="widgetlgAmount">$4,411</td>
          <td className="widgetlgStatus"><Button type="Pending"/>
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src="image/img2.jpg" alt="" className="widgetlgImg" />
            <span className="widgetlgName">Yusuf Mumuni</span>
          </td>
          <td className="widgetlgDate">28 June 2022</td>
          <td className="widgetlgAmount">$2,231</td>
          <td className="widgetlgStatus"><Button type="Approved"/>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Widgetlg