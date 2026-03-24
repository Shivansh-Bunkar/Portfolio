import React from "react";
import "./faqpage.css";


function FaqPage() {
    const faqData = [
        {
            subject: "HTML Basics",
            items: [
                {
                    q: "What is HTML?",
                    a: "HTML is the standard markup language for web pages."
                },
                {
                    q: "What are tags and elements?",
                    a: "Tags define elements. Elements are building blocks of a webpage."
                },
                {
                    q: "What is HTML5?",
                    a: "HTML5 is the latest version with modern features."
                }
            ]
        },

        {
            subject: "Web Fundamentals",
            items: [
                {
                    q: "What is a web browser?",
                    a: "Software used to access and view websites."
                },
                {
                    q: "What is a web server?",
                    a: "A system that delivers web pages to users."
                },
                {
                    q: "What is hosting?",
                    a: "Service that stores websites on servers."
                }
            ]
        },

        {
            subject: "Internet & Protocols",
            items: [
                {
                    q: "What is HTTP?",
                    a: "Protocol used to transfer web data."
                },
                {
                    q: "What is HTTPS?",
                    a: "Secure version of HTTP using encryption."
                },
                {
                    q: "What is a URL?",
                    a: "Address of a web resource."
                },
                {
                    q: "What is a domain name?",
                    a: "Human-readable website address."
                }
            ]
        },

        {
            subject: "CSS & Layout",
            items: [
                {
                    q: "What is CSS?",
                    a: "CSS is used to style and design web pages."
                },
                {
                    q: "What is Box Model?",
                    a: "Defines margin, border, padding, and content."
                },
                {
                    q: "What is Flexbox?",
                    a: "Layout system for flexible alignment."
                },
                {
                    q: "What is Grid?",
                    a: "CSS system for row-column layouts."
                }
            ]
        },

        {
            subject: "JavaScript & React",
            items: [
                {
                    q: "What is JavaScript?",
                    a: "JavaScript makes web pages interactive."
                },
                {
                    q: "What is JSX?",
                    a: "JSX lets you write HTML-like code in React."
                },
                {
                    q: "What is React?",
                    a: "Library for building user interfaces."
                }
            ]
        },

        {
            subject: "Backend & APIs",
            items: [
                {
                    q: "What is Node.js?",
                    a: "Runs JavaScript outside browser."
                },
                {
                    q: "What is npm?",
                    a: "Package manager for Node.js."
                },
                {
                    q: "What is REST API?",
                    a: "Communication between client and server using HTTP."
                },
                {
                    q: "What is JSON?",
                    a: "Lightweight data format for exchanging data."
                }
            ]
        }
    ];

    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-logo">FAQ Hub</div>

                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#faq">Questions</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <button className="menu-btn">☰</button>
            </nav>

            {/* Hero */}
            <h1 id="home">
                FAQ Section (Made by Shivansh for Practice)
            </h1>

            {/* FAQ */}
            <section className="container" id="faq">
                <h2>Frequently Asked Questions</h2>

                <div className="faq-list">
                    {faqData.map((section, i) => (
                        <div key={i} className="faq-section">
                            <h2 className="subject-title">{section.subject}</h2>

                            <div className="faq-list">
                                {section.items.map((item, j) => (
                                    <div className="faq-item" key={j}>
                                        <div className="question">{item.q}</div>
                                        <div className="answer">{item.a}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section className="container" id="contact">
                <h2>Contact Us / Submit a Question</h2>

                <form>
                    <label>Name</label>
                    <input type="text" required />

                    <label>Email</label>
                    <input type="email" required />

                    <label>Your Question</label>
                    <textarea rows="4" required />

                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    );
}

export default FaqPage;