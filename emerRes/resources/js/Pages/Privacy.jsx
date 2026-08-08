import React from "react";
import { Link } from "@inertiajs/react";

function Privacy() {
    return (
        <div className="min-h-screen bg-bgsoft text-ink">

            {/* Header */}
            <header className="border-b border-line bg-white">
                <div className="max-w-[1180px] mx-auto px-8 py-5 flex items-center justify-between">

                    <Link
                        href="/"
                        className="font-display font-bold text-xl text-primary"
                    >
                        Emergency Respond
                    </Link>

                    <Link
                        href="/"
                        className="text-sm font-medium text-muted hover:text-ink transition"
                    >
                        ← Back to Home
                    </Link>

                </div>
            </header>

            {/* Privacy Policy */}
            <main className="max-w-[900px] mx-auto px-6 py-16">

                {/* Title */}
                <div className="mb-10">
                    <div className="inline-flex items-center gap-2 font-display font-semibold text-[13px] tracking-[.06em] uppercase text-primary">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        Legal
                    </div>

                    <h1 className="title tracking-tight mt-3 !text-[36px] sm:!text-[44px]">
                        Privacy Policy
                    </h1>

                    <p className="text-muted mt-3">
                        Your privacy and the security of your information matter
                        to us.
                    </p>

                    <p className="text-muted text-sm mt-2">
                        Last updated: August 7, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="card bg-white border border-line !shadow-none p-7 sm:p-10 space-y-9">

                    <section>
                        <h2 className="text-xl font-bold mb-3">
                            1. Information We Collect
                        </h2>

                        <p className="text-muted leading-7">
                            When you create an account or submit an emergency
                            report, Emergency Respond may collect information
                            such as your name, email address, contact
                            information, account credentials, emergency report
                            details, incident location, emergency severity,
                            description, and relevant hospital or ambulance
                            information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">
                            2. How We Use Your Information
                        </h2>

                        <p className="text-muted leading-7 mb-3">
                            Information collected through Emergency Respond may
                            be used to:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-muted leading-7">
                            <li>Process and manage emergency reports.</li>
                            <li>
                                Help registered hospitals identify reported
                                incidents.
                            </li>
                            <li>
                                Allow hospitals to locate reported emergencies.
                            </li>
                            <li>
                                Contact users regarding their submitted
                                reports.
                            </li>
                            <li>
                                Coordinate emergency response and ambulance
                                availability.
                            </li>
                            <li>
                                Maintain account security and system
                                functionality.
                            </li>
                            <li>
                                Improve the Emergency Respond platform.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">
                            3. Location Information
                        </h2>

                        <p className="text-muted leading-7">
                            Emergency Respond may use the location associated
                            with an emergency report to help authorized
                            hospitals identify where assistance is needed.
                            Location information submitted as part of an
                            emergency report may be visible to authorized
                            users or hospitals involved in responding to the
                            incident.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">
                            4. Sharing of Information
                        </h2>

                        <p className="text-muted leading-7">
                            Emergency Respond does not sell your personal
                            information. Information may be shared with
                            authorized hospitals or system users when necessary
                            to process and respond to an emergency report. We
                            may also disclose information when required by
                            applicable laws or regulations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">
                            5. Account Security
                        </h2>

                        <p className="text-muted leading-7">
                            We take reasonable measures to protect your account
                            and personal information from unauthorized access,
                            modification, or disclosure. However, no online
                            system can guarantee complete security. Users are
                            responsible for keeping their account credentials
                            confidential.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">
                            6. Data Retention
                        </h2>

                        <p className="text-muted leading-7">
                            Emergency Respond may retain account and emergency
                            report information for as long as reasonably
                            necessary to provide the service, maintain system
                            records, resolve issues, or comply with applicable
                            requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">
                            7. Your Privacy Rights
                        </h2>

                        <p className="text-muted leading-7">
                            Depending on applicable privacy laws, you may have
                            rights regarding your personal information,
                            including requesting access to, correction of, or
                            deletion of certain information associated with
                            your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">
                            8. Changes to This Privacy Policy
                        </h2>

                        <p className="text-muted leading-7">
                            This Privacy Policy may be updated from time to
                            time to reflect changes to the Emergency Respond
                            platform or applicable requirements. Updated
                            versions will be posted on this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">
                            9. Contact Us
                        </h2>

                        <p className="text-muted leading-7">
                            If you have questions or concerns about this
                            Privacy Policy or how your information is handled,
                            please contact the Emergency Respond team through
                            the contact information provided on the platform.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold mb-3">
                            Take Note!
                        </h2>
                        <p className="text-muted leading-7">
                            Emergency Respond requires users to provide a valid email address during account registration so that the system can verify ownership of the email address.
                            <br></br>
                            <br></br>
                            Users must not provide their actual email account password when creating an Emergency Respond account. The password created during registration should be a separate password used only for the Emergency Respond account.
                        </p>
                    </section>
                </div>

                {/* Bottom navigation */}
                <div className="mt-8 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                    >
                        ← Return to Emergency Respond
                    </Link>
                </div>

            </main>

            {/* Footer */}
            <footer className="border-t border-line bg-white">
                <div className="max-w-[1180px] mx-auto px-8 py-6 text-center">
                    <p className="text-muted text-sm">
                        © 2026 Emergency Respond. All rights reserved.
                    </p>
                </div>
            </footer>

        </div>
    );
}

export default Privacy;