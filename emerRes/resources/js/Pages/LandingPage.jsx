function LandingPage() {
    return (
        <div className="font-body text-ink bg-white leading-relaxed antialiased">

            <header className="sticky top-0 z-[60] bg-white/90 backdrop-blur border-b border-line">
                <div className="section-container flex items-center justify-between py-4">
                    <div className="font-display font-bold text-xl text-secondary">Emergency Respond</div>
                    <nav className="hidden md:flex gap-8 text-[14.5px] font-medium text-muted">
                        <a href="#how" className="hover:text-ink">How it works</a>
                        <a href="#features" className="hover:text-ink">Platform</a>
                        <a href="#tracking" className="hover:text-ink">Tracking</a>
                        <a href="#hospitals" className="hover:text-ink">For hospitals</a>
                    </nav>
                    <div className="flex items-center gap-3">
                        <a href="/login" className="btn-ghost">Log in</a>
                        <a href="/sign-up" className="btn-primary !px-5 !py-2.5 !text-sm">Sign up</a>
                    </div>
                </div>
            </header>

            <section className="cta-gradient overflow-hidden mt-[-4rem]">
                <div className="section-container grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-center">
                    <div className="text-center lg:text-left">
                        <div className="eyebrow !text-[#FFE3DF] before:!bg-white justify-center lg:justify-start">
                            Serving Tarlac and nearby provinces
                        </div>
                        <h1 className="font-display font-extrabold text-white leading-[1.06] tracking-tight mt-4 mb-5 text-[36px] sm:text-[44px] lg:text-[56px]">
                            Create an account. Report an accident. Get a hospital responding in minutes.
                        </h1>
                        <p className="text-white/90 text-[17px] max-w-[480px] mx-auto lg:mx-0 mb-7">
                            Emergency Respond connects registered users to the nearest hospital the moment an accident happens, and tracks the case from pending to rescued so no one is left wondering what's happening.
                        </p>
                        <div className="flex gap-3.5 flex-wrap justify-center lg:justify-start">
                            <a href="/sign-up" className="btn-solid-white">Create your account</a>
                            <a href="#hospitals" className="btn-outline-white">Request hospital access</a>
                        </div>
                    </div>

                    <div className="relative flex justify-center pb-0 lg:pb-10 pt-6 lg:pt-0">

                        <div className="hidden lg:block absolute left-[-150px] bottom-[-40px] phone-shell opacity-95 -rotate-[9deg] scale-[.86] z-10">
                            <div className="phone-screen">
                                <div className="phone-header">
                                    <b className="font-display font-bold text-secondary text-[15px]">Sign Up</b>
                                    <span className="text-[11.5px] text-muted">Emergency Respond</span>
                                </div>
                                <div className="px-5 py-6 flex-1">
                                    <h2 className="title !text-xl text-center mb-6">Create Account</h2>

                                    <div className="relative mb-6">
                                        <input type="text" placeholder=" " className="peer inputDesign py-2 text-sm" />
                                        <label className="labelPosition">Full Name</label>
                                    </div>
                                    <div className="relative mb-6">
                                        <input type="email" placeholder=" " className="peer inputDesign py-2 text-sm" />
                                        <label className="labelPosition">Email</label>
                                    </div>
                                    <div className="relative mb-8">
                                        <input type="password" placeholder=" " className="peer inputDesign py-2 text-sm" />
                                        <label className="labelPosition">Password</label>
                                    </div>

                                    <button className="btn-primary w-full !py-2.5 !text-sm mb-4">Create Account</button>
                                    <p className="text-center text-xs text-muted">Already have an account? <a href="/login" className="link">Log in</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-20 translate-y-2.5 phone-shell">
                            <div className="phone-screen">
                                <div className="phone-header">
                                    <b className="font-display font-bold text-secondary text-[15px]">Dashboard</b>
                                    <span className="text-[11.5px] text-muted">Logout</span>
                                </div>
                                <div className="px-4 py-3.5 flex-1 overflow-hidden">
                                    <div className="text-[11px] text-muted mb-0.5">
                                        Hospital Admin
                                        <b className="block font-display text-base text-ink mt-0.5">Good Afternoon 👋</b>
                                    </div>

                                    <div className="bg-bgsoft rounded-[14px] p-3.5 mt-3">
                                        <b className="font-display text-[13.5px] block mb-1">🏥 Hospital Information</b>
                                        <div className="text-[11.5px] text-muted">📍 Tarlac City, Tarlac</div>
                                        <div className="text-[11.5px] text-muted">📞 0909 090 0123</div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-2 mt-3">
                                        <div className="stat-tile">
                                            <b className="stat-value text-primary">2</b>
                                            <span className="stat-label">Active Cases</span>
                                        </div>
                                        <div className="stat-tile">
                                            <b className="stat-value text-available">9</b>
                                            <span className="stat-label">Available Ambulances</span>
                                        </div>
                                        <div className="stat-tile">
                                            <b className="stat-value">1</b>
                                            <span className="stat-label">Completed</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center text-[11px] font-bold text-ink mt-4 mb-2">
                                        <span>🚨 Recommended Emergency</span>
                                        <small className="text-primary font-semibold">See all</small>
                                    </div>
                                    <div className="bg-white border border-line rounded-xl p-3 flex justify-between items-center">
                                        <div>
                                            <b className="text-[12.5px] block">#3 severe</b>
                                            <span className="text-[10.5px] text-muted">📍 Sitio Tambo, Capas</span>
                                        </div>
                                        <div className="bg-primary text-white text-[10.5px] font-bold px-3 py-1.5 rounded-lg">View</div>
                                    </div>

                                    <div className="flex justify-between items-center text-[11px] font-bold text-ink mt-4 mb-2">
                                        <span>🚑 Ambulance Status</span>
                                        <small className="text-primary font-semibold">See all</small>
                                    </div>
                                    <div className="status-row">
                                        <span className="flex items-center"><span className="status-dot bg-available"></span>Available</span>
                                        <b>3</b>
                                    </div>
                                    <div className="status-row !border-b-0">
                                        <span className="flex items-center"><span className="status-dot bg-ongoing"></span>Responding</span>
                                        <b>2</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-wrap" id="how">
                <div className="section-container">
                    <div className="section-heading">
                        <div className="eyebrow">The process</div>
                        <h2 className="section-title">Four steps, tracked the whole way</h2>
                        <p className="section-description">Every accident report moves through the same clear sequence, from account creation to a resolved case.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="card-flat p-7">
                            <div className="step-number">1</div>
                            <h3 className="font-display font-bold text-lg mb-2">Create an account</h3>
                            <p className="text-muted text-[14.5px]">Sign up with your name and contact number so reports can be traced to a verified user.</p>
                        </div>
                        <div className="card-flat p-7">
                            <div className="step-number">2</div>
                            <h3 className="font-display font-bold text-lg mb-2">Report the accident</h3>
                            <p className="text-muted text-[14.5px]">Share the location and severity. The report is logged instantly and marked pending.</p>
                        </div>
                        <div className="card-flat p-7">
                            <div className="step-number">3</div>
                            <h3 className="font-display font-bold text-lg mb-2">A hospital responds</h3>
                            <p className="text-muted text-[14.5px]">Registered hospitals nearby see it on their dashboard and dispatch an ambulance.</p>
                        </div>
                        <div className="card-flat p-7">
                            <div className="step-number">4</div>
                            <h3 className="font-display font-bold text-lg mb-2">Track it to rescued</h3>
                            <p className="text-muted text-[14.5px]">Status updates in real time until the case is marked rescued, kept on your account history.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-wrap bg-bgsoft" id="features">
                <div className="section-container">
                    <div className="section-heading">
                        <div className="eyebrow">Platform</div>
                        <h2 className="section-title">One system, both sides of the response</h2>
                        <p className="section-description">Built for the registered user reporting at the scene and the hospital coordinating the response.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="card-flat p-6">
                            <div className="feature-icon">🔐</div>
                            <h3 className="text-base font-bold mb-1.5">Verified accounts</h3>
                            <p className="text-muted text-[13.6px]">Every report is tied to a signed-up user, so hospitals know who filed it and how to reach them.</p>
                        </div>
                        <div className="card-flat p-6">
                            <div className="feature-icon">📍</div>
                            <h3 className="text-base font-bold mb-1.5">Accident reporting</h3>
                            <p className="text-muted text-[13.6px]">Severity, location, and contact details, submitted in under a minute once you're signed in.</p>
                        </div>
                        <div className="card-flat p-6">
                            <div className="feature-icon">🗺️</div>
                            <h3 className="text-base font-bold mb-1.5">Live incident map</h3>
                            <p className="text-muted text-[13.6px]">View reported accidents on an interactive Leaflet map, helping hospitals quickly identify the exact location of an incident.</p>
                        </div>
                        <div className="card-flat p-6">
                            <div className="feature-icon">🏥</div>
                            <h3 className="text-base font-bold mb-1.5">Hospital registration</h3>
                            <p className="text-muted text-[13.6px]">Hospitals register once and appear as a responder for accidents within their coverage.</p>
                        </div>
                        <div className="card-flat p-6">
                            <div className="feature-icon">🚑</div>
                            <h3 className="text-base font-bold mb-1.5">Ambulance status</h3>
                            <p className="text-muted text-[13.6px]">Track available and responding ambulances per hospital in real time.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-wrap" id="tracking">
                <div className="section-container">
                    <div className="section-heading mx-auto text-center">
                        <div className="eyebrow justify-center">Case status</div>
                        <h2 className="section-title">Pending, ongoing, or rescued — always current</h2>
                        <p className="section-description">Every report sits in exactly one state, and it's the same state for everyone looking at the case.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="card-flat p-6">
                            <span className="badge-pending mb-3.5">Pending</span>
                            <h4 className="font-display font-bold text-[17px] mb-2">Waiting for responder</h4>
                            <p className="text-muted text-sm">Case logged and visible to nearby hospitals. No unit has accepted it yet.</p>
                        </div>
                        <div className="card-flat p-6">
                            <span className="badge-ongoing mb-3.5">Ongoing</span>
                            <h4 className="font-display font-bold text-[17px] mb-2">Responding unit assigned</h4>
                            <p className="text-muted text-sm">A hospital has accepted the case and an ambulance is on its way to the location.</p>
                        </div>
                        <div className="card-flat p-6">
                            <span className="badge-rescued mb-3.5">Rescued</span>
                            <h4 className="font-display font-bold text-[17px] mb-2">Completed</h4>
                            <p className="text-muted text-sm">Patient recovered and the case closed, kept on record in your account history.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-wrap bg-bgsoft" id="hospitals">
                <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <div className="eyebrow">For hospitals</div>
                        <h2 className="title tracking-tight mt-3 mb-4 !text-[26px] sm:!text-[32px] lg:!text-[36px]">Know what's coming before the ambulance leaves</h2>
                        <p className="text-muted text-base mb-6 max-w-[480px]">Submit a request to register your facility. Once an admin reviews and approves it, you'll see nearby accident reports the moment they're filed — severity, location, and verified reporter details included.</p>

                        <div className="grid grid-cols-3 gap-3 mb-7">
                            <div className="card-flat p-4">
                                <div className="w-7 h-7 rounded-lg bg-bgsoft text-primary font-display font-bold text-[13px] flex items-center justify-center mb-3">1</div>
                                <p className="text-[12.5px] font-semibold leading-snug">Submit hospital request</p>
                            </div>
                            <div className="card-flat p-4">
                                <div className="w-7 h-7 rounded-lg bg-bgsoft text-primary font-display font-bold text-[13px] flex items-center justify-center mb-3">2</div>
                                <p className="text-[12.5px] font-semibold leading-snug">Admin reviews details</p>
                            </div>
                            <div className="card-flat p-4">
                                <div className="w-7 h-7 rounded-lg bg-bgsoft text-primary font-display font-bold text-[13px] flex items-center justify-center mb-3">3</div>
                                <p className="text-[12.5px] font-semibold leading-snug">Approved, dashboard unlocked</p>
                            </div>
                        </div>

                        <ul className="flex flex-col gap-3 mb-7">
                            <li className="flex gap-2.5 text-[14.5px]"><span className="text-rescued font-bold">✓</span>Accept a case in one tap and it moves to ongoing automatically</li>
                            <li className="flex gap-2.5 text-[14.5px]"><span className="text-rescued font-bold">✓</span>Track ambulance availability across your fleet</li>
                            <li className="flex gap-2.5 text-[14.5px]"><span className="text-rescued font-bold">✓</span>Full history of every case your hospital responded to</li>
                        </ul>
                        <a href="#" className="btn-primary">Request hospital access</a>
                        <p className="text-xs text-muted mt-3">🔒 Reviewed by an admin before your dashboard goes live — usually within 1–2 business days.</p>
                    </div>

                    <div className="card overflow-hidden">
                        <div className="bg-primary px-6 py-5 text-white rounded-t-2xl flex items-center justify-between">
                            <div>
                                <span className="text-xs opacity-85">Hospital Admin</span>
                                <b className="block font-display text-[19px] mt-0.5">Good Afternoon 👋</b>
                            </div>
                            <span className="bg-white/15 text-white text-[10.5px] font-bold px-3 py-1.5 rounded-full">✓ Approved</span>
                        </div>
                        <div className="p-6">
                            <div className="bg-bgsoft rounded-xl px-4 py-3.5 mb-4">
                                <b className="font-display text-[14.5px] block">Tarlac Provincial Hospital</b>
                                <span className="text-xs text-muted">📍 Tarlac City, Tarlac · 📞 0909 090 0123</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2.5 mb-4">
                                <div className="stat-tile">
                                    <b className="font-display text-[22px] block text-primary">2</b>
                                    <span className="text-[10.5px] text-muted">Active Cases</span>
                                </div>
                                <div className="stat-tile">
                                    <b className="font-display text-[22px] block text-available">9</b>
                                    <span className="text-[10.5px] text-muted">Available Ambulances</span>
                                </div>
                                <div className="stat-tile">
                                    <b className="font-display text-[22px] block">1</b>
                                    <span className="text-[10.5px] text-muted">Completed</span>
                                </div>
                            </div>
                            <div className="status-row !border-t !border-b-0 pt-2.5">
                                <span className="flex items-center"><span className="status-dot bg-available"></span>Available</span>
                                <b>3</b>
                            </div>
                            <div className="status-row !border-t !border-b-0 pt-2.5">
                                <span className="flex items-center"><span className="status-dot bg-ongoing"></span>Responding</span>
                                <b>2</b>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-wrap">
                <div className="section-container">
                    <div className="rounded-3xl px-8 sm:px-12 py-16 text-center text-white cta-gradient-br">
                        <h2 className="title !text-white !text-[28px] sm:!text-[36px] lg:!text-[42px] mb-3.5">Every minute counts. Create your account before you need it.</h2>
                        <p className="opacity-90 max-w-[520px] mx-auto mb-7 text-base">Sign up to report an accident and track it in real time. Hospitals can request access — an admin reviews and approves each request before the dashboard unlocks.</p>
                        <div className="flex gap-3.5 justify-center flex-wrap">
                            <a href="#" className="btn-solid-white">Create your account</a>
                            <a href="#hospitals" className="btn-outline-white">Request hospital access</a>
                        </div>
                        <p className="max-w-[640px] mx-auto mt-6 text-[13px] opacity-85"><strong className="opacity-100">Emergency Respond supplements, not replaces, your local emergency hotline.</strong> In a life-threatening emergency, call your local emergency number first.</p>
                    </div>
                </div>
            </section>

            <footer className="border-t border-line ">
                <div className="section-container py-6 flex justify-between flex-wrap gap-5">
                    <div>
                        <div className="font-display font-bold text-xl text-secondary">Emergency Respond</div>
                        <p className="mt-5 text-xs text-muted">Accident reporting and hospital response tracking for Tarlac.</p>
                    </div>
                    <div className="flex gap-6 text-[13.5px] text-muted flex-wrap">
                        <a href="#how" className="hover:text-ink">How it works</a>
                        <a href="#features" className="hover:text-ink">Platform</a>
                        <a href="#hospitals" className="hover:text-ink">For hospitals</a>
                        <a href="/privacy" className="hover:text-ink">Privacy</a>
                        <a href="#" className="hover:text-ink">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;