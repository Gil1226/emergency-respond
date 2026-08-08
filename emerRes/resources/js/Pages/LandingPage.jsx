function LandingPage() {  
    return (
        <body class="font-body text-ink bg-white leading-relaxed antialiased">
 
        <header class="sticky top-0 z-[60] bg-white/90 backdrop-blur border-b border-line">
            <div class="max-w-[1180px] mx-auto flex items-center justify-between px-8 py-4">
                <div class="font-display font-bold text-xl text-secondary">Emergency Respond</div>
                <nav class="hidden md:flex gap-8 text-[14.5px] font-medium text-muted">
                <a href="#how" class="hover:text-ink">How it works</a>
                <a href="#features" class="hover:text-ink">Platform</a>
                <a href="#tracking" class="hover:text-ink">Tracking</a>
                <a href="#hospitals" class="hover:text-ink">For hospitals</a>
                </nav>
                <div class="flex items-center gap-3">
                <a href="/login" class="button-style-2 px-5 py-2.5 font-semibold rounded-full">Log in</a>
                <a href="/sign-up" class="button-style px-5 py-2.5 text-sm font-semibold">Sign up</a>
                </div>
            </div>
            </header>
            
            <section class="bg-gradient-to-b from-coral1 to-secondary pt-20 overflow-hidden">
            <div class="max-w-[1180px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-center">
                <div class="text-center lg:text-left">
                <div class="inline-flex items-center gap-2 font-display font-semibold text-[13px] tracking-[.06em] uppercase text-[#FFE3DF] before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-white">
                    Serving Tarlac and nearby provinces
                </div>
                <h1 class="font-display font-extrabold text-white leading-[1.06] tracking-tight mt-4 mb-5 text-[36px] sm:text-[44px] lg:text-[56px]">
                    Create an account. Report an accident. Get a hospital responding in minutes.
                </h1>
                <p class="text-white/90 text-[17px] max-w-[480px] mx-auto lg:mx-0 mb-7">
                    Emergency Respond connects registered users to the nearest hospital the moment an accident happens, and tracks the case from pending to rescued so no one is left wondering what's happening.
                </p>
                <div class="flex gap-3.5 flex-wrap justify-center lg:justify-start">
                    <a href="/sign-up" class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-[15px] font-semibold text-secondary hover:bg-[#FFEDEB] transition">Create your account</a>
                    <a href="" class="inline-flex items-center gap-2 rounded-lg border-[1.5px] border-white/60 px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-white/10 transition">Request hospital access</a>
                </div>
                </div>
            
                <div class="relative flex justify-center pb-0 lg:pb-10 pt-6 lg:pt-0">

                <div class="hidden lg:block absolute left-[-150px] bottom-[-40px] w-[270px] bg-[#0E0E10] rounded-[38px] p-2.5 shadow-phone opacity-95 -rotate-[9deg] scale-[.86] z-10">
                    <div class="card !rounded-[28px] overflow-hidden h-[560px] flex flex-col !shadow-none">
                    <div class="flex items-center justify-between px-[18px] pt-4 pb-2.5 border-b border-line">
                        <b class="font-display font-bold text-secondary text-[15px]">Sign Up</b>
                        <span class="text-[11.5px] text-muted">Emergency Respond</span>
                    </div>
                    <div class="px-5 py-6 flex-1">
                        <h2 class="title !text-xl text-center mb-6">Create Account</h2>
            
                        <div class="relative mb-6">
                        <input type="text" placeholder=" " class="peer inputDesign py-2 text-sm" />
                        <label class="labelPosition">Full Name</label>
                        </div>
                        <div class="relative mb-6">
                        <input type="email" placeholder=" " class="peer inputDesign py-2 text-sm" />
                        <label class="labelPosition">Email</label>
                        </div>
                        <div class="relative mb-8">
                        <input type="password" placeholder=" " class="peer inputDesign py-2 text-sm" />
                        <label class="labelPosition">Password</label>
                        </div>
            
                        <button class="button-style w-full py-2.5 text-sm font-semibold mb-4">Create Account</button>
                        <p class="text-center text-xs text-muted">Already have an account? <a href="/login" class="link">Log in</a></p>
                    </div>
                    </div>
                </div>
            

                <div class="relative z-20 translate-y-2.5 w-[270px] bg-[#0E0E10] rounded-[38px] p-2.5 shadow-phone">
                    <div class="card !rounded-[28px] overflow-hidden h-[560px] flex flex-col !shadow-none">
                    <div class="flex items-center justify-between px-[18px] pt-4 pb-2.5 border-b border-line">
                        <b class="font-display font-bold text-secondary text-[15px]">Dashboard</b>
                        <span class="text-[11.5px] text-muted">Logout</span>
                    </div>
                    <div class="px-4 py-3.5 flex-1 overflow-hidden">
                        <div class="text-[11px] text-muted mb-0.5">
                        Hospital Admin
                        <b class="block font-display text-base text-ink mt-0.5">Good Afternoon 👋</b>
                        </div>
            
                        <div class="bg-bgsoft rounded-[14px] p-3.5 mt-3">
                        <b class="font-display text-[13.5px] block mb-1">🏥 Hospital Information</b>
                        <div class="text-[11.5px] text-muted">📍 Tarlac City, Tarlac</div>
                        <div class="text-[11.5px] text-muted">📞 0909 090 0123</div>
                        </div>
            
                        <div class="grid grid-cols-3 gap-2 mt-3">
                        <div class="text-center bg-white border border-line rounded-xl py-2.5 px-1">
                            <b class="font-display text-[18px] block text-primary">2</b>
                            <span class="text-[9.5px] text-muted">Active Cases</span>
                        </div>
                        <div class="text-center bg-white border border-line rounded-xl py-2.5 px-1">
                            <b class="font-display text-[18px] block text-available">9</b>
                            <span class="text-[9.5px] text-muted">Available Ambulances</span>
                        </div>
                        <div class="text-center bg-white border border-line rounded-xl py-2.5 px-1">
                            <b class="font-display text-[18px] block">1</b>
                            <span class="text-[9.5px] text-muted">Completed</span>
                        </div>
                        </div>
            
                        <div class="flex justify-between items-center text-[11px] font-bold text-ink mt-4 mb-2">
                        <span>🚨 Recommended Emergency</span>
                        <small class="text-primary font-semibold">See all</small>
                        </div>
                        <div class="bg-white border border-line rounded-xl p-3 flex justify-between items-center">
                        <div>
                            <b class="text-[12.5px] block">#3 severe</b>
                            <span class="text-[10.5px] text-muted">📍 Sitio Tambo, Capas</span>
                        </div>
                        <div class="bg-primary text-white text-[10.5px] font-bold px-3 py-1.5 rounded-lg">View</div>
                        </div>
            
                        <div class="flex justify-between items-center text-[11px] font-bold text-ink mt-4 mb-2">
                        <span>🚑 Ambulance Status</span>
                        <small class="text-primary font-semibold">See all</small>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-line text-[12.5px]">
                        <span class="flex items-center"><span class="w-2 h-2 rounded-full bg-available inline-block mr-2"></span>Available</span>
                        <b>3</b>
                        </div>
                        <div class="flex justify-between items-center py-2 text-[12.5px]">
                        <span class="flex items-center"><span class="w-2 h-2 rounded-full bg-ongoing inline-block mr-2"></span>Responding</span>
                        <b>2</b>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            
            <section class="py-24" id="how">
            <div class="max-w-[1180px] mx-auto px-8">
                <div class="max-w-[600px] mb-12">
                <div class="inline-flex items-center gap-2 font-display font-semibold text-[13px] tracking-[.06em] uppercase text-primary before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-primary">
                    The process
                </div>
                <h2 class="title tracking-tight mt-3 !text-[28px] sm:!text-[34px] lg:!text-[40px]">Four steps, tracked the whole way</h2>
                <p class="text-muted text-base mt-3.5">Every accident report moves through the same clear sequence, from account creation to a resolved case.</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div class="card border border-line !shadow-none p-7">
                    <div class="w-9 h-9 rounded-[10px] bg-bgsoft text-primary font-display font-bold text-[15px] flex items-center justify-center mb-5">1</div>
                    <h3 class="font-display font-bold text-lg mb-2">Create an account</h3>
                    <p class="text-muted text-[14.5px]">Sign up with your name and contact number so reports can be traced to a verified user.</p>
                </div>
                <div class="card border border-line !shadow-none p-7">
                    <div class="w-9 h-9 rounded-[10px] bg-bgsoft text-primary font-display font-bold text-[15px] flex items-center justify-center mb-5">2</div>
                    <h3 class="font-display font-bold text-lg mb-2">Report the accident</h3>
                    <p class="text-muted text-[14.5px]">Share the location and severity. The report is logged instantly and marked pending.</p>
                </div>
                <div class="card border border-line !shadow-none p-7">
                    <div class="w-9 h-9 rounded-[10px] bg-bgsoft text-primary font-display font-bold text-[15px] flex items-center justify-center mb-5">3</div>
                    <h3 class="font-display font-bold text-lg mb-2">A hospital responds</h3>
                    <p class="text-muted text-[14.5px]">Registered hospitals nearby see it on their dashboard and dispatch an ambulance.</p>
                </div>
                <div class="card border border-line !shadow-none p-7">
                    <div class="w-9 h-9 rounded-[10px] bg-bgsoft text-primary font-display font-bold text-[15px] flex items-center justify-center mb-5">4</div>
                    <h3 class="font-display font-bold text-lg mb-2">Track it to rescued</h3>
                    <p class="text-muted text-[14.5px]">Status updates in real time until the case is marked rescued, kept on your account history.</p>
                </div>
                </div>
            </div>
            </section>
            
            <section class="py-24 bg-bgsoft" id="features">
                <div class="max-w-[1180px] mx-auto px-8">

                    <div class="max-w-[600px] mb-12">
                        <div class="inline-flex items-center gap-2 font-display font-semibold text-[13px] tracking-[.06em] uppercase text-primary before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-primary">
                            Platform
                        </div>

                        <h2 class="title tracking-tight mt-3 !text-[28px] sm:!text-[34px] lg:!text-[40px]">
                            One system, both sides of the response
                        </h2>

                        <p class="text-muted text-base mt-3.5">
                            Built for the registered user reporting at the scene and the hospital coordinating the response.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                        <div class="card border border-line !shadow-none p-6">
                            <div class="w-[42px] h-[42px] rounded-xl bg-bgsoft flex items-center justify-center mb-4 text-xl">
                                🔐
                            </div>

                            <h3 class="text-base font-bold mb-1.5">
                                Verified accounts
                            </h3>

                            <p class="text-muted text-[13.6px]">
                                Every report is tied to a signed-up user, so hospitals know who filed it and how to reach them.
                            </p>
                        </div>

                        <div class="card border border-line !shadow-none p-6">
                            <div class="w-[42px] h-[42px] rounded-xl bg-bgsoft flex items-center justify-center mb-4 text-xl">
                                📍
                            </div>

                            <h3 class="text-base font-bold mb-1.5">
                                Accident reporting
                            </h3>

                            <p class="text-muted text-[13.6px]">
                                Severity, location, and contact details, submitted in under a minute once you're signed in.
                            </p>
                        </div>

                        <div class="card border border-line !shadow-none p-6">
                            <div class="w-[42px] h-[42px] rounded-xl bg-bgsoft flex items-center justify-center mb-4 text-xl">
                                🗺️
                            </div>

                            <h3 class="text-base font-bold mb-1.5">
                                Live incident map
                            </h3>

                            <p class="text-muted text-[13.6px]">
                                View reported accidents on an interactive Leaflet map, helping hospitals quickly identify the exact location of an incident.
                            </p>
                        </div>

                        <div class="card border border-line !shadow-none p-6">
                            <div class="w-[42px] h-[42px] rounded-xl bg-bgsoft flex items-center justify-center mb-4 text-xl">
                                🏥
                            </div>

                            <h3 class="text-base font-bold mb-1.5">
                                Hospital registration
                            </h3>

                            <p class="text-muted text-[13.6px]">
                                Hospitals register once and appear as a responder for accidents within their coverage.
                            </p>
                        </div>

                        <div class="card border border-line !shadow-none p-6">
                            <div class="w-[42px] h-[42px] rounded-xl bg-bgsoft flex items-center justify-center mb-4 text-xl">
                                🚑
                            </div>

                            <h3 class="text-base font-bold mb-1.5">
                                Ambulance status
                            </h3>

                            <p class="text-muted text-[13.6px]">
                                Track available and responding ambulances per hospital in real time.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            
            <section class="py-24" id="tracking">
            <div class="max-w-[1180px] mx-auto px-8">
                <div class="max-w-[600px] mx-auto text-center mb-12">
                <div class="inline-flex items-center justify-center gap-2 font-display font-semibold text-[13px] tracking-[.06em] uppercase text-primary before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-primary">
                    Case status
                </div>
                <h2 class="title tracking-tight mt-3 !text-[28px] sm:!text-[34px] lg:!text-[40px]">Pending, ongoing, or rescued — always current</h2>
                <p class="text-muted text-base mt-3.5">Every report sits in exactly one state, and it's the same state for everyone looking at the case.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div class="card border border-line !shadow-none p-6">
                    <span class="inline-block font-display font-bold text-[11px] tracking-[.03em] uppercase px-3 py-1.5 rounded-full text-white bg-pending mb-3.5">Pending</span>
                    <h4 class="font-display font-bold text-[17px] mb-2">Waiting for responder</h4>
                    <p class="text-muted text-sm">Case logged and visible to nearby hospitals. No unit has accepted it yet.</p>
                </div>
                <div class="card border border-line !shadow-none p-6">
                    <span class="inline-block font-display font-bold text-[11px] tracking-[.03em] uppercase px-3 py-1.5 rounded-full text-white bg-ongoing mb-3.5">Ongoing</span>
                    <h4 class="font-display font-bold text-[17px] mb-2">Responding unit assigned</h4>
                    <p class="text-muted text-sm">A hospital has accepted the case and an ambulance is on its way to the location.</p>
                </div>
                <div class="card border border-line !shadow-none p-6">
                    <span class="inline-block font-display font-bold text-[11px] tracking-[.03em] uppercase px-3 py-1.5 rounded-full text-white bg-rescued mb-3.5">Rescued</span>
                    <h4 class="font-display font-bold text-[17px] mb-2">Completed</h4>
                    <p class="text-muted text-sm">Patient recovered and the case closed, kept on record in your account history.</p>
                </div>
                </div>
            </div>
            </section>
            
            <section class="py-24 bg-bgsoft" id="hospitals">
            <div class="max-w-[1180px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                <div>
                <div class="inline-flex items-center gap-2 font-display font-semibold text-[13px] tracking-[.06em] uppercase text-primary before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-primary">
                    For hospitals
                </div>
                <h2 class="title tracking-tight mt-3 mb-4 !text-[26px] sm:!text-[32px] lg:!text-[36px]">Know what's coming before the ambulance leaves</h2>
                <p class="text-muted text-base mb-6 max-w-[480px]">Submit a request to register your facility. Once an admin reviews and approves it, you'll see nearby accident reports the moment they're filed — severity, location, and verified reporter details included.</p>
            
                <div class="grid grid-cols-3 gap-3 mb-7">
                    <div class="card border border-line !shadow-none p-4">
                    <div class="w-7 h-7 rounded-lg bg-bgsoft text-primary font-display font-bold text-[13px] flex items-center justify-center mb-3">1</div>
                    <p class="text-[12.5px] font-semibold leading-snug">Submit hospital request</p>
                    </div>
                    <div class="card border border-line !shadow-none p-4">
                    <div class="w-7 h-7 rounded-lg bg-bgsoft text-primary font-display font-bold text-[13px] flex items-center justify-center mb-3">2</div>
                    <p class="text-[12.5px] font-semibold leading-snug">Admin reviews details</p>
                    </div>
                    <div class="card border border-line !shadow-none p-4">
                    <div class="w-7 h-7 rounded-lg bg-bgsoft text-primary font-display font-bold text-[13px] flex items-center justify-center mb-3">3</div>
                    <p class="text-[12.5px] font-semibold leading-snug">Approved, dashboard unlocked</p>
                    </div>
                </div>
            
                <ul class="flex flex-col gap-3 mb-7">
                    <li class="flex gap-2.5 text-[14.5px]"><span class="text-rescued font-bold">✓</span>Accept a case in one tap and it moves to ongoing automatically</li>
                    <li class="flex gap-2.5 text-[14.5px]"><span class="text-rescued font-bold">✓</span>Track ambulance availability across your fleet</li>
                    <li class="flex gap-2.5 text-[14.5px]"><span class="text-rescued font-bold">✓</span>Full history of every case your hospital responded to</li>
                </ul>
                <a href="#" class="button-style inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-semibold">Request hospital access</a>
                <p class="text-xs text-muted mt-3">🔒 Reviewed by an admin before your dashboard goes live — usually within 1–2 business days.</p>
                </div>
            
                <div class="card overflow-hidden">
                <div class="bg-primary px-6 py-5 text-white rounded-t-2xl flex items-center justify-between">
                    <div>
                    <span class="text-xs opacity-85">Hospital Admin</span>
                    <b class="block font-display text-[19px] mt-0.5">Good Afternoon 👋</b>
                    </div>
                    <span class="bg-white/15 text-white text-[10.5px] font-bold px-3 py-1.5 rounded-full">✓ Approved</span>
                </div>
                <div class="p-6">
                    <div class="bg-bgsoft rounded-xl px-4 py-3.5 mb-4">
                    <b class="font-display text-[14.5px] block">Tarlac Provincial Hospital</b>
                    <span class="text-xs text-muted">📍 Tarlac City, Tarlac · 📞 0909 090 0123</span>
                    </div>
                    <div class="grid grid-cols-3 gap-2.5 mb-4">
                    <div class="text-center border border-line rounded-xl py-3 px-1">
                        <b class="font-display text-[22px] block text-primary">2</b>
                        <span class="text-[10.5px] text-muted">Active Cases</span>
                    </div>
                    <div class="text-center border border-line rounded-xl py-3 px-1">
                        <b class="font-display text-[22px] block text-available">9</b>
                        <span class="text-[10.5px] text-muted">Available Ambulances</span>
                    </div>
                    <div class="text-center border border-line rounded-xl py-3 px-1">
                        <b class="font-display text-[22px] block">1</b>
                        <span class="text-[10.5px] text-muted">Completed</span>
                    </div>
                    </div>
                    <div class="flex justify-between items-center py-2.5 border-t border-line text-[13.5px]">
                    <span class="flex items-center"><span class="w-2 h-2 rounded-full bg-available inline-block mr-2"></span>Available</span>
                    <b>3</b>
                    </div>
                    <div class="flex justify-between items-center py-2.5 border-t border-line text-[13.5px]">
                    <span class="flex items-center"><span class="w-2 h-2 rounded-full bg-ongoing inline-block mr-2"></span>Responding</span>
                    <b>2</b>
                    </div>
                </div>
                </div>
            </div>
            </section>
            
            <section class="py-24">
            <div class="max-w-[1180px] mx-auto px-8">
                <div class="rounded-3xl px-8 sm:px-12 py-16 text-center text-white bg-gradient-to-br from-coral1 to-secondary">
                <h2 class="title !text-white !text-[28px] sm:!text-[36px] lg:!text-[42px] mb-3.5">Every minute counts. Create your account before you need it.</h2>
                <p class="opacity-90 max-w-[520px] mx-auto mb-7 text-base">Sign up to report an accident and track it in real time. Hospitals can request access — an admin reviews and approves each request before the dashboard unlocks.</p>
                <div class="flex gap-3.5 justify-center flex-wrap">
                    <a href="#" class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-[15px] font-semibold text-secondary hover:bg-[#FFEDEB] transition">Create your account</a>
                    <a href="#" class="inline-flex items-center gap-2 rounded-lg border-[1.5px] border-white/60 px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-white/10 transition">Request hospital access</a>
                </div>
                <p class="max-w-[640px] mx-auto mt-6 text-[13px] opacity-85"><strong class="opacity-100">Emergency Respond supplements, not replaces, your local emergency hotline.</strong> In a life-threatening emergency, call your local emergency number first.</p>
                </div>
            </div>
            </section>
            
            <footer class="border-t border-line py-11">
            <div class="max-w-[1180px] mx-auto px-8 flex justify-between flex-wrap gap-5">
                <div>
                <div class="font-display font-bold text-xl text-secondary">Emergency Respond</div>
                <p class="mt-5 text-xs text-muted">Accident reporting and hospital response tracking for Tarlac.</p>
                </div>
                <div class="flex gap-6 text-[13.5px] text-muted flex-wrap">
                <a href="#how" class="hover:text-ink">How it works</a>
                <a href="#features" class="hover:text-ink">Platform</a>
                <a href="#hospitals" class="hover:text-ink">For hospitals</a>
                <a href="/privacy" class="hover:text-ink">Privacy</a>
                <a href="#" class="hover:text-ink">Contact</a>
                </div>
            </div>
            </footer>
        </body>
    )
}
export default LandingPage;