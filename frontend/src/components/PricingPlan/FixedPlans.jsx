function FixedPlanItems({ plan }) {
  return (
    <div className="items-grid">
      {plan.items.map((item, i) => (
        <div key={i} className="item-box" style={{display:'flex', flexWrap:'wrap',alignItems:'center',gap:'20px',borderBottom:'1px solid #eee', padding:'10px 6px'}}>
          <span><i className="fa fa-check"></i> {item.name}</span>
          <b>{item.quantity}</b>
        </div>
      ))}
    </div>
  );
}
export default FixedPlanItems;