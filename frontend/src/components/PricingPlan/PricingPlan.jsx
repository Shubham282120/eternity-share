import { useState } from "react";
import './pricing2.css';
import FixedPlanItems from "./FixedPlans";
import { PricingPlanData } from "../../utils/PricingPlanData";
import Modal from "../Modal";

export const PricingPlans = () => {
  const plans = [
    { id: "economical-menu", name: "Economical", price: 1100, icon: "leaf" },
    { id: "deluxe-menu", name: "Deluxe", price: 1200, icon: "utensils" },
    { id: "fast-food-menu", name: "Premium", price: 1500, icon: "crown" },
    { id: "custom", name: "Custom Plan", price: null, label: 'Add Items', icon: "cog" }
  ];

  const [selectedItems, setSelectedItems] = useState([]);
  const [itemsModalOpen, setItemsModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [addedItems, setAddedItems] = useState([]);
  const [selectItemsModalOpen, setSelectItemsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('economical-menu');

  const getPriceByName = (name) => {
    const allItems = [...(PricingPlanData?.itemPrices || []), ...addedItems];
    const entry = allItems.find(i => i.name === name);
    return entry ? entry.price : 0;
  };

  const calculateTotal = () => {
    if (selectedPlan === 'custom') {
      return selectedItems.reduce((sum, itemName) => sum + getPriceByName(itemName), 0);
    }
    const planInfo = PricingPlanData?.banquetMenus?.find(p => p.id === selectedPlan);
    return planInfo?.price || 0;
  };

  const getItemCount = () => {
    if (selectedPlan === 'custom') {
      return selectedItems.length;
    }
    const planInfo = PricingPlanData?.banquetMenus?.find(p => p.id === selectedPlan);
    return planInfo?.items?.length || 0;
  };

  return (
    <div className="pricing-wrapper">
      <div className="container">
        <div className="plan-grid">
          {plans.map(plan => {
            const planDetails = PricingPlanData?.banquetMenus?.find(p => p.id === plan.id) || null;
            const items = planDetails?.items || [];
            const isSelected = selectedPlan === plan.id;
            
            return (
              <div
                key={plan.id}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedPlan(plan.id); }}
                className={`plan-card ${isSelected ? "active selected-plan" : ""}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <div className="plan-top">
                  <div className="icon">
                    <i className={`fa fa-${plan.icon}`}></i>
                  </div>
                  <div>
                    <h3>{plan.name}</h3>
                    <div className="price">
                      {plan.price ? `₹ ${plan.price}/pax` : 'Custom Pricing'}
                    </div>
                  </div>
                </div>

                <div className="features">
                  {items.length ? (
                    items.slice(0, 5).map((it, idx) => (
                      <div key={idx} className="feature-row">
                        <i className="fa fa-check"></i> 
                        <span>{it.name || it}</span>
                      </div>
                    ))
                  ) : (
                    <div className="feature-row">
                      <i className="fa fa-cog"></i>
                      <span>Customise your menu</span>
                    </div>
                  )}
                  
                  {items.length > 5 && (
                    <button
                      className="know-more"
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        setItemsModalOpen(true); 
                      }}
                    >
                      View All Items
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Book Bar */}
        <BookNowBar 
          count={getItemCount()}
          selectedPlan={selectedPlan}
          onBook={() => {
            if (selectedPlan === 'custom') {
              setSelectItemsModalOpen(true);
            } else {
              setBookingModalOpen(true);
            }
          }}
        />

        {/* Items Modal - View Only */}
        {itemsModalOpen && (
          <Modal handleClose={() => setItemsModalOpen(false)}>
            <ItemsModal
              open={itemsModalOpen}
              onClose={() => setItemsModalOpen(false)}
              allItems={[...(PricingPlanData?.itemPrices || []), ...addedItems]}
              selectedPlan={selectedPlan}
              onProceed={() => { 
                setItemsModalOpen(false); 
                setBookingModalOpen(true); 
              }}
            />
          </Modal>
        )}

        {/* Select Items Modal - Custom Plan */}
        {selectItemsModalOpen && (
          <Modal handleClose={() => setSelectItemsModalOpen(false)}>
            <SelectItemsModal
              onClose={() => setSelectItemsModalOpen(false)}
              allItems={[...(PricingPlanData?.itemPrices || []), ...addedItems]}
              selectedItems={selectedItems}
              onBookNow={(items) => { 
                setSelectedItems(items); 
                setSelectItemsModalOpen(false);
                setBookingModalOpen(true);
              }}
            />
          </Modal>
        )}

        {/* Booking Modal */}
        {bookingModalOpen && (
          <Modal handleClose={() => setBookingModalOpen(false)}>
            <BookingModal
              open={bookingModalOpen}
              onClose={() => setBookingModalOpen(false)}
              selectedItems={selectedItems}
              total={calculateTotal()}
              allItems={[...(PricingPlanData?.itemPrices || []), ...addedItems]}
              selectedPlan={selectedPlan}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}

// ============================================
// ITEMS MODAL - VIEW ONLY (Fixed Plans)
// ============================================
function ItemsModal({ open, onClose, allItems, selectedPlan, onProceed }) {
  if (!open) return null;
  
  const planInfo = PricingPlanData?.banquetMenus?.find(plan => plan.id === selectedPlan) || {};
  const items = planInfo?.items || [];

  return (
    <div className="modal-dialog modal-md w-100" onClick={(e) => e.stopPropagation()}>
      <div className="modal-content">
        <div className="modal-header">
          <div>
            <h4 className="modal-title">{planInfo?.planName || 'Plan Details'}</h4>
            <span className="text-muted text-sm">{items.length} Items Included</span>
          </div>
          <button type="button" className="close" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-body">
          {items.map((it, idx) => (
            <div key={idx} className="item-row">
              <div className="item-info">
                <i className="fa fa-check-circle" style={{ color: 'var(--gold)' }}></i>
                <span>{it.name}</span>
                {it.quantity && <small className="text-muted">({it.quantity})</small>}
              </div>
              <div className="item-price">
                ₹{allItems.find(i => i.name === it.name)?.price || 0}
              </div>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-primary" onClick={onProceed}>
            Proceed to Book
          </button>
          <button type="button" className="btn-danger" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SELECT ITEMS MODAL - CUSTOM PLAN
// ============================================
function SelectItemsModal({ onClose, allItems, selectedItems, onBookNow }) {
  const [working, setWorking] = useState([...selectedItems]);

  const toggle = (name) => {
    setWorking(prev => 
      prev.includes(name) 
        ? prev.filter(n => n !== name) 
        : [...prev, name]
    );
  };

  const getTotalPrice = () => {
    return working.reduce((sum, itemName) => {
      const item = allItems.find(i => i.name === itemName);
      return sum + (item?.price || 0);
    }, 0);
  };

  return (
    <div className="modal-dialog modal-md w-100" onClick={(e) => e.stopPropagation()}>
      <div className="modal-content">
        <div className="modal-header">
          <div>
            <h4 className="modal-title">Select Items for Custom Plan</h4>
            <span className="text-muted text-sm">
              {working.length} items selected • Total: ₹{getTotalPrice()}
            </span>
          </div>
          <button type="button" className="close" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-body">
          {allItems.map((it, idx) => (
            <div 
              key={idx} 
              className={`item-row selectable ${working.includes(it.name) ? 'selected' : ''}`}
              onClick={() => toggle(it.name)}
            >
              <div className="item-info">
                <label className="lux-check">
                  <input 
                    type="checkbox" 
                    checked={working.includes(it.name)} 
                    onChange={(e) => { e.stopPropagation(); toggle(it.name); }} 
                  />
                  <span className="checkmark"></span>
                </label>
                <span>{it.name}</span>
              </div>
              <div className="item-price">₹{it.price}</div>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          <button 
            type="button" 
            className="btn-primary" 
            onClick={() => onBookNow(working)}
            disabled={working.length === 0}
          >
            Book Now ({working.length} items)
          </button>
          <button type="button" className="btn-danger" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// BOOKING MODAL
// ============================================
export function BookingModal({ open, onClose, selectedItems, total, allItems, selectedPlan }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ ok: null, message: '' });

  if (!open) return null;

  const planInfo = PricingPlanData?.banquetMenus?.find(plan => plan.id === selectedPlan) || {};
  const isCustom = selectedPlan === 'custom';
  const itemCount = isCustom ? selectedItems.length : planInfo?.items?.length || 0;
  const finalTotal = isCustom ? total : planInfo?.price || 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const payload = {
        name, 
        email, 
        phone,
        plan: planInfo?.planName || 'Custom Plan',
        items: isCustom ? selectedItems : planInfo?.items?.map(i => i.name) || [],
        total: finalTotal
      };

      const res = await fetch(`${process.env.REACT_APP_API_URL}/send-booking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      
      if (data.success) {
        setStatus({ ok: true, message: 'Booking request sent successfully!' });
        setTimeout(() => { 
          setName(''); 
          setEmail(''); 
          setPhone('');
          onClose(); 
        }, 1800);
      } else {
        setStatus({ ok: false, message: data.message || 'Booking failed' });
      }
    } catch (err) {
      setStatus({ ok: false, message: 'Error: Unable to connect to server!' });
    }
    
    setLoading(false);
  };

  return (
    <div className="modal-dialog modal-md w-100" onClick={(e) => e.stopPropagation()}>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="modal-header">
            <div>
              <h4 className="modal-title">Booking Details</h4>
              <span className="text-muted text-sm">
                {planInfo?.planName || 'Custom Plan'} • {itemCount} Items
              </span>
            </div>
            <button type="button" className="close" onClick={onClose}>&times;</button>
          </div>

          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="name">Full Name <span className="required">*</span></label>
              <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                className="form-control" 
                id="name" 
                placeholder="Enter your full name" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address <span className="required">*</span></label>
              <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="your.email@example.com" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number <span className="required">*</span></label>
              <input 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                type="tel" 
                className="form-control" 
                id="phone" 
                placeholder="+91 XXXXX XXXXX" 
                required
              />
            </div>

            <div className="booking-summary">
              <div className="summary-row">
                <span>Plan:</span>
                <strong>{planInfo?.planName || 'Custom Plan'}</strong>
              </div>
              <div className="summary-row">
                <span>Items:</span>
                <strong>{itemCount}</strong>
              </div>
              <div className="summary-row total">
                <span>Total Amount:</span>
                <strong>₹{finalTotal}</strong>
              </div>
            </div>

            {status.ok !== null && (
              <div className={`status-message ${status.ok ? 'success' : 'error'}`}>
                <i className={`fa fa-${status.ok ? 'check-circle' : 'exclamation-circle'}`}></i>
                {status.message}
              </div>
            )}
          </div>

          <div className="modal-footer">
            <button type="submit" disabled={loading} className="btn-primary">
              {loading ? (
                <>
                  <i className="fa fa-spinner fa-spin"></i> Sending...
                </>
              ) : (
                <>
                  <i className="fa fa-check"></i> Confirm Booking
                </>
              )}
            </button>
            <button type="button" className="btn-danger" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ============================================
// BOOK NOW BAR
// ============================================
export function BookNowBar({ count, selectedPlan, onBook }) {
  const planName = selectedPlan === 'custom' 
    ? 'Custom Plan' 
    : PricingPlanData?.banquetMenus?.find(p => p.id === selectedPlan)?.planName || 'Selected Plan';

  return (
    <div className="book-bar">
      <div className="book-bar-info">
        <h4>{planName}</h4>
        {count > 0 && <p>{count} items included</p>}
      </div>
      <button onClick={onBook}>
        <i className="fa fa-calendar-check"></i>
        {selectedPlan === 'custom' ? 'Add Items' : 'Book Now'}
      </button>
    </div>
  );
}