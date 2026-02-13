import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../data/eventsdata.js";

function EventDetail() {
    const [activeTab, setActiveTab] = useState("tab01");
    
    // Get event ID from URL parameter
    const { eventId } = useParams();
    
    // Get event data based on ID
    const event = getEventById(eventId);
    
    // If event not found, show error
    if (!event) {
        return (
            <div className="container" style={{ padding: "100px 0", textAlign: "center" }}>
                <h1>Event Not Found</h1>
                <p>The event you're looking for doesn't exist.</p>
            </div>
        );
    }

    return (
        <>
            <header className="page-header" data-background={event.headerImage}>
                <div className="container">
                    <h1>{event.name}</h1>
                    <p>{event.tagline}</p>
                </div>
                <div className="scroll-down"></div>
            </header>

            <section className="content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="event-headline">
                                <div className="rating">
                                    {[...Array(event.rating)].map((_, i) => (
                                        <i key={i} className="lni lni-star-filled"></i>
                                    ))}
                                    <small>{event.reviewCount} guest reviews</small>
                                </div>
                                <h3>{event.name}</h3>
                                <address>
                                    <span>
                                        <i className="lni lni-phone"></i>
                                        {event.phone}
                                    </span>
                                </address>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="room-gallery-top">
                                <div className="swiper-wrapper">
                                    {event.gallery.map((image, index) => (
                                        <div key={index} className="swiper-slide">
                                            <a href={image} data-fancybox className="fancy_boxes">
                                                <img src={image} alt={`${event.name} gallery ${index + 1}`} />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="room-gallery-thumbs">
                                <div className="swiper-wrapper">
                                    {event.gallery.map((image, index) => (
                                        <div key={index} className="swiper-slide">
                                            <img src={image} alt={`${event.name} thumbnail ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="room-info-box">
                                <h6>{event.about.title}</h6>
                                {event.about.paragraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="content-tab">
                                <ul className="tab-nav">
                                    <li className={activeTab === "tab01" ? "active" : ""}>
                                        <a href="#tab01" onClick={(e) => { e.preventDefault(); setActiveTab("tab01"); }}>
                                            Benefits
                                        </a>
                                    </li>
                                    <li className={activeTab === "tab02" ? "active" : ""}>
                                        <a href="#tab02" onClick={(e) => { e.preventDefault(); setActiveTab("tab02"); }}>
                                            Features
                                        </a>
                                    </li>
                                </ul>

                                <div id="tab01" className={`tab-item ${activeTab === "tab01" ? "active-item" : ""}`}>
                                    <ul>
                                        {event.benefits.map((benefit, index) => (
                                            <li key={index}>
                                                <figure>
                                                    <img src={benefit.icon} alt="Icon" />
                                                </figure>
                                                <b>{benefit.label}</b>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div id="tab02" className={`tab-item ${activeTab === "tab02" ? "active-item" : ""}`}>
                                    {event.features.map((feature, index) => (
                                        <p key={index}>{feature}</p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="clearfix spacing-100"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section no-spacing" data-background="#d39929">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-bar">
                                <i className="lni lni-protection"></i>
                                <h6>Luxury Venue • Best Price • Book Now</h6>
                                <strong>{event.phone}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EventDetail;
