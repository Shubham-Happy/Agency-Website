export function Section15() {
  return (
    <div className="flex grid grid-cols-1 m-12">
      <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance mb-6">
        Terms &amp; Conditions
      </h2>
      <div className="text-lg text-muted-foreground text-balance space-y-4">
        {/* 1. Scope of Services */}
        <section>
          <h3 className="font-semibold mb-1">1. Scope of Services</h3>
          <p>
            Our platform connects creators with brands to promote products and earn rewards based on sales performance. We act as an intermediary to facilitate campaigns, track performance, and manage rewards.
          </p>
        </section>

        {/* 2. User Responsibilities */}
        <section>
          <h3 className="font-semibold mb-1">2. User Responsibilities</h3>
          <div className="ml-4 space-y-2">
            <div>
              <strong>2.1 Ethical Marketing Practices</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Avoiding false or misleading claims.</li>
                <li>Disclosing paid partnerships or sponsored content in accordance with applicable laws and platform policies.</li>
                <li>Ensuring all content aligns with community standards and regulations.</li>
              </ul>
            </div>
            <div>
              <strong>2.2 Compliance</strong>
              <p>
                Creators are responsible for ensuring their promotional activities comply with all applicable laws, regulations, and platform terms.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Rewards and Payment */}
        <section>
          <h3 className="font-semibold mb-1">3. Rewards and Payment</h3>
          <div className="ml-4 space-y-2">
            <div>
              <strong>3.1 Reward System</strong>
              <p>
                Creators earn gift points based on the sales generated through their promotional efforts. These points can be redeemed for monetary payouts or other benefits as outlined on the platform.
              </p>
            </div>
            <div>
              <strong>3.2 Redemption Process</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Points can be redeemed once the creator meets the minimum threshold set by the platform.</li>
                <li>Redemption requests will be processed within [Insert Timeline] days.</li>
              </ul>
            </div>
            <div>
              <strong>3.3 No Guarantee of Earnings</strong>
              <p>
                We do not guarantee any specific level of earnings. Rewards depend solely on the creator’s performance.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Role as Mediator */}
        <section>
          <h3 className="font-semibold mb-1">4. Role as Mediator</h3>
          <p>
            We act solely as a mediator between creators and brands. We are not responsible for:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>The accuracy or quality of the products being promoted.</li>
            <li>Any disputes arising between creators and brands, though we will assist in facilitating resolutions when possible.</li>
          </ul>
        </section>

        {/* 5. Content Ownership and Rights */}
        <section>
          <h3 className="font-semibold mb-1">5. Content Ownership and Rights</h3>
          <p>
            All promotional content created by users for campaigns is the property of the brand commissioning the content. By participating in a campaign, creators grant the brand full rights to use, modify, and distribute the content without additional compensation or approval.
          </p>
        </section>

        {/* 6. Account Termination */}
        <section>
          <h3 className="font-semibold mb-1">6. Account Termination</h3>
          <div className="ml-4 space-y-2">
            <div>
              <strong>6.1 By the User</strong>
              <p>
                Users may terminate their account at any time by contacting our support team.
              </p>
            </div>
            <div>
              <strong>6.2 By Us</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Violation of these Terms.</li>
                <li>Fraudulent activities or misuse of the platform.</li>
                <li>Non-compliance with ethical marketing practices.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Limitation of Liability */}
        <section>
          <h3 className="font-semibold mb-1">7. Limitation of Liability</h3>
          <p>
            We are not liable for any indirect, incidental, or consequential damages resulting from your use of the platform. Our total liability is limited to the amount of rewards earned and unpaid at the time of the claim.
          </p>
        </section>

        {/* 8. Governing Law and Jurisdiction */}
        <section>
          <h3 className="font-semibold mb-1">8. Governing Law and Jurisdiction</h3>
          <p>
            These Terms are governed by the laws of [Insert Jurisdiction]. Any disputes arising from or related to these Terms will be subject to the exclusive jurisdiction of the courts in [Insert Location].
          </p>
        </section>

        {/* 9. Changes to Terms */}
        <section>
          <h3 className="font-semibold mb-1">9. Changes to Terms</h3>
          <p>
            We reserve the right to update these Terms at any time. Changes will be effective upon posting the revised Terms on our platform. Continued use of the platform signifies your acceptance of the updated Terms.
          </p>
        </section>
      </div>
    </div>
  );
}
